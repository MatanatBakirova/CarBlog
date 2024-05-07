import React, {useState,useEffect}from 'react'
import './CarBlog.css'
import Cards from './Cards'
import axios from 'axios'

const CarSection2 = () => {
  const [blogs,setBlogs]=useState([])
useEffect( ()=>{
  const linkApi ='https://66322c03c51e14d695639511.mockapi.io/api/cars/Cars'
axios.get(linkApi)
.then(news=>setBlogs(news.data))
.catch(err=> console.log('serverde xeta var'+err))
},[])
  return (
   <>
 <div className="container introduction pt-5">
  <div className="row">
    <div className="col-md-6">
    <h1>Latest</h1>
      <div className="card border-0">
        <img src="../public/images/car2.png" className="card-img-top" alt="..." />
        <div className="card-body">
        <span className='d-flex gap-2'>By<span style={{color:'#ff5959'}}>John Deo </span>  l Aug 23, 2023</span>
          <h5 class="card-title pt-2"style={{fontWeight:'700',opacity:'0.9'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h5>
          <p class="card-text" style={{opacity:'0.8'}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            Duis aute irure dolor in reprehenderit in voluptate v
            Duis aute irure dolor in reprehenderit in volusse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button className="btn ps-5 pe-5 text-white" type="submit" style={{background:'#ff5959'}}>Subscribe</button>
        </div>
      </div>
 
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className='d-flex align-items-center'>
        <h1 className='ps-3'>Trending Blogs</h1>
        <a href=""className='pb-2 ms-auto fs-5 text-dark fw-medium' style={{textDecoration:'none'}}>See All</a>
        </div>
        <div className=" row trending col-md-12 ps-5">
            <div className=' p-4'>
            <span className='d-flex gap-2'>By<span style={{color:'#ff5959'}}>John Deo </span>  l Aug 23, 2023</span>
          <h5 className='pt-2' style={{width:'300px',fontWeight:'700',color:'#232536'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>        
            <div className=' p-4' style={{background:'#ff5959'}}>
            <span className='d-flex gap-2 text-white'>By<span style={{fontWeight:'bold'}}>John Deo </span>  l Aug 23, 2023</span>
          <h5 className='pt-2 text-white' style={{width:'300px',fontWeight:'700',color:'#232536'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>        
            <div className=' p-4'>
            <span className='d-flex gap-2'>By<span style={{color:'#ff5959'}}>John Deo </span>  l Aug 23, 2023</span>
          <h5 className='pt-2' style={{width:'300px',fontWeight:'700',color:'#232536'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>        
            <div className=' p-4'>
            <span className='d-flex gap-2'>By<span style={{color:'#ff5959'}}>John Deo </span>  l Aug 23, 2023</span>
          <h5 className='pt-2' style={{width:'300px',fontWeight:'700',color:'#232536'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
            </div>            
        </div>
      </div>
    </div>
  </div>
</div>
     <div className="container">
        <div className="row">
          <div className=' container d-flex'>
          <span className=' mb-4 fs-2 fw-bold'>New Technology</span>
          <a href=""className='pb-2 ms-auto fs-5 pe-5 text-dark fw-medium' style={{textDecoration:'none'}}>See All</a>
          </div>

        {
          blogs && blogs.map((item)=>(

          <div className="p-2 col-12 col-md-6 col-lg-3">
          <Cards id={item.id}
                        name={item.name}
                      productionCountry={item.productionCountry}
                        img={item.image}
            />
            </div>
          ))}
        </div>
      </div>




    </>
  )
}

export default CarSection2