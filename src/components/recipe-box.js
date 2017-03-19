import React, { Component } from 'react';

import RecipeDisplaySwitch from './recipe-display-switch/recipe-display-switch';
import RecipeList from './recipe-list';

class RecipeBox extends Component {

  render() {
    return (
      <div className="row">

        <div className="col-sm-6">
          <RecipeDisplaySwitch />
        </div>

        <div className="col-sm-6">
          <button className="mb-2 mt-2 mt-md-0 btn btn-outline-success btn-block">
            Add New Recipe
          </button>
          <RecipeList />
        </div>
      </div>
    );
  }
}

export default RecipeBox;