import { CHANGE_ACTIVE_RECIPE, CHANGE_ADD_OR_EDIT_RECIPE, SAVE_RECIPE } from '../actions';

export default function(state = false, action) {
  switch (action.type) {

    case CHANGE_ACTIVE_RECIPE:
      return action.payload === null ? true : false;

    case CHANGE_ADD_OR_EDIT_RECIPE:
      return action.payload;

    case SAVE_RECIPE:
      return false;

    default:
      return state;
  }

  return state;
}