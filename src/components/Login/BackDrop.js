import './Login.css'
import ReactDOM from 'react-dom'

import React from 'react'

const BackDrop = (props) => {
  return (
    ReactDOM.createPortal(
        <div className='backdrop' onClick={props.onClick}></div>,
        document.getElementById('backdrop-hook')
    )  
  )
}

export default BackDrop