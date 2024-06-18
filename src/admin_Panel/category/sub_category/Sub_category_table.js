import React from 'react'

function Sub_category_table() {
  return (
    <div>
          <div class="page-wrapper">
              <div class="page-content">
                  <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                      <div class="breadcrumb-title pe-3">Mayavi Fashion</div>
                      <div class="ps-3">
                          <nav aria-label="breadcrumb">
                              <ol class="breadcrumb mb-0 p-0">
                                  <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                  </li>
                                  <li class="breadcrumb-item active" aria-current="page">Sub Category Table</li>
                              </ol>
                          </nav>
                      </div>

                  </div>

                  <div class="card">
                      <div class="card-body">
                          <div class="d-lg-flex align-items-center mb-4 gap-3">
                              <div class="position-relative">
                                  <input type="text" class="form-control ps-5 radius-30" placeholder="Search Order"/> <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
                              </div>
                             
                          </div>
                          <div class="table-responsive">
                              <table class="table mb-0">
                                  <thead class="table-light">
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
                                                  <a href="javascript:;" className=""><i className="bi bi-pencil-square"></i></a>
                                                  <a href="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></a>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Men</td>
                                          <td>Footwear</td>
                                          <td>June 10, 2020</td>
                                           <td>
                                              <div className="d-flex order-actions">
                                                  <a href="javascript:;" className=""><i className="bi bi-pencil-square"></i></a>
                                                  <a href="javascript:;" className="ms-3"><i className="bi bi-trash3-fill"></i></a>
                                              </div>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Men</td>
                                          <td>Topwear</td>
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

export default Sub_category_table