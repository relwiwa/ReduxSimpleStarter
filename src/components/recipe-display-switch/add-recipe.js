import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveRecipe } from '../../actions';
import RecipeForm from './recipe-form';

class AddRecipe extends Component {

  render () {
    const { activeRecipe, addOrEdit, existingTitles, onCancelAddRecipe, onEditRecipe, recipes  } = this.props;

    return (
      <RecipeForm
        recipes={recipes}
        existingTitles={existingTitles}
        onCancel={onCancelAddRecipe}
        onSubmit={this.props.saveRecipe} />
    );
  }
}

export default connect(null, { saveRecipe })(AddRecipe);