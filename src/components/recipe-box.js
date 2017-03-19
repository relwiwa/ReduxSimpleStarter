import React, { Component } from 'react';

import RecipeDisplaySwitch from './recipe-display-switch/recipe-display-switch';
import RecipeList from './recipe-list';

const recipes = [
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

const activeRecipe = {
  title: 'Test recipe',
  description: 'Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description Test recipe description ',
  ingredients: ['500 ml of ingredient a', '3 oz of ingredient b', '500 mg of ingredient c']
};

class RecipeBox extends Component {

  render() {
    return (
      <div className="row">

        <div className="col-sm-6">
          <RecipeDisplaySwitch
            recipes={recipes}
            activeRecipe={activeRecipe}
          />
        </div>

        <div className="col-sm-6">

          <button className="mb-2 mt-2 mt-md-0 btn btn-outline-success btn-block">
            Add New Recipe
          </button>
          
          <RecipeList
            recipes={recipes}
            activeRecipe={activeRecipe}
          />
        
        </div>
      </div>
    );
  }
}

export default RecipeBox;