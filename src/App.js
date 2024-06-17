import logo from './logo.svg';
import './App.css';
import Header from './admin_Panel/header/Header'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from './admin_Panel/banner/Banner';
import "bootstrap-icons/font/bootstrap-icons.css";



function App() {
  return (
 <>
  <div>
    <Header/>
    <Banner/>
  </div>
 </>
  );
}

export default App;
