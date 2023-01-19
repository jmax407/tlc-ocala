import React from 'react'

const Footer = () => {
    let objectDate = new Date();
    let year = objectDate.getFullYear();
  return (

    <footer className='mt-auto padtop100'>
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <h4>The Life Center Church Of Ocala</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
            <hr />
            </div>
        </div>
        <div className="row d-flex justify-content-between py-4">
           
            <div className="col-lg-6">
                <p>
                   The Life Center Church of Ocala, under the headship of Jesus Christ, our Lord and Savior, we believe we are called to serve God in Witnessing, Serving, and Worship!
                </p>
            </div>
            <div className="col-lg-4 offset-lg-2">
                <h4>Get in Touch</h4>
                <div className="footer-info d-flex align-items-start">
                    <span className="pe-3"><i className="fa-solid fa-location-dot"></i></span>
                    <address>
                        4411 NorthWest 60th Street
                        Ocala, FL 34482
                    </address>
                </div>
                <div className="footer-info">
                    <a href="mailto:pastorjoe@thelifecenter.org"><span className="pe-3"><i className="fa-solid fa-envelope"></i></span> pastorjoe@thelifecenter.org</a>
                </div>
                <div className="footer-info">
                    <a href="mailto:tlcocala@thelifecenter.org"><span className="pe-3"><i className="fa-solid fa-envelope"></i></span> tlcocala@thelifecenter.org</a>
                </div>
                <div className="footer-info">
                    <a href="tel:352-732-7774"><span className="pe-3"><i className="fa-solid fa-mobile"></i></span> 352-732-7774</a>
                </div>
                <div className="footer-info">
                    <a href="https://www.facebook.com/TheLifeCenterChuchOfOcala"><span className="pe-3"><i className="fa-brands fa-facebook-f"></i></span> facebook</a>
                </div>
                  
                </div>
            </div>
        </div>
    
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-between">
                    <p>Copyright © The Life Center Church of Ocala {year}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer