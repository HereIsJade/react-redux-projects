import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component{
  renderField(field){
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type="text"
          {...field.input} />
        {field.meta.error}
      </div>
    )
  }
  onSubmit(values){
    console.log(values)
  }
  render(){
    const {handleSubmit} = this.props
    return (
      <div>
        <div>New Post</div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" label="Title" component={this.renderField} />
          <Field name="categories" label="Categories" component={this.renderField} />
          <Field name="content" label="Post Content" component={this.renderField} />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

function validate(values){
  // console.log(values) -> {title:'abc', categories:'xxx', content:'yyy'}
  // initialize errors with an empty object
  const errors = {}
  // validate inputs from 'values'
  if(!values.title){
    errors.title = 'Please enter a title!'
  }
  if(!values.categories){
    errors.categories = 'Please enter some categories!'
  }
  if(!values.content){
    errors.content = 'Please enter some content!'
  }

  // if errors object is empty, the form is fine to submit
  // if errors has any properties, redux-form assumes it as invald
  return errors
}

export default reduxForm(
  {
    validate,
    form: 'PostsNewForm'
  }
  )(PostsNew)