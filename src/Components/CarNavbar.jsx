import React from 'react'
import './CarBlog.css'

const CarNavbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg" style={{background:'#232536'}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex ps-5 pe-4" role="search">
        <button className="btn  bg-white text-dark" type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default CarNavbar