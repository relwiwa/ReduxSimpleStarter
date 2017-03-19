import { FETCH_RECIPES, SAVE_RECIPE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_RECIPES:
      return action.payload;

    case SAVE_RECIPE:
      return [...state].concat(action.payload);

    default:
      return state
  }
  
  return state;
}
