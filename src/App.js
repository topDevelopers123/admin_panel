import logo from './logo.svg';
import './App.css';
import Header from './admin_Panel/header/Header'; 
import Add_new_banner from './admin_Panel/banner/Add_new_banner';
import Category from './admin_Panel/category/main_category/Category';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Add_new_product from './admin_Panel/product/Add_new_product'
import Banner from './admin_Panel/banner/Banner';
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  return (
 <>
  <div>
    <Header/>
    <Add_new_product/>
        
        <Category />
    <Banner/>
  </div>
 </>
  );
}

export default App;
