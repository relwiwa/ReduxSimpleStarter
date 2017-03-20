import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title of recipe',
    placeholder: 'Enter a title of the recipe',
    extraClasses: 'form-control-lg'
  },
  ingredients: {
    type: 'textarea',
    label: 'Ingredients',
    placeholder: 'List ingredients separated by semicolons'
  }
};

class RecipeForm extends Component {

  handleFormSubmit(recipe) {
    this.props.onSubmit(recipe);
  }

  renderField = field => {
    const { label, placeholder, type, extraClasses } = FIELDS[field.input.name];

    const fieldError = (field.meta.error && field.meta.touched) ? true : false;
    const FormElement = `${type}`;

    return (
      <div className={`card-text form-group ${fieldError ? 'has-danger' : ''}`}>
        <label className="sr-only">{label}</label>
        <FormElement
          className={`form-control ${extraClasses ? extraClasses : ''}`}
          {...field.input}
          placeholder={placeholder} />
        {fieldError ? <p className="form-control-feedback">{field.meta.error}</p> : null}
      </div>
    );
  }

  render () {
    const { onCancel, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="card card-outline-primary">

          <div className="card-block">
            {_.map(FIELDS, (field, key) => {
              return (
                <Field
                  component={this.renderField}
                  name={key}
                  key={key}
                />
              );
            })}
          </div>

          <div className="card-block">
            <button
              onClick={onCancel}
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
RecipeForm = reduxForm({
  form: 'RecipeForm',
  validate
})(RecipeForm);

export default RecipeForm;