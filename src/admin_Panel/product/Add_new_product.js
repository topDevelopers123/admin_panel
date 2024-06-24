import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Add_new_product.css'
import { useCategoryContext, useProductAuthContext } from '../../Context/index.context'

function Add_new_product() {
  const { all_Category } = useCategoryContext()
  const { addProduct } = useProductAuthContext()
  const [productData, setproductData] = useState({
    title: "",
    description: "",
    category: "",
    sub_category: "",
    sub_inner_category: "",
    local_charges: "",
    zonal_charges: "",
    national_charges: "",
    local_deadline: "",
    zonal_deadline: "",
    national_deadline: ""
  
  })

  

  return (
      <>
      <div className="wrapper">
        <div className="page-wrapper">
          <div className="page-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
              <div className="breadcrumb-title pe-3">Mayavi Fashion</div>
              <div className="ps-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 p-0">
                    <li className="breadcrumb-item"><Link to="javascript:;"><i className="bx bx-home-alt"></i></Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Add New Product</li>
                  </ol>
                </nav>
              </div>

            </div>

            <div className="card">
              <div className="card-body p-4">
                <h5 className="card-title">Add New Product</h5>
                <hr />
                <div className="form-body mt-4">
                  <div className="row">
                    <div className="border border-3 p-4 rounded">

                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Product Title</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData , title: e.target.value})} className="form-control" id="cat_name" placeholder="Enter Category Name" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Product Description</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData, description: e.target.value })}  className="form-control" id="cat_name" placeholder="Enter Category Name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Category</label>
                          <select className="form-select" onChange={(e) => setproductData({ ...productData, category: e.target.value })}>
                            <option></option>
                            {

                              all_Category?.map((item, index) => (
                                <>
                                  <option value={item._id} >{item.category_name}</option>

                                </>
                              ))}
                            {/* <option>Men's</option>
                            <option>Women's</option>
                            <option>Men's</option> */}
                           
                          </select>
                       
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Sub Category</label>
                          <select className="form-select" onChange={(e) => setproductData({ ...productData, sub_category: e.target.value })}>
                            <option></option>
                            {
                              all_Category?.filter((item) => item._id === productData.category).map((i) => (
                                i?.Subcategory.map((ite, ind) => (
                                  <option value={ite._id} >{ite.sub_category_name}</option>
                                ))
                              ))
                            }
                       

                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Sub Inner Category</label>
                          <select className="form-select" onChange={(e) => setproductData({ ...productData , sub_inner_category: e.target.value })}>
                            <option></option>
          
                           {
                              all_Category?.filter((item) => item._id === productData.category ).map((ind)=>(
                                ind?.Subcategory?.filter((ite)=>ite._id === productData.sub_category).map((ele)=>(
                                  ele?.InnerCategory?.map((i)=>(
                                    <option value={i._id} >{i.sub_inner_category_name}</option>
                                  ))
                                ))
                              ))
                           }
                           

                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Local Charges</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData, local_charges: e.target.value })} className="form-control" id="cat_name" placeholder="Enter Category Name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Zonal Charges</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData, zonal_charges: e.target.value })} className="form-control" id="cat_name" placeholder="Enter Category Name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">National Charges</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData, national_charges: e.target.value })} className="form-control" id="cat_name" placeholder="Enter Category Name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Local Deadline</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData, local_deadline: e.target.value })} className="form-control" id="cat_name" placeholder="Enter Category Name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">Zonal Deadline</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData, zonal_deadline: e.target.value })} className="form-control" id="cat_name" placeholder="Enter Category Name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label for="cat_name" className="form-label">National Deadline</label>
                          <input type="text" onChange={(e) => setproductData({ ...productData, national_deadline: e.target.value })} className="form-control" id="cat_name" placeholder="Enter Category Name" />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid w-50 m-auto">
                          <button type="button" className="btn btn-primary" onClick={()=>addProduct(productData)}>Submit</button>
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
      </>
  )
}

export default Add_new_product