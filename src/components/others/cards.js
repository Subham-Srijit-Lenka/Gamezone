import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "../guessnumber/styles.css"

export default function Cards(props) {
  return (
    <div>
        <div className="card" style={{width: "300px",margin:"15px"}}>
  <img src={props.imgURL} className="card-img-top cardImage" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.message}</p>
    <Link to={props.visit} className="btn btn-primary">play {props.title}</Link>
  </div>
</div>
    </div>
  )
}
