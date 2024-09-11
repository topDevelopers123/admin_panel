
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategoryContext } from '../../../Context/index.context';

function Sub_inner_category() {
    const { add_Sub_Inner_Category, all_Category } = useCategoryContext();
    const [sub_inner_Category, setSub_inner_Category] = useState({
        parent_category1: "",
        parent_category2: "",
        sub_inner_category_name: ""
    });
    const [error, setError] = useState("");
    const [resetSubInnerCategory, setResetSubInnerCategory] = useState(sub_inner_Category);
    const handleSubmit = () => {
        if (!sub_inner_Category.parent_category1 || !sub_inner_Category.parent_category2 || !sub_inner_Category.sub_inner_category_name) {
            setError("Please select a category, sub category, and enter a sub inner category name.");
        } else {
            setError("");
            add_Sub_Inner_Category(sub_inner_Category);
            setSub_inner_Category(resetSubInnerCategory);
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
                                        <li className="breadcrumb-item active" aria-current="page">Add Sub Inner Category</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <h5 className="card-title">Add Sub Inner Category</h5>
                                <hr />
                                <div className="form-body mt-4">
                                    <div className="row">
                                        <div className="border border-3 p-4 rounded">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="inputProductType" className="form-label">Select Category</label>
                                                    <select
                                                        className="form-select"
                                                        id="inputProductType"
                                                        value={sub_inner_Category?.parent_category1}
                                                        onChange={(e) => setSub_inner_Category({ ...sub_inner_Category, parent_category1: e.target.value })}
                                                    >
                                                        <option>Select Category</option>
                                                        {all_Category?.map((item, index) => (
                                                            <option value={item._id} key={index}>{item.category_name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="inputProductType" className="form-label">Select Sub Category</label>
                                                    <select
                                                        className="form-select"
                                                        id="inputProductType"
                                                        value={sub_inner_Category?.parent_category2}
                                                        onChange={(e) => setSub_inner_Category({ ...sub_inner_Category, parent_category2: e.target.value })}
                                                    >
                                                        <option>Select Sub Category</option>
                                                        {all_Category?.filter((item) => item._id === sub_inner_Category.parent_category1).map((i) => (
                                                            i?.Subcategory.map((ite, ind) => (
                                                                <option value={ite._id} key={ind}>{ite.sub_category_name}</option>
                                                            ))
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="subinnercat_name" className="form-label">Sub Inner Category Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="subinnercat_name"
                                                        placeholder="Enter Sub Inner Category Name"
                                                        value={sub_inner_Category?.sub_inner_category_name}
                                                        onChange={(event) => setSub_inner_Category({ ...sub_inner_Category, sub_inner_category_name: event.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {error && (
                                                <div className="col-12">
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

export default Sub_inner_category;
