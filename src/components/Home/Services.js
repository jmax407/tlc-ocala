import React from 'react'
import '../Home/Home.css'

import sundayService from '../../assets/images/sunday-church.jpg';
import wednesdayBibleStudy from '../../assets/images/biblestudy.jpg';

const Services = () => {
  return (
    <section id='services' className='padtopbottom100 bg-tan'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-lg-4 pb-4'>
              <h2 className='section-title'>Weekly Services</h2>
            </div>
            <div className="col-lg-8">
            <div className='row d-flex justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='service-container box-shadow bg-white borderRadius10'>
                <img
                  loading='lazy'
                  src={sundayService}
                  alt='Sunday Service'
                  className='img-fluid'
                />
                <div className='service-content'>
                  <h4>Praise &amp; Worship</h4>
                  <ul className='list-unstyled'>
                    <li>
                      <strong>Day:</strong> Sunday
                    </li>
                    <li>
                      <strong>Time:</strong> 10:00AM
                    </li>
                    <li>
                      <strong>Location:</strong> 4411 NW 60th St. Ocala, FL
                    </li>
                    <li>
                      <strong>Online:</strong> Live streamed on facebook{' '}
                      <a href='facebook'>@TheLifeCenterChuchOfOcala</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='service-container box-shadow bg-white borderRadius10'>
                <img
                  loading='lazy'
                  src={wednesdayBibleStudy}
                  alt='Wednesday Bible Study'
                  className='img-fluid'
                />
                <div className='service-content'>
                  <h4>Interactive Bible Study</h4>
                  <ul className='list-unstyled'>
                    <li>
                      <strong>Day:</strong> Wednesday
                    </li>
                    <li>
                      <strong>Time:</strong> 7:00PM
                    </li>
                    <li>
                      <strong>Location:</strong> Online only
                    </li>
                    <li>
                      <strong>Online:</strong> Live streamed on facebook{' '}
                      <a href='facebook'>@TheLifeCenterChuchOfOcala</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
          
        </div>
      </section>
  )
}

export default Services