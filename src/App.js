import logo from './logo.svg';
import './App.css';
import Header from './admin_Panel/header/Header'; 
import Add_new_banner from './admin_Panel/banner/Add_new_banner';
import Category from './admin_Panel/category/main_category/Category';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



function App() {
  return (
 <>
  <div>
    <Header/>
        <Add_new_banner />
        <Category />
  </div>
 </>
  );
}

export default App;
