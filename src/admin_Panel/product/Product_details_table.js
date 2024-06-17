import React from 'react'
import './Product_details.css'
import tshirt from './images/Product-Your-Design-Here-02-3.jpg'

function Product_details_table() {
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
                                          <th>Size</th>
                                          <th>Color</th>
                                      
                                          <th>MRP</th>
                                          <th>Selling Price</th>
                                          <th>Selling Quantity</th>
                                          <th>In Stock</th>
                                          <th>Edit / Delete</th>
                                      </tr>
                                  </thead>
                                  <tbody >
                                      <tr className=''>
                                          <td>
                                              <div className="d-flex align-items-center images_div">
                                                  <div>
                                                      <img src={tshirt}/>
                                                  </div>
                                                  
                                              </div>
                                          </td>
                                          <td className=''>Gaspur Antunes</td>
                                          <td className=''>
                                             <select>
                                                <option>M</option>
                                             </select>
                                          </td>
                                          <td className=''>
                                              Red
                                          </td>
                                          <td className=''>₹1989/-</td>
                                          <td className=''>₹1599/-</td>
                                          <td className=''>
                                             10
                                          </td>
                                          <td className=''>
                                              5
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

export default Product_details_table