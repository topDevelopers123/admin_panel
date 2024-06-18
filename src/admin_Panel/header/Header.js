import React from 'react'
import "./Header.css";
import user_img from "./img/user_img.png"

function Header() {
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
                  <h4 className="logo-text">Mayavi</h4>
                  
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
                <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={user_img} className="user-img" alt="user avatar" />
                  <div className="user-info ps-3">
                    <p className="user-name mb-0">Admin</p>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="javascript:;"><i className="bx bx-log-out-circle"></i><span>Logout</span></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div className="primary-menu">
          <nav className="navbar navbar-expand-lg align-items-center">
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header border-bottom">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src="
                    
                    " className="logo-icon" alt="logo icon" />
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
                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                      <div className="parent-icon">
                        <i class="bi bi-house-door"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">
                        Dashboard
                      </div>
                     
                    </a>
                    
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                      <div className="parent-icon"><i class="bi bi-images"></i></div>
                      <div className="menu-title d-flex align-items-center">
                        Banners
                      </div>
                      <div className="ms-auto dropy-icon">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="banner.php"><i className="bx bx-radio-circle"></i>Banner</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="add_banner.php"><i className="bx bx-radio-circle"></i>Add New
                          Banner</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                      <div className="parent-icon">
                        <i class="bi bi-cart-check"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">
                        Product
                      </div>
                      <div className="ms-auto dropy-icon">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="products.php"><i className="bx bx-radio-circle"></i>Products</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="product_details.php"><i className="bx bx-radio-circle"></i>Product
                          Details</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="add_new_product.php"><i className="bx bx-radio-circle"></i>Add New
                          Products</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                      <div className="parent-icon">
                       <i class="bi bi-ui-checks-grid"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">
                        Category
                      </div>
                      <div className="ms-auto dropy-icon">
                        <i className="bi bi-chevron-down"></i>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="category.php"><i className="bx bx-radio-circle"></i>Category</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="sub_category.php"><i className="bx bx-radio-circle"></i>Sub Category</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="sub_inner_category.php"><i className="bx bx-radio-circle"></i>Sub Inner
                          Category</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="category_table.php"><i className="bx bx-radio-circle"></i>Category
                          Table</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="sub_category_table.php"><i className="bx bx-radio-circle"></i>Sub Category
                          Table</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="sub_inner_category_table.php"><i className="bx bx-radio-circle"></i>Sub Inner Category
                          Table</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="orders.php">
                      <div className="parent-icon">
                        <i class="bi bi-bag-check"></i>
                      </div>
                      <div className="menu-title d-flex align-items-center">
                        Order
                      </div>

                    </a>

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

export default Header