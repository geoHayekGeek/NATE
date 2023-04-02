import React from 'react'
import "../css/Welcome.css"
import { Link } from 'react-router-dom'

export const Welcome = (props) => {

  return (
    <div className={'container-fluid pt-5 px-5 ' + props.classList} id='wrap'>
        <div className="ms-md-5 slideIn">
        <h1 className='fw-bolder mt-5 mt-md-1 text-white px-md-5' id='title'>{props.title}</h1>
        {props.button!=null &&<Link to={props.dest}><button className='ms-md-5 btn text-white fw-bolder border-1 border-white mt-3'>{props.button}</button></Link>}
        </div>
    </div>
  )
}
