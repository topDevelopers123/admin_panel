import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './Context/authContext/authContext';
import BannerContext from './Context/authContext/bannerContext';
import CategoryContextProvider from './Context/categoryContext/categoryContext';
import ProductContextProvider from './Context/ProductContext/ProductContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CategoryContextProvider>
        <ProductContextProvider>
    <BannerContext>
    <App />
      </BannerContext>
        </ProductContextProvider>
      </CategoryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
