import { useParams, useNavigate } from "react-router-dom"
import useFetch from '../useFetch'

const MessageDetails = () => {
    const { id } = useParams()
    const { data: message, error, isPending } = useFetch('http://localhost:8000/messages/' + id)
    
  return (
    <div className="message-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { message && (
            <article>
                <h2>{ message.preview}</h2>
                <p>Written by {message.name}</p>
                <div>{message.body}</div>
                {/* <button onClick={handleClick}>Delete</button> */}
            </article>
        )}
    </div>
  )
}

export default MessageDetails