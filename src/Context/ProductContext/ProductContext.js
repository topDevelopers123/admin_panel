import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAsyncValue } from "react-router-dom";
import { useAuthContext } from "../index.context";

export const ProductAuthContext = createContext()



function ProductContextProvider({ children }) {
    
    const { authorizeToken } = useAuthContext()
    const [disable, setDisable] = useState(false);
    const [allProduct, setAllProduct] = useState([])
    const [allProductDetailsData, setAllProductDetailsData] = useState([])


    const get_All_Products = async () => {
        try {
            const resp = await axios.get("/product/admin-get",
                {
                    headers: {
                        'Authorization': `Bearer ${authorizeToken}`
                    }
                }
            )
           
            
            setAllProduct(resp.data.data)

          
        } catch (error) {
            console.log(error)
        }
    }

    
    const addProduct = async (data) => {
    
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("/product/create", data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products()

        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)


        } finally {
            setDisable(false)
        }
    }


    const edit_Product = async (data, id) => {
        const toastId = toast.loading('Loading...');
        console.log(data)
        try {
            const resp = await axios.put(`/product/update/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            // console.log(resp);
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products()
           
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }


    const delete_Product = async (id) => {
        const toastId = toast.loading('Loading...');

        try {
            const resp = await axios.delete(`/product/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products()

        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }


    // /product-details/create


    const addProductDetails = async (data) => {
        
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("/product-details/create", data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products_Details()
         
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
            console.log(error);

        } finally {
            setDisable(false)
        }
    }


   


    const get_All_Products_Details = async () => {
        console.log("object")
        try {
            const resp = await axios.get("/product/admin-get",
                {
                    headers: {
                        'Authorization': `Bearer ${authorizeToken}`
                    }
                }
            )


        
            setAllProductDetailsData(resp.data.data);


        } catch (error) {
            console.log(error)
        }
    }


    const edit_All_Product_Details = async (data, id) => {
        const toastId = toast.loading('Loading...');
        console.log(data, id)
        try {
            const resp = await axios.put(`/product-details/update/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            // console.log(resp);
            
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products_Details()
         

        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }



    const delete_All_Product_Details = async (id) => {
        const toastId = toast.loading('Loading...');

        try {
            const resp = await axios.delete(`/product-details/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products_Details()
          
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }




    useEffect(()=>{
        get_All_Products()
        get_All_Products_Details()
    },[])

    


    return (
        <ProductAuthContext.Provider value={{ addProduct, allProduct, edit_Product, delete_Product, addProductDetails, get_All_Products_Details, get_All_Products, allProductDetailsData, edit_All_Product_Details, delete_All_Product_Details  }}>
            {children}
        </ProductAuthContext.Provider>
    )
}

export default ProductContextProvider;
