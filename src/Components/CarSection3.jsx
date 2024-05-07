import React, { useState, useEffect } from 'react';
import bloglar from '../blogs.json';
import CarCardsblog from './CarCardsblog';
import './CarBlog.css'

const CarSection3 = () => {
  const [carblogs, setCarBlogs] = useState([]);

  useEffect(() => {
    // Verileri bloglar dosyasından alıyoruz
    setCarBlogs(bloglar);
  }, []);

  return (
    <div>
      {carblogs.map((aData) => (
        <div className=" carblogs p-2 col-12 col-md-6 col-lg-3" style={{width:"100%"}} >
          <CarCardsblog key={aData.id}
            id={aData.id}
            name={aData.name}
            about={aData.about}
            owner={aData.owner}
            image={aData.image}
          />
       </div>
      ))}
    </div>
  );
};

export default CarSection3;
