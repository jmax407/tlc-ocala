import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Contact = ({isHome, setIsHome, setIsGivePage}) => {
  useEffect(() => {
    setIsHome( false);
    setIsGivePage(false)
  }, []);

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [read, setRead] = useState(false)
  const [hasSent, setHasSent] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const messagePreview = body.slice(0,30)
    console.log('form submitted')
    const name = fName + ' ' + lName
    const dateSent = new Date()
    const newMessage = { name, email , body, messagePreview, read, dateSent}
    
    console.log(newMessage);

    fetch('http://localhost:8000/messages', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newMessage)
    }).then(() => {
      setHasSent(true)
    })

    
  }
  return (
    <div id="contact" className='container padtop100'>
      <div className="contact">
      <div className="row">
        <div className="col-lg-6 pe-5">
          <h2>Contact Us</h2>
          <p>We are delighted that you have taken the time to visit our church's website. If you have any questions or would like to learn more about our community and the services we offer, please fill out the contact form. Whether you're looking for information on upcoming events, would like to speak with a member of our clergy, or have any other inquiry, we are here to assist you. We will respond to your message as soon as possible and look forward to connecting with you. Thank you for your interest in our church.</p>
        </div>
        <div className="col-lg-6 col-md-10 col-sm-12">
        <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col">
            <input type="text" required value={fName} className="form-control" placeholder="First Name" aria-label="First Name" onChange={(e) => setFName(e.target.value)} />
          </div>
          <div className="col">
            <input type="text" required value={lName} className="form-control" placeholder="Last Name" aria-label="Last Name" onChange={(e) => setLName(e.target.value)} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col">
            <input type="email" required value={email} className="form-control" placeholder="Email@address.com" aria-label="Email Address"onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col">
            <textarea required value={body} className="form-control" rows="4" onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
        </div>
        <button className="btn btn-primary">Send Message</button>
      </form>
        </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default Contact