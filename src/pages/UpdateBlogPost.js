import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../utils/validators';
import { useForm } from '../components/hooks/form-hook';
import { Button } from 'react-bootstrap';

const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'Welcome',
    body: 'This is the 1st blog test',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    imageDescription: 'this is an image',
    date: '11:30 AM 1/4/2023',
  },
  {
    id: 'p2',
    title: 'Now',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi vitae velit blandit consectetur. Nunc eleifend condimentum risus lacinia congue. Phasellus euismod elementum risus, eget ornare purus interdum ac. Vestibulum laoreet tortor non rhoncus mollis. Nam ligula leo, commodo eget viverra id, euismod sit amet nibh. Etiam quis nibh vel est sodales vulputate eget ut nunc. Sed in libero at quam placerat molestie. Vestibulum elit libero, accumsan tempor posuere a, accumsan in nibh. Nunc in tincidunt leo, vel malesuada quam. Etiam et lorem vel enim placerat lobortis. Integer congue arcu ante, ac vestibulum est luctus vitae. Cras id rhoncus arcu. Etiam non nibh odio.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    imageDescription: 'this is an image',
    date: '11:30 AM 1/4/2023',
  },
  {
    id: 'p3',
    title: 'Bye',
    body: 'That blog over there is lying. this is best blog and i can prove it',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    imageDescription: 'this is an image',
    date: '11:30 AM 1/4/2023',
  }
];

const UpdateBlogPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const postId = useParams().postId;

  const [formState, inputHandler, setFormData] = useForm(
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

  const identifiedPost = DUMMY_POSTS.find(post => post.id === postId);
  useEffect(() => {
    if (identifiedPost) {
      setFormData(
        {
          title: {
            value: identifiedPost.title,
            isValid: true,
          },
          body: {
            value: identifiedPost.body,
            isValid: true,
          }
        },
        true
      );
    } 
    setIsLoading(false);
  }, [setFormData, identifiedPost]);

  const postUpdateSubmitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPost) {
    return (
      <div className='container padtop100 text-center'>
        <h2>Could not find place</h2>
      </div>
    );
  }

  if (isLoading) {
    <div className='container padtop100 text-center'>
      <h2>Loading...</h2>
    </div>;
  }
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-5 padtop100'>
          <form onSubmit={postUpdateSubmitHandler}>
            <div className='mb-3'>
              <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter valid title'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
              />
            </div>
            <div className='mb-3'>
              <Input
                id='body'
                element='textarea'
                label='body'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter valid Message'
                onInput={inputHandler}
                initialValue={formState.inputs.body.value}
                initialValid={formState.inputs.body.isValid}
              />
            </div>

            <Button
              type='submit'
              variant='primary'
              disabled={!formState.isValid}
            >
              Update Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlogPost;
