import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const InboxListItem = ({id, sender_name, email, message, date, time, unread}) => {
    const confirmDelete = event => {
        event.preventDefault();
        console.log('lets delete it');
      };
      const openEmailHandler = event => {
        console.log('open this email')
      }
let messagePreview = message.slice(0, 100)
messagePreview = messagePreview + '...'
  return (
    <div className={`inbox-list-item d-flex align-items-center ${unread && ('unread')}` }>
          <div className='eamil-body d-flex align-items-center'>
            <span className="email-sender"><h4>{sender_name}</h4></span>
            
            <p className='email-preview' onClick={openEmailHandler}>
              {messagePreview}
            </p>
          </div>
          <div className="ms-auto">
          <span className='email-time pe-4'>{time} {date}</span>
          <span className='email-action'>
            <Button variant='link'><i className='fa-solid fa-trash-can'></i></Button>
          </span>
          </div>
          
        </div>
  )
}

export default InboxListItem