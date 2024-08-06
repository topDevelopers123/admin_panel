import React from 'react'
import "./Header.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link } from 'react-router-dom';
import user_img from "./img/user_img.png"
import toast from "react-hot-toast";

function Header() {

  const handleLogout = () => {
    confirmAlert({
      title: 'Confirm to logout',
      message: 'Do you really wants to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            toast.success('Logout successful!');
            localStorage.clear();
            window.location.href = '/';
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  };

  return (
    
    <div>
      <div className="header-wrapper">

        <header>
          <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand gap-3">
              <div className="topbar-logo-header">
                {/* <div className="">
                  <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
                </div> */}
                <div className="">
                  <Link to="/dashboard"><h4 className="logo-text">Mayavi</h4></Link> 
                </div>
              </div>
              <div className="mobile-toggle-menu d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <i className="bx bx-menu"></i>
              </div>
              <div className="search-bar flex-grow-1">
                <div className="position-relative search-bar-box">
                  <input type="text" className="form-control search-control" placeholder="Type to search..." />
                  <span className="position-absolute top-50 search-show translate-middle-y"><i className="bx bx-search"></i></span>
                  <span className="position-absolute top-50 search-close translate-middle-y"><i className="bx bx-x"></i></span>
                </div>
              </div>
              <div className="top-menu ms-auto">               
              </div>
              <div className="user-box dropdown px-3">
                <Link className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={user_img} className="user-img" alt="user avatar" />
                  <div className="user-info ps-3">
                    <p className="user-name mb-0">Admin</p>
                  </div>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end" onClick={handleLogout}>
                  <li>
                    <Link className="dropdown-item" to="#"><i className="bx bx-log-out-circle"></i><span>Logout</span></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <div className="primary-menu">
          <nav className="navbar navbar-expand-lg align-items-center">
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header border-bottom">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="" className="logo-icon" alt="logo icon" />
                  </div>
                  <div className="">
                    <h4 className="logo-text">Mayavi</h4>
                  </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav align-items-center flex-grow-1">
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle-nocaret" to="#" data-bs-toggle="">
                      <div className='flex'>
                      <div className="parent-icon me-2">
                        <i className="bi bi-house-door text-black text-xl"></i>                        
                      </div>
                      <div className=" d-flex align-items-center">
                        <Link to="/dashboard" className='text-dark text-[16px]'>Dashboard</Link>
                      </div>
                      </div>                     
                    </div>                    
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                      <div className="parent-icon"><i className="bi bi-images"></i></div>
                      <div className="menu-title d-flex align-items-center">
                        Banners
                      </div>
                      <div className="ms-auto dropy-icon">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/banner"><i className="bx bx-radio-circle"></i>Banner</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/add-new-banner"><i className="bx bx-radio-circle"></i>Add New
                          Banner</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/short-banner"><i className="bx bx-radio-circle"></i>Short Banner</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/add-short-banner"><i className="bx bx-radio-circle"></i>Add Short
                          Banner</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                      <div className="parent-icon">
                        <i className="bi bi-cart-check"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">
                        Product
                      </div>
                      <div className="ms-auto dropy-icon">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/product-details"><i className="bx bx-radio-circle"></i>Product Details</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/product_details_table"><i className="bx bx-radio-circle"></i>Product
                          Details Table</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/add-new-product"><i className="bx bx-radio-circle"></i>Add New
                          Products</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/add-new-product-table"><i className="bx bx-radio-circle"></i> 
                          Products Table</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="#" data-bs-toggle="dropdown">
                      <div className="parent-icon">
                       <i className="bi bi-ui-checks-grid"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">
                        Category
                      </div>
                      <div className="ms-auto dropy-icon">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/category"><i className="bx bx-radio-circle"></i>Category</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sub_category"><i className="bx bx-radio-circle"></i>Sub Category</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sub_inner_category"><i className="bx bx-radio-circle"></i>Sub Inner
                          Category</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/category_table"><i className="bx bx-radio-circle"></i>Category
                          Table</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Sub_category_table"><i className="bx bx-radio-circle"></i>Sub Category
                          Table</Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/sub_inner_category_table"><i className="bx bx-radio-circle"></i>Sub Inner Category
                          Table</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="/users" >
                      <div className="parent-icon">
                        <i className="bi bi-person"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">
                        User
                      </div>                      
                    </Link>                   
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="/orders">
                      <div className="parent-icon">
                        <i className="bi bi-bag-check"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">                        
                        Order
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="/returns">
                      <div className="parent-icon">
                        <i className="bi bi-arrow-repeat"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">                        
                        Return
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

      </div>
    </div>
  )
}

export default Header;