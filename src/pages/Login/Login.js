import React, { useContext } from 'react';
import Input from '../../components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utils/validators';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import './Login.css';
import { useForm } from '../../components/hooks/form-hook';
import { AuthContext } from '../../components/context/auth-context';

const Login = () => {
  const navigate = useNavigate()
 
  const auth = useContext(AuthContext)
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
    
  const loginHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login()
    navigate('/')
  };

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='login-box'>
        <form onSubmit={loginHandler}>
          <div className='mb-3'>
            <h2>Login required</h2>
            <hr />
          </div>
          <div className='mb-3'>
            <Input
              id='email'
              type='email'
              element='input'
              label='E-mail'
              placeholder='name@emailaddress.com'
              errorText='Please enter Valid email address'
              validators={[VALIDATOR_EMAIL()]}
              onInput={inputHandler}
            />
          </div>
          <div className='mb-3'>
            <Input
              id='password'
              type='password'
              element='input'
              label='Password'
              placeholder='******'
              errorText='Please enter Valid password'
              validators={[VALIDATOR_MINLENGTH(5)]}
              onInput={inputHandler}
            />
          </div>
          <Button type='submit' variant='primary' disabled={!formState.isValid}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
