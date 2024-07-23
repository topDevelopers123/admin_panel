import React from 'react'

function ReturnModal({ toggle, setToggle }) {
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
                                            Other
                                        </div>
                                    <div className='product_img w-100 p-4 sm:flex block gap-4 bg-light-info shadow-sm rounded my-3'>
                                            <img width={150} height={150} className='rounded m-2' src='https://media.very.co.uk/i/sd/ctmt-210-womens-dept-1?%24poi%24=&aspect=1%3A1&w=900&qlt=default&fmt=jpg&fmt.jpeg.interlaced=true' alt='img' />
                                            <img  width={150} height={150} className='rounded m-2'src='https://media.very.co.uk/i/sd/ctmt-210-womens-dept-1?%24poi%24=&aspect=1%3A1&w=900&qlt=default&fmt=jpg&fmt.jpeg.interlaced=true' alt='img' />
                                            <img width={150} height={150} className='rounded m-2' src='https://media.very.co.uk/i/sd/ctmt-210-womens-dept-1?%24poi%24=&aspect=1%3A1&w=900&qlt=default&fmt=jpg&fmt.jpeg.interlaced=true' alt='img' />
                                        </div>
                                    <div className='description w-100 p-4 bg-light-info text-lg  shadow-sm rounded my-3'>
                                        unmet expectations, damaged or defective products, and incorrect fit.
                                        </div>
                                    </div>
                                    <div className='flex gap-3 items-center mx-2'>
                                        <button className='btn btn-success'>Approve</button>
                                    <button className='btn btn-danger'>Reject</button>
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