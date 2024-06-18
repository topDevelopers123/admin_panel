import React, { useState } from 'react'
import "./Banner.css";

function Banner() {
    const [img, setimg] = useState(
        "https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg"
    )
    return (
        <div>
            <div className='container container-fluid bg-light'>
               <div className='banner-head pt-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='banner-img'>
                                <div className=' d-flex justify-content-end m-3'>
                                    <img className='img-fluid' src={img} />
                                    <div onClick={() => setimg("")} ><i class="bi bi-trash"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='banner-img'>

                                <div className=' d-flex justify-content-end m-3'>
                                    <img className='img-fluid' src={img} />
                                    <div onClick={() => setimg("")} ><i class="bi bi-trash"></i></div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4'>
                            <div className='banner-img'>

                                <div className=' d-flex justify-content-end m-3'>
                                    <img className='img-fluid' src={img} />
                                    <div onClick={() => setimg("")} ><i class="bi bi-trash"></i></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;