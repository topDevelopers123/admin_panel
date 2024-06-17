import logo from './logo.svg';
import './App.css';
import Header from './admin_Panel/header/Header'; 
import Add_new_banner from './admin_Panel/banner/Add_new_banner';
import Category from './admin_Panel/category/main_category/Category';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Add_new_product from './admin_Panel/product/Add_new_product'
import Product_details from './admin_Panel/product/Product_details';
import Product_details_table from './admin_Panel/product/Product_details_table';
import Add_new_product_table from './admin_Panel/product/Add_new_product_table';

function App() {
  return (
 <>
  <div>
    <Header/>
   
        <Add_new_product_table />
        <Category />
  </div>
 </>
  );
}

export default App;
