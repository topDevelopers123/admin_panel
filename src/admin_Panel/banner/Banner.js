import React, { useState } from 'react'
import "./Banner.css";

function Banner() {
    const [img,setimg]=useState(
        "https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg"
    )
    return (
        <div>
                
            <div className='container-fluid bg-light'>
                <img className='img-fluid' src={img} />
                <div className=' d-flex justify-content-end m-3'>
                    <button onClick={()=>setimg("")} className='rounded banner-icon banner-btn '><i class="bi bi-trash"></i>Delete Banner</button>
                </div>  
            </div>
        </div>
    )
}

export default Banner