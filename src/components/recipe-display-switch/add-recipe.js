import React, { Component } from 'react';

class AddRecipe extends Component {
  render () {
    return (
      <div className="card card-outline-primary">
        <div className="card-block">
          <p className="card-text">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Add title of recipe"
            />
          </p>
          <p className="card-text">
            <textarea
              className="form-control"
              placeholder="Add description of recipe"
            />
          </p>
          <p className="card-text">
            <textarea
              className="form-control"
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
            className="btn btn-block btn-outline-success">Save</button>
        </div>
      </div>
    );
  }
}

export default AddRecipe;