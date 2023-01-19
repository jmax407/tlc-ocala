import React from 'react'
import { Button } from 'react-bootstrap'

const Post = ({id, imageUrl, title, body, date, imageDescription}) => {
  
  // console.log(body)
  if (body.length > 40) {
    body = body.slice(0,40)
    body = body + '[...]'
  }
  
  return (
    <div className="col-md-4 col-sm-12">
      <div className="post-card bg-white box-shadow borderRadius10">
        <img src={imageUrl} alt={imageDescription} className='img-fluid' />
        <div className="post-card-body">
          <span className='post-date'>{date}</span>
          <a href={`post/${id}`}><h4 className='post-title'>{title}</h4></a>
          <p>{body}</p>
        </div>
        <div className="post-card-footer d-flex justify-content-around mb-4">
          <Button variant='primary' to={`/blog/${id}`}>View</Button>
          <Button variant='secondary' to={`/blog/${id}/edit`}>EDIT</Button>
          <Button variant='danger'>DELETE</Button>
        </div>
      </div>
    </div>
  )
}

export default Post