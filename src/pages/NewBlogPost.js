import React from 'react';

import Input from '../components/FormElements/Input';
import Button from '../components/FormElements/Button';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../components/hooks/form-hook';

const NewBlogPost = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      body: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const postSubmitHandler = event => {
    event.preventDefault();

    console.log(formState.inputs);
  };

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-5'>
          <form className='py-5' onSubmit={postSubmitHandler}>
            <div className='mb-3'>
              <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title.'
                onInput={inputHandler}
              />
            </div>
            <div className='mb-3'>
              <Input
                id='body'
                element='textarea'
                label='Body'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='The body of your post is empty. Please enter something.'
                onInput={inputHandler}
              />
            </div>
            <button
              className='btn btn-primary btn-tlc'
              type='submit'
              disabled={!formState.isValid}
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost;
