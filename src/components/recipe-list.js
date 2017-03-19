import React from 'react';

import RecipeListItem from './recipe-list-item';

function RecipeList(props) {
  const { activeRecipe, onChangeActiveRecipe, recipes } = props;
  console.log(recipes);

  return (
    <div className="card card-outline-primary">
      <div className="card-header">
        List of Recipes
      </div>
      <div className="list-group list-group-flush">
        {recipes.length > 0 ?
          recipes.map((recipe) =>
            <RecipeListItem
              key={recipe.title}
              recipe={recipe}
              activeRecipe={activeRecipe}
              onChangeActiveRecipe={onChangeActiveRecipe}
            />
          )
        :
          <div className="list-group-item">There are no recipes yet</div>
        }
      </div>
    </div>    
  );
}

export default RecipeList;