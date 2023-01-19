import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import pastorAnd1stLadyPhoto from '../../assets/images/pastor-and-1stlady.png';

const Intro = () => {
  return (
    <section className='intro d-flex align-items-center vh-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 col-md-6 d-flex align-items-center'>
              <div className='intro-text text-center'>
                <h1>
                  Living The <span className='nobreak'>Spirit-Filled</span>{' '}
                  Life!
                </h1>
                <p>
                  We are passionate about The Life Center Church Of Ocala,<br />and
                  are on mission to see God’s kingdom established across
                  the&nbsp;earth.
                </p>
                
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
              <div className='text-center'>
                  <Button href='#leadership' variant='primary btn-tlc'>
                    Leadership
                  </Button>
                  <Link to='/Give' className='btn btn-secondary btn-tlc mx-3'>
                    How to Give
                  </Link>
                  <Button href='#services' className='btn btn-alt btn-tlc'>
                    Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Intro