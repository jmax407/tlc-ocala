import PayPalCompontent from '../components/PayPalCompontent'
import background from '../assets/images/handout.jpg'
import { useEffect } from 'react'

const Give = ({isHome, setIsHome}) => {
    useEffect(() => {
        setIsHome(false)
    }, [])

    
  return (
    <>
      <section
        id='give'
        className='d-flex align-items-center vh100'
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-9 d-flex align-items-center'>
              <div className='text-center'>
                <h1>Giving</h1>
                <p className='styled-text'>
                  "Give, and it will be given to you. A good measure, pressed
                  down, shaken together and running over, will be poured into
                  your lap. For with the measure you use, it will be measured to
                  you."
                </p>
                <p>
                  <em>Luke 6:38</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='how-to-give' className='padtopbottom100'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-9 text-center'>
              <h2 className='pb-5'>How to Give</h2>
            </div>
          </div>
          <div className='row d-flex justify-content-center'>
                <div className='col-lg-4'>
                  <div className='card-container box-shadow'>
                    <div className='card-body'>
                      <div className='card-text '>
                        <h3 className='title'>Online</h3>
                            <p>Give online, anytime with our easy to use donation button below.</p>
                            <PayPalCompontent />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='card-container box-shadow'>
                    <div className='card-body'>
                      <div className='card-text'>
                        <h3 className='title'>By Mail</h3>
                            <p>Please mail checks to:</p>
                            <address>
                                The Life Center Church of Ocala
                                <br />
                                4411 NorthWest 60th Street
                                <br />
                                Ocala, FL 34482
                            </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        
      </section>
    </>
  );
}

export default Give