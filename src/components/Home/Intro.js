import React from 'react'

import { Link } from 'react-router-dom'

import pastorAnd1stLadyPhoto from '../../assets/images/pastor-and-1stlady.png';

const Intro = () => {
  return (
    <section className='intro d-flex align-items-ed pt-5'>
        <div className='container'>
          <div className='row d-flex align-items-stretch'>
            <div className='col-lg-7 col-md-6 d-flex align-items-center'>
              <div className='intro-text'>
                <h1>
                  Living The <span className='nobreak'>Spirit-Filled</span>{' '}
                  Life!
                </h1>
                <p>
                  We are passionate about The Life Center Church Of Ocala, and
                  are on mission to see God’s kingdom established across
                  the&nbsp;earth.
                </p>
                <div className='d-grid gap-2 d-md-block'>
                  <Link to='/Give' className='btn btn-primary btn-tlc'>
                    How to Give
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-6'>
              <img
                loading='lazy'
                src={pastorAnd1stLadyPhoto}
                alt='Pastor Joe Maxwell &amp; 1st Lady Joyce Maxwell'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Intro