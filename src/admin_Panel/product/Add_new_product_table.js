import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Add_new_product_table.css'
import tshirt from './images/Product-Your-Design-Here-02-3.jpg'
import { useProductAuthContext } from '../../Context/index.context'
import Loader from "../Loader/Loader"

function Add_new_product_table() {
    const { allProduct, edit_Product, delete_Product, page, setPage, disable } = useProductAuthContext()
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
                                    <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link>
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

                                        {allProduct?.map((item, ind) => (
                                            <tr className='' key={ind} >
                                                <>
                                                    <td>
                                                        <div className="d-flex align-items-center images_div">

                                                            <div>
                                                                <img src={item?.ProductDetail[0]?.image[0]?.image_url} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    {flag && index === ind ? <><td> <input onChange={(event) => setproductData({ ...productData, title: event.target.value })} style={{ width: "85px" }} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.title} /></td>
                                                    </>
                                                        :
                                                        <td className=''>{item?.title}</td>
                                                    }
                                                    <td className=''>
                                                        <td className=''>{item?.category[0]?.category_name}</td>
                                                    </td>
                                                    <td className=''>
                                                        <td className=''>{item?.sub_category[0]?.sub_category_name}</td>
                                                    </td>
                                                    <td className=''>
                                                        <td className=''>{item?.sub_inner_category[0]?.sub_inner_category_name}</td>
                                                    </td>
                                                    <td className=''>
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, local_charges: event.target.value })} style={{ width: "85px" }} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.local_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.local_charges}</td>
                                                        }
                                                    </td>
                                                    <td className=''>
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, zonal_charges: event.target.value })} style={{ width: "85px" }} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.zonal_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.zonal_charges}</td>
                                                        }
                                                    </td>
                                                    <td className=''>

                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, national_charges: event.target.value })} style={{ width: "85px" }} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.national_charges} /></td>
                                                            :
                                                            <td className=''>  {item?.national_charges}</td>
                                                        }
                                                    </td>
                                                    <td className=''>

                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, local_deadline: event.target.value })} style={{ width: "85px" }} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.local_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.local_deadline}</td>
                                                        }
                                                    </td>
                                                    <td className=''>
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, zonal_deadline: event.target.value })} style={{ width: "85px" }} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.zonal_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.zonal_deadline}</td>
                                                        }
                                                    </td>
                                                    <td className=''>
                                                        {flag && index === ind ? <td><input onChange={(event) => setproductData({ ...productData, national_deadline: event.target.value })} style={{ width: "85px" }} type='text' className='text-center py-2 text-dark bg-blue-100' defaultValue={item?.national_deadline} /></td>
                                                            :
                                                            <td className=''>  {item?.national_deadline}</td>
                                                        }
                                                    </td>
                                                    <td className=''>
                                                        {flag && index === ind ? <>
                                                            <Link to="#" className="mx-2"><i class="bi bi-floppy" onClick={() => { setFlag(false); saveHandler(item._id) }}></i>
                                                            </Link>
                                                            <span>
                                                                <Link to="#" className=""><i class="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link></span>
                                                        </> : <>
                                                            <Link to="#" className=""><i className="bi bi-pencil-square" onClick={() => { setFlag(true); setIndex(ind); setproductData({ ...productData, title: item.title, description: item.description, category: item.category[0]._id, sub_category: item.sub_category[0]._id, sub_inner_category: item.sub_inner_category[0]._id, local_charges: item.local_charges, zonal_charges: item.zonal_charges, national_charges: item.national_charges, local_deadline: item.local_deadline, zonal_deadline: item.zonal_deadline, national_deadline: item.national_deadline }) }} ></i></Link>
                                                            <span>
                                                                <Link to="#" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_Product(item._id)} ></i></Link></span>
                                                        </>}
                                                    </td>
                                                </>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="..." className=' flex justify-center items-center'>
                                    <ul className="pagination m-0 my-3">
                                        <li className="page-item ">
                                            <button className="page-link" disabled={disable} onClick={() => setPage((prev) => prev < 2 ? 1 : prev - 1)} >Previous</button>
                                        </li>
                                        <li className="page-item active">
                                            <Link className="page-link" >{page}</Link>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link" disabled={disable || allProduct?.length < 4} onClick={() => setPage((prev) => prev + 1)}>Next</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_new_product_table