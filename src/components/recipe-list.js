import React from 'react';

import RecipeListItem from './recipe-list-item';

function RecipeList(props) {

  return (
    <div className="card card-outline-primary">
      <div className="card-header">
        List of Recipes
      </div>
      <div className="list-group list-group-flush">
        <RecipeListItem />
      </div>
    </div>    
  );
}

export default RecipeList;