import React from 'react'

import PrayerCircle from '../../assets/images/prayer-circle.jpg'

const Mission = () => {
  return (
    <section id='mission' className='padtop100 padbottom100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 padbottom40 d-flex align-items-center'>
              <div className="pe-5">
              <img src={PrayerCircle} alt="Prayer Circle" className='img-fluid borderRadius20'/>
            </div>
            </div>
            <div className='col-lg-6'>
              <div className='row'>
                <div className="col-lg-12">
                  <h3><span className="accent">OUR MISSION</span></h3>
                <h3 className='section-title'>This is the Mission.</h3>
                <p className='large-text mb-5'>
                Glorify God by loving Him and loving others, through the teaching and application of His Word, the sharing of the Good News of Jesus Christ, and the building up of believers in the faith.
                </p>
                </div>
                <div className='col-lg-12'>
                  <div className="list-icons">
                    <div className="item-icon">
                      <span className="icon d-flex justify-content-center align-items-center icon-left align-self-start">
                      <i className="fa-solid fa-hand-holding-heart"></i>
                      </span>
                      <h4 className='font-maroon'>By Witnessing</h4>
                      <p>Outreach to Proclaim and invite to Jesus Christ.</p>
                    </div>
                  </div>
                  <div className="list-icons">
                    <div className="item-icon">
                      <span className="icon d-flex justify-content-center align-items-center icon-left align-self-start">
                      <i className="fa-solid fa-hands-praying "></i>
                      </span>
                      <h4 className='font-maroon'>By Nurturing</h4>
                      <p>Ministries to edify and build the body of Christ.</p>
                    </div>
                  </div>
                  <div className="list-icons">
                    <div className="item-icon">
                      <span className="icon d-flex justify-content-center align-items-center icon-left align-self-start">
                      <i className="fa-solid fa-church"></i>
                      </span>
                      <h4 className='font-maroon'>By Worshipping</h4>
                      <p>Gathering corporately in praise to the true and Living God of our salvation through Jesus Christ.</p>
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

export default Mission