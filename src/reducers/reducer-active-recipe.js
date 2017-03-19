import { CHANGE_ACTIVE_RECIPE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {

    case CHANGE_ACTIVE_RECIPE:
      return action.payload;
    
    default:
      return state;
  }

  return state;
}