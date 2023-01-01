import MessageList from "../components/MessageList"
import useFetch from "../useFetch"

const Messages = () => {
    const { data: messages, isPending, error } = useFetch('http://localhost:8000/messages')

  return (
    <div className="messages container">
        {error && <div>{ error }</div>}
        {isPending && <div>Loading...</div>}
        {messages && <MessageList messages={messages} />}
    </div>
  )
}

export default Messages