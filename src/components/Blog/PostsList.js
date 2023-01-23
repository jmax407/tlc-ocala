import React, { useContext } from 'react';
import Post from './Post';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

const PostsList = ({ posts }) => {
  const auth = useContext(AuthContext)
  if (posts.length === 0) {
    return (
      <section className='py-5 container'>
        <div className='row'>
          <div className='text-center col padtop100'>
            <h2>No Post Found. Maybe crate one?</h2>
            <Link to="/blog/new" className='btn btn-primary'>Create Post</Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className='container py-5'>
      
      <div className='row'>
        <div className='col py-4 d-flex justify-content-end'>
          <Link to='/blog/new' className={`btn btn-primary ${!auth.isLoggedIn && 'disabled' }`}>
            <i className='fa-solid fa-pencil'></i> New Post
          </Link>
          
        </div>
      </div>
      <div className='row'>
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
  );
};

export default PostsList;
