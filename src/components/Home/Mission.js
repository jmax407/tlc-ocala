import React from 'react'

const Mission = () => {
  return (
    <section id='mission' className='padtopbottom100 bg-tan'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 padbottom40 d-flex align-items-center'>
              <div>
                <h2 className='section-title'>Our Mission</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  quasi dolor nesciunt consectetur, veniam veritatis facere
                  ducimus. Illum incidunt veniam molestias voluptate vitae
                  obcaecati, maxime officiis aliquid quibusdam quas vel!
                </p>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-1'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='box-container bg-white box-shadow mb-4 borderRadius10'>
                  <i className="fa-solid fa-hand-holding-heart icon2x font-maroon"></i>
                    <h4 className='font-maroon'>By Witnessing</h4>
                    <p>Outreach to Proclaim and invite to Jesus Christ.</p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='box-container bg-white box-shadow mb-4 borderRadius10'>
                  <i class="fa-solid fa-church icon2x font-maroon"></i>
                    <h4 className='font-maroon'>By Nurturing</h4>
                    <p>Ministries to edify and build the body of Christ.</p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='box-container bg-white box-shadow borderRadius10'>
                  <i class="fa-solid fa-hands-praying icon2x font-maroon"></i>
                    <h4 className='font-maroon'>By Worshipping</h4>
                    <p>
                      Gathering corporately in praise to the true and Living God
                      of our salvation through Jesus Christ.
                    </p>
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