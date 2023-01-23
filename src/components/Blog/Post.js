import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../context/auth-context';

const Post = ({ id, imageUrl, title, body, date, imageDescription }) => {
  const auth = useContext(AuthContext);
  // console.log(body)
  if (body.length > 40) {
    body = body.slice(0, 40);
    body = body + '[...]';
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const confirmDeleteHandler = () => {
    console.log('Deleting...');
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {title} post?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={confirmDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='col-md-4 col-sm-12'>
        <div className='post-card bg-white box-shadow borderRadius10'>
          <div className='post-img'>
            <img src={imageUrl} alt={imageDescription} className='img-fluid' />
          </div>
          <div className='post-card-body'>
            <span className='post-date'>{date}</span>
            <a href={`post/${id}`}>
              <h4 className='post-title'>{title}</h4>
            </a>
            <p>{body}</p>
          </div>
          <div className='post-card-footer mb-4 px-3'>
            <Link className='btn btn-secondary me-1' to={`/blog/${id}`}>
              <i className='fa-solid fa-eye'></i> View
            </Link>
            {auth.isLoggedIn && (
              <>
                <Link
                  className='btn btn-secondary me-1'
                  to={`/blog/${id}/edit`}
                >
                  <i className='fa-solid fa-pen-to-square'></i> EDIT
                </Link>
                <Button variant='danger' onClick={handleShow}>
                  <i className='fa-solid fa-trash'></i> DELETE
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
