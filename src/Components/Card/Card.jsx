import React from 'react'

import "./Card.css"
import { Link } from 'react-router-dom'
const Card = (props) => {
  return (
    <>
        <div class="card">
  <div class="card-body px-auto">
    <p>{props.name}</p>
    <Link to={props.link} class="btn btn-outline-dark">{props.button} </Link>
   
  </div>
</div>
    </>
  )
}

export default Card