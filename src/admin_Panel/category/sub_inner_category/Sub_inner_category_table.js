import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCategoryContext } from '../../../Context/index.context'



function Sub_inner_category_table() {

    const { all_Category, delete_Sub_Inner_Category, edit_Sub_Inner_Category } = useCategoryContext()
    const [flag, setFlag]= useState(false)
    const [index, setIndex] = useState(null)

    const [editData, setEditData] = useState({
        parent_category1: "",
        parent_category2: "",
        sub_inner_category_name:""

    })



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
                                  <li className="breadcrumb-item active" aria-current="page">Sub Inner Category Table</li>
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
                                          <th>Category Name</th>
                                          <th>Sub Category Name</th>
                                          <th>Sub Inner Category Name</th>
                                          <th>Created At</th>
                                          <th>Actions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {all_Category?.slice().reverse().map((item)=>(
                                        <>
                                        {
                                            item.Subcategory?.map((ite)=>(
                                                <>
                                                    {ite.InnerCategory.map((ele)=>(
                                                        <tr>
                                                            <td>{item.category_name}</td>
                                                            <td>{ite.sub_category_name}</td>
                                                            {flag && index === ele._id ? <input type='text' className='text-dark fw-bold rounded' style={{ backgroundColor: "#e6f9ff" }} defaultValue={ele.sub_inner_category_name} onChange={(e) => setEditData({ ...editData, sub_inner_category_name :e.target.value, parent_category1:item._id, parent_category2: ite._id})}/> :
                                                            <td>{ele.sub_inner_category_name}</td>
                                                            }
                                                            <td>June 10, 2020</td>
                                                            <td>
                                                                <div className="d-flex order-actions">
                                                                {flag && index === ele._id ? <>
                                                                        <Link to="javascript:;" className="mx-2"><i class="bi bi-floppy" onClick={() => {edit_Sub_Inner_Category(editData, ele._id); setFlag(false)}}></i>
                                                                        </Link>

                                                                        <Link to="javascript:;" className=""><i class="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link>
                                                                        </> : <>
                                                                            <Link to="javascript:;" className=""><i className="bi bi-pencil-square" onClick={() => { setFlag(true); setIndex(ele._id);setEditData({ ...editData, parent_category1: item._id, parent_category2: ite._id, sub_inner_category_name: ele.sub_inner_category_name })}}></i></Link>
                                                                            <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_Sub_Inner_Category(ele._id)}></i></Link>
                                                                            </>}
                                                                    


                                                                    
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
}
                                                </>

                                            ))}
                                        </>
                                    ))}
                                    
                                     
    

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

export default Sub_inner_category_table