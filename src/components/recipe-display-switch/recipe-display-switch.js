import React, { Component } from 'react';

import AddRecipe from './add-recipe';
import EditRecipe from './edit-recipe';
import RecipeDetail from './recipe-detail';
import RecipeIntro from './recipe-intro';

class RecipeDisplaySwitch extends Component {

  render() {
    const { activeRecipe, addOrEdit, onCancelAddOrEditRecipe, onEditRecipe, recipes  } = this.props;

    return (
      <div>
        {(!activeRecipe && !addOrEdit) ? <RecipeIntro /> : null}
        {(activeRecipe && !addOrEdit) ? <RecipeDetail onEditRecipe={onEditRecipe} activeRecipe={activeRecipe} /> : null}
        {(!activeRecipe && addOrEdit) ? <AddRecipe recipes={recipes} onCancelAddRecipe={onCancelAddOrEditRecipe} /> : null}
        {(activeRecipe && addOrEdit) ? <EditRecipe onCancelEditRecipe={onCancelAddOrEditRecipe} activeRecipe={activeRecipe} /> : null}
      </div>
    );
  }
}

export default RecipeDisplaySwitch;