import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnModal from './ReturnModal'
import { useOrderAuthContext } from '../../Context/index.context'
import { date } from 'yup';

function Return() {
    const { returnData } = useOrderAuthContext();
    const [toggle, setToggle] = useState({
        boolean_val: false,
        data: []
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
                                    <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link>
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
                                            <th>Status  </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {returnData?.map((item, i) => (

                                            <tr key={i}>
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
                                                            {item?.address_id?.house_no} {item?.address_id?.area} {item?.address_id?.city} {item?.address_id?.state} {item?.address_id?.country} {item?.address_id?.pincode}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.upi_account_no}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div onClick={() => setToggle({ ...toggle, boolean_val: true, data: item })} className="badge ms-2 rounded-pill font-bold text-black bg-cyan-400 p-2 cursor-pointer text-uppercase px-3">
                                                        {item?.reason}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={`bg-slate-700 p-1 rounded-full px-3 py-1 text-center font-bold ${item?.approved === undefined ? "  text-orange-300" : item?.approved ? "text-green-500" : "text-red-400"} `}>
                                                        {item?.approved === undefined ? "pending" : item?.approved ? "approved" : "rejected"}
                                                    </div>
                                                    {toggle?.boolean_val ? <ReturnModal setToggle={setToggle} toggle={{ toggle }} /> : null}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Return;