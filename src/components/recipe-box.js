import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeActiveRecipe, changeAddOrEditRecipe, deleteRecipe, fetchRecipes } from '../actions';
import RecipeDisplaySwitch from './recipe-display-switch/recipe-display-switch';
import RecipeList from './recipe-list';

class RecipeBox extends Component {

  componentWillMount() {
    this.props.fetchRecipes();
  } 

  handleChangeActiveRecipe(recipe) {
    this.props.changeActiveRecipe(recipe);
  }

  handleAddRecipe() {
    this.props.changeActiveRecipe(null);
  }

  handleEditRecipe() {
    this.props.changeAddOrEditRecipe(true);
  }

  handleCancelAddOrEditRecipe() {
    this.props.changeAddOrEditRecipe(false);
  }

  handleDeleteRecipe() {
    console.log('delete recipe', this.props.activeRecipe);
    this.props.deleteRecipe(this.props.activeRecipe);
  }

  render() {
    const { activeRecipe, addOrEdit, recipes } = this.props;
    console.log('re-render recipe-box', recipes, activeRecipe, addOrEdit);

    return (
      <div className="row">

        <div className="col-sm-6">
          <RecipeDisplaySwitch
            recipes={recipes}
            activeRecipe={activeRecipe}
            addOrEdit={addOrEdit}
            onEditRecipe={() => this.handleEditRecipe()}
            onCancelAddOrEditRecipe={() => this.handleCancelAddOrEditRecipe()}
            onDeleteRecipe={() => this.handleDeleteRecipe()}
          />
        </div>

        <div className="col-sm-6">

          <button
            onClick={() => this.handleAddRecipe()}
            className="mb-4 mt-4 mt-md-0 btn btn-outline-success btn-block">
            Add New Recipe
          </button>
          
          <RecipeList
            recipes={recipes}
            activeRecipe={activeRecipe}
            onChangeActiveRecipe={(recipe) => this.handleChangeActiveRecipe(recipe)}
          />
        
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeRecipe: state.activeRecipe,
    recipes: state.recipes,
    addOrEdit: state.addOrEdit
  };
}

export default connect(mapStateToProps, {changeActiveRecipe, changeAddOrEditRecipe, deleteRecipe, fetchRecipes})(RecipeBox);