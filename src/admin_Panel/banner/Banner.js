import React, { useState } from 'react'
import "./Banner.css";

function Banner() {
    const [img1, setimg1] = useState(
        "https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg"
    );
    const [img2, setimg2] = useState(
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg?ts=1606113265"
    );
    const [img3, setimg3] = useState(
        "https://kalidas365itsolutions.wordpress.com/wp-content/uploads/2014/06/sell-first.jpg"
    )
    return (
        <div>
            <div className='container container-fluid bg-light'>
                <div className='banner-head pt-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='banner-img'>
                                <div className=' d-flex justify-content-end m-3'>
                                    <img className='img-fluid' src={img1} />
                                    <div onClick={() => setimg1("")} ><i class="bi bi-trash"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='banner-img'>

                                <div className=' d-flex justify-content-end m-3'>
                                    <img className='img-fluid' src={img2} />
                                    <div onClick={() => setimg2("")} ><i class="bi bi-trash"></i></div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4'>
                            <div className='banner-img'>

                                <div className=' d-flex justify-content-end m-3'>
                                    <img className='img-fluid' src={img3} />
                                    <div onClick={() => setimg3("")} ><i class="bi bi-trash"></i></div>
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