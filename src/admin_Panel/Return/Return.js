import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnModal from './ReturnModal'
import { useOrderAuthContext } from '../../Context/index.context'

function Return() {
    const { returnData } = useOrderAuthContext();
    console.log(returnData)

    const [toggle, setToggle] = useState({
        boolean_val: false,
    })


    return (
        <div>
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Mayavi Fashion</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="javascript:;"><i className="bx bx-home-alt"></i></Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Returns</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">

                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Product Title</th>
                                            <th>Size </th>
                                            <th>Color </th>
                                            <th>Email ID  </th>
                                            <th>User Address</th>
                                            <th>UPI Number</th>
                                            <th>Reason for return</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {returnData?.map((item) => (
                                            <tr>
                                                <td>
                                                    <div className="ms-2">

                                                        {item?.product_id?.title}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.product_detail_id?.Size}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.product_detail_id?.color}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        example123@gmail.com
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        <span>
                                                            {item?.address_id?.house_no}
                                                            {item?.address_id?.area}
                                                            {item?.address_id?.city}
                                                            {item?.address_id?.state}
                                                            {item?.address_id?.country}
                                                            {item?.address_id?.pincode}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.upi_account_no}
                                                    </div>
                                                </td>
                                                <td>

                                                    <div onClick={() => setToggle({ ...toggle, boolean_val: true })} className="badge ms-2 rounded-pill text-info bg-light-info p-2 cursor-pointer text-uppercase px-3">
                                                        {item?.reason}
                                                    </div>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {toggle?.boolean_val ? <ReturnModal setToggle={setToggle} toggle={{ toggle }} /> : null}
                </div>
            </div>
        </div>
    )
}

export default Return;