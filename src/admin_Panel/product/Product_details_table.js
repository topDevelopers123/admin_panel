import React, { useState } from 'react'
import './Product_details.css'
import { Link } from 'react-router-dom'
import { useProductAuthContext } from '../../Context/index.context'
import Loader from '../Loader/Loader'

function Product_details_table() {
    const { allProductDetailsData, edit_All_Product_Details, delete_All_Product_Details, page2, setPage2, disable, disable2, allProduct } = useProductAuthContext()

    const [index, setIndex] = useState(null)
    const [flag, setFlag] = useState(false)
    const [allProductDetalsUpdate, setAllProductDetalsUpdate] = useState({
        product_id: "",
        image: "",
        Size: "",
        color: "",
        MRP: "",
        sellingPrice: "",
        inStock: ""

    })

    // let abc = allProductDetailsData
    // allProductDetailsData.forEach(item => {
    //     let temp = []
    //     item?.ProductDetail?.map((data,i)=>{
    //         if (data.product_id === item._id && data.image.length>0) {
    //             temp.push({ url:data?.image[0]?.image_url,color: data.color })
    //         }
    //         if (data.product_id === item._id && data.image.length === 0 ) {
    //             temp.forEach(x=>{
    //                 if (x.color === data.color) {
    //                     data.image.push( x.url)
    //                 }
    //             })
    //         }
    //     })  
    // });
    // console.log(abc)

    allProductDetailsData.forEach(item => {
        let temp = new Map();
        item?.ProductDetail?.forEach(data => {
            if (data.product_id === item._id) {
                if (data.image.length > 0) {
                    temp.set(data.color, data.image[0]?.image_url);
                } else {
                    const imageUrl = temp.get(data.color);
                    if (imageUrl) {
                        data.image.push(imageUrl);
                    }
                }
            }
        });

    });

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

                                        {allProductDetailsData?.map((item, ind) => (
                                            <React.Fragment key={ind}>
                                                {item?.ProductDetail?.filter((ele, i) => {
                                                    return item._id === ele.product_id
                                                }).map((ite, i) => (
                                                    <>
                                                        {/* {console.log(ite)} */}
                                                        <tr className='' key={i} >
                                                            <td>
                                                                <div className="d-flex align-items-center images_div">
                                                                    {/* {console.log(ite)} */}
                                                                    <div>
                                                                        {/* item?.ProductDetail[0].image[0]?.image_url */}

                                                                        {/* ite?.image?.length > 0 ? ite?.image[0]?.image_url : item?.ProductDetail[0].image[0]?.image_url */}

                                                                        {ite?.image.length > 1 ? <img src={ite?.image[0]?.image_url} /> : <img src={ite?.image[0]} />}

                                                                        { }


                                                                    </div>

                                                                </div>
                                                            </td>
                                                            <td className=''>{item?.title}</td>
                                                            <td className=''>

                                                                {flag && index === ite._id ?
                                                                    <input defaultValue={ite?.Size} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, Size: event.target.value })} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 10px", width: "50px" }} />

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
                                                                    <input defaultValue={ite?.MRP} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, MRP: event.target.value })} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 20px", width: "100px" }} />
                                                                    :
                                                                    ite.MRP
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
                                                                {flag && index === ite._id ?
                                                                    <input defaultValue={ite?.selling_quantity} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, selling_quantity: event.target.value })} style={{ backgroundColor: " rgb(230, 249, 255)", padding: "5px 20px", width: "100px" }} />
                                                                    :
                                                                    ite.selling_quantity
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                {flag && index === ite._id ?
                                                                    <input defaultValue={ite?.inStock} onChange={(event) => setAllProductDetalsUpdate({ ...allProductDetalsUpdate, inStock: event.target.value })} style={{
                                                                        backgroundColor: " rgb(230, 249, 255)", padding: "5px 20px", width: "100px"
                                                                    }} />
                                                                    :
                                                                    ite.inStock
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                {flag && index === ite._id ? <>

                                                                    <Link to="#" className="mx-2"><i class="bi bi-floppy" onClick={() => { setFlag(false); edit_All_Product_Details(allProductDetalsUpdate, ite._id) }}></i>
                                                                    </Link>
                                                                    <span>
                                                                        <Link to="#" className=""><i class="bi bi-x-circle-fill" onClick={() => { setFlag(!flag) }} ></i></Link></span>
                                                                </> : <>
                                                                    <Link to="#" className=""><i className="bi bi-pencil-square" onClick={() => {
                                                                        setFlag(true); setIndex(ite._id); setAllProductDetalsUpdate({
                                                                            ...allProductDetalsUpdate, Size: ite.Size, color: ite.color, MRP: ite.MRP, sellingPrice: ite.sellingPrice, selling_quantity: ite.selling_quantity, inStock: ite.inStock, product_id: item._id, image: ite.image
                                                                        })
                                                                    }} ></i></Link>
                                                                    <span>
                                                                        <Link to="#" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => delete_All_Product_Details(ite._id)}></i></Link>
                                                                    </span>
                                                                </>}
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="..." className=' flex justify-center items-center'>
                                    <ul className="pagination m-0 my-3">
                                        <li className="page-item ">
                                            <button className="page-link" disabled={disable || allProduct?.length < 1} onClick={() => setPage2((prev) => prev < 2 ? 1 : prev - 1)} >Previous</button>
                                        </li>
                                        <li className="page-item active">
                                            <Link className="page-link" >{page2}</Link>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link" disabled={disable || disable2 < 4} onClick={() => setPage2((prev) => prev + 1)}>Next</button>
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

export default Product_details_table