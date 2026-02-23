import { RECIPES, type RecipeData } from './recipes';
import { WEEKLY_PLAN, type DayPlan } from './weeklyPlan';
import {
  normalizeIngredientName,
  getIngredientCategory,
  CATEGORY_ORDER,
  type IngredientCategory,
} from './ingredientCategories';

// ─── Quantity parser ───────────────────────────────────────────────────

export interface ParsedQuantity {
  amount: number | null;
  unit: string | null;
  raw: string;
  parseable: boolean;
}

const UNIT_NORMALIZATIONS: Record<string, string> = {
  cdas: 'cda',
  cditas: 'cdita',
  unidades: 'unidad',
  dientes: 'diente',
};

function normalizeUnit(unit: string): string {
  return UNIT_NORMALIZATIONS[unit] || unit;
}

function parseFraction(str: string): number | null {
  const fracMatch = str.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (fracMatch) {
    return parseInt(fracMatch[1]) / parseInt(fracMatch[2]);
  }
  const num = parseFloat(str);
  return isNaN(num) ? null : num;
}

export function parseQuantity(raw: string): ParsedQuantity {
  const trimmed = raw.trim();

  if (trimmed === 'a gusto' || trimmed === 'pizca' || trimmed === '1 pizca') {
    return { amount: null, unit: null, raw: trimmed, parseable: false };
  }

  const withoutParens = trimmed.replace(/\s*\([^)]*\)/, '').trim();

  // Weight/volume suffixes: "400g", "100ml", "200g"
  const suffixMatch = withoutParens.match(/^(\d+(?:\.\d+)?)\s*(g|ml|kg|l)$/i);
  if (suffixMatch) {
    return {
      amount: parseFloat(suffixMatch[1]),
      unit: suffixMatch[2].toLowerCase(),
      raw: trimmed,
      parseable: true,
    };
  }

  // Ranges: "1-2 dientes" → take max
  const rangeMatch = withoutParens.match(/^(\d+)\s*-\s*(\d+)\s+(.+)$/);
  if (rangeMatch) {
    return {
      amount: parseInt(rangeMatch[2]),
      unit: normalizeUnit(rangeMatch[3]),
      raw: trimmed,
      parseable: true,
    };
  }

  // Mixed fraction: "1 1/2 cditas"
  const mixedFracMatch = withoutParens.match(/^(\d+)\s+(\d+\/\d+)\s+(.+)$/);
  if (mixedFracMatch) {
    const whole = parseInt(mixedFracMatch[1]);
    const frac = parseFraction(mixedFracMatch[2]);
    if (frac !== null) {
      return {
        amount: whole + frac,
        unit: normalizeUnit(mixedFracMatch[3]),
        raw: trimmed,
        parseable: true,
      };
    }
  }

  // Fraction with unit: "1/2 unidad"
  const fracUnitMatch = withoutParens.match(/^(\d+\/\d+)\s+(.+)$/);
  if (fracUnitMatch) {
    const amount = parseFraction(fracUnitMatch[1]);
    if (amount !== null) {
      return {
        amount,
        unit: normalizeUnit(fracUnitMatch[2]),
        raw: trimmed,
        parseable: true,
      };
    }
  }

  // Number with unit: "3 cdas", "1 cda", "2 unidades"
  const numUnitMatch = withoutParens.match(/^(\d+(?:\.\d+)?)\s+(.+)$/);
  if (numUnitMatch) {
    return {
      amount: parseFloat(numUnitMatch[1]),
      unit: normalizeUnit(numUnitMatch[2]),
      raw: trimmed,
      parseable: true,
    };
  }

  // Just a number
  const justNum = parseFloat(withoutParens);
  if (!isNaN(justNum)) {
    return { amount: justNum, unit: null, raw: trimmed, parseable: true };
  }

  return { amount: null, unit: null, raw: trimmed, parseable: false };
}

export function sumQuantities(quantities: ParsedQuantity[]): ParsedQuantity[] {
  const byUnit = new Map<string, number>();
  const unparseable: ParsedQuantity[] = [];

  for (const q of quantities) {
    if (!q.parseable || q.unit === null || q.amount === null) {
      unparseable.push(q);
      continue;
    }
    byUnit.set(q.unit, (byUnit.get(q.unit) || 0) + q.amount);
  }

  const results: ParsedQuantity[] = [];
  for (const [unit, amount] of byUnit) {
    const rounded = Math.round(amount * 100) / 100;
    results.push({
      amount: rounded,
      unit,
      raw: `${rounded} ${unit}`,
      parseable: true,
    });
  }

  return [...results, ...unparseable];
}

// ─── Recipe collector ──────────────────────────────────────────────────

export interface RecipeNeed {
  recipeId: string;
  recipe: RecipeData;
  portionsNeeded: number;
  appearsOnDays: string[];
}

export function collectWeeklyRecipes(plan: DayPlan[]): RecipeNeed[] {
  const needs = new Map<string, RecipeNeed>();
  const mealSlots = ['breakfast', 'lunch', 'snack', 'dinner'] as const;

  for (const day of plan) {
    for (const slot of mealSlots) {
      const meal = day.meals[slot];
      if (!meal.recipeId) continue;

      const recipeId = meal.recipeId;
      const recipe = RECIPES[recipeId];
      if (!recipe) continue;

      const existing = needs.get(recipeId);
      if (existing) {
        existing.portionsNeeded += 1;
        if (!existing.appearsOnDays.includes(day.day)) {
          existing.appearsOnDays.push(day.day);
        }
      } else {
        needs.set(recipeId, {
          recipeId,
          recipe,
          portionsNeeded: 1,
          appearsOnDays: [day.day],
        });
      }
    }
  }

  return Array.from(needs.values());
}

// ─── Ingredient aggregation ────────────────────────────────────────────

export interface QuantityEntry {
  amount: number | null;
  unit: string | null;
  raw: string;
  parseable: boolean;
}

export interface AggregatedIngredient {
  id: string;
  name: string;
  category: IngredientCategory;
  quantities: QuantityEntry[];
  sourceRecipes: string[];
  isAGusto: boolean;
}

export function aggregateIngredients(needs: RecipeNeed[]): AggregatedIngredient[] {
  const ingredientMap = new Map<
    string,
    {
      name: string;
      quantities: ParsedQuantity[];
      sourceRecipes: Set<string>;
    }
  >();

  for (const need of needs) {
    const { recipe } = need;
    for (const ingredient of recipe.ingredients) {
      const normalizedName = normalizeIngredientName(ingredient.name);
      const parsed = parseQuantity(ingredient.quantity);

      // Scale quantity by portions needed
      const scaledParsed = need.portionsNeeded > 1 && parsed.parseable && parsed.amount !== null
        ? { ...parsed, amount: parsed.amount * need.portionsNeeded, raw: `${parsed.amount * need.portionsNeeded} ${parsed.unit || ''}`.trim() }
        : parsed;

      const existing = ingredientMap.get(normalizedName);
      if (existing) {
        existing.quantities.push(scaledParsed);
        existing.sourceRecipes.add(recipe.name);
      } else {
        ingredientMap.set(normalizedName, {
          name: normalizedName,
          quantities: [scaledParsed],
          sourceRecipes: new Set([recipe.name]),
        });
      }
    }
  }

  const result: AggregatedIngredient[] = [];

  for (const [normalizedName, data] of ingredientMap) {
    const summed = sumQuantities(data.quantities);
    const isAGusto = summed.length === 0 || summed.every((q) => !q.parseable);

    result.push({
      id: normalizedName,
      name: normalizedName,
      category: getIngredientCategory(normalizedName),
      quantities: summed,
      sourceRecipes: Array.from(data.sourceRecipes),
      isAGusto,
    });
  }

  result.sort((a, b) => {
    const catA = CATEGORY_ORDER.indexOf(a.category);
    const catB = CATEGORY_ORDER.indexOf(b.category);
    if (catA !== catB) return catA - catB;
    return a.name.localeCompare(b.name);
  });

  return result;
}

// ─── Compute full shopping list ────────────────────────────────────────

export function computeShoppingList() {
  const recipeNeeds = collectWeeklyRecipes(WEEKLY_PLAN);
  const ingredients = aggregateIngredients(recipeNeeds);

  const byCategory = new Map<IngredientCategory, AggregatedIngredient[]>();
  for (const item of ingredients) {
    const list = byCategory.get(item.category) || [];
    list.push(item);
    byCategory.set(item.category, list);
  }

  const uniqueRecipes = new Set(recipeNeeds.map((n) => n.recipeId));

  return {
    ingredients,
    byCategory,
    totalItems: ingredients.length,
    totalRecipes: uniqueRecipes.size,
    totalCategories: byCategory.size,
  };
}
