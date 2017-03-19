import React from 'react';

function RecipeDetail(props) {
  const { activeRecipe } = props;

  return (
    <div className="card card-outline-primary">
      <div className="card-block">
        <h4 className="card-title">{activeRecipe.title}</h4>
        <p className="card-text">{activeRecipe.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {activeRecipe.ingredients.map((ingredient) => <li key={ingredient} className="list-group-item">{ingredient}</li>)}
      </ul>
      <div className="card-block text-right">
        <a className="card-link">Edit</a>
        <a className="card-link">Delete</a>
      </div>
    </div>    
  );
}

export default RecipeDetail;