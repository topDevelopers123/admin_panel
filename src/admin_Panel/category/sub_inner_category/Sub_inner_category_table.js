import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from "../../Loader/Loader"
import { useCategoryContext } from '../../../Context/index.context'



function Sub_inner_category_table() {

    const { all_Category, page, setPage, disable, delete_Sub_Inner_Category, edit_Sub_Inner_Category } = useCategoryContext()
    const [flag, setFlag] = useState(false)
    const [index, setIndex] = useState(null)

    const [editData, setEditData] = useState({
        parent_category1: "",
        parent_category2: "",
        sub_inner_category_name: ""

    })

    // console.log(all_Category);

    // console.log(editData);

    if (disable) return <Loader className="w-100 h-[100vh] flex justify-center items-center" />
    




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

                                        {all_Category?.map((item) => (
                                            <>
                                                <tr>
                                                    <td>{item?.parent_category1?.category_name}</td>
                                                    <td>{item?.parent_category2?.sub_category_name}</td>
                                                    {
                                                        flag && index === item?._id ?

                                                            <input type='text' className='text-dark fw-bold rounded' style={{ backgroundColor: "#e6f9ff" }} defaultValue={item?.sub_inner_category_name} onChange={(e) => setEditData({ ...editData, sub_inner_category_name: e.target.value, parent_category1: item?.parent_category1?._id, parent_category2: item?.parent_category2?._id })} />
                                                            :
                                                            <td>{item?.sub_inner_category_name}</td>
                                                    }

                                                    <td>June 10, 2020</td>

                                                    {
                                                        flag && index === item?._id ? <>
                                                            <Link to="javascript:;" className="mx-2"><i className="bi bi-floppy" onClick={() => { edit_Sub_Inner_Category(editData, item?._id); setFlag(false) }}></i>
                                                            </Link>

                                                            <Link to="javascript:;" className=""><i className="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link>
                                                        </>
                                                            :
                                                            <>
                                                                <Link to="javascript:;" className=""><i className="bi bi-pencil-square" onClick={() => { setFlag(true); setIndex(item?._id); setEditData({ ...editData, parent_category1: item?.parent_category1?._id, parent_category2: item?.parent_category2?._id, sub_inner_category_name: item?._id }) }}></i></Link>
                                                                <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_Sub_Inner_Category(item?._id)}></i></Link>
                                                            </>
                                                    }

                                                </tr>

                                            </>
                                            // <>
                                            //     <Link to="javascript:;" className=""><i className="bi bi-pencil-square" onClick={() => { setFlag(true); setIndex(ele._id); setEditData({ ...editData, parent_category1: item._id, parent_category2: ite._id, sub_inner_category_name: ele.sub_inner_category_name }) }}></i></Link>
                                            //     <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_Sub_Inner_Category(ele._id)}></i></Link>
                                            //  <Link to="javascript:;" className="mx-2"><i className="bi bi-floppy" onClick={() => { edit_Sub_Inner_Category(editData); setFlag(false) }}></i>
                                            //     </Link>

                                            //     <Link to="javascript:;" className=""><i className="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link>
                                            // </>

                                        ))}
                                        {/* {all_Category?.slice().reverse().map((item)=>(
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
                                                                <div cvnvnhkhk lassName="d-flex order-actions">
                                                                {flag && index === ele._id ? <>
                                                                        <Link to="javascript:;" className="mx-2"><i className="bi bi-floppy" onClick={() => {edit_Sub_Inner_Category(editData, ele._id); setFlag(false)}}></i>
                                                                        </Link>

                                                                        <Link to="javascript:;" className=""><i className="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link>
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
                                    
                                     
                                */}

                                  </tbody>
                              </table>
                              {/* <button onClick={()=>setPage((prev) => prev + 1)}>Next</button> */}
                              <div className='w-100  d-flex justify-content-center items-center'>
                              <nav aria-label="...">
                                  <ul className="pagination m-0 py-3">
                                      {all_Category?.length < 6 ?
                                      <li className="page-item">
                                                  <button className="page-link" disabled={disable}  onClick={() => setPage((prev) => prev < 2 ? 1 : prev - 1)}>Previous</button>
                                      </li>
                                      : "" 
                                      }
                                      <li className="page-item"><a className="page-link active">{page}</a></li>
                                  
                                    {all_Category?.length > 4 ?
                                      <li className="page-item">
                                                  <button className="page-link" disabled={disable}  onClick={() => setPage((prev) => prev + 1)}>Next</button>
                                      </li>
                                      : ""}
                                  </ul>
                              </nav>
                              </div>
                          </div>
                      </div>
                  </div>

                       
                </div>
            </div>
        </div>
    )
}

export default Sub_inner_category_table;
