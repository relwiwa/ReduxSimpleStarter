import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { saveRecipe } from '../../actions';

class AddRecipe extends Component {

  onSubmit(newRecipe) {
    this.props.saveRecipe(newRecipe, this.props.recipes);
  }

  render () {
    const { onCancelAddRecipe, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="card card-outline-primary">
          <div className="card-block">
            <p className="card-text">
              <Field
                className="form-control form-control-lg"
                type="text"
                placeholder="Add title of recipe"
                component="input"
                name="title"
              />
            </p>
            <p className="card-text">
              <Field
                className="form-control"
                placeholder="List ingredients of recipe, separated by semicolons"
                component="textarea"
                name="ingredients"
              />
            </p>
          </div>
          <div className="card-block">
            <button
              onClick={onCancelAddRecipe}
              type="button"
              className="btn btn-block btn-outline-info">Cancel</button>
            <button
              type="submit"
              className="btn btn-block btn-outline-success">Save</button>
          </div>
        </div>
      </form>
    );
  }
}

// reduxForm() v6 is no longer linked to connect()
AddRecipe = reduxForm({
  form: 'AddRecipe'
})(AddRecipe);

AddRecipe = connect(null, { saveRecipe })(AddRecipe);

export default AddRecipe;