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
     

        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)


        } finally {
            setDisable(false)
        }
    }


    useEffect(()=>{
        get_All_Products()
    },[])

    


    return (
        <ProductAuthContext.Provider value={{ addProduct, allProduct }}>
            {children}
        </ProductAuthContext.Provider>
    )
}

export default ProductContextProvider;
