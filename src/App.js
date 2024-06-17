import logo from './logo.svg';
import './App.css';
import Header from './admin_Panel/header/Header'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Add_new_product from './admin_Panel/product/Add_new_product'


function App() {
  return (
 <>
  <div>
    <Header/>
    <Add_new_product/>
  </div>
 </>
  );
}

export default App;
