export type DayPlan = {
  day: string;
  training: string;
  focus: string;
  targetCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: {
    breakfast: { description: string; kcal: number; recipeId?: string };
    lunch: { description: string; kcal: number; recipeId?: string };
    snack: { description: string; kcal: number; recipeId?: string };
    dinner: { description: string; kcal: number; recipeId?: string };
  };
};

export const WEEKLY_PLAN: DayPlan[] = [
  {
    day: "Lunes",
    training: "Tren Inferior (13:00)",
    focus: "Proteina Alta & Recuperacion",
    targetCalories: 1600,
    macros: { protein: 140, carbs: 80, fat: 90 },
    meals: {
      breakfast: {
        description: "Pre-entreno: 2 Huevos revueltos (100g) + 1/2 Palta (80g) + Cafe con 1 scoop (30g) Proteina. Opcion: +1 rebanada (30g) Pan de almendras (+90 kcal).",
        kcal: 420,
        recipeId: 'huevos-revueltos-palta',
      },
      lunch: {
        description: "Post-entreno: 200g Pollo a la plancha + Ensalada (100g lechuga, 50g pepino, 80g tomate) + 1 cda (15ml) Aceite de Oliva.",
        kcal: 480,
        recipeId: 'pollo-plancha-ensalada',
      },
      snack: {
        description: "Opcional: 20g Almendras + 150g Yogurt Griego sin azucar.",
        kcal: 150,
        recipeId: 'almendras-yogurt',
      },
      dinner: {
        description: "150g Salmon a la plancha + Ensalada (100g lechuga, 80g tomate) + 1 cda (15ml) Aceite de Oliva.",
        kcal: 400,
        recipeId: 'salmon-plancha-ensalada',
      }
    }
  },
  {
    day: "Martes",
    training: "Tren Superior (13:00)",
    focus: "Fuerza & Definicion",
    targetCalories: 1600,
    macros: { protein: 140, carbs: 80, fat: 90 },
    meals: {
      breakfast: {
        description: "Pre-entreno: 2 Huevos (100g) con 30g Queso + 1/2 Palta (80g) + Cafe con 1 scoop (30g) Proteina. Opcion: +1 rebanada (30g) Pan de almendras (+90 kcal).",
        kcal: 430,
        recipeId: 'huevos-queso-palta',
      },
      lunch: {
        description: "Post-entreno: 200g Carne magra a la plancha + 150g Calabacin salteado (1 cda manteca 15g) + 100g Tomate.",
        kcal: 470,
        recipeId: 'carne-plancha-calabacin',
      },
      snack: {
        description: "Opcional: 2 Rollitos de 30g Jamon con 30g Queso crema.",
        kcal: 130,
        recipeId: 'rollitos-jamon-queso',
      },
      dinner: {
        description: "2 Hamburguesas caseras 150g (sin pan) + Ensalada (100g lechuga, 80g tomate) + 1/2 Palta (80g).",
        kcal: 450,
        recipeId: 'hamburguesas-ensalada-palta',
      }
    }
  },
  {
    day: "Miercoles",
    training: "Tren Inferior (13:00)",
    focus: "Fuerza & Definicion",
    targetCalories: 1600,
    macros: { protein: 140, carbs: 80, fat: 90 },
    meals: {
      breakfast: {
        description: "Pre-entreno: Omelette de 2 Huevos (100g) + 2 fetas (40g) Panceta/Jamon crudo + 1/2 Palta (80g) + Cafe con Proteina. Opcion: +1 rebanada (30g) Pan de almendras (+90 kcal).",
        kcal: 450,
        recipeId: 'omelette-panceta-palta',
      },
      lunch: {
        description: "Post-entreno: 1 lata Atun (170g) + 1/2 Palta (80g) + 100g Tomate + 1 cda (15ml) Aceite de oliva.",
        kcal: 450,
        recipeId: 'atun-palta-tomate',
      },
      snack: {
        description: "Opcional: 150g Yogurt Griego + 8 Nueces (20g).",
        kcal: 160,
        recipeId: 'yogurt-nueces',
      },
      dinner: {
        description: "200g Pollo al horno + 150g Espinacas salteadas (1 cda manteca 15g, 1 diente ajo, 30g Queso rallado).",
        kcal: 380,
        recipeId: 'pollo-horno-espinacas',
      }
    }
  },
  {
    day: "Jueves",
    training: "Tren Superior (13:00)",
    focus: "Fuerza & Definicion",
    targetCalories: 1600,
    macros: { protein: 140, carbs: 80, fat: 90 },
    meals: {
      breakfast: {
        description: "Pre-entreno: 2 Huevos duros (100g) + 1/2 Palta (80g) + Cafe con 1 scoop (30g) Proteina. Opcion: +1 rebanada (30g) Pan de almendras (+90 kcal).",
        kcal: 400,
        recipeId: 'huevos-duros-palta',
      },
      lunch: {
        description: "Post-entreno: 200g Pollo desmenuzado + 100g Lechuga + 40g Queso feta + 1 cda (15ml) Aceite de oliva.",
        kcal: 480,
        recipeId: 'pollo-desmenuzado-ensalada',
      },
      snack: {
        description: "Opcional: 40g Queso en cubos + 30g Aceitunas.",
        kcal: 150,
        recipeId: 'queso-aceitunas',
      },
      dinner: {
        description: "200g Salmon al horno + 150g Brocoli al horno (sal, 1 cda aceite 15ml) o al vapor salteado (1 cda manteca 15g) o 100g Palmitos o Ensalada (50g apio, 50g manzana, 15g nueces).",
        kcal: 380,
        recipeId: 'salmon-horno-brocoli',
      }
    }
  },
  {
    day: "Viernes",
    training: "Tren Inferior (13:00)",
    focus: "Fuerza & Definicion",
    targetCalories: 1600,
    macros: { protein: 140, carbs: 80, fat: 90 },
    meals: {
      breakfast: {
        description: "Pre-entreno: 2 Huevos revueltos (100g) con 30g Queso + 1/2 Palta (80g) + Cafe con Proteina. Opcion: +1 rebanada (30g) Pan de almendras (+90 kcal).",
        kcal: 430,
        recipeId: 'huevos-revueltos-queso-palta',
      },
      lunch: {
        description: "Post-entreno: 200g Lomo de cerdo a la plancha + Ensalada (100g repollo, 50g zanahoria) + 1 cda (15ml) Aceite.",
        kcal: 470,
        recipeId: 'lomo-cerdo-ensalada',
      },
      snack: {
        description: "Opcional: 150g Yogurt Griego + 15g Nueces o 20g Arandanos + 10g Coco en escamas.",
        kcal: 150,
        recipeId: 'yogurt-nueces-arandanos',
      },
      dinner: {
        description: "Ensalada de atun: 1 lata Atun (170g) + 1 Huevo duro (50g) + 80g Lechuga + 80g Tomate + 1 cda (15ml) Aceite.",
        kcal: 380,
        recipeId: 'ensalada-atun-huevo',
      }
    }
  },
  {
    day: "Sabado",
    training: "Descanso",
    focus: "Recuperacion Muscular",
    targetCalories: 1500,
    macros: { protein: 130, carbs: 70, fat: 85 },
    meals: {
      breakfast: {
        description: "2 Huevos revueltos (100g) + 1/2 Palta (80g) + Cafe con 1 scoop (30g) Proteina. Opcion: +1 rebanada (30g) Pan de almendras (+90 kcal).",
        kcal: 400,
        recipeId: 'huevos-revueltos-palta',
      },
      lunch: {
        description: "150g Carne magra a la plancha + Ensalada criolla (80g tomate, 50g cebolla, 50g morron) + 1 cda Chimichurri.",
        kcal: 450,
        recipeId: 'carne-ensalada-criolla',
      },
      snack: {
        description: "Opcional: 20g Mix de frutos secos.",
        kcal: 120,
        recipeId: 'mix-frutos-secos',
      },
      dinner: {
        description: "Wrap de lechuga (80g): 120g Carne picada rellena (1 Huevo duro 50g, 30g Morron, 30g Queso) + 1/2 Palta (80g).",
        kcal: 380,
        recipeId: 'wrap-lechuga-carne',
      }
    }
  },
  {
    day: "Domingo",
    training: "Descanso",
    focus: "Recuperacion & Flexibilidad",
    targetCalories: 1500,
    macros: { protein: 130, carbs: 70, fat: 85 },
    meals: {
      breakfast: {
        description: "2 Huevos (100g) con 40g Jamon + 1/2 Palta (80g) + Cafe con Proteina. Opcion: +1 rebanada (30g) Pan de almendras (+90 kcal).",
        kcal: 400,
        recipeId: 'huevos-jamon-palta',
      },
      lunch: {
        description: "200g Pollo al horno + Ensalada (100g lechuga, 80g tomate) + 1 cda (15ml) Aceite de oliva.",
        kcal: 420,
        recipeId: 'pollo-horno-ensalada',
      },
      snack: {
        description: "Opcional: 150g Yogurt Griego con canela.",
        kcal: 100,
        recipeId: 'yogurt-canela',
      },
      dinner: {
        description: "150g Carne a la plancha + 1 Huevo frito (1 cda aceite 15ml) + Ensalada (80g lechuga, 60g tomate). Opcion: 1 porcion (100g) Tarta de vegetales con harina de almendras (+180 kcal).",
        kcal: 350,
        recipeId: 'carne-huevo-frito-ensalada',
      }
    }
  }
];
