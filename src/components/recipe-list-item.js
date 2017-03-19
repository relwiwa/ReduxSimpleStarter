import React from 'react';

function RecipeListItem(props) {
  const { recipe, activeRecipe } = props;

  return (
    <button
      type="button"
      className={"list-group-item list-group-item-action " +
                (activeRecipe && (recipe.title === activeRecipe.title) ?
                'active' : '')}>{recipe.title}</button>
  );
}

export default RecipeListItem;