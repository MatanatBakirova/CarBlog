import React from 'react'
import { SlCursor } from "react-icons/sl";
import { CiFacebook,CiTwitter,CiInstagram,CiLinkedin  } from "react-icons/ci";
import { IconContext } from 'react-icons';

const CarFooter = () => {
  return (
    <>
  

  
    <div className='' style={{height:'392px', background:'#232536'}}> 
    <nav class=" navbar navbar-expand-lg pb-4 pt-3">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Privacy Policy</a>
        </li>
      </ul>
   
    </div>
  </div>
</nav>     
        <div className='container'>
        <div className='d-flex align-items-center justify-content-center' style={{background:'#2a2b39',height:'235px',}}>
            <div className='d-flex'>
                <h1 className='text-white ps-5 fw-bolder'>Subscribe to our news letter to get latest updates and news</h1>
                <form action="" className='d-flex pe-5 gap-2 pt-3 '>
                <input className='rounded-3 ps-3' type="email"style={{height:'55px',width:'300px'}} placeholder='example@email.com'/>
                <button className='rounded-3 text-white fw-bolder' style={{height:'55px',width:'186px',background:'#ff5959'}} >Subscribe <SlCursor /></button>

                </form>
            </div>
         </div>


        </div>
        <div className='container d-flex'>
            <div className='opacity-50'>
            <span className='text-white mt-2 d-block'>Finstreet 118 2561 abctown</span>
            <span className='text-white d-block'>example@femail.com  001 21345 442</span>
            </div>
            <div className=' opacity-50 mt-3 me-3 ms-auto fs-3 d-flex gap-2'>
            <IconContext.Provider value={{ color: "white" }}>
                <a href=""><CiFacebook /></a>
                <a href=""><CiTwitter /></a>
                <a href=""><CiInstagram /></a>
                <a href=""><CiLinkedin /></a>
    </IconContext.Provider>
         
            </div>
            </div>
        
        </div>
    
    </>

  )
}

export default CarFooter