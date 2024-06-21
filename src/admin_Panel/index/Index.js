import React from 'react'
import { Link } from 'react-router-dom'
import "./Index.css";
import { Chart as ChartJS, defaults } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"

defaults.maintainAspectRatio = false
defaults.responsive = true

function index() {
    const revenue = [
        {
            "label": "Jan",
            "revenue": 64854,
            "cost": 32652
        },
        {
            "label": "Feb",
            "revenue": 54628,
            "cost": 42393
        },
        {
            "label": "Mar",
            "revenue": 117238,
            "cost": 50262
        },
        {
            "label": "Apr",
            "revenue": 82830,
            "cost": 64731
        },
        {
            "label": "May",
            "revenue": 91208,
            "cost": 41893
        },
        {
            "label": "Jun",
            "revenue": 103609,
            "cost": 83809
        },
        {
            "label": "Jul",
            "revenue": 90974,
            "cost": 44772
        },
        {
            "label": "Aug",
            "revenue": 82919,
            "cost": 37590
        },
        {
            "label": "Sep",
            "revenue": 62407,
            "cost": 43349
        },
        {
            "label": "Oct",
            "revenue": 82528,
            "cost": 45324
        },
        {
            "label": "Nov",
            "revenue": 56979,
            "cost": 47978
        },
        {
            "label": "Dec",
            "revenue": 87436,
            "cost": 39175
        }
    ]
    
  return (
      <div>
        
          <div className="page-wrapper mt-5">
              <div className="page-content p-0">
                
                  <div className="row row-cols-1 row-cols-lg-12">
                      <div className="col-4">
                        
                          <div className="card radius-10 overflow-hidden bg-gradient-cosmic">
                              <div className="card-body">
                                
                                  <div className="d-flex align-items-center">
                                      <div>
                                          <p className="mb-0 text-white">Total Orders</p>
                                          <h5 className="mb-0 text-white">867</h5>
                                      </div>
                                      <div className="ms-auto text-white"><i className='bx bx-cart font-30'></i>
                                      </div>
                                  </div>
                                  <div className="progress bg-white-2 radius-10 mt-4" style={{height:"4.5px;"}}>
                                      <div className="progress-bar bg-white" role="progressbar" style={{width: "46%"}}></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-4">
                          <div className="card radius-10 overflow-hidden bg-gradient-burning">
                              <div className="card-body">
                                  <div className="d-flex align-items-center">
                                      <div>
                                          <p className="mb-0 text-white">Total Income</p>
                                             <h5 className="mb-0 text-white">₹52,945</h5>
                                      </div>
                                      <div className="ms-auto text-white"><i className='bx bx-wallet font-30'></i>
                                      </div>
                                  </div>
                                  <div className="progress bg-white-2 radius-10 mt-4" style={{height:"4.5px;"}}>
                                      <div className="progress-bar bg-white" role="progressbar" style={{width: "72%"}}></div>
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
                                          <h5 className="mb-0 text-white">24.5K</h5>
                                      </div>
                                      <div className="ms-auto text-white"><i className='bx bx-bulb font-30'></i>
                                      </div>
                                  </div>
                                  <div className="progress bg-white-2 radius-10 mt-4" style={{height:"4.5px;"}}>
                                      <div className="progress-bar bg-white" role="progressbar" style={{width: "68%"}}></div>
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
                                      labels: revenue.map((data) => data.label),
                                      datasets: [
                                          {
                                              label: "Revenue",
                                              data: revenue.map((item) => item.revenue),
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
                      <div className="col-12 col-lg-8">
                          <div className="card radius-10">
                              <div className="card-header border-bottom-0 bg-transparent">
                                  <div className="d-lg-flex align-items-center">
                                      <div>
                                          <h6 className="font-weight-bold mb-2 mb-lg-0">Historical Analytics</h6>
                                      </div>
                                      <div className="font-22 ms-auto"><i className="bx bx-dots-horizontal-rounded"></i>
                                      </div>
                                  </div>
                              </div>
                              <div className="card-body">
                                  <div className="d-flex align-items-center ms-auto font-13 gap-2">
                                      <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle text-danger me-1"></i>Visitors</span>
                                    
                                      <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle text-info me-1"></i>Page Views</span>
                                  </div>
                                  <div className='w-[100%] h-[20rem] bg-slate-100 py-3 px-3 rounded-xl' >
                                      <Bar
                                          data={{
                                              labels: ["A", "B", "C"],
                                              datasets: [
                                                  {
                                                      label: "Visitors",
                                                      data: [200, 300, 400],
                                                      borderRadius: 5
                                                  },
                                                  {
                                                      label: "Page Views",
                                                      data: [100, 98, 200],
                                                      borderRadius: 5
                                                  },
                                              ]
                                          }}
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-lg-4">
                          <div className="card radius-10 bg-dark">
                              <div className="card-body ">
                                  <div className='d-flex flex-row w-100 justify-content-around'>
                                  <h6 className="text-white">ACTIVE VISITORS</h6>
                                  <h4 className="font-weight-bold text-white">3467</h4>
                                  </div>
                                  <p className="font-13 text-white text-center">Page View Per Day</p>
                                  <div className='w-[100%] h-[19rem] bg-slate-100 py-3 px-3 rounded-xl' >
                                      <Bar
                                          data={{
                                              labels: ["A", "B", "C"],
                                              datasets: [
                                                  {
                                                      label: "ACTIVE VISITORS",
                                                      data: [200, 300, 400],
                                                      borderRadius: 5
                                                  },
                                                 
                                              ]
                                          }}
                                      />
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  <div className="row mt-5">
                      <div className="col-12 col-lg-6 d-flex">
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
                                                  labels: ["A", "B", "C"],
                                                  datasets: [
                                                      {
                                                          label: "Booked",
                                                          data: [200, 100, 400],
                                                          borderRadius: 5
                                                      },
                                                      {
                                                          label: "In Progress",
                                                          data: [100, 50, 250],
                                                          borderRadius: 5
                                                      },
                                                      {
                                                          label: "Cancelled",
                                                          data: [50, 350, 200],
                                                          borderRadius: 5
                                                      },

                                                  ]
                                              }}
                                          />
                                      
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between text-center">
                                      <div>
                                          <h5 className="mb-1 font-weight-bold">289</h5>
                                          <p className="mb-0 text-secondary">Booked</p>
                                      </div>
                                      <div className="mb-1">
                                          <h5 className="mb-1 font-weight-bold">348</h5>
                                          <p className="mb-0 text-secondary">In Progress</p>
                                      </div>
                                      <div>
                                          <h5 className="mb-1 font-weight-bold">152</h5>
                                          <p className="mb-0 text-secondary">Canceled</p>
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

export default index
