import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateRecipe } from '../../actions';
import RecipeForm from './recipe-form';

class EditRecipe extends Component {

  render () {
    const { activeRecipe, existingTitles, onCancelEditRecipe, recipes  } = this.props;

    // remove title of active recipe from all titles, so that validation function
    // will not complain about duplicate recipe title
    _.pull(existingTitles, activeRecipe.title.toLowerCase());

    const initialValues = {
      id: activeRecipe.id,
      title: activeRecipe.title,
      ingredients: activeRecipe.ingredients.join('; ')
    };

    return (
      <RecipeForm
        recipes={recipes}
        existingTitles={existingTitles}
        initialValues={initialValues}
        activeRecipe={activeRecipe}
        onCancel={onCancelEditRecipe}
        onSubmit={this.props.updateRecipe}
      />
    );
  }
}

export default connect(null, { updateRecipe })(EditRecipe);