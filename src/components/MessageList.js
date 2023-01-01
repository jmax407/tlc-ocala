import { Link } from 'react-router-dom'

const MessageList = ({messages}) => {
    
     
  return (
    <div className="message-list">
        <h2>Messages</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Sender</th>
                    <th scope='col'>Preview</th>
                    <th scope='col'>Date</th>
                </tr>
            </thead>
            <tbody>
                {messages.map((message) => (
                    // const previewMessage = message.split(0,25)
                    <tr key={message.id}>
                        <td>
                        <Link to={`/messages/${message.id}`}>
                            {message.name}
                        </Link>
                        </td>
                        <td>
                            <Link to={`/messages/${message.id}`}>
                            {`${message.messagePreview}...`}

                        </Link>
                        </td>
                        <td>{message.dateSent && message.dateSent.toDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    </div>
  )
}

export default MessageList