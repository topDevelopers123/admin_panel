import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductAuthContext } from '../../Context/index.context';

function ProductDetails() {
    const { addProductDetails, allProduct } = useProductAuthContext();
    const [selectedImages, setSelectedImages] = useState([]);
    const [productDetail, setProductDetail] = useState({
        product_id: "",
        Size: "",
        color: "",
        MRP: "",
        sellingPrice: "",
        selling_quantity: "",
        inStock: "",
        image: []
    });

    // console.log(allProduct[0].ProductDetail[0].color);
    

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => ({
            id: file.name + file.size, // Unique identifier based on file properties
            url: URL.createObjectURL(file),
            file: file
        }));
        setSelectedImages(prevImages => [...prevImages, ...newImages]);
        setProductDetail(prevDetail => ({
            ...prevDetail,
            image: [...prevDetail.image, ...newImages.map(image => image.file)]
        }));
    };

    const handleImageDelete = (id) => {
        setSelectedImages(prevImages => prevImages.filter(image => image.id !== id));
        setProductDetail(prevDetail => ({
            ...prevDetail,
            image: prevDetail.image.filter(image => image.name + image.size !== id)
        }));
    };

    const submitHandler = async () => {
        const formData = new FormData();
        formData.append('product_id', productDetail.product_id);
        formData.append('Size', productDetail.Size);
        formData.append('color', productDetail.color);
        formData.append('MRP', productDetail.MRP);
        formData.append('sellingPrice', productDetail.sellingPrice);
        formData.append('selling_quantity', productDetail.selling_quantity);
        formData.append('inStock', productDetail.inStock);

        // Append each image file to FormData
        productDetail.image.forEach((file) => {
            formData.append(`image`, file);
        });

        // Call API or dispatch action to add product details
        try {
            await addProductDetails(formData);
            // Optionally handle success or navigate to another page
        } catch (error) {
            console.error('Error adding product details:', error);
            // Handle error
        }
    };

    return (
        <div className="wrapper">
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        <div className="breadcrumb-title pe-3">Mayavi Fashion</div>
                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/"><i className="bx bx-home-alt"></i></Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body p-4">
                            <h5 className="card-title">Product Details</h5>
                            <hr />
                            <div className="form-body mt-4">
                                <div className="row">
                                    <div className="border border-3 p-4 rounded">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="product-select" className="form-label">Select Product</label>
                                                <select id="product-select" className="form-select " onChange={(event) => setProductDetail({ ...productDetail, product_id: event.target.value })}>
                                                    <option>Select Product</option>
                                                    {allProduct?.map((item, i) => (
                                                        <option key={i} value={item._id}>{item.title}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="size-select" className="form-label">Size</label>
                                                <select id="size-select" onChange={(e) => setProductDetail({ ...productDetail, Size: e.target.value })} className="form-select">
                                                    <option></option>
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                    <option>XXL</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="color-select" className="form-label">Color</label>
                                                <select id="color-select" onChange={(e) => setProductDetail({ ...productDetail, color: e.target.value })} className="form-select">
                                                    <option>Select</option>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>Pink</option>
                                                    <option>Green</option>
                                                    <option>Black</option>
                                                    <option>White</option>
                                                    <option>Gray</option>
                                                    <option>Yellow</option>
                                                    <option>Orange</option>
                                                    <option>Purple</option>
                                                    <option>Brown</option>
                                                    <option>Multicolor</option>
                                                    
                                                </select>
                                            </div>
                                        </div>
                                       

                                        {
                                            !allProduct.filter((item) => item._id === productDetail.product_id)[0]?.ProductDetail?.filter((lm) => lm.color === productDetail.color).length > 0 && <div className="col-12" >
                                                <div className="form-body mt-4">
                                                    <div className="row">
                                                        { }
                                                        <div className="col-lg-12">
                                                            <div className="mb-3">
                                                                <label htmlFor="image-upload" className="form-label mb-3">Upload Images</label><br />
                                                                <input
                                                                    id="image-upload"
                                                                    type="file"
                                                                    accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                                                                    multiple // Allow multiple files
                                                                    onChange={handleImageChange}
                                                                />
                                                            </div>
                                                            <div className="image-preview mt-4">
                                                                {selectedImages.map((image, index) => (
                                                                    <div key={index} className="image-container" style={{ position: 'relative', display: 'inline-block', margin: '10px' }}>
                                                                        <img src={image.url} alt={`preview-${index}`} style={{ maxWidth: '150px', maxHeight: '150px' }} />
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleImageDelete(image.id)}
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
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        }

                                        
                                        


                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="mrp" className="form-label">MRP</label>
                                                <input type="text" onChange={(e) => setProductDetail({ ...productDetail, MRP: e.target.value })} className="form-control" id="mrp" placeholder="Enter MRP" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="selling-price" className="form-label">Selling Price</label>
                                                <input type="text" onChange={(e) => setProductDetail({ ...productDetail, sellingPrice: e.target.value })} className="form-control" id="selling-price" placeholder="Enter Selling Price" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="selling-quantity" className="form-label">Selling Quantity</label>
                                                <input type="text" onChange={(e) => setProductDetail({ ...productDetail, selling_quantity: e.target.value })} className="form-control" id="selling-quantity" placeholder="Enter Selling Quantity" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label htmlFor="in-stock" className="form-label">In Stock</label>
                                                <input type="text" onChange={(e) => setProductDetail({ ...productDetail, inStock: e.target.value })} className="form-control" id="in-stock" placeholder="In Stock Value" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid w-50 m-auto">
                                                <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</button>
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

export default ProductDetails;
