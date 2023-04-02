import React from 'react'
import { Welcome } from './Welcome'
import "../css/About.css"
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className='container-fluid px-0 pt-5'>
      <Welcome title="ABOUT US" classList="pb-5 mb-5 text-decoration-underline text-white" />
      <div className="bg-black px-5 ps-md-5 pe-md-0 py-5 mt-4">
          <div className="row fadeIn" id='about'>
            <div className="col-md">
              <h1 className="mb-5 text-white">Who We Are:</h1>
              <p className="lead text-white">As a team, we're more than just developers - we're passionate individuals who believe in using technology to make the world a better place. We see development not just as a career, but as a way to serve people and make a positive impact on their lives. That's why we've dedicated our skills and expertise to creating an AI-powered nutrition platform that's accessible to everyone, regardless of their income or location. By using our development skills to provide free, personalized nutrition recommendations and meal plans, we're empowering individuals to take control of their health and wellbeing. We believe that technology has the power to transform people's lives for the better, and we're committed to making a difference through our work at our website.</p>
            </div>
            <div className="col-md d-flex align-items-center">
              <img src={require("../media/img/team.jpg")} alt="" className="w-100 h-100 object-fit-cover pe-md-4" />
            </div>
          </div>

          <hr className="pt-5 text-white" />

        <div className="col-md-8 offset-md-2" id="mission">
          <h1 className="mb-5 text-white">Our Mission:</h1>
          <p className="lead text-white">At our website, we're on a mission to make personalized nutrition recommendations accessible to everyone, regardless of their financial situation. We understand that many people can't afford to hire a nutritionist, which is why we're committed to providing free, evidence-based nutrition advice and meal plans that are tailored to each individual's unique needs and goals. Using cutting-edge AI technology, we've developed algorithms that are even more accurate than human nutritionists, ensuring that our users receive the most personalized and effective nutrition recommendations possible. Whether you're looking to lose weight, build muscle, or simply eat healthier, our AI-powered platform is here to provide you with the expert guidance you need to achieve your goals. Our mission is to empower individuals to take control of their health and wellbeing, and we're proud to be using our technology and expertise to make a positive impact on people's lives.</p>
        </div>

        <hr className="pt-5 text-white" />

        <div className="row" id="chooseus">
          <div className="col-md">
            <h1 className="mb-5 text-white">Why Choose Us:</h1>
            <p className="lead text-white">When it comes to personalized nutrition recommendations, accuracy is key. That's why our website is powered by cutting-edge AI technology that's more accurate than traditional human nutritionists. We've invested significant time and resources into developing algorithms that take into account your unique needs and goals, ensuring that you receive the most personalized and effective nutrition advice possible. Best of all, our platform is completely free and accessible to everyone, so you don't have to worry about breaking the bank to get the nutrition guidance you need. Whether you're looking to lose weight, build muscle, or simply eat healthier, our platform is here to provide you with the expert guidance you need to achieve your goals. Choose us for accurate, AI-powered nutrition advice that's free and accessible to all.</p>
          </div>
          <div className="col-md d-flex align-items-center py-2 py-md-5">
            <img src={require("../media/img/appledonut.jpg")} alt="" className="w-100 h-100 object-fit-cover pe-md-4" />
          </div>
        </div>

        <hr className="pt-5 text-white" />

        <div className='col-md-8 offset-md-2' id="nate">
          <h1 className="mb-5 text-white">About NATE</h1>
          <p className="text-white lead">At our website, we're proud to feature Nate, our AI-powered nutrition assistant. Nate is here to provide you with free, personalized nutrition advice based on your unique needs and goals. With cutting-edge AI technology, Nate is able to analyze your nutritional data in real-time, providing you with up-to-date and evidence-based recommendations to help you achieve your health and wellness goals. Whether you're looking to lose weight, build muscle, or simply eat healthier, Nate is here to provide you with the expert guidance you need. And best of all, Nate's services are completely free and accessible to everyone, so you can get the nutrition advice you need without worrying about breaking the bank. Trust Nate and our AI-powered platform for personalized, evidence-based nutrition guidance that's free and accessible to all.</p>
          <Link to="/nate"><button className="btn text-white border-1 border-white" style={{backgroundColor:"rgba(0, 0, 0, 0)"}}>Try NATE now</button></Link>
        </div>

      </div>
    </div>
  )
}
