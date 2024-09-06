
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Add_new_product.css';
import { useCategoryContext, useProductAuthContext } from '../../Context/index.context';

function Add_new_product() {
  const { all_Category } = useCategoryContext();
  const { addProduct } = useProductAuthContext();
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    sub_category: "",
    sub_inner_category: "",
    local_charges: "",
    zonal_charges: "",
    national_charges: "",
    ActualWeight:"",
    local_deadline: "",
    zonal_deadline: "",
    national_deadline: ""
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    for (const key in productData) {
      if (!productData[key]) newErrors[key] = `${key.replace(/_/g, ' ')} is required`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    addProduct(productData);
  };

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
                    <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link></li>
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
                          <label htmlFor="title" className="form-label">Product Title</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                            className="form-control"
                            id="title"
                            placeholder="Enter Product Title"
                          />
                          {errors.title && <span className="text-danger">{errors.title}</span>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">Product Description</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                            className="form-control"
                            id="description"
                            placeholder="Enter Product Description"
                          />
                          {errors.description && <span className="text-danger">{errors.description}</span>}
                        </div>
                      </div>


                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="category" className="form-label">Category</label>
                          <select
                            className="form-select"
                            onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                          >
                            <option value="">Select Category</option>
                            {all_Category?.map((item, index) => {
                 
                              return <option key={index} value={item._id}>{item.category_name}</option>
})}
                          </select>
                          {errors.category && <span className="text-danger">{errors.category}</span>}
                        </div>
                      </div>


                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="sub_category" className="form-label">Sub Category</label>
                          <select
                            className="form-select"
                            onChange={(e) => setProductData({ ...productData, sub_category: e.target.value })}
                          >
                            <option value="">Select Sub Category</option>
                            {all_Category?.filter(item => item._id === productData?.category)
                              .map(item => item?.Subcategory?.map((sub, index) => (
                                <option key={index} value={sub._id}>{sub.sub_category_name}</option>
                              )))
                            }
                          </select>
                          {errors.sub_category && <span className="text-danger">{errors.sub_category}</span>}
                        </div>
                      </div>



                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="sub_inner_category" className="form-label">Sub Inner Category</label>
                          <select
                            className="form-select"
                            onChange={(e) => setProductData({ ...productData, sub_inner_category: e.target.value })}
                          >
                            <option value="">Select Sub Inner Category</option>
                            {all_Category?.filter(item => item._id === productData.category)
                              .map(item => item.Subcategory?.filter(sub => sub._id === productData.sub_category)
                                .map(sub => sub.InnerCategory.map((inner, index) => (
                                  <option key={index} value={inner._id}>{inner.sub_inner_category_name}</option>
                                ))))
                            }
                          </select>
                          {errors.sub_inner_category && <span className="text-danger">{errors.sub_inner_category}</span>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="ActualWeight" className="form-label">Product Weight <span className='text-xs'> (in kg)</span></label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, ActualWeight: e.target.value })}
                            className="form-control"
                            id="ActualWeight"
                            placeholder="Enter Product Weight (in kg)"
                          />
                          {errors.ActualWeight && <span className="text-danger">{errors.ActualWeight}</span>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="local_charges" className="form-label">Local Charges</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, local_charges: e.target.value })}
                            className="form-control"
                            id="local_charges"
                            placeholder="Enter Local Charges"
                          />
                          {errors.local_charges && <span className="text-danger">{errors.local_charges}</span>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="zonal_charges" className="form-label">Zonal Charges</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, zonal_charges: e.target.value })}
                            className="form-control"
                            id="zonal_charges"
                            placeholder="Enter Zonal Charges"
                          />
                          {errors.zonal_charges && <span className="text-danger">{errors.zonal_charges}</span>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="national_charges" className="form-label">National Charges</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, national_charges: e.target.value })}
                            className="form-control"
                            id="national_charges"
                            placeholder="Enter National Charges"
                          />
                          {errors.national_charges && <span className="text-danger">{errors.national_charges}</span>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="local_deadline" className="form-label">Local Deadline</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, local_deadline: e.target.value })}
                            className="form-control"
                            id="local_deadline"
                            placeholder="Enter Local Deadline"
                          />
                          {errors.local_deadline && <span className="text-danger">{errors.local_deadline}</span>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="zonal_deadline" className="form-label">Zonal Deadline</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, zonal_deadline: e.target.value })}
                            className="form-control"
                            id="zonal_deadline"
                            placeholder="Enter Zonal Deadline"
                          />
                          {errors.zonal_deadline && <span className="text-danger">{errors.zonal_deadline}</span>}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label htmlFor="national_deadline" className="form-label">National Deadline</label>
                          <input
                            type="text"
                            onChange={(e) => setProductData({ ...productData, national_deadline: e.target.value })}
                            className="form-control"
                            id="national_deadline"
                            placeholder="Enter National Deadline"
                          />
                          {errors.national_deadline && <span className="text-danger">{errors.national_deadline}</span>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid w-50 m-auto">
                          <button type="button" className="btn btn-primary" onClick={() => handleSubmit(productData)}>Submit</button>
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
    </>
  )
}

export default Add_new_product;
