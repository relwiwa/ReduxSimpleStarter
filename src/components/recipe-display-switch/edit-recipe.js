import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { saveRecipe } from '../../actions';

class EditRecipe extends Component {

  handleFormSubmit(newRecipe) {
    this.props.saveRecipe(newRecipe, this.props.recipes);
  }

  renderInput = field => {
    const fieldError = (field.meta.error && field.meta.touched) ? true : false;

    return (
      <p className={`card-text form-group ${fieldError ? 'has-danger' : ''}`}>
        <input
          className="form-control"
          {...field.input}
          placeholder={`Add ${field.input.name}`} />
        {fieldError ? <p className="form-control-feedback">{field.meta.error}</p> : null}
      </p>
    );
  };

  renderTextArea = field => {
   const fieldError = (field.meta.error && field.meta.touched) ? true : false;

    return (
      <p className={`card-text form-group ${fieldError ? 'has-danger' : ''}`}>
        <textarea
          className="form-control"
          {...field.input}
          placeholder={`Add ${field.input.name}`} />
        {fieldError ? <p className="form-control-feedback">{field.meta.error}</p> : null}
      </p>
    );
  };

  render () {
    const { onCancelAddRecipe, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="card card-outline-primary">
          <div className="card-block">
            <Field
              type="text"
              component={this.renderInput}
              name="title"
            />
            <Field
              component={this.renderTextArea}
              name="ingredients"
            />
          </div>
          <div className="card-block">
            <button
              onClick={onCancelAddRecipe}
              type="button"
              className="btn btn-block btn-outline-info">Cancel</button>
            <button
              type="submit"
              className="btn btn-block btn-outline-success">Update</button>
          </div>
        </div>
      </form>
    );
  }
}

function validate(formValues, formProps) {
  const errors = {};
  const { title, ingredients } = formValues;
  const { existingTitles } = formProps;

  if (!title) {
    errors.title = 'Please enter a title';
  }
  else if (existingTitles.indexOf(title.toLowerCase()) >= 0) {
    errors.title = 'There is already a recipe with this title. Please change the title.';
  }
  else if (title.length < 5) {
    errors.title = 'Please enter at least 5 characters';
  }
  else if (title.length > 50) {
    errors.title = 'Please do not enter more than 50 characters';
  }

  if (!ingredients) {
    errors.ingredients = 'Please enter ingredients';
  }
  else if (ingredients.length < 10) {
    errors.ingredients = 'Please enter at least 10 characters';
  }
  else if (ingredients.length > 1000) {
    errors.ingredients = 'Please do not enter more than 1000 characters';
  }

  return errors;
}

// reduxForm() v6 is no longer linked to connect()
EditRecipe = reduxForm({
  form: 'EditRecipe',
  validate
})(EditRecipe);

EditRecipe = connect(null, { saveRecipe })(EditRecipe);

export default EditRecipe;