import React from 'react'
import './Product_details.css'
import tshirt from './images/Product-Your-Design-Here-02-3.jpg'
import { Link } from 'react-router-dom'
import { useProductAuthContext } from '../../Context/index.context'

function Product_details_table() {
    const { allProductDetailsData } = useProductAuthContext()
  
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

                                      {allProductDetailsData?.map((item, i) => (
                                          
                                            <>
                                              {item?.ProductDetail?.filter((ele, i)=>{
                                                return item._id === ele.product_id 
}).map((ite, i)=>(
    <>
    {console.log(ite)}
    <tr tr className='' >
        <td>
            <div className="d-flex align-items-center images_div">
                <div>
                    <img src={ite.image[0].image_url} />
                </div>

            </div>
        </td>
        <td className=''>{item.title}</td>
        <td className=''>
            <select>
                    <option>{ite.Size}</option>
            </select>
        </td>
        <td className=''>
            {ite.color}
        </td>
            <td className=''>₹{ite.sellingPrice}</td>
            <td className=''>₹{ite.MRP}</td>
        <td className=''>
                {ite.selling_quantity}
        </td>
        <td className=''>
                {ite.inStock}
        </td>
        <td className=''>
            <button className='bg-transparent border-0'>  <i className="bi bi-pencil-square mx-2"></i></button>
            <button className='bg-transparent border-0'><i className="bi bi-trash3 mx-2"></i></button>
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