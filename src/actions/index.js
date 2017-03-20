import _ from 'lodash';

import recipesFallback from '../data/recipes-fallback';
export const CHANGE_ACTIVE_RECIPE = 'CHANGE_ACTIVE_RECIPE';
export const CHANGE_ADD_OR_EDIT_RECIPE = 'CHANGE_ADD_OR_EDIT_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SAVE_RECIPE = 'SAVE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';

export function changeActiveRecipe(recipe) {
  console.log('action: active recipe has changed');
  return {
    type: CHANGE_ACTIVE_RECIPE,
    payload: recipe
  };
}

export function changeAddOrEditRecipe(trueOrFalse) {
  console.log('action: add or edit recipe has changed');
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

export function saveRecipe(recipe) {
  console.log('action: save recipe');
  recipe.ingredients = prepareIngredients(recipe);
  let recipes = JSON.parse(localStorage.getItem('recipes'));
  recipes = recipes ? recipes : recipesFallback;

  // - add id to be used as key property;
  // - milliseconds are unique in this single user app
  recipe.id = Date.now();
  recipes = recipes.concat(recipe);

  localStorage.setItem('recipes', JSON.stringify(recipes));

  return {
    type: SAVE_RECIPE,
    payload: { recipe, recipes }
  }
}

// so it's neither some weird behavior of redux state nor some javascript
// hoisting behavior i didn't get yet,  but just a console.log 'feature'
// in react context: it's not showing the original values of an array,
// but only the final values within a scope:
// http://stackoverflow.com/questions/4057440/is-chromes-javascript-console-lazy-about-evaluating-arrays
export function updateRecipe(recipe) {
  console.log('action: update recipe');
  recipe.ingredients = prepareIngredients(recipe);
  let recipes = JSON.parse(localStorage.getItem('recipes'));

  //console.log('before', JSON.stringify(recipes));
  const index = _.findIndex(recipes, {'id': recipe.id});
  recipes[index] = recipe;
  //console.log('after', JSON.stringify(recipes));
  localStorage.setItem('recipes', JSON.stringify(recipes));

  return {
    type: UPDATE_RECIPE,
    payload: { recipe, recipes }
  }
}

function prepareIngredients (recipe) {
  // split ingredients into individual array elements
  let ingredients = recipe.ingredients.split(';');
  // trim each ingredient of whitespaces
  ingredients = ingredients.map((ingredient) => _.trim(ingredient));
  // get rid of empty values
  ingredients = _.without(ingredients, '');
  // ensure uniqueness of ingredients
  return _.uniq(ingredients);
}