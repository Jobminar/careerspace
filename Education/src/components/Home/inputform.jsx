import React from 'react'
import './inputform.css'

const Inputform = () => {
  return (
    <>
       <div className='form-con'>
                      <form action="https://formspree.io/f/mdoqbvzw" method="POST"role="form" >
                       
                        <div class="row">
                        <h1>Please enter your details</h1>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                          </div>
                          <div class="col-md-12 mb-3">
                            <div class="form-group">
                              <input type="text" class="form-control" name="mobileno" id="mobileno" placeholder="Mobileno" required/>
                            </div>
                          </div>
                         
                          {/* <div class="col-md-12 text-center my-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                          </div> */}
                          <div class="col-md-12 text-center">
                            <button type="submit" class="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
    </>
  )
}

export default Inputform