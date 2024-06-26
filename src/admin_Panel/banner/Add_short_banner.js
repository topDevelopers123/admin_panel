import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import "./Add_new_banner.css";
import { useBannerAuthContext } from '../../Context/index.context';


function Add_short_banner() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [file, setFile] = useState(null)

    const { shortBanner_Handler, disable } = useBannerAuthContext()

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        setFile(file)
        const newFile = URL?.createObjectURL(file)
        setSelectedImages(newFile)
        //   const formData = new FormData()
        //   formData.append("image", file)
        //     image_Handler(formData)
    };

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("image", file)
        console.log(formData);
        shortBanner_Handler(formData)
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
                                        <li className="breadcrumb-item"><Link to="javascript:;"><i className="bx bx-home-alt"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Add Short Banner</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body p-4">
                                <h5 className="card-title">Add Short Banner</h5>
                                <hr />
                                <div className="form-body mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="border border-3 p-4 rounded">
                                                <div className="mb-3 text-center">
                                                    <label className="form-label mb-3">Upload Short Banner</label><br></br>
                                                    <input
                                                        id=""
                                                        type="file"
                                                        accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                                                        multiple
                                                        onChange={handleImageChange}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid w-50 m-auto">
                                                        <button disabled={disable} type="button" className="btn btn-primary" onClick={uploadImage}>Upload Short Banner</button>
                                                    </div>
                                                </div>
                                                <div className="image-preview mt-4">
                                                    {
                                                        <div className="image-container" style={{ position: 'relative', display: 'inline-block', margin: '10px' }}>
                                                            <img src={selectedImages} alt={"image"} style={{ maxWidth: '150px', maxHeight: '150px' }} />
                                                            <button
                                                                type="button"

                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '5px',
                                                                    right: '5px',
                                                                    background: 'red',
                                                                    color: 'white',
                                                                    border: 'none',
                                                                    borderRadius: '50%',
                                                                    cursor: 'pointer'
                                                                }}

                                                            >
                                                                &times;
                                                            </button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add_short_banner;
