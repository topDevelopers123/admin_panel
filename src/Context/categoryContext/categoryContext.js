import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext, useCategoryContext } from "../index.context";

export const CategoryContext = createContext()


function CategoryContextProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()

    // Main Category Code
    const [disable, setDisable] = useState(false)
    const [getCatgoryData, setCategory] = useState(null)
    const [get_Sub_Category_data, setGet_Sub_Category_data] = useState(null)
    const [get_Sub_Inner_Category_data, setGet_Sub_Inner_Category_data] = useState(null)
    const [all_Category, setAll_Category] = useState(null)
    const [page, setPage] = useState(1);
    const [InnerCategoryTable, setInnerCategoryTable] = useState(null)


    const getCategory = async () => {
        try {
            const resp = await axios.get(`${API}/category/get-admin`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })


            setCategory(resp.data.data)

        } catch (error) {
            console.log(error)
        }
    }
    const get_All_Category_admin = async () => {
        setDisable(true)
        try {
            const resp = await axios.get(`${API}/sub-inner-category/get-admin?page=${page}&limit=5`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            setInnerCategoryTable(resp.data.data);
            // console.log(resp.data.data);

        } catch (error) {
            console.log(error)
        } finally {
            setDisable(false)
        }
    }



    const addCategory = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/category/create`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getCategory()
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        } finally {
            setDisable(false)
        }
    }


    const deleteCategory = async (id) => {
        const toastId = toast.loading('Loading...');

        try {
            const resp = await axios.delete(`${API}/category/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getCategory()
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }


    const editCategory = async (data, id) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.put(`${API}/category/update/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            console.log(resp);
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getCategory()
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }

    // Sub-Category Code

    const get_Sub_Category = async () => {
        try {
            const resp = await axios.get(`${API}/sub-category/get?page=1&limit=10`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })

            setGet_Sub_Category_data(resp.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const add_Sub_Category = async (data) => {

        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/sub-category/create`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_Sub_Category()
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)

        } finally {
            setDisable(false)
        }
    }

    const edit_Sub_Category = async (data, id) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.put(`${API}/sub-category/update/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            console.log(resp);
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_Sub_Category()
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }



    const delete_Sub_Category = async (id) => {
        const toastId = toast.loading('Loading...');

        try {
            const resp = await axios.delete(`${API}/sub-category/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_Sub_Category()
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }





    const get_All_Category = async () => {
        try {
            const resp = await axios.get(`${API}/category/category`)
            setAll_Category(resp.data.data);

        } catch (error) {
            console.log(error)
        }
    }



    const add_Sub_Inner_Category = async (data) => {
        console.log(data);
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/sub-inner-category/create`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Category()

        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)


        } finally {
            setDisable(false)
        }
    }

    const edit_Sub_Inner_Category = async (data, id) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.put(`${API}/sub-inner-category/update/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            console.log(resp);
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_Sub_Category()
        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }



    const delete_Sub_Inner_Category = async (id) => {
        const toastId = toast.loading('Loading...');

        try {
            const resp = await axios.delete(`${API}/sub-inner-category/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            get_All_Category()

        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }



    useEffect(() => {

        getCategory()
        get_Sub_Category()
        get_All_Category()

    }, [])
    useEffect(() => {


        get_All_Category_admin()
    }, [page])








    return (
        <CategoryContext.Provider value={{ addCategory, page, setPage, InnerCategoryTable, getCatgoryData, deleteCategory, editCategory, add_Sub_Category, get_Sub_Category_data, get_Sub_Inner_Category_data, all_Category, edit_Sub_Category, delete_Sub_Category, add_Sub_Inner_Category, delete_Sub_Inner_Category, edit_Sub_Inner_Category }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider