import React from 'react'
import tshirt from './images/Product-Your-Design-Here-02-3.jpg'
function Add_new_product_table() {
  return (
    <div>

          <div className="page-wrapper">
              <div className="page-content">

                  <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                      <div className="breadcrumb-title pe-3">eCommerce</div>
                      <div className="ps-3">
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb mb-0 p-0">
                                  <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
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
                                          <th>Image</th>
                                          <th>Product Title</th>
                                          <th>Category</th>
                                          <th>Sub Category</th>
                                          <th>Sub Inner Category</th>
                                          <th>Local Charges</th>
                                          <th>Zonal Charges</th>
                                          <th>National Charges</th>
                                          <th>Local Deadline</th>
                                          <th>Zonal Deadline</th>
                                          <th>National Deadline</th>
                                          <th>Edit / Delete</th>
                                      </tr>
                                  </thead>
                                  <tbody >
                                      <tr className=''>
                                          <td>
                                              <div className="d-flex align-items-center images_div">
                                                  <div>
                                                      <img src={tshirt} />
                                                  </div>

                                              </div>
                                          </td>
                                          <td className=''>Gaspur Antunes</td>
                                          <td className=''>
                                             Men's
                                          </td>
                                          <td className=''>
                                              Topwear
                                          </td>
                                          <td className=''>T-shirt</td>
                                          <td className=''>₹50/-</td>
                                          <td className=''>
                                              ₹100
                                          </td>
                                          <td className=''>
                                              ₹150
                                          </td>
                                          <td className=''>
                                              3 days
                                          </td>
                                          <td className=''>
                                              5 days
                                          </td>
                                          <td className=''>
                                              7 days
                                          </td>
                                          <td className=''>
                                              <button className='bg-transparent border-0'>  <i class="bi bi-pencil-square mx-2"></i></button>
                                              <button className='bg-transparent border-0'><i class="bi bi-trash3 mx-2"></i></button>
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

export default Add_new_product_table