import { CHANGE_ACTIVE_RECIPE, DELETE_RECIPE, SAVE_RECIPE, UPDATE_RECIPE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {

    case CHANGE_ACTIVE_RECIPE:
      return action.payload;

    case DELETE_RECIPE:
      console.log('active recipe reducer: delete recipe');
      return null;

    case SAVE_RECIPE:
      console.log('active recipe reducer: save recipe');
      return action.payload.recipe;

    case UPDATE_RECIPE:
      console.log('active recipe reducer: update recipe');
      return action.payload.recipe;
    
    default:
      return state;
  }

  return state;
}