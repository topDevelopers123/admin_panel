import React, { useState } from 'react'
import './Product_details.css'
import tshirt from './images/Product-Your-Design-Here-02-3.jpg'
import { Link } from 'react-router-dom'
import { useProductAuthContext } from '../../Context/index.context'

function Product_details_table() {
    const { allProductDetailsData, edit_All_Product_Details, delete_All_Product_Details } = useProductAuthContext()
    const [index, setIndex] = useState(null)
    const [flag, setFlag] = useState(false)
    const [allProductDetalsUpdate, setAllProductDetalsUpdate] = useState({
        product_id:"",
        image:"",
        Size:"",
        color:"",
        MRP:"",
        sellingPrice:"",
        sellingPrice:"",
        inStock:""

    }) 

    let abc = allProductDetailsData
    abc.forEach(item => {
        let url 
        let color
        item?.ProductDetail?.map((data,i)=>{
            if (data?.image.length>0) {
                url = data?.image[0]?.image_url
                color = data?.color
            }else{
                if (color === data.color) {
                    data.image.push(url)
                    
                }
            }
        })
        
    });
    console.log(abc)
    // let a =[];
    // allProductDetailsData?.map((item)=>{
    //     item?.ProductDetail?.map((data)=>{
    //         if (data.image.length > 0) {
    //             a.push(data)
    //         }
    //     })
    // })
    // let b = allProductDetailsData
    // let cnt = 0
    // b?.forEach((item)=>{
    //     item?.ProductDetail?.map(data=>{
            
    //            if (data?.image.length === 0) {
    //               a.map(data2=> {
    //                 if (data2?.color === data?.color) {
                        
    //                       data?.image.push(data2?.image[0]?.image_url)
    //                 }
    //               })
    //            }
            
    //     })
    // })
// console.log(cnt)





    // console.log(allProductDetailsData);
    


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
                                    <li className="breadcrumb-item active" aria-current="page">Product Details Table</li>
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
                                            <th>Size</th>
                                            <th>Color</th>

                                            <th>MRP</th>
                                            <th>Selling Price</th>
                                            <th>Selling Quantity</th>
                                            <th>In Stock</th>
                                            <th>Edit / Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody >

                                        {abc?.map((item, ind) => (

                                            <>
                                               
                                                {item?.ProductDetail?.filter((ele, i) => {
                                                    return item._id === ele.product_id
                                                }).map((ite, i) => (
                                                    <>
                                                    {/* {console.log(ite)} */}
                                                        <tr className='' key={ind} >
                                                            <td>
                                                                <div className="d-flex align-items-center images_div">
                                                                    {/* {console.log(ite)} */}
                                                                    <div>
                                                                        {/* item?.ProductDetail[0].image[0]?.image_url */}

                                                                        {/* ite?.image?.length > 0 ? ite?.image[0]?.image_url : item?.ProductDetail[0].image[0]?.image_url */}

                                                                        {ite?.image.length > 1 ? <img src={ite?.image[0]?.image_url} /> :  <img src={ite?.image[0]} />}
                                                                       
                                                                        {}

                                                                        
                                                                    </div>

                                                                </div>
                                                            </td>
                                                            <td className=''>{item?.title}</td>
                                                            <td className=''>

                                                                {flag && index === ite._id ?
                                                                    <input defaultValue={ite?.Size} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, Size: event.target.value})} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 10px", width: "50px" }} />

                                                                    : ite.Size}



                                                            </td>
                                                            <td className=''>

                                                                {flag && index === ite._id ?
                                                                    <input defaultValue={ite?.color} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, color: event.target.value })} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 10px", width: "100px" }} />
                                                                    :
                                                                    ite.color
                                                                }
                                                            </td>
                                                            <td className=''>

                                                                {flag && index === ite._id ?
                                                                    <input defaultValue={ite?.sellingPrice} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, sellingPrice: event.target.value })} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 20px", width: "100px" }} />
                                                                    :
                                                                    ite.sellingPrice
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                {flag && index === ite._id  ?
                                                                    <input defaultValue={ite?.MRP} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, MRP: event.target.value })} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 20px", width: "100px" }} />
                                                                    :
                                                                    ite.MRP
                                                                }
                                                            </td>

                                                            <td className=''>
                                                                {flag && index === ite._id  ?
                                                                    <input defaultValue={ite?.selling_quantity} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, selling_quantity: event.target.value })} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 20px", width: "100px" }} />
                                                                    :
                                                                    ite.selling_quantity
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                {flag && index === ite._id ?
                                                                    <input defaultValue={ite?.inStock} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, inStock: event.target.value })} style={{ 
                                                                        backgroundColor: " rgb(230, 249, 255)", padding: "5px 20px", width: "100px" }} />
                                                                    :
                                                                    ite.inStock
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                {flag && index === ite._id ? <>

                                                                    <Link to="javascript:;" className="mx-2"><i class="bi bi-floppy" onClick={() => { setFlag(false); edit_All_Product_Details(allProductDetalsUpdate, ite._id)}}></i>
                                                                    </Link>

                                                                    <Link to="javascript:;" className=""><i class="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link>
                                                                </> : <>
                                                                        <Link to="javascript:;" className=""><i className="bi bi-pencil-square" onClick={() => {
                                                                            setFlag(true); setIndex(ite._id); setAllProductDetalsUpdate({
                                                                                ...allProductDetalsUpdate, Size: ite.Size, color: ite.color, MRP: ite.MRP, sellingPrice: ite.sellingPrice, selling_quantity: ite.selling_quantity, inStock: ite.inStock, product_id: item._id, image: ite.image
                                                                    })}} ></i></Link>
                                                                        <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_All_Product_Details(ite._id)}></i></Link>
                                                                </>}
                                                            </td>
                                                        </tr>
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

export default Product_details_table