import React from 'react'

const Copyright = () => {
    let objectDate = new Date();
    let year = objectDate.getFullYear();
  return (
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-between">
                    <p>Copyright © The Life Center Church of Ocala {year}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Copyright