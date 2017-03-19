import React from 'react';

function RecipeIntro(props) {
  const userStories = [
    'You can create recipes that have names and ingredients',
    'You can see an index view where the names of all the recipes are visible',
    'You can click into any of the recipes to view it',
    'You can edit the recipes',
    'You can delete the recipes',
    'All new recipes you add are saved in your browser\'s local storage'
  ];
  return (
    <div>
      <h3>Welcome to Recipe Box</h3>
      <p>Manage recipes in your local storage and retrieve them later</p>
      <p>As part of freeCodeCamp's Certification, it fulfills the following user stories:</p>
      <div className="card card-outline-primary">
        <ul className="list-group">
          {userStories.map((story, index) => <li key={index} className="list-group-item">{story}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default RecipeIntro;