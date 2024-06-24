import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Add_new_product_table.css'
import tshirt from './images/Product-Your-Design-Here-02-3.jpg'
import { useProductAuthContext } from '../../Context/index.context'

function Add_new_product_table() {
    const { allProduct } = useProductAuthContext()
    const [flag, setFlag] = useState(false)
    const [index, setIndex] = useState(false)
    console.log(flag);
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
                                  <li className="breadcrumb-item active" aria-current="page">Add_new_product_table</li>
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
                                          <th>Image</th>
                                          <th>Product Title</th>
                                          <th>Category</th>
                                          <th>Sub Category</th>
                                          <th>Sub Inner Category</th>
                                          <th>Local Charges</th>
                                          <th>Zonal Charges</th>
                                          <th>National Charges</th>
                                          <th>Local Deadline</th>
                                          <th>Zonal Deadline</th>
                                          <th>National Deadline</th>
                                          <th>Edit / Delete</th>
                                      </tr>
                                  </thead>
                                  <tbody >
                                     
                                        {allProduct?.map((item,ind)=>(
                                            <tr className='' >

                                            <>
                                                <td>
                                                    <div className="d-flex align-items-center images_div">
                                                        <div>
                                                            <img src={tshirt} />
                                                        </div>

                                                    </div>
                                                </td>

                                                    {flag && index === ind ? <><td> <input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.title} /></td>
                                                    </>
                                                :
                                                <td className=''>{item?.title}</td>
                                                }

                                                <td className=''>
                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.category[0].category_name} /></td>
                                                            :
                                                            <td className=''>{item?.category[0].category_name}</td>
                                                        }
                                                    
                                                    
                                                </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.sub_category[0].sub_category_name} /></td>
                                                            :
                                                            <td className=''>{item?.sub_category[0].sub_category_name}</td>
                                                        }

                                                    
                                                </td>
                                                <td className=''>

                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.sub_inner_category[0].sub_inner_category_name} /></td>
                                                            :
                                                            <td className=''>{item?.sub_inner_category[0].sub_inner_category_name}</td>
                                                        }

                                                     </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.local_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.local_charges}</td>
                                                        }

                                                  </td>
                                                <td className=''>

                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.zonal_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.zonal_charges}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.national_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.national_charges}</td>
                                                        }
                                                    
                                                    
                                                </td>
                                                <td className=''>

                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.local_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.local_deadline}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.zonal_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.zonal_deadline}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.national_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.national_deadline}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        <button className='bg-transparent border-0'>  <i className="bi bi-pencil-square mx-2" onClick={() => { setFlag(!flag); setIndex(ind)}}></i></button>
                                                    <button className='bg-transparent border-0'><i className="bi bi-trash3 mx-2"></i></button>
                                                </td>
                                            </>
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

export default Add_new_product_table