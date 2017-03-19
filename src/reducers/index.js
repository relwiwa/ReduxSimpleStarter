import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ActiveRecipeReducer from './reducer-active-recipe';
import AddOrEditReducer from './reducer-add-or-edit';
import RecipesReducer from './reducer-recipes';

const rootReducer = combineReducers({
  activeRecipe: ActiveRecipeReducer,
  addOrEdit: AddOrEditReducer,
  recipes: RecipesReducer,
  form: formReducer
});

export default rootReducer;
