import React from 'react'

function Add_new_banner() {
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
                                      <li className="breadcrumb-item active" aria-current="page">Add Banner</li>
                                  </ol>
                              </nav>
                          </div>

                      </div>

                      <div className="card">
                          <div className="card-body p-4">
                              <h5 className="card-title">Add Banner</h5>
                              <hr />
                              <div className="form-body mt-4">
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="border border-3 p-4 rounded">

                                              <div className="mb-3 text-center">
                                                  <label for="inputProductImages" className="form-label">Upload Banner</label>
                                                  <input id="image-uploadify" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple/>
                                              </div>
                                              <div className="col-12">
                                                  <div className="d-grid w-50 m-auto">
                                                      <button type="button" className="btn btn-primary">Upload Banner</button>
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
    </div>
  )
}

export default Add_new_banner