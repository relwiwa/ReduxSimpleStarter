import React from 'react';

import RecipeListItem from './recipe-list-item';

function RecipeList(props) {
  const { activeRecipe, onChangeActiveRecipe, recipes } = props;

  return (
    <div className="card card-outline-primary">
      <div className="card-header">
        List of Recipes
      </div>
      <div className="list-group list-group-flush">
        {recipes.map((recipe) =>
          <RecipeListItem
            key={recipe.title}
            recipe={recipe}
            activeRecipe={activeRecipe}
            onChangeActiveRecipe={onChangeActiveRecipe}
          />
        )}
      </div>
    </div>    
  );
}

export default RecipeList;