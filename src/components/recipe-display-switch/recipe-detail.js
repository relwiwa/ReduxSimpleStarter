import React from 'react';

function RecipeDetail(props) {
  
  return (
    <div className="card card-outline-primary">
      <div className="card-block">
        <h4 className="card-title">Recipe title</h4>
        <p className="card-text">This is a fantastic recipe</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Ingredient</li>
        <li className="list-group-item">Ingredient</li>
      </ul>
      <div className="card-block text-right">
        <a className="card-link">Edit</a>
        <a className="card-link">Delete</a>
      </div>
    </div>    
  );
}

export default RecipeDetail;