import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Add_new_product_table.css'
import tshirt from './images/Product-Your-Design-Here-02-3.jpg'
import { useProductAuthContext } from '../../Context/index.context'

function Add_new_product_table() {
    const { allProduct, edit_Product, delete_Product } = useProductAuthContext()
    const [flag, setFlag] = useState(false)
    const [index, setIndex] = useState(false)
    const [image, setImage] = useState(null)
    // console.log(allProduct)
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

    const saveHandler = (id) => {

        
        edit_Product(productData, id)

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

                                                    {flag && index === ind ? <><td> <input onChange={(event) => setproductData({ ...productData, title:event.target.value})}  style={{width:"85px"}} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.title} /></td>
                                                    </>
                                                :
                                                <td className=''>{item?.title}</td>
                                                }

                                                <td className=''>
                                                        
                                                            
                                                            <td className=''>{item?.category[0].category_name}</td>
                                                        
                                                    
                                                    
                                                </td>
                                                <td className=''>
                                                        
                                                            <td className=''>{item?.sub_category[0].sub_category_name}</td>
                                                        

                                                    
                                                </td>
                                                <td className=''>

                                                       
                                                            <td className=''>{item?.sub_inner_category[0].sub_inner_category_name}</td>
                                                        

                                                     </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, local_charges: event.target.value })}  style={{width:"85px"}} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.local_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.local_charges}</td>
                                                        }

                                                  </td>
                                                <td className=''>

                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, zonal_charges: event.target.value })}  style={{width:"85px"}} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.zonal_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.zonal_charges}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, national_charges: event.target.value })} style={{width:"85px"}} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.national_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.national_charges}</td>
                                                        }
                                                    
                                                    
                                                </td>
                                                <td className=''>

                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, local_deadline: event.target.value })} style={{width:"85px"}} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.local_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.local_deadline}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, zonal_deadline: event.target.value })} style={{width:"85px"}} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.zonal_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.zonal_deadline}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, national_deadline: event.target.value })} style={{width:"85px"}} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.national_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.national_deadline}</td>
                                                        }


                                                    
                                                </td>
                                                <td className=''>
                                                        {/* <button className='bg-transparent border-0'>  <i className="bi bi-pencil-square mx-2" onClick={() => { setFlag(!flag); setIndex(ind); }}></i></button>
                                                    <button className='bg-transparent border-0'><i className="bi bi-trash3 mx-2"></i></button> */}

                                                        {flag ? <>
                                                            
                                                            <Link to="javascript:;" className="mx-2"><i class="bi bi-floppy" onClick={() => { setFlag(false); saveHandler(item._id) }}></i>
                                                            </Link>

                                                            <Link to="javascript:;" className=""><i class="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link>
                                                        </> : <>
                                                                <Link to="javascript:;" className=""><i className="bi bi-pencil-square" onClick={() => { setFlag(true); setIndex(ind); setproductData({ ...productData, title: item.title, description: item.description,  category: item.category[0]._id, sub_category: item.sub_category[0]._id, sub_inner_category: item.sub_inner_category[0]._id, local_charges: item.local_charges, zonal_charges: item.zonal_charges, national_charges: item.national_charges, local_deadline: item.local_deadline, zonal_deadline: item.zonal_deadline, national_deadline: item.national_deadline})}} ></i></Link>
                                                                <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_Product(item._id)} ></i></Link>
                                                        </>}

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