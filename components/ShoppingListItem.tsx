import React from 'react';
import { Check } from 'lucide-react';
import type { AggregatedIngredient } from '../data/shoppingList';

interface ShoppingListItemProps {
  item: AggregatedIngredient;
  checked: boolean;
  onToggle: () => void;
}

function formatQuantity(q: { amount: number | null; unit: string | null; raw: string; parseable: boolean }): string {
  if (!q.parseable) return q.raw;
  if (q.amount === null) return q.raw;
  const displayAmount = Number.isInteger(q.amount) ? q.amount.toString() : q.amount.toString();
  if (q.unit) {
    let displayUnit = q.unit;
    if (q.amount > 1) {
      if (q.unit === 'unidad') displayUnit = 'unidades';
      else if (q.unit === 'diente') displayUnit = 'dientes';
      else if (q.unit === 'cda') displayUnit = 'cdas';
      else if (q.unit === 'cdita') displayUnit = 'cditas';
    }
    return `${displayAmount} ${displayUnit}`;
  }
  return displayAmount;
}

export const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  item,
  checked,
  onToggle,
}) => {
  const hasMultipleUnits = item.quantities.filter((q) => q.parseable).length > 1;

  return (
    <div
      className={`flex items-start gap-3 py-2.5 px-6 hover:bg-theme-elevated transition-colors cursor-pointer ${
        checked ? 'opacity-60' : ''
      }`}
      onClick={onToggle}
    >
      {/* Custom checkbox */}
      <div className="flex-shrink-0 mt-0.5">
        <div
          className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
            checked
              ? 'bg-theme-accent border-theme-accent'
              : 'border-theme-border-hover'
          }`}
        >
          {checked && <Check size={12} className="text-white" strokeWidth={3} />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span
            className={`text-sm ${
              checked
                ? 'line-through text-theme-faint'
                : item.isAGusto
                ? 'italic text-theme-muted'
                : 'text-theme-secondary'
            }`}
          >
            {item.name}
          </span>

          {/* Single quantity — right aligned */}
          {!hasMultipleUnits && !item.isAGusto && item.quantities.length > 0 && (
            <span
              className={`text-sm tabular-nums flex-shrink-0 ${
                checked ? 'line-through text-theme-faint' : 'text-theme-muted'
              }`}
            >
              {formatQuantity(item.quantities[0])}
            </span>
          )}

          {/* "a gusto" */}
          {item.isAGusto && item.quantities.length > 0 && (
            <span
              className={`text-sm italic flex-shrink-0 ${
                checked ? 'line-through text-theme-faint' : 'text-theme-muted'
              }`}
            >
              {item.quantities[0].raw}
            </span>
          )}
        </div>

        {/* Multiple units — show each on its own line */}
        {hasMultipleUnits && (
          <div className="mt-0.5 space-y-0.5">
            {item.quantities.map((q, i) => (
              <div
                key={i}
                className={`text-xs tabular-nums ${
                  checked ? 'line-through text-theme-faint' : 'text-theme-muted'
                }`}
              >
                {formatQuantity(q)}
              </div>
            ))}
          </div>
        )}

        {/* Recipe sources */}
        <div
          className={`text-[11px] mt-0.5 ${
            checked ? 'text-theme-faint' : 'text-theme-muted'
          }`}
        >
          {item.sourceRecipes.join(' · ')}
        </div>
      </div>
    </div>
  );
};
