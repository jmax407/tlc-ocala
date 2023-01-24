import React from 'react'

const Copyright = () => {
    let objectDate = new Date();
    let year = objectDate.getFullYear();
  return (
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className='text-center'>Copyright © The Life Center Church of Ocala {year}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Copyright