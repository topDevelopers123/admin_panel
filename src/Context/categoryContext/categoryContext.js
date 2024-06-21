import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useCategoryContext } from "../index.context";

export const CategoryContext = createContext()


function CategoryContextProvider({children}) {

    const [disable,setDisable] = useState(false)
    const [getCatgoryData ,setCategory] = useState(null)
    
    const getCategory = async () => {
        try {
            const resp = await axios.get("/category/get-admin", {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzNiYmVlMGY3YWZmOTllZTZhYzcwOSIsImVtYWlsIjoicGFyYXNqaXNjb0BnbWFpbC5jb20iLCJpYXQiOjE3MTg4Njc5MjF9.vdZMZETfxZ0qaP1rhpjq5OQNM5nDxXO7B6Iu9-ZK9bg`
                }
            })

            setCategory(resp.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addCategory = async(data)=>{
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post("/category/create", data, {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzNiYmVlMGY3YWZmOTllZTZhYzcwOSIsImVtYWlsIjoicGFyYXNqaXNjb0BnbWFpbC5jb20iLCJpYXQiOjE3MTg4Njc5MjF9.vdZMZETfxZ0qaP1rhpjq5OQNM5nDxXO7B6Iu9-ZK9bg`
                }
            })   
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getCategory()
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }finally{
            setDisable(false)
        }
    }


    const deleteCategory =async (id) => {
        const toastId = toast.loading('Loading...');
        
        try {
            const resp = await axios.delete(`/category/delete/${id}` , {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzNiYmVlMGY3YWZmOTllZTZhYzcwOSIsImVtYWlsIjoicGFyYXNqaXNjb0BnbWFpbC5jb20iLCJpYXQiOjE3MTg4Njc5MjF9.vdZMZETfxZ0qaP1rhpjq5OQNM5nDxXO7B6Iu9-ZK9bg`
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


    const editCategory =async (data, id) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.put(`/category/update/${id}`, data, {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzNiYmVlMGY3YWZmOTllZTZhYzcwOSIsImVtYWlsIjoicGFyYXNqaXNjb0BnbWFpbC5jb20iLCJpYXQiOjE3MTg4Njc5MjF9.vdZMZETfxZ0qaP1rhpjq5OQNM5nDxXO7B6Iu9-ZK9bg`
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
    
    useEffect(() => {

      getCategory()
    
      
    }, [])
    

  




    return (
        <CategoryContext.Provider value={{ addCategory, getCatgoryData, deleteCategory, editCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider