export const CHANGE_ACTIVE_RECIPE = 'CHANGE_ACTIVE_RECIPE';

export function changeActiveRecipe(recipe) {
  console.log('active recipe has changed', recipe);
  return {
    type: CHANGE_ACTIVE_RECIPE,
    payload: recipe
  };
}