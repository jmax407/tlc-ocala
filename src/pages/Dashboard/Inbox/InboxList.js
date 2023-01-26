import React from 'react'
import InboxListItem from './InboxListItem'

const InboxList = ({inboxMessages}) => {
  return (
    <>
    {inboxMessages.map(message => (
        <InboxListItem 
            key={message.id}
            sender_name={message.sender_name}
            email={message.email}
            message={message.message}
            date={message.date}
            time={message.time}
            unread={message.unread}
             />
    ))}
    </> 
  )
}

export default InboxList