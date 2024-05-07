import React, {useState,useEffect}from 'react'
import CarNavbar from './CarNavbar'
import CarSection from './CarSection'
import CarSection2 from './CarSection2'
import CarSection3 from './CarSection3'
import CarFooter from './CarFooter'

const CarBlog = () => {


  return (
    <div>
      <header className='Carheader'>
     <CarNavbar/>
      </header>
      <div className='container-fluid'>
        <div className='CarSection row '>
    <CarSection/>
        </div>
        <CarSection2/>
        <CarSection3/>
        <CarFooter/>
      </div>
    </div>

  )
}

export default CarBlog