import React from 'react'
import { Welcome } from './Welcome'
import "../css/Home.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export const Home = () => {
  const title="Introducing NATE, our Nutrition Assistance Technology Expert";

  const [updates, setupdates] = useState([
    {img: "chat-plugins.png", title: "March 20 NATE outage: Here’s what happened", date: "Mar 24, 2023"},
    {img: "introducing-chatgpt-and-whisper-apis.png", title: "NATE plugins", date: "Mar 23, 2023"},
    {img: "march-20-chatgpt-outage.png", title: "Introducing NATE and Whisper APIs", date: "Mar 1, 2023"},
    {img: "planning-for-agi-and-beyond.png", title: "Planning for AGI and beyond", date: "Feb 24, 2023"}
  ]);

  return (
    <div className='container-fluid px-0 mb-0'>
        <Welcome title={title} button="Learn about NATE" dest="/about"/>
        <div className="bg-black px-5 ps-md-5 pe-md-0 py-5 mt-4">
          <div className="row fadeIn">
            <div className="col-md">
              <h4 className='text-white'>Get Personalized Nutrition Recommendations Based on Your Needs and Goals</h4>
            </div>
            <div className="col-md">
              <h4 className="text-white">Plan Your Meals with the Help of Our AI-Powered Meal Planning Tool</h4>
            </div>
            <div className="col-md">
              <h4 className="text-white">Discover How Our AI Technology Can Make Healthy Eating Simple and Enjoyable</h4>
            </div>
            <div className="col-md">
              <h4 className="text-white">Revolutionize Your Diet with AI-Powered Nutrition Guidance and Support</h4>
            </div>
          </div>

          <hr className="text-white mt-5" />

          <div className="row">
            <div className="col-12 col-md-6 position-relative me-md-3 overflow-hidden">
              <img className='d-none d-md-block position-absolute h-100 w-100' src={require("../media/img/ai.jpg")} alt="" />
            </div>
            <div className="col-12 col-md-5 mb-2 mb-md-0">
              <h1 className='text-white mb-1'>NATE</h1>
              <p className="mb-2 text-white">NATE is an innovative AI-powered meal planning and nutrition advice service that offers personalized recommendations to support users' health and wellness goals. Our cutting-edge technology analyzes user data to provide custom-tailored nutrition tips and advice that are grounded in scientific research. NATE's conversational dialogue format fosters a unique user experience, enabling follow-up questions and personalized support to make healthy eating effortless and enjoyable. Our expertly trained model delivers accurate information, challenges incorrect premises, and rejects inappropriate requests, providing users with trustworthy and practical advice. At NATE, we are dedicated to helping our users reach their optimal health and wellness through smart and practical nutrition solutions.</p>
              <Link to="/nate" className='fw-bolder text-white'>Try NATE <FontAwesomeIcon icon={faArrowUp} style={{transform: "rotate(45deg)"}} /></Link>
            </div>
            <div className="col-12 col-md-6 position-relative me-md-3 overflow-hidden">
              <img className='d-block d-md-none w-100 mb-3' src={require("../media/img/ai.jpg")} alt="" />
            </div>
          </div>

          <hr className="text-white mt-5" />
          
          <div className="row mb-5">
            <div className="col-md offset-md-1"><h1 className="mb-5 text-white" style={{fontFamily: '"Signifier", ui-serif, Georgia, Cambria, Times New Roman, Times, serif'}}>Latest Update</h1></div>
            <div className="col-md offset-md-4 offset-lg-6"><Link className="lead text-decoration-underline text-white">View all updates</Link></div>
          </div>

          <div className=" ps-md-5 row">
            {updates.map((update, index) => (
              <div className="col-12 col-md-5 col-lg-3 p-0 me-md-2 updates" key={index}>
                <div className="card p-0 bg-black">
                  <img src={require("../media/updates/"+update.img)} alt="" className="card-img-top w-100 m-0" />
                  <div className="card-body">
                    <h5 className=" card-title text-white">{update.title}</h5>
                    <p className="card-text text-white fw-bolder">{update.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>      

          <hr className="mt-5 mb-5 text-white" />

          <div className="px-2">
            <h1 className='mb-3 text-white col-md-8 offset-md-2'>Revolutionize Your Nutrition with Free AI-Powered Recommendations</h1>
            <p className="text-white col-md-8 offset-md-2 lead">
              Our website offers cutting-edge nutrition recommendations and custom meal plans powered by state-of-the-art artificial intelligence technology, ensuring that you receive personalized advice that's tailored to your unique needs and goals. Plus, with our completely free service, you can access expert nutrition advice and tools without spending a dime. Say goodbye to expensive meal plans and generic nutrition advice – with our AI-powered platform, you'll receive personalized recommendations that are based on your specific body goals and nutritional needs. Start your journey towards optimal health and wellness today with our innovative, free service.
            </p>
          </div>

          </div>

          <div className="container-fluid mx-0 px-0 mb-0">
            <img className='w-100 p-0 m-0' src={require("../media/img/guyonlaptop.jpg")} alt="" />
          </div>

          <div className="bg-black px-5 ps-md-5 pe-md-0 py-5 mt-0">

          <hr className="mt-3 mb-3 text-white px-3" />

                <div className="px-2 col-md-8 offset-md-2" id="improve">
                  <h1 className='mb-3 text-white'>
                    Maximize Your Nutrition with Advanced AI Technology: Our Commitment to Personalized Results
                  </h1>
                  <p className="text-white fw-normal lead">
                    At our website, we're dedicated to providing the best possible nutrition recommendations and meal plans powered by state-of-the-art AI technology. We understand that every individual has unique nutritional needs, which is why we're constantly working to improve our AI algorithms to provide more accurate, personalized recommendations. Our team of experts stays up-to-date with the latest research in nutrition science, enabling us to provide cutting-edge recommendations based on the most recent evidence. Whether you're looking to lose weight, gain muscle, or simply maintain a healthy lifestyle, you can trust our AI-powered platform to provide you with the most effective nutrition advice available.
                  </p>
                </div>

                <hr className="mt-3 mb-3 text-white px-3" />

          </div>
    </div>
  )
}
