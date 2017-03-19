import { FETCH_RECIPES, SAVE_RECIPE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_RECIPES:
      return action.payload;

    case SAVE_RECIPE:
      state.push(action.payload);
      return state;

    default:
      return state
  }
  
  return state;
}
