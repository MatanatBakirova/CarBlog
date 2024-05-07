import React from 'react';
import './CarBlog.css';

const CarCardsblog = (props) => {
  
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className='left mb-3'>
            <img src={props.image} style={{width:'100%'}} alt="" />
          </div>
        </div>
        <div className='col-md-6 col-lg-6 ps-md-3 right'>
          <h1 className=''>{props.name}</h1>
          <span>{props.owner}</span>
          <span> <br />Jan 10, 2024 ∙ 3 min read</span>
          <p className='pt-2'>{props.about}</p>
          <div>
            <button className="btn text-white" style={{background:'#ff5959'}} type="submit">Read More</button>
          </div>
        </div>

        </div>
       
      </div>
  );
}

export default CarCardsblog;
