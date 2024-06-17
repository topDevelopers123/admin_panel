import React from 'react'
import './Add_new_product.css'

function Add_new_product() {
  return (
      <div className='container-fluid add_product_main_box mt-3'>
        <div className='container  '>
            <h1 className='text-center'>ADD NEW PRODUCT</h1>
            <div className='row '>
                <div className='col-12 my-3'>
                    <label>Product Title</label>
                    <input className='w-100 mt-2 form-control' placeholder='Add Title' type='text' />
                </div>

                <div className='col-12 my-3'>
                    <label>Product Description</label>
                    <input className='w-100 mt-2 form-control' placeholder='Add Description' type='text' />
                </div>


                <div className='col-12 my-3'>
                    <label>Category</label>
                    <select className='w-100 mt-2 form-select' >
                        <option></option>
                        <option>Men's</option>
                        <option>Women's</option>
                        <option>Kid's</option>
                    </select>
                   
                </div>

                <div className='col-12 my-3'>
                    <label>Sub Category</label>
                      <select className='w-100 mt-2 form-select'>
                          <option></option>
                          <option>Topwear</option>
                          <option>Bottomwear</option>
                          <option>Footwear</option>
                      </select>
                </div>


                <div className='col-12 my-3'>
                    <label>Sub Inner Category</label>
                      <select className='w-100 mt-2 form-select'>
                          <option></option>
                          <option>Jeans</option>
                          <option>Tshirt</option>
                          <option>Shoes</option>
                      </select>
                </div>


                <div className='col-12 my-3'>
                    <label>Local Charges</label>
                      <input className='w-100 mt-2 form-control' placeholder="Add Local Charges" type='number'  />
                </div>

                 <div className='col-12 my-3'>
                    <label>Zonal Charges</label>
                      <input className='w-100 mt-2 form-control' placeholder="Add Zonal Charges" type='number' />
                </div>

                 <div className='col-12 my-3'>
                    <label>National Charges </label>
                      <input className='w-100 mt-2 form-control' placeholder="Add National Charges" type='number' />
                </div>

                 <div className='col-12 my-3'>
                    <label>Local Deadline</label>
                      <input className='w-100 mt-2 form-control' placeholder="Add Local Charges" type='number' />
                </div>

                 <div className='col-12 my-3'>
                    <label>Zonal Deadline</label>
                      <input className='w-100 mt-2 form-control' placeholder="Add Zonal Charges" type='number' />
                </div>

                 <div className='col-12 my-3'>
                    <label>National Deadline</label>
                      <input className='w-100 mt-2 form-control' placeholder="Add National Charges" type='number' />
                </div>

                  <div className='col-12 my-3'>
                      <button className='w-100 mt-2 btn btn-primary fw-bold fs-5'>Submit</button>
                  </div>

                
            </div>
        </div>
    </div>
  )
}

export default Add_new_product