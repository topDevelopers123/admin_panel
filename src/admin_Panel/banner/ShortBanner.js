import React, { useState } from 'react'
import "./Banner.css";
import { useBannerAuthContext } from '../../Context/index.context';


function ShortBanner() {

    const { ShortbannerData, deleteShortBanner, disable } = useBannerAuthContext()


    return (
        <div>
            <div className='container container-fluid bg-light'>
                <div className='banner-head '>
                    <div className='row'>
                        {ShortbannerData?.map((item, index) => (

                            <div className='col-lg-4' key={index}>
                                <div className='banner-img'>
                                    <div className=' d-flex justify-content-end m-3'>
                                        <img className='img-fluid' src={item.image.image_url} />
                                        <button disabled={disable} ><i onClick={() => deleteShortBanner(item._id)} className="bi bi-trash"></i></button>
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

export default ShortBanner;