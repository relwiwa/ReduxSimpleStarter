import { FETCH_RECIPES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    
    case FETCH_RECIPES:
      return action.payload;

    default:
      return state
  }
  
  return state;
}