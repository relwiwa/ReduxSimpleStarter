import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeActiveRecipe, fetchRecipes } from '../actions';
import RecipeDisplaySwitch from './recipe-display-switch/recipe-display-switch';
import RecipeList from './recipe-list';

class RecipeBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addOrEdit: false
    };
  }

  componentWillMount() {
    this.props.fetchRecipes();
  } 

  handleChangeActiveRecipe(recipe) {
    this.props.changeActiveRecipe(recipe);
  }

  handleAddRecipe() {
    this.setState({
      addOrEdit: true
    });
    this.props.changeActiveRecipe(null);
  }

  handleEditRecipe() {
    this.setState({
      addOrEdit: true
    });
  }

  handleCancelAddOrEditRecipe() {
    this.setState({
      addOrEdit: false
    });
  }

  render() {
    const { activeRecipe, recipes } = this.props;

    return (
      <div className="row">

        <div className="col-sm-6">
          <RecipeDisplaySwitch
            recipes={recipes}
            activeRecipe={activeRecipe}
            addOrEdit={this.state.addOrEdit}
            onEditRecipe={() => this.handleEditRecipe()}
            onCancelAddOrEditRecipe={() => this.handleCancelAddOrEditRecipe()}
          />
        </div>

        <div className="col-sm-6">

          <button
            onClick={() => this.handleAddRecipe()}
            className="mb-2 mt-2 mt-md-0 btn btn-outline-success btn-block">
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
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, {changeActiveRecipe, fetchRecipes})(RecipeBox);