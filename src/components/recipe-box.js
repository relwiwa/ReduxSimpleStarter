import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeActiveRecipe } from '../actions';
import RecipeDisplaySwitch from './recipe-display-switch/recipe-display-switch';
import RecipeList from './recipe-list';


let recipes = [
  {
    title: 'Test recipe',
    description: 'Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description ',
    ingredients: ['500 ml of ingredient a', '3 oz of ingredient b', '500 mg of ingredient c']
  }, {
    title: 'Another test recipe',
    description: 'Another test recipe description Another test recipe description Another test recipe description Another test recipe description Another test recipe description Another test recipe description ',
    ingredients: ['3 cl of ingredient a', '400 ml of ingredient b', '5 kg of ingredient c']
  }
];

class RecipeBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addOrEdit: false
    };
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
    const { activeRecipe } = this.props;

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
  return { activeRecipe: state.activeRecipe };
}

export default connect(mapStateToProps, {changeActiveRecipe})(RecipeBox);