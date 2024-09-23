import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../index.context";

export const ProductAuthContext = createContext()

function ProductContextProvider({ children }) {

    const { authorizeToken, API } = useAuthContext()
    const [disable, setDisable] = useState(false);
    const [allProduct, setAllProduct] = useState([])
    const [page, setPage] = useState(1)
    const [page2, setPage2] = useState(1)
    const [disable2, setDisable2] = useState(0)
    const [allProductDetailsData, setAllProductDetailsData] = useState([])
    const [getAdminProducData, setAdminProductData] = useState([]);


    const get_All_Products = async () => {
        setDisable(true)
        try {
            const resp = await axios.get(`${API}/product/admin-get?page=${page}&limit=4`,
                {
                    headers: { 'Authorization': `Bearer ${authorizeToken}` }
                })
            setAllProduct(resp?.data?.data)
        } catch (error) {
            console.log(error)
        } finally {
            setDisable(false)
        }
    }

    const addProduct = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/product/create`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products();
            getAdminAllProductDetails();
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.error)
            console.log(error);
        } finally {
            setDisable(false)
        }
    }


    const edit_Product = async (data, id) => {
        const toastId = toast.loading('Loading...');
        console.log(data)
        try {
            const resp = await axios.put(`${API}/product/update/${id}`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
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
            const resp = await axios.delete(`${API}/product/delete/${id}`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products();
            getAdminAllProductDetails();
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
            const resp = await axios.post(`${API}/product-details/create`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
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
        setDisable(true)
        try {
            const resp = await axios.get(`${API}/product/admin-get?page=${page2}&limit=4`,
                {
                    headers: { 'Authorization': `Bearer ${authorizeToken}` }
                }
            )
            setAllProductDetailsData(resp?.data?.data);
            setDisable2(resp?.data?.data?.length)
        } catch (error) {
            console.log(error)
        } finally {
            setDisable(false)
        }
    }

    // GetAdminProductDetails 
    const getAdminAllProductDetails = async () => {
        try {
            const resp = await axios.get(`${API}/product/admin-getAllProduct`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            setAdminProductData(resp?.data);
        } catch (error) {
            console.log(error)
        }
    }


    const edit_All_Product_Details = async (data, id) => {
        const toastId = toast.loading('Loading...');
        console.log(data, id)
        try {
            const resp = await axios.put(`${API}/product-details/update/${id}`, data, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products_Details();
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }



    const delete_All_Product_Details = async (id) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.delete(`${API}/product-details/delete/${id}`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Products_Details()

        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        if (authorizeToken) {
            get_All_Products_Details()
        }
    }, [authorizeToken])


    useEffect(() => {
        if (authorizeToken) {
            get_All_Products()
        }
    }, [page, authorizeToken])


    useEffect(() => {
        if (authorizeToken) {
            get_All_Products_Details()
        }
    }, [page2, authorizeToken])

    useEffect(() => {
        if (authorizeToken) {
            getAdminAllProductDetails();
        }
    }, [authorizeToken])




    return (
        <ProductAuthContext.Provider value={{ addProduct, allProduct, edit_Product, delete_Product, addProductDetails, get_All_Products_Details, get_All_Products, allProductDetailsData, edit_All_Product_Details, delete_All_Product_Details, page, setPage, disable, page2, setPage2, disable2, getAdminProducData }}>
            {children}
        </ProductAuthContext.Provider>
    )
}
export default ProductContextProvider;
