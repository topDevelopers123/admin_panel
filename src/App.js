import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from './admin_Panel/header/Header';
import Add_new_banner from './admin_Panel/banner/Add_new_banner';
import Add_short_banner from './admin_Panel/banner/Add_short_banner';
import Category from './admin_Panel/category/main_category/Category';
import Sub_category from './admin_Panel/category/sub_category/Sub_category';
import Sub_inner_category from './admin_Panel/category/sub_inner_category/Sub_inner_category';
import Category_table from './admin_Panel/category/main_category/Category_table';
import Sub_category_table from './admin_Panel/category/sub_category/Sub_category_table';
import Sub_inner_category_table from './admin_Panel/category/sub_inner_category/Sub_inner_category_table';
import Order from './admin_Panel/order/order';
import Banner from './admin_Panel/banner/Banner'
import ShortBanner from './admin_Panel/banner/ShortBanner';
import Index from './admin_Panel/index/Index';
import Add_new_product from './admin_Panel/product/Add_new_product'
import Product_details from './admin_Panel/product/Product_details';
import Add_new_product_table from './admin_Panel/product/Add_new_product_table';
import Product_details_table from './admin_Panel/product/Product_details_table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Users from './admin_Panel/Users/Users';
import Return from './admin_Panel/Return/Return';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/banner' element={<Banner />} />
          <Route path='/short-banner' element={<ShortBanner />} />
          <Route path='/' element={<Index />} />
          <Route path='/add-new-banner' element={<Add_new_banner />} />
          <Route path='/add-short-banner' element={<Add_short_banner />} />
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
          <Route path='/users' element={<Users />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/returns' element={<Return />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
