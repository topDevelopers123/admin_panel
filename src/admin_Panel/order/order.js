import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { useOrderAuthContext } from '../../Context/index.context'

function Order() {
    const { orders, setPage, disable } = useOrderAuthContext()
    useEffect(() => {
        const handleScroll = () => {
            const topScroll = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const totalHeight = window.innerHeight;

            if (topScroll + totalHeight + 1 >= scrollHeight) {
                setPage((prevPage) => prevPage + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                                    <li className="breadcrumb-item active" aria-current="page">Orders</li>
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
                                            <th>Product Image</th>
                                            <th>Title </th>
                                            <th>Category </th>
                                            <th>Username </th>
                                            <th>Address </th>
                                            <th>Order placed at </th>
                                            <th>Payment Type</th>
                                            <th>Payment Status</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders?.map((item, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <div className="ms-2">
                                                        <img src={item?.ProductDetails
                                                        [0]?.image[0]?.image_url} alt="img" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.Product[0]?.title}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.Product[0]?.category[0]?.category_name}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.UserAddress
                                                        [0]?.fullname}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        <span>{item?.UserAddress
                                                        [0]?.house_no} {item?.UserAddress
                                                        [0]?.area} {item?.UserAddress
                                                        [0]?.city} {item?.UserAddress
                                                        [0]?.state} {item?.UserAddress
                                                        [0]?.country} {item?.UserAddress
                                                        [0]?.pincode}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-2">
                                                        {item?.createdAt?.split("T")[0].replaceAll("-", "/")}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i className='bx bxs-circle me-1'></i>{item?.payment_type}</div>
                                                </td>
                                                <td>
                                                    <div className={`badge rounded-pill  ${item?.payment_status === "pending" ? " bg-orange-500" : "bg-green-700"} p-2 text-uppercase px-3`}><i className='bx bxs-circle me-1'></i>{item?.payment_status}</div>
                                                </td>
                                                <td>
                                                    <div className={`badge rounded-pill ${item?.status === "pending" ? " bg-orange-500" : ""} ${item?.status === "delivered" ? " bg-green-700" : ""} ${item?.status === "cancelled" ? " bg-red-500" : ""} ${item?.status === "returned" ? " bg-sky-600" : ""} p-2 text-uppercase px-3`}><i className='bx bxs-circle me-1'></i>{item?.status}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {disable ? <Loader className="w-100 flex justify-center mt-2" /> : ""}
                </div>
            </div>
        </div>
    )
}
export default Order