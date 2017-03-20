import { DELETE_RECIPE, FETCH_RECIPES, SAVE_RECIPE, UPDATE_RECIPE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {

    case DELETE_RECIPE:
      return action.payload.recipes;

    case FETCH_RECIPES:
      console.log('reducer recipes, delete recipe');
      return action.payload;

    case SAVE_RECIPE:
      console.log('reducer recipes, save recipe')
      return action.payload.recipes;

    case UPDATE_RECIPE:
      console.log('reducer recipes, update recipe');
      return action.payload.recipes;

    default:
      return state
  }
  
  return state;
}
