import { combineReducers } from 'redux';

import ActiveRecipeReducer from './reducer-active-recipe';

const rootReducer = combineReducers({
  activeRecipe: ActiveRecipeReducer
});

export default rootReducer;
