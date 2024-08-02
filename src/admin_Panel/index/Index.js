import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOrderAuthContext, useUserAuthContext } from '../../Context/index.context'
import "./Index.css";
import { Chart as ChartJS, defaults } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"

defaults.maintainAspectRatio = false
defaults.responsive = true

const Index = () => {
    const [totalSelling, setTotalSelling] = useState(0)
    const { orders, monthlyData } = useOrderAuthContext()
    const { users } = useUserAuthContext()
    let totalrevenue = 0

    orders?.map((i,) => (
        i?.status === "delivered" ? totalrevenue += Number(i?.ProductDetails[0]?.sellingPrice) : ""
    ), [])


    return (
        <div>
            <div className="page-wrapper mt-5">
                <div className="page-content p-0">
                    <div className="row row-cols-1 row-cols-lg-12 px-2">
                        <div className="col-4">
                            <div className="card radius-10 overflow-hidden bg-gradient-cosmic">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-white">Total Orders</p>
                                            <h5 className="mb-0 text-white">{orders?.length}</h5>
                                        </div>
                                        <div className="ms-auto text-white"><i className='bx bx-cart font-30'></i>
                                        </div>
                                    </div>
                                    <div className="progress bg-white-2 radius-10 mt-4" style={{ height: "4.5px;" }}>
                                        <div className="progress-bar bg-white" role="progressbar" style={{ width: "46%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card radius-10 overflow-hidden bg-gradient-burning">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-white">Total Orders Income (Delivered)</p>
                                            <h5 className="mb-0 text-white">₹ {totalrevenue}</h5>
                                        </div>
                                        <div className="ms-auto text-white"><i className='bx bx-wallet font-30'></i>
                                        </div>
                                    </div>
                                    <div className="progress bg-white-2 radius-10 mt-4" style={{ height: "4.5px;" }}>
                                        <div className="progress-bar bg-white" role="progressbar" style={{ width: "72%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card radius-10 overflow-hidden bg-gradient-Ohhappiness">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-white">Total Users</p>
                                            <h5 className="mb-0 text-white">{users?.length}</h5>
                                        </div>
                                        <div className="ms-auto text-white"><i className='bx bx-bulb font-30'></i>
                                        </div>
                                    </div>
                                    <div className="progress bg-white-2 radius-10 mt-4" style={{ height: "4.5px;" }}>
                                        <div className="progress-bar bg-white" role="progressbar" style={{ width: "68%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card radius-10 mt-5">
                        <div className="card-header border-bottom-0 bg-transparent ">
                            <div className="d-lg-flex align-items-center">
                                <div>
                                    <h6 className="font-weight-bold mb-2 mb-lg-0">Monthly Revenue</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className='bg-slate-100 h-[20rem] w-full  rounded-xl px-3 py-2 ' >
                                <Line
                                    data={{
                                        labels: monthlyData.data?.label?.map((data) => data),
                                        datasets: [
                                            {
                                                label: "Revenue",
                                                data: monthlyData.data?.revenue.map((item) => item),
                                                backgroundColor: "#70db70",
                                                borderColor: "#70db70"
                                            },
                                        ]
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 col-lg-12 d-flex">
                            <div className="card radius-10 w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h6 className="font-weight-bold mb-0">Order Status</h6>
                                        </div>
                                        <div className="dropdown ms-auto">
                                            <div className="cursor-pointer text-dark font-24 dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded"></i>
                                            </div>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <Link className="dropdown-item" to="javaScript:;">Action</Link>
                                                <Link className="dropdown-item" to="javaScript:;">Another action</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link className="dropdown-item" to="javaScript:;">Something else here</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[100%] h-[20rem] bg-slate-100 py-3 px-3 rounded-xl' >

                                        <Bar
                                            data={{
                                                labels: ["Orders"],
                                                datasets: [
                                                    {
                                                        label: "Booked",
                                                        data: [monthlyData?.booking],
                                                        borderRadius: 5
                                                    },
                                                    {
                                                        label: "Delivered",
                                                        data: [monthlyData?.delivered],
                                                        borderRadius: 5
                                                    },
                                                    {
                                                        label: "Cancelled",
                                                        data: [monthlyData?.cancelled],
                                                        borderRadius: 5
                                                    },

                                                ]
                                            }}
                                        />

                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-center px-3 pt-3">
                                        <div>
                                            <h5 className="mb-1 font-weight-bold">{monthlyData?.booking}</h5>
                                            <p className="mb-0 text-secondary">Booked</p>
                                        </div>
                                        <div className="mb-1">
                                            <h5 className="mb-1 font-weight-bold">{monthlyData?.delivered}</h5>
                                            <p className="mb-0 text-secondary">Delivered</p>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 font-weight-bold">{monthlyData?.cancelled}</h5>
                                            <p className="mb-0 text-secondary">Cancelled</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index
