import React from 'react';

import AddRecipe from './add-recipe';
import EditRecipe from './edit-recipe';
import RecipeDetail from './recipe-detail';
import RecipeIntro from './recipe-intro';

function RecipeDisplaySwitch(props) {
  return (
    <div>
      <RecipeIntro />
      <RecipeDetail />
      <AddRecipe />
      <EditRecipe />
    </div>
  );
}

export default RecipeDisplaySwitch;