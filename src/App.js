import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import Header from './admin_Panel/header/Header';
import Add_new_banner from './admin_Panel/banner/Add_new_banner';
import Category from './admin_Panel/category/main_category/Category';
import Sub_category from './admin_Panel/category/sub_category/Sub_category';
import Sub_inner_category from './admin_Panel/category/sub_inner_category/Sub_inner_category';
import Category_table from './admin_Panel/category/main_category/Category_table';
import Sub_category_table from './admin_Panel/category/sub_category/Sub_category_table';
import Sub_inner_category_table from './admin_Panel/category/sub_inner_category/Sub_inner_category_table';
import Order from './admin_Panel/order/order';
import Banner from './admin_Panel/banner/Banner'

// import Order from './admin_Panel/order/Order';
import Index from './admin_Panel/index/Index'
import Add_new_product from './admin_Panel/product/Add_new_product'
import Product_details from './admin_Panel/product/Product_details';
import Add_new_product_table from './admin_Panel/product/Add_new_product_table';
import Product_details_table from './admin_Panel/product/Product_details_table';

import Admin_panel from './admin_Panel/admin_panel';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />s
        <Routes>
          <Route path='/banner' element={<Banner />} />
          <Route path='/add-new-banner' element={<Add_new_banner />} />
          <Route path='/product-details' element={<Product_details />} />
          <Route path='/add-new-product' element={<Add_new_product />} />
          <Route path='/add-new-product-table' element={<Add_new_product_table />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product_details_table' element={<Product_details_table />} />
          <Route path='/category_table' element={<Category_table />} />
          <Route path='/Sub_category_table' element={<Sub_category_table />} />
          <Route path='/sub_category' element={<Sub_category />} />
          <Route path='/sub_inner_category_table' element={<Sub_inner_category_table />} />
          <Route path='/sub_inner_category' element={<Sub_inner_category />} />
          <Route path='/orders' element={<Order />} />



        </Routes>
        <Admin_panel />
      </BrowserRouter>
    </>
  );
}

export default App;
