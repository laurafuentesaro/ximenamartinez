export type IngredientCategory =
  | 'proteinas'
  | 'verduras'
  | 'frutas'
  | 'lacteos'
  | 'granos'
  | 'condimentos'
  | 'aceites'
  | 'endulzantes'
  | 'otros';

export interface CategoryInfo {
  id: IngredientCategory;
  label: string;
  icon: string;
}

export const CATEGORY_ORDER: IngredientCategory[] = [
  'proteinas',
  'verduras',
  'frutas',
  'lacteos',
  'granos',
  'condimentos',
  'aceites',
  'endulzantes',
  'otros',
];

export const CATEGORY_INFO: Record<IngredientCategory, CategoryInfo> = {
  proteinas: { id: 'proteinas', label: 'Proteinas', icon: 'Beef' },
  verduras: { id: 'verduras', label: 'Verduras y Hortalizas', icon: 'Carrot' },
  frutas: { id: 'frutas', label: 'Frutas', icon: 'Cherry' },
  lacteos: { id: 'lacteos', label: 'Lacteos y Alternativas', icon: 'Milk' },
  granos: { id: 'granos', label: 'Frutos Secos y Semillas', icon: 'Wheat' },
  condimentos: { id: 'condimentos', label: 'Condimentos y Especias', icon: 'Flame' },
  aceites: { id: 'aceites', label: 'Aceites y Grasas', icon: 'Droplets' },
  endulzantes: { id: 'endulzantes', label: 'Endulzantes', icon: 'Candy' },
  otros: { id: 'otros', label: 'Otros', icon: 'Package' },
};

const NAME_NORMALIZATIONS: Record<string, string> = {
  'Huevo': 'Huevos',
  'Atun': 'Atun en lata',
  'Yogurt griego': 'Yogurt Griego',
  'Yogurt griego sin azucar': 'Yogurt Griego',
  'Aceite': 'Aceite de oliva',
};

export function normalizeIngredientName(name: string): string {
  return NAME_NORMALIZATIONS[name] || name;
}

const INGREDIENT_CATEGORY_MAP: Record<string, IngredientCategory> = {
  // Proteinas
  'Huevos': 'proteinas',
  'Pollo': 'proteinas',
  'Carne magra': 'proteinas',
  'Carne picada': 'proteinas',
  'Salmon': 'proteinas',
  'Atun en lata': 'proteinas',
  'Lomo de cerdo': 'proteinas',
  'Panceta': 'proteinas',
  'Jamon': 'proteinas',
  'Proteina en polvo': 'proteinas',

  // Verduras y Hortalizas
  'Lechuga': 'verduras',
  'Tomate': 'verduras',
  'Pepino': 'verduras',
  'Calabacin': 'verduras',
  'Espinacas': 'verduras',
  'Brocoli': 'verduras',
  'Repollo': 'verduras',
  'Zanahoria': 'verduras',
  'Morron': 'verduras',
  'Cebolla': 'verduras',
  'Ajo': 'verduras',

  // Frutas
  'Palta': 'frutas',
  'Arandanos': 'frutas',

  // Lacteos
  'Queso': 'lacteos',
  'Queso crema': 'lacteos',
  'Queso feta': 'lacteos',
  'Queso rallado': 'lacteos',
  'Yogurt Griego': 'lacteos',
  'Manteca': 'lacteos',

  // Frutos Secos y Semillas
  'Almendras': 'granos',
  'Nueces': 'granos',
  'Mix de frutos secos': 'granos',
  'Coco en escamas': 'granos',

  // Condimentos y Especias
  'Sal': 'condimentos',
  'Canela': 'condimentos',
  'Chimichurri': 'condimentos',

  // Aceites y Grasas
  'Aceite de oliva': 'aceites',
  'Aceitunas': 'aceites',

  // Otros
  'Cafe': 'otros',
};

export function getIngredientCategory(name: string): IngredientCategory {
  const normalized = normalizeIngredientName(name);
  return INGREDIENT_CATEGORY_MAP[normalized] || INGREDIENT_CATEGORY_MAP[name] || 'otros';
}
