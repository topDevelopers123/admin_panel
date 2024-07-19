import React from 'react'
import { Link } from 'react-router-dom'
import { useOrderAuthContext, useUserAuthContext } from '../../Context/index.context'

function Users() {
    const { users } = useUserAuthContext()



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
                                    <li className="breadcrumb-item active" aria-current="page">Orders</li>
                                </ol>
                            </nav>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="d-lg-flex align-items-center mb-4 gap-3">
                                <div className="position-relative">
                                    <input type="text" className="form-control ps-5 radius-30" placeholder="Search Order" /> <span className="position-absolute top-50 product-show translate-middle-y"><i className="bx bx-search"></i></span>
                                </div>

                            </div>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>E-mail </th>
                                            <th>Mobile Number </th>
                                            <th>Create Account </th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.map((item) => (
                                            <tr>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.name}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.email}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.phone}
                                                    </div>
                                                </td>
                                                <td>

                                                    <div className="ms-2">
                                                        {item?.createdAt?.split("T")[0].replaceAll("-", "/")}
                                                    </div>
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

export default Users