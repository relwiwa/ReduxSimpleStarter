import React, { Component } from 'react';

import AddRecipe from './add-recipe';
import EditRecipe from './edit-recipe';
import RecipeDetail from './recipe-detail';
import RecipeIntro from './recipe-intro';

class RecipeDisplaySwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addOrEdit: false
    };
  }

  render() {
    const { recipes, activeRecipe } = this.props;
    const { addOrEdit } = this.state;

    return (
      <div>
        {(!activeRecipe && !addOrEdit) ? <RecipeIntro /> : null}
        {(activeRecipe && !addOrEdit) ? <RecipeDetail activeRecipe={activeRecipe} /> : null}
        {(!activeRecipe && addOrEdit) ? <AddRecipe /> : null}
        {(activeRecipe && addOrEdit) ? <EditRecipe activeRecipe={activeRecipe} /> : null}
      </div>
    );
  }
}

export default RecipeDisplaySwitch;