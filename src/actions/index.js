export const CHANGE_ACTIVE_RECIPE = 'CHANGE_ACTIVE_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';

let recipes = [
  {
    title: 'Test recipe',
    description: 'Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description ',
    ingredients: ['500 ml of ingredient a', '3 oz of ingredient b', '500 mg of ingredient c']
  }, {
    title: 'Another test recipe',
    description: 'Another test recipe description Another test recipe description Another test recipe description Another test recipe description Another test recipe description Another test recipe description ',
    ingredients: ['3 cl of ingredient a', '400 ml of ingredient b', '5 kg of ingredient c']
  }
];

export function changeActiveRecipe(recipe) {
  console.log('action: active recipe has changed', recipe);
  return {
    type: CHANGE_ACTIVE_RECIPE,
    payload: recipe
  };
}

export function fetchRecipes() {
  console.log('action: fetch recipes');
  return {
    type: FETCH_RECIPES,
    payload: recipes
  }
}