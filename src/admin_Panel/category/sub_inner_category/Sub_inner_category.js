import React from 'react'

function Sub_inner_category() {
  return (
    <div>
          <div className="wrapper">
              <div className="page-wrapper">
                  <div className="page-content">
                      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                          <div className="breadcrumb-title pe-3">Mayavi Fashion</div>
                          <div className="ps-3">
                              <nav aria-label="breadcrumb">
                                  <ol className="breadcrumb mb-0 p-0">
                                      <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                                      </li>
                                      <li className="breadcrumb-item active" aria-current="page">Add Sub Inner Category</li>
                                  </ol>
                              </nav>
                          </div>

                      </div>

                      <div className="card">
                          <div className="card-body p-4">
                              <h5 className="card-title">Add Sub Inner Category</h5>
                              <hr />
                              <div className="form-body mt-4">
                                  <div className="row">
                                      <div className="border border-3 p-4 rounded">

                                          <div class="col-12">
                                              <div class="mb-3">
                                                  <label for="inputProductType" class="form-label">Select Category</label>
                                                  <select class="form-select" id="inputProductType">
                                                      <option value="men" selected>Men</option>
                                                      <option value="women">Women</option>
                                                      <option value="kid">Kid</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="col-12">
                                              <div class="mb-3">
                                                  <label for="inputProductType" class="form-label">Select Sub Category</label>
                                                  <select class="form-select" id="inputProductType">
                                                      <option value="topwear" selected>Topwear</option>
                                                      <option value="bottomwear">Bottomwear</option>
                                                      <option value="footwear">Footwear</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="col-12">
                                              <div class="mb-3">
                                                  <label for="subinnercat_name" class="form-label">Sub Inner Category Name</label>
                                                  <input type="text" class="form-control" id="subinnercat_name" placeholder="Enter Sub Inner Category Name"/>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="d-grid w-50 m-auto">
                                                  <button type="button" className="btn btn-primary">Submit</button>
                                              </div>

                                          </div>
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

export default Sub_inner_category