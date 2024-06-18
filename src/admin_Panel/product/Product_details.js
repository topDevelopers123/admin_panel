import React from 'react'

function Product_details() {
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
                                      <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                                  </ol>
                              </nav>
                          </div>

                      </div>





                      <div className="card">
                          <div className="card-body p-4">
                              <h5 className="card-title">Product Details</h5>
                              <hr />
                              <div className="form-body mt-4">
                                  <div className="row">
                                      <div className="border border-3 p-4 rounded">

                                        
                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label for="cat_name" className="form-label">Size</label>
                                                  <select className="form-select">
                                                      <option></option>
                                                      <option>S</option>

                                                  </select>

                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label for="cat_name" className="form-label">Color</label>
                                                  <select className="form-select">
                                                      <option></option>
                                                      <option>Red</option>

                                                  </select>
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label for="cat_name" className="form-label">Images</label>
                                                
                                                      
                                                     <input type='file'/>

                                            
                                              </div>
                                          </div>

                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label for="cat_name" className="form-label">MRP</label>
                                                  <input type="text" className="form-control" id="cat_name" placeholder="Enter MRP" />
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label for="cat_name" className="form-label">Selling Price</label>
                                                  <input type="text" className="form-control" id="cat_name" placeholder="Enter Selling Price" />
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label for="cat_name" className="form-label">Selling Quantity</label>
                                                  <input type="text" className="form-control" id="cat_name"                                                                                                                                                                                                                                                                    placeholder="Enter Selling Quantity" />
                                              </div>
                                          </div>
                                          <div className="col-12">
                                              <div className="mb-3">
                                                  <label for="cat_name" className="form-label">In Stock</label>
                                                  <input type="text" className="form-control" id="cat_name" placeholder="In Stock Value" />
                                              </div>
                                          </div>
                                             
                                          <div className="col-12">
                                              <div className="d-grid w-50 m-auto">
                                                  <button type="button" className="btn btn-primary">Submit</button>
                                              </div>
                                          </div>
                                          

                                          {/* <div className="col-lg-12">

                        <div className="mb-3 ">
                          <label for="inputProductImages" className="form-label">Upload Category Image</label>
                          <input id="image-uploadify" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple />
                        </div>
                        <div className="col-12">
                          <div className="d-grid w-50 m-auto">
                            <button type="button" className="btn btn-primary">Submit</button>
                          </div>
                        </div>
                      </div> */}
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

export default Product_details