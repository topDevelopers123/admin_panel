import React from 'react'
import { Link } from 'react-router-dom'

function Order() {
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
                                            <th>Product Image</th>
                                            <th>Title </th>
                                            <th>Category </th>
                                            <th>Username </th>
                                            <th>Address </th>
                                            <th>Order placed at </th>
                                            <th>Payment Status</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="ms-2">
                                                    <img src="assets/images/category/cat_img/men.jpg" alt="img" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Polo Shirt
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Men
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                   Nikhil
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    9571 Gottlieb Crest, South Darinland, WA 40656
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    16th May 2024
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>Pending</div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>FulFilled</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ms-2">
                                                    <img src="assets/images/category/cat_img/men.jpg" alt="img" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Polo Shirt
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Men
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                   Nikhil
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    9571 Gottlieb Crest, South Darinland, WA 40656
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    16th May 2024
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>Pending</div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>FulFilled</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ms-2">
                                                    <img src="assets/images/category/cat_img/men.jpg" alt="img" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Polo Shirt
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Men
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                   Nikhil
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    9571 Gottlieb Crest, South Darinland, WA 40656
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    16th May 2024
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>Pending</div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>FulFilled</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="ms-2">
                                                    <img src="assets/images/category/cat_img/men.jpg" alt="img" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Polo Shirt
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    Men
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                   Nikhil
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    9571 Gottlieb Crest, South Darinland, WA 40656
                                                </div>
                                            </td>
                                            <td>
                                                <div className="ms-2">
                                                    16th May 2024
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>Pending</div>
                                            </td>
                                            <td>
                                                <div className="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>FulFilled</div>
                                            </td>
                                        </tr>
                                       
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

export default Order