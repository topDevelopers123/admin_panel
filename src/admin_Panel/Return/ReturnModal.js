import React, { useState } from 'react'
import { useOrderAuthContext } from '../../Context/index.context';

function ReturnModal({ toggle, setToggle }) {
    const { updateReturnProduct, returnData } = useOrderAuthContext();
    const [approved, setApproved] = useState(null);
    
    function handleUpdate(data) {
        updateReturnProduct(toggle?.toggle?.data?._id, data)
        setToggle({ boolean_value: false })
    }
    return (
        <>
            <div className=" bg-gray-100 flex items-center justify-center h-screen">
                <div x-data="{ showPrivacyPolicy: true }">
                    <div className="fixed  inset-0  flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        <div className="relative py-5 bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4 h-[550px] overflow-x-hidden overflow-y-scroll p-3">
                            <div className="px-6 flex justify-between  align-items-center ">
                                <h3 className=" leading-6 font-medium text-gray-900 ">Return </h3>
                                <button onClick={() => setToggle({ ...toggle, boolean_value: false })}><i className="bi bi-x-circle m-0 p-0 " style={{ fontSize: "30px" }}></i></button>
                            </div>
                            <div className='row '>
                                <div className='product_return'>
                                    <div className='reason w-100 p-4 bg-light-info text-lg shadow-sm rounded my-3'>
                                        {toggle?.toggle?.data.reason}
                                    </div>
                                    <div className='product_img w-100 p-4 sm:flex block gap-4 bg-light-info shadow-sm rounded my-3'>
                                        {toggle?.toggle?.data?.image?.map((item,i) => <img key={i} className='w-40 max-h-36' src={item?.image_url}></img>)}

                                    </div>
                                    <div className='description w-100 p-4 bg-light-info text-lg  shadow-sm rounded my-3'>
                                        {toggle?.toggle?.data?.description}
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center mx-2 '>
                                    <button className='btn btn-success' onClick={() => handleUpdate(true)}>Approve</button>
                                    <button className='btn btn-danger' onClick={() => handleUpdate(false)}>Reject</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReturnModal;