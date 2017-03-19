import React from 'react';

function RecipeListItem(props) {
  const { activeRecipe, onChangeActiveRecipe, recipe } = props;

  const isActiveListItem = activeRecipe && (recipe.title === activeRecipe.title);

  return (
    <button
      type="button"
      className={"list-group-item list-group-item-action " +
                (isActiveListItem ?
                'active' : '')}
      onClick={!isActiveListItem ? (() => onChangeActiveRecipe(recipe)) : null}
      >{recipe.title}</button>
  );
}

export default RecipeListItem;