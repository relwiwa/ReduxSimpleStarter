import React, { Component } from 'react';

export default class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDelete: false
    };
  }

  renderDelete() {
      console.log('xxx', this.props);
    return (
      <div className="card-block">
        <div className="card-text text-danger text-center">Are you sure you want to delete this recipe?</div>
        <div className="mt-4 row">
          <div className="col-6">
            <button
              onClick={this.props.onDeleteRecipe}
              className="btn btn-outline-danger btn-block">
              Yes
            </button>
          </div>
          <div className="col-6">
            <button
              onClick={() => this.setState({showDelete: false})}
              className="btn btn-outline-warning btn-block">
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderEditOrDelete() {
    return (
      <div className="card-block text-right">
        <a href="#" onClick={this.props.onEditRecipe} className="card-link">Edit</a>
        <a href="#" onClick={() => this.setState({showDelete: true})} className="card-link">Delete</a>
      </div>
    );
  }

  render() {
    const { activeRecipe } = this.props;

    return (
      <div className="card card-outline-primary">
        <div className="card-block">
          <h4 className="card-title">{activeRecipe.title}</h4>
        </div>
        <ul className="list-group list-group-flush">
          {activeRecipe.ingredients.map((ingredient) => <li key={ingredient} className="list-group-item">{ingredient}</li>)}
        </ul>
        {this.state.showDelete ? this.renderDelete() : null}
        {!this.state.showDelete ? this.renderEditOrDelete() : null}
      </div>    
    );
  }
}
