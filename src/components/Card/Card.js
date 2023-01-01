import './card.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pastor }) => {
  const [isClosed, setIsClosed] = useState(true);
  let previewText = pastor.text.slice(0, 220)
  previewText = previewText + '...'

const showMore = (e) => {
    e.preventDefault()
    setIsClosed(false)
  }
 const showLess = (e) => {
    e.preventDefault()
    setIsClosed(true)
  }
  return (
    <div className='card-container box-shadow'>
      <div className='card-img-container'>
        <img
          loading='lazy'
          src={pastor.image}
          alt={pastor.description}
          className='img-fluid'
        />
      </div>
      <div className='card-body'>
        <div className='card-text'>
          <h3 className='title'>{pastor.name}</h3>
          {isClosed ? 
          (<>
            <p>{previewText}</p> 
            <span className='showToggle' onClick={showMore}>Show More</span>
          </>):
          <>
            <p>{pastor.text}</p>
            <span className='showToggle' onClick={showLess}>Show Less</span>
          </>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
