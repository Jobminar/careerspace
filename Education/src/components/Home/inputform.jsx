import React from 'react'
import './inputform.css'

const Inputform = () => {
  return (
    <>
      <div className='form-con d-flex justify-content-center align-items-center'>
        <div className=' logincontainer p-3 rounded-3 border-1 shadow bg-dark-subtle'>
          <form action="https://formspree.io/f/mdoqbvzw" method="POST" role="form"   >

            <div class="row">
              <div className='fw-medium fs-3' >Please enter your details</div>
              <hr />
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input type="text" className="form-control" name="mobileno" id="mobileno" placeholder="Mobileno" required />
                </div>
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-info">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Inputform