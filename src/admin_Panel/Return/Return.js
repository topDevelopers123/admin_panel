import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReturnModal from './ReturnModal'

function Return() {
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
                                            <th>User ID  </th>
                                            <th>User Address</th>
                                            <th>UPI Number</th>
                                            <th>Reason for return</th>
                                        </tr>
                                    </thead>
                                    <tbody>                                      
                                            <tr>
                                                <td>
                                                    <div className="ms-2">
                                                    
                                                    5565
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        7675
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                       6778
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                       58768
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                       58768
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                       9875845625
                                                    </div>
                                                </td>
                                                <td>

                                                <div onClick={() => setToggle({ ...toggle, boolean_val: true})} className="badge ms-2 rounded-pill text-info bg-light-info p-2 cursor-pointer text-uppercase px-3">
                                                     Reason
                                                    </div>
                                                </td>
                                            </tr>
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