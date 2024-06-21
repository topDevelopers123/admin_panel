import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCategoryContext } from '../../../Context/index.context'
import '../main_category/Category_table.css'

function Category_table() {
    const { getCatgoryData, deleteCategory, editCategory } = useCategoryContext()
    const [ind, setIndex] = useState(null)
    const [flag, setFlag] = useState(false)

    const [image, setImage] = useState(null)

    const imageHandler = (e) => {
        const file = e.target.files[0]
        const imageURl = URL.createObjectURL(file)
        console.log(imageURl);
        setImage(imageURl)

    }
    console.log(image);


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
                                    <li className="breadcrumb-item active" aria-current="page">Category Table</li>
                                </ol>
                            </nav>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="d-lg-flex align-items-center mb-4 gap-3">
                                <div className="position-relative">
                                    <input type="text" className="form-control ps-5 radius-30" placeholder="Search Order" /> <span className="position-absolute top-50 product-show translate-middle-y"><i className="bx bx-search"></i></span>
                                </div>

                            </div>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Category Image</th>
                                            <th>Category Name</th>
                                            <th>Created At</th>

                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getCatgoryData?.map((item, index) => {

                                            return <tr key={index}>

                                                <td>
                                                    <div className="d-flex align-items-center cat_img">
                                                        <div className="ms-2">
                                                            {flag && ind === index ?
                                                                <><input type='file' onChange={imageHandler} />  <img src={image ? image : item.image.image_url} /> </> : <img src={item.image.image_url} alt="img" />}

                                                        </div>

                                                    </div>

                                                </td>

                                                {/*  */}
                                                <td>
                                                    {flag && ind === index ? <input type='text' value={item?.category_name} /> : item?.category_name}


                                                </td>
                                                <td>{item?.createdAt.split("T")[0]}</td>
                                                <td>
                                                    <div className="d-flex order-actions">
                                                        {flag && index === ind ? <> <Link to="javascript:;" className="mx-2"><i class="bi bi-floppy"></i>
                                                        </Link>
                                                            <Link to="javascript:;" className=""><i class="bi bi-x-circle-fill" onClick={() => setFlag(!flag)} ></i></Link>
                                                        </>
                                                            : <> <Link to="javascript:;" className=""><i className="bi bi-pencil-square" onClick={() => { setFlag(!flag); setIndex(index) }}></i></Link>
                                                                <Link to="javascript:;" className="ms-3"><i className="bi bi-trash3-fill" onClick={() => deleteCategory(item._id)}></i></Link>
                                                            </>
                                                        }

                                                    </div>
                                                </td>

                                            </tr>


                                        })}

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

export default Category_table