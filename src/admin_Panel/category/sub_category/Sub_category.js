
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../../Context/index.context';

function Sub_category() {
    const { add_Sub_Category, getCatgoryData } = useCategoryContext();
    const [SubCategory, setSubCategory] = useState({
        parent_category: "",
        sub_category_name: ""
    });
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!SubCategory.parent_category || !SubCategory.sub_category_name) {
            setError("Please select a parent category and enter a sub category name.");
        } else {
            setError("");
            add_Sub_Category(SubCategory);
        }
    };

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
                                        <li className="breadcrumb-item"><Link to="#"><i className="bx bx-home-alt"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Add Sub Category</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body p-4">
                                <h5 className="card-title">Add Sub Category</h5>
                                <hr />
                                <div className="form-body mt-4">
                                    <div className="row">
                                        <div className="border border-3 p-4 rounded">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="inputProductType" className="form-label">Select Parent Category</label>
                                                    <select
                                                        className="form-select"
                                                        id="inputProductType"
                                                        onChange={(event) => setSubCategory({ ...SubCategory, parent_category: event.target.value })}
                                                    >
                                                        <option>Select</option>
                                                        {getCatgoryData?.map((item, index) => (
                                                            <option value={item._id} key={index}>{item.category_name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="subcat_name" className="form-label">Sub Category Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="subcat_name"
                                                            placeholder="Enter Sub Category Name"
                                                            onChange={(event) => setSubCategory({ ...SubCategory, sub_category_name: event.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {error && (
                                                <div className="bg-none border-none col-12">
                                                    <div className="alert text-danger" role="alert">
                                                        {error}
                                                    </div>
                                                </div>
                                            )}
                                            <div className="col-12">
                                                <div className="d-grid w-50 m-auto">
                                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
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

export default Sub_category;
