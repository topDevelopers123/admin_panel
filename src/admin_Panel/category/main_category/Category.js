import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCategoryContext } from '../../../Context/index.context'
import '../main_category/Category.css'

function Category() {

    const { addCategory } = useCategoryContext()
    const [image, setImage] = useState(null)
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        image: null,
        name: ""
    })
    const [resetCategoryForm, setResetCategoryForm] = useState(data)
    const imageHadler = (e) => {
        const file = e.target.files[0]
        const imageURl = URL.createObjectURL(file)
        setImage(imageURl)
        setData({ ...data, image: file })
    }
    const resetCategoryImage = useRef();
    const submitHandler = () => {
        if (data.name === null || data.image === null) {
            setError(true)
            return
        } else {
            const formData = new FormData()
            formData.append("category_name", data.name)
            formData.append("image", data.image)
            addCategory(formData);
            setData(resetCategoryForm);
            resetCategoryImage.current.value = "";
            setImage([]);
        }
    }

    return (
        <div>
            <div className="wrapper">
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                            <div className="breadcrumb-title pe-3">Mayavi Fashion</div>
                            <div className="ps-3">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0 p-0">
                                        <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Add Category</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <h5 className="card-title">Add Category</h5>
                                <hr />
                                <div className="form-body mt-4">
                                    <div className="row">
                                        <div className="border border-3 p-4 rounded">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="cat_name" className="form-label">Category Name</label>
                                                    <input type="text" className="form-control" id="cat_name" value={data?.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Enter Category Name" />
                                                    {!data.name && error ? <p className='text-red-500 my-2'>Please Enter Category Name</p> : ""}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3 ">
                                                    <label htmlFor="inputProductImages" className="form-label">Upload Category Image</label> <br></br>
                                                    <input id="image-uploadify" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" ref={resetCategoryImage} onChange={imageHadler} />
                                                    {!data.image && error ? <p className='text-red-500 my-2'>Please Select Image</p> : ""}
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid w-50 m-auto">
                                                        <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <img className='preview_image' src={image} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category