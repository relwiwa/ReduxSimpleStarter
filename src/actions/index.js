import _ from 'lodash';
import recipesFallback from '../data/recipes-fallback';

export const CHANGE_ACTIVE_RECIPE = 'CHANGE_ACTIVE_RECIPE';
export const CHANGE_ADD_OR_EDIT_RECIPE = 'CHANGE_ADD_OR_EDIT_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPE = 'SAVE_RECIPE';

export function changeActiveRecipe(recipe) {
  console.log('action: active recipe has changed', recipe);
  return {
    type: CHANGE_ACTIVE_RECIPE,
    payload: recipe
  };
}

export function changeAddOrEditRecipe(trueOrFalse) {
  console.log('action: add or edit recipe has changed', trueOrFalse);
  return {
    type: CHANGE_ADD_OR_EDIT_RECIPE,
    payload: trueOrFalse
  };
}

export function fetchRecipes() {
  console.log('action: fetch recipes');
  const recipes = JSON.parse(localStorage.getItem('recipes'));

  return {
    type: FETCH_RECIPES,
    payload: recipes ? recipes : recipesFallback
  }
}

export function saveRecipe(newRecipe, allRecipes) {
  // split ingredients into individual array elements
  let ingredients = newRecipe.ingredients.split(';');
  // trim each ingredient of whitespaces
  ingredients = ingredients.map((ingredient) => _.trim(ingredient));
  // get rid of empty values
  ingredients = _.without(ingredients, '');
  // ensure uniqueness of ingredients
  ingredients = _.uniq(ingredients);
  newRecipe.ingredients = ingredients;
  // - add id to be used as key property
  // - milliseconds are unique in this single user app
  newRecipe.id = Date.now();
  localStorage.setItem('recipes', JSON.stringify(allRecipes.concat(newRecipe)));

  return {
    type: SAVE_RECIPE,
    payload: newRecipe
  }
}