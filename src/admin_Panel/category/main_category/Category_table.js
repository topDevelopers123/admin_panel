import React from 'react'

function Category_table() {
  return (
    <div>
          <div className="page-wrapper">
              <div className="page-content">
                  <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                      <div className="breadcrumb-title pe-3">Mayavi Fashion</div>
                      <div className="ps-3">
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb mb-0 p-0">
                                  <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                                  </li>
                                  <li className="breadcrumb-item active" aria-current="page">Category Table</li>
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
                                          <th>Category Image</th>
                                          <th>Category Name</th>
                                          <th>Created At</th>

                                          <th>Actions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center cat_img">
                                                  <div className="ms-2">
                                                      <img src="assets/images/category/cat_img/men.jpg" alt="img"/>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Men</td>
                                          <td>June 10, 2020</td>
                                          <td>
                                              <div className="d-flex order-actions">
                                                  <a href="javascript:;" className=""><i className="bi bi-pencil-square"></i></a>
                                                  <a href="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></a>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center cat_img">
                                                  <div className="ms-2">
                                                      <img src="assets/images/category/cat_img/men.jpg" alt="img"/>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Women</td>
                                          <td>June 10, 2020</td>
                                          <td>
                                              <div className="d-flex order-actions">
                                                  <a href="javascript:;" className=""><i className="bi bi-pencil-square"></i></a>
                                                  <a href="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></a>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex align-items-center cat_img">
                                                  <div className="ms-2">
                                                      <img src="assets/images/category/cat_img/men.jpg" alt="img"/>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>Kid</td>
                                          <td>June 10, 2020</td>
                                          <td>
                                              <div className="d-flex order-actions">
                                                  <a href="javascript:;" className=""><i className="bi bi-pencil-square"></i></a>
                                                  <a href="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></a>
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

export default Category_table