import React, { Component } from 'react';

class EditRecipe extends Component {
  
  render () {
    const { activeRecipe } = this.props;

    return (
      <div className="card card-outline-primary">
        <div className="card-block">
          <p className="card-text">
            <input
              className="form-control form-control-lg"
              type="text"
              value={activeRecipe.title}
              placeholder="Add title of recipe"
            />
          </p>
          <p className="card-text">
            <textarea
              className="form-control"
              value={activeRecipe.description}
              placeholder="Add description of recipe"
            />
          </p>
          <p className="card-text">
            <textarea
              className="form-control"
              value={activeRecipe.ingredients.join('; ')}
              placeholder="List ingredients of recipe"
            />
          </p>
        </div>
        <div className="card-block">
          <button
            type="button"
            className="btn btn-block btn-outline-info">Cancel</button>
          <button
            type="submit"
            className="btn btn-block btn-outline-success">Update</button>
        </div>
      </div>
    );
  }
}

export default EditRecipe;