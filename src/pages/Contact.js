import { useCallback, useReducer } from 'react';
import { Button } from 'react-bootstrap';

import Input from '../components/FormElements/Input';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../utils/validators';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};


const Contact = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      message: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });


  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const contactSubmitHandler = event => {
    event.preventDefault();

    console.log(formState.inputs);
  }

  return (
    <div id='contact' className='container padtop100'>
      <div className='contact'>
        <div className='row'>
          <div className='col-lg-6 pe-5'>
            <h2>Contact Us</h2>
            <p>
              We are delighted that you have taken the time to visit our
              church's website. If you have any questions or would like to learn
              more about our community and the services we offer, please fill
              out the contact form. Whether you're looking for information on
              upcoming events, would like to speak with a member of our clergy,
              or have any other inquiry, we are here to assist you. We will
              respond to your message as soon as possible and look forward to
              connecting with you. Thank you for your interest in our church.
            </p>
          </div>
          <div className='col-lg-6 col-md-10 col-sm-12'>
            <form onSubmit={contactSubmitHandler}>
              <div className='mb-3 row'>
                <Input
                  id='name'
                  type='text'
                  element='input'
                  label='Name'
                  placeholder='Your Name'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter your name'
                  onInput={inputHandler}
                />
              </div>
              <div className='mb-3 row'>
                <Input
                  id='email'
                  type='text'
                  element='input'
                  label='Email Address'
                  placeholder='Your Eamil Address'
                  validators={[VALIDATOR_EMAIL()]}
                  errorText='Please enter your name'
                  onInput={inputHandler}
                />
              </div>
              <div className='mb-3 row'>
                <Input
                  id='message'
                  type='text'
                  label='Message'
                  placeholder='Message'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  errorText='Message too short, please enter valid message'
                  onInput={inputHandler}
                />
              </div>

              <Button type="submit" disabled={!formState.isValid} variant='primary'><i className="fa-solid fa-paper-plane"></i> Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
