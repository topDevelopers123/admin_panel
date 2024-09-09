import React, { useState } from 'react'
import "./Banner.css";
import { useBannerAuthContext } from '../../Context/index.context';


function Banner() {
    const { bannerData, deleteBanner,disable } = useBannerAuthContext()


    return (
        <div>
            <div className='container container-fluid bg-light'>
                <div className='banner-head pt-5'>
                    <div className='row'>
                        {bannerData?.map((item, index)=>(

                        <div className='col-lg-4' key={index}>
                            <div className='banner-img'>
                                <div className=' d-flex justify-content-end m-3'>
                                    <img className='img-fluid' src={item?.image?.image_url} />
                                        <button disabled={disable} ><i  onClick={()=>deleteBanner(item?._id)} className="bi bi-trash"></i></button>
                                </div>
                            </div>
                        </div>
                        )
                        )}
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;