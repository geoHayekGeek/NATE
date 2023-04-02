import React from 'react'
import { Welcome } from "./Welcome"
import "../css/Contact.css"

export const Contact = () => {
  return (
    <div className='container-fluid px-0 m-0'>
      <Welcome title="CONTACT US" classList="pb-5 mb-5 text-white text-decoration-underline" />
      <div className="bg-black px-5 ps-md-5 pe-md-0 py-5 mt-4">
        <div id="welcome" className='col-md-8 offset-md-2 slideIn'>
          <h1 className="mb-4 text-white">Get in Touch: Contact Us Today</h1>
          <p className="lead text-white">We value your feedback and are eager to hear from you. Whether you have a question, concern, suggestion, or just want to say hello, we're here to listen and help. Please fill out the form below and one of our team members will get back to you as soon as possible. Thank you for reaching out!</p>
        </div>

        <hr className="pt-5 text-white" />

        <div id="form" className="py-0 col-md-6 offset-md-3 px-3 py-3" style={{border: "solid white 1px", borderRadius: "10px"}}>
          <h1 className="text-white text-center mb-5" style={{fontFamily: '"Signifier", ui-serif, Georgia, Cambria, Times New Roman, Times, serif'}}>Send us a message</h1>
        <form>
          <div className="mb-4 row">
            <div className="col">
              <input type="text" className="form-control bg-secondary border-0" id="fname" name='fname' placeholder='First Name'></input>
            </div>
            <div className="col">
              <input type="text" className="form-control  bg-secondary border-0" id="lname" name='lname' placeholder='Last Name'></input>
            </div>
          </div>
          <div className="mb-4">
            <input type="email" className="form-control  bg-secondary border-0" id="email" name='email' placeholder='Email'></input>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className='text-secondary mb-2 fw-bolder'>Message:</label>
            <textarea className="form-control  bg-secondary border-0" id="message" name='message' rows="4"></textarea>
          </div>
          <div className="text-center mt-4">
            <button type="submit" class="btn text-white border-1 border-white">Submit</button>
          </div>
        </form>
        </div>
      </div>

      <img src={require("../media/img/girlsChatting.jpg")} alt="" className="m-0 p-0 w-100" />

      <div className="bg-black px-5 ps-md-5 pe-md-0 py-5">
        <h3 className="text-white col-md-5 offset-md-3" style={{fontFamily: '"Signifier", ui-serif, Georgia, Cambria, Times New Roman, Times, serif'}}>Thank you for taking the time to reach out to us. We appreciate your interest and will do our best to get back to you as soon as possible:)</h3>

        <hr className="text-white mt-5" />

      </div>
    </div>
  )
}
