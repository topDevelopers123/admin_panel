import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCategoryContext } from '../../../Context/index.context'

function Sub_category_table() {

    const { get_Sub_Category_data, delete_Sub_Category, edit_Sub_Category } = useCategoryContext()
    const [ind, setIndex] = useState(null)
    const [flag, setFlag] = useState(false)
    const [editData, setEditData] = useState({
        parent_category:"",
        sub_category_name: ""

    })

    const saveHandler = (id) => {
        console.log(editData);
        edit_Sub_Category(editData, id)
    }

    

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
                         
                          <div className="table-responsive">
                              <table className="table mb-0">
                                  <thead className="table-light">
                                      <tr>
                                          <th>Parent Category</th>
                                          <th>Sub Category Name</th>
                                          <th>Created At</th>
                                          <th>Actions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                    {get_Sub_Category_data?.map((item, index)=>(

                                        <tr key={index}>
                                            
                                             <td > {item?.parent_category.category_name} </td>

                                            {/* <td>{item.parent_category.category_name}</td> */}

                                            {flag && ind === index ? <td> <input type='text' onChange={(event)=> setEditData({...editData, sub_category_name:event.target.value})} defaultValue={item?.sub_category_name} className='bg-blue-100 text-center rounded py-2' /> </td> : <td> {item?.sub_category_name} </td>}
                                            
                                            {/* <td>{item.sub_category_name}</td> */}
                                            <td>{item?.createdAt.split("T")[0]}</td>
                                            <td>
                                                <div className="d-flex order-actions">
                                                    {flag && index === ind ? <> <Link to="javascript:;" className="mx-2"><i class="bi bi-floppy" onClick={() => { saveHandler(item._id); setFlag(false) }}></i>
                                                        </Link>

                                                        <Link to="javascript:;" className=""><i class="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link>
                                                         </> :
                                                      
                                                        <><Link to="javascript:;" className=""><i className="bi bi-pencil-square" onClick={() => { setFlag(!flag); setEditData({ ...editData, parent_category: item.parent_category._id, sub_category_name:item.sub_category_name }) ; setIndex(index) }}></i></Link>
                                                            <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_Sub_Category(item._id)}></i></Link> </> 
                                    }
                                                </div>
                                            </td>
                                        </tr>

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

export default Sub_category_table