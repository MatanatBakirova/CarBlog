import React from 'react'
import './CarBlog.css'
import { SlCursor } from "react-icons/sl";


const CarSection = () => {
  return (
    <>
    <div>
         <h1 className='text-white  p-3' style={{fontSize:'50px'}}>Your Journey <br />Your Car <br />tour Way</h1>
         <div className='ps-3'>
         <span className=' span text-white ' style={{fontSize:'18px',width:'100px'}}>
          Lorem ipsum dolor sit amet consectetur. Diam volutpat <br />morbi elementum vel euismod aliquam. Amet ultrices neque  <br /> augue consectetur purus phasellus.  Ullamcorper lorem montes <br /> varius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet <br /> molestie diam semper fames diam eget.</span>
         </div>
         <div className='ps-3 pt-5 pb-5'>
        <button className="btn text-white " style={{background:'#ff5959'}} type="submit">Subscribe <SlCursor /></button>
         </div>  
    </div>

    </>

  )
}

export default CarSection