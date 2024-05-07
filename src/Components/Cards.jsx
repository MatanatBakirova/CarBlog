import React from 'react'
import './CarBlog.css'

const Cards = (props) => {
  return (
    <>
        <div class="card container "style={{width:'300px',background:'#f4f0f8'}}>
  <img src="../../public/images/car2.png" 
  className="card-img-top p-2" alt="..."  style={{width:''}}/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    {/* It's random names */}
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</>  )
}

export default Cards