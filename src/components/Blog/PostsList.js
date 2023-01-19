import React from 'react'
import Post from './Post';
import { Button } from 'react-bootstrap';

const PostsList = ({posts}) => {
    if (posts.length === 0) {
      return (
        <div className="place-list center">
  
            <h2>No places found. Maybe create one?</h2>
  
        </div>
      );
    }
    return (
      <section className='container py-5'>
        <div className="row">
          <div className="col py-4 d-flex justify-content-end">
          <Button variant='primary btn-tlc'>New Post <i className="fa-solid fa-pen-to-square"></i></Button>
          </div>
      
        </div>
        <div className="row">
          {posts.map(post => (
            <Post 
              key={post.id} 
              id={post.id}
              imageUrl={post.imageUrl}
              imageDescription={post.imageDescription}
              title={post.title}
              body={post.body}
              date={post.date}
             />
          ))}
        </div>
      </section>
    )
  }

export default PostsList