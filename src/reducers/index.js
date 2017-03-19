import { combineReducers } from 'redux';

import ActiveRecipeReducer from './reducer-active-recipe';
import RecipesReducer from './reducer-recipes';

const rootReducer = combineReducers({
  activeRecipe: ActiveRecipeReducer,
  recipes: RecipesReducer
});

export default rootReducer;
