import logo from './logo.svg';
import './App.css';
import Header from './admin_Panel/header/Header'; 
import Add_new_banner from './admin_Panel/banner/Add_new_banner';
import Category from './admin_Panel/category/main_category/Category';
import Sub_category from './admin_Panel/category/sub_category/Sub_category';
import Sub_inner_category from './admin_Panel/category/sub_inner_category/Sub_inner_category';
import Category_table from './admin_Panel/category/main_category/Category_table';
import Sub_category_table from './admin_Panel/category/sub_category/Sub_category_table';
import Sub_inner_category_table from './admin_Panel/category/sub_inner_category/Sub_inner_category_table';
// import Order from './admin_Panel/order/Order';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Add_new_product from './admin_Panel/product/Add_new_product'


function App() {
  return (
 <>
  <div>
    <Header/>
   

        <Category />
 

  </div>
 </>
  );
}

export default App;
