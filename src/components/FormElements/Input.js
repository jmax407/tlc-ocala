import React, { useReducer, useEffect } from 'react';
import './Input.css';

import { validate } from '../../utils/validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
      case 'TOUCH':
        return {
            ...state,
            isTouched: true
        }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props
  const { value, isValid } = inputState

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput])

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
        type: 'TOUCH'
    })
  }
  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        className='form-control form-control-lg'
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        className='form-control form-control-lg'
        rows={props.row || 5}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={`${!inputState.isValid && inputState.isTouched &&
      'form-control--invalid'}`}>
      <label htmlFor={props.id} className='form-label'>
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && 
        <div className='mt-3 alert alert-danger'>{props.errorText}</div>
      }
    </div>
  );
};

export default Input;
