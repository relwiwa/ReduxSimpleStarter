import React, { Component } from 'react';

import AddRecipe from './add-recipe';
import EditRecipe from './edit-recipe';
import RecipeDetail from './recipe-detail';
import RecipeIntro from './recipe-intro';

class RecipeDisplaySwitch extends Component {

  render() {
    const { activeRecipe, addOrEdit, onCancelAddOrEditRecipe, onDeleteRecipe, onEditRecipe, recipes  } = this.props;
    const existingTitles = recipes.map((recipe) => recipe.title.toLowerCase());

    return (
      <div>
        {(!activeRecipe && !addOrEdit) ? <RecipeIntro /> : null}
        {(activeRecipe && !addOrEdit) ? <RecipeDetail onEditRecipe={onEditRecipe} onDeleteRecipe={onDeleteRecipe} activeRecipe={activeRecipe} /> : null}
        {(!activeRecipe && addOrEdit) ? <AddRecipe recipes={recipes} existingTitles={existingTitles} onCancelAddRecipe={onCancelAddOrEditRecipe} /> : null}
        {(activeRecipe && addOrEdit) ? <EditRecipe recipes={recipes} existingTitles={existingTitles} activeRecipe={activeRecipe} onCancelEditRecipe={onCancelAddOrEditRecipe} /> : null}
      </div>
    );
  }
}

export default RecipeDisplaySwitch;