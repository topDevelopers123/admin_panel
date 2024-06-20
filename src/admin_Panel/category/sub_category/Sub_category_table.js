import React from 'react'
import { Link } from 'react-router-dom'

function Sub_category_table() {
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
                                  <li className="breadcrumb-item active" aria-current="page">Sub Category Table</li>
                              </ol>
                          </nav>
                      </div>

                  </div>

                  <div className="card">
                      <div className="card-body">
                          <div className="d-lg-flex align-items-center mb-4 gap-3">
                              <div className="position-relative">
                                  <input type="text" className="form-control ps-5 radius-30" placeholder="Search Order"/> <span className="position-absolute top-50 product-show translate-middle-y"><i className="bx bx-search"></i></span>
                              </div>
                             
                          </div>
                          <div className="table-responsive">
                              <table className="table mb-0">
                                  <thead className="table-light">
                                      <tr>
                                          <th>Parent Category</th>
                                          <th>Category Name</th>
                                          <th>Created At</th>
                                          <th>Actions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>Men</td>
                                          <td>Bottomwear</td>
                                          <td>June 10, 2020</td>
                                           <td>
                                              <div className="d-flex order-actions">
                                                  <Link to="javascript:;" className=""><i className="bi bi-pencil-square"></i></Link>
                                                  <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></Link>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Men</td>
                                          <td>Footwear</td>
                                          <td>June 10, 2020</td>
                                           <td>
                                              <div className="d-flex order-actions">
                                                  <Link to="javascript:;" className=""><i className="bi bi-pencil-square"></i></Link>
                                                  <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></Link>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Men</td>
                                          <td>Topwear</td>
                                          <td>June 10, 2020</td>
                                           <td>
                                              <div className="d-flex order-actions">
                                                  <Link to="javascript:;" className=""><i className="bi bi-pencil-square"></i></Link>
                                                  <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></Link>
                                              </div>
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

export default Sub_category_table