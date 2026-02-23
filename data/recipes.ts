export interface RecipeData {
  id: string;
  name: string;
  servings: number;
  ingredients: { name: string; quantity: string }[];
}

export const RECIPES: Record<string, RecipeData> = {
  // ============ DESAYUNOS ============

  'huevos-revueltos-palta': {
    id: 'huevos-revueltos-palta',
    name: 'Huevos Revueltos + Palta',
    servings: 1,
    ingredients: [
      { name: 'Huevos', quantity: '100g' },
      { name: 'Palta', quantity: '80g' },
      { name: 'Proteina en polvo', quantity: '30g' },
      { name: 'Cafe', quantity: '1 unidad' },
    ],
  },

  'huevos-queso-palta': {
    id: 'huevos-queso-palta',
    name: 'Huevos con Queso + Palta',
    servings: 1,
    ingredients: [
      { name: 'Huevos', quantity: '100g' },
      { name: 'Queso', quantity: '30g' },
      { name: 'Palta', quantity: '80g' },
      { name: 'Proteina en polvo', quantity: '30g' },
      { name: 'Cafe', quantity: '1 unidad' },
    ],
  },

  'omelette-panceta-palta': {
    id: 'omelette-panceta-palta',
    name: 'Omelette de Panceta + Palta',
    servings: 1,
    ingredients: [
      { name: 'Huevos', quantity: '100g' },
      { name: 'Panceta', quantity: '40g' },
      { name: 'Palta', quantity: '80g' },
      { name: 'Proteina en polvo', quantity: '30g' },
      { name: 'Cafe', quantity: '1 unidad' },
    ],
  },

  'huevos-duros-palta': {
    id: 'huevos-duros-palta',
    name: 'Huevos Duros + Palta',
    servings: 1,
    ingredients: [
      { name: 'Huevos', quantity: '100g' },
      { name: 'Palta', quantity: '80g' },
      { name: 'Proteina en polvo', quantity: '30g' },
      { name: 'Cafe', quantity: '1 unidad' },
    ],
  },

  'huevos-revueltos-queso-palta': {
    id: 'huevos-revueltos-queso-palta',
    name: 'Huevos Revueltos con Queso + Palta',
    servings: 1,
    ingredients: [
      { name: 'Huevos', quantity: '100g' },
      { name: 'Queso', quantity: '30g' },
      { name: 'Palta', quantity: '80g' },
      { name: 'Proteina en polvo', quantity: '30g' },
      { name: 'Cafe', quantity: '1 unidad' },
    ],
  },

  'huevos-jamon-palta': {
    id: 'huevos-jamon-palta',
    name: 'Huevos con Jamon + Palta',
    servings: 1,
    ingredients: [
      { name: 'Huevos', quantity: '100g' },
      { name: 'Jamon', quantity: '40g' },
      { name: 'Palta', quantity: '80g' },
      { name: 'Proteina en polvo', quantity: '30g' },
      { name: 'Cafe', quantity: '1 unidad' },
    ],
  },

  // ============ ALMUERZOS ============

  'pollo-plancha-ensalada': {
    id: 'pollo-plancha-ensalada',
    name: 'Pollo a la Plancha + Ensalada',
    servings: 1,
    ingredients: [
      { name: 'Pollo', quantity: '200g' },
      { name: 'Lechuga', quantity: '100g' },
      { name: 'Pepino', quantity: '50g' },
      { name: 'Tomate', quantity: '80g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
    ],
  },

  'carne-plancha-calabacin': {
    id: 'carne-plancha-calabacin',
    name: 'Carne Magra + Calabacin Salteado',
    servings: 1,
    ingredients: [
      { name: 'Carne magra', quantity: '200g' },
      { name: 'Calabacin', quantity: '150g' },
      { name: 'Manteca', quantity: '15g' },
      { name: 'Tomate', quantity: '100g' },
    ],
  },

  'atun-palta-tomate': {
    id: 'atun-palta-tomate',
    name: 'Atun + Palta + Tomate',
    servings: 1,
    ingredients: [
      { name: 'Atun en lata', quantity: '170g' },
      { name: 'Palta', quantity: '80g' },
      { name: 'Tomate', quantity: '100g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
    ],
  },

  'pollo-desmenuzado-ensalada': {
    id: 'pollo-desmenuzado-ensalada',
    name: 'Pollo Desmenuzado + Ensalada',
    servings: 1,
    ingredients: [
      { name: 'Pollo', quantity: '200g' },
      { name: 'Lechuga', quantity: '100g' },
      { name: 'Queso feta', quantity: '40g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
    ],
  },

  'lomo-cerdo-ensalada': {
    id: 'lomo-cerdo-ensalada',
    name: 'Lomo de Cerdo + Ensalada',
    servings: 1,
    ingredients: [
      { name: 'Lomo de cerdo', quantity: '200g' },
      { name: 'Repollo', quantity: '100g' },
      { name: 'Zanahoria', quantity: '50g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
    ],
  },

  'carne-ensalada-criolla': {
    id: 'carne-ensalada-criolla',
    name: 'Carne + Ensalada Criolla',
    servings: 1,
    ingredients: [
      { name: 'Carne magra', quantity: '150g' },
      { name: 'Tomate', quantity: '80g' },
      { name: 'Cebolla', quantity: '50g' },
      { name: 'Morron', quantity: '50g' },
      { name: 'Chimichurri', quantity: '1 cda' },
    ],
  },

  'pollo-horno-ensalada': {
    id: 'pollo-horno-ensalada',
    name: 'Pollo al Horno + Ensalada',
    servings: 1,
    ingredients: [
      { name: 'Pollo', quantity: '200g' },
      { name: 'Lechuga', quantity: '100g' },
      { name: 'Tomate', quantity: '80g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
    ],
  },

  // ============ SNACKS ============

  'almendras-yogurt': {
    id: 'almendras-yogurt',
    name: 'Almendras + Yogurt Griego',
    servings: 1,
    ingredients: [
      { name: 'Almendras', quantity: '20g' },
      { name: 'Yogurt Griego', quantity: '150g' },
    ],
  },

  'rollitos-jamon-queso': {
    id: 'rollitos-jamon-queso',
    name: 'Rollitos de Jamon con Queso Crema',
    servings: 1,
    ingredients: [
      { name: 'Jamon', quantity: '30g' },
      { name: 'Queso crema', quantity: '30g' },
    ],
  },

  'yogurt-nueces': {
    id: 'yogurt-nueces',
    name: 'Yogurt Griego + Nueces',
    servings: 1,
    ingredients: [
      { name: 'Yogurt Griego', quantity: '150g' },
      { name: 'Nueces', quantity: '20g' },
    ],
  },

  'queso-aceitunas': {
    id: 'queso-aceitunas',
    name: 'Queso en Cubos + Aceitunas',
    servings: 1,
    ingredients: [
      { name: 'Queso', quantity: '40g' },
      { name: 'Aceitunas', quantity: '30g' },
    ],
  },

  'yogurt-nueces-arandanos': {
    id: 'yogurt-nueces-arandanos',
    name: 'Yogurt + Nueces + Arandanos',
    servings: 1,
    ingredients: [
      { name: 'Yogurt Griego', quantity: '150g' },
      { name: 'Nueces', quantity: '15g' },
      { name: 'Arandanos', quantity: '20g' },
      { name: 'Coco en escamas', quantity: '10g' },
    ],
  },

  'mix-frutos-secos': {
    id: 'mix-frutos-secos',
    name: 'Mix de Frutos Secos',
    servings: 1,
    ingredients: [
      { name: 'Mix de frutos secos', quantity: '20g' },
    ],
  },

  'yogurt-canela': {
    id: 'yogurt-canela',
    name: 'Yogurt Griego con Canela',
    servings: 1,
    ingredients: [
      { name: 'Yogurt Griego', quantity: '150g' },
      { name: 'Canela', quantity: 'a gusto' },
    ],
  },

  // ============ CENAS ============

  'salmon-plancha-ensalada': {
    id: 'salmon-plancha-ensalada',
    name: 'Salmon a la Plancha + Ensalada',
    servings: 1,
    ingredients: [
      { name: 'Salmon', quantity: '150g' },
      { name: 'Lechuga', quantity: '100g' },
      { name: 'Tomate', quantity: '80g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
    ],
  },

  'hamburguesas-ensalada-palta': {
    id: 'hamburguesas-ensalada-palta',
    name: 'Hamburguesas Caseras + Ensalada',
    servings: 1,
    ingredients: [
      { name: 'Carne picada', quantity: '150g' },
      { name: 'Lechuga', quantity: '100g' },
      { name: 'Tomate', quantity: '80g' },
      { name: 'Palta', quantity: '80g' },
    ],
  },

  'pollo-horno-espinacas': {
    id: 'pollo-horno-espinacas',
    name: 'Pollo al Horno + Espinacas Salteadas',
    servings: 1,
    ingredients: [
      { name: 'Pollo', quantity: '200g' },
      { name: 'Espinacas', quantity: '150g' },
      { name: 'Manteca', quantity: '15g' },
      { name: 'Ajo', quantity: '1 diente' },
      { name: 'Queso rallado', quantity: '30g' },
    ],
  },

  'salmon-horno-brocoli': {
    id: 'salmon-horno-brocoli',
    name: 'Salmon al Horno + Brocoli',
    servings: 1,
    ingredients: [
      { name: 'Salmon', quantity: '200g' },
      { name: 'Brocoli', quantity: '150g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
      { name: 'Sal', quantity: 'a gusto' },
    ],
  },

  'ensalada-atun-huevo': {
    id: 'ensalada-atun-huevo',
    name: 'Ensalada de Atun con Huevo',
    servings: 1,
    ingredients: [
      { name: 'Atun en lata', quantity: '170g' },
      { name: 'Huevos', quantity: '50g' },
      { name: 'Lechuga', quantity: '80g' },
      { name: 'Tomate', quantity: '80g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
    ],
  },

  'wrap-lechuga-carne': {
    id: 'wrap-lechuga-carne',
    name: 'Wrap de Lechuga con Carne',
    servings: 1,
    ingredients: [
      { name: 'Lechuga', quantity: '80g' },
      { name: 'Carne picada', quantity: '120g' },
      { name: 'Huevos', quantity: '50g' },
      { name: 'Morron', quantity: '30g' },
      { name: 'Queso', quantity: '30g' },
      { name: 'Palta', quantity: '80g' },
    ],
  },

  'carne-huevo-frito-ensalada': {
    id: 'carne-huevo-frito-ensalada',
    name: 'Carne + Huevo Frito + Ensalada',
    servings: 1,
    ingredients: [
      { name: 'Carne magra', quantity: '150g' },
      { name: 'Huevos', quantity: '50g' },
      { name: 'Aceite de oliva', quantity: '15ml' },
      { name: 'Lechuga', quantity: '80g' },
      { name: 'Tomate', quantity: '60g' },
    ],
  },
};
