import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext()



function AuthContextProvider({children}) {
    const [authorizeToken, setAuthorizeToken] = useState(localStorage.getItem("token"))
    const API = process.env.REACT_APP_API 
    // console.log(API);
    
    const register =async (data) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/create`, data)
            localStorage.setItem("token", resp.data.token)
            setAuthorizeToken(resp.data.token) 
            toast.dismiss(toastId);
            toast.success(resp.data.message)
        } catch (error) {
          
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }

    const login = async (data, handleReset) => {
        let toastId = toast.loading('Loading...');
        try {
            const resp = await axios.post(`${API}/user/login`, data)

            console.log(resp)

            if (resp?.data?.data?.role ==="admin"){
                localStorage.setItem("token", resp.data.token)
                setAuthorizeToken(resp?.data.token)
                toast.dismiss(toastId);
                toast.success(resp.data.message);
                handleReset()
                window.location.href="/dashboard"
            }else{
                 toast.error("Unauthorize")
                handleReset()
                window.location.href="/"
            }
        } catch (error) {

            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }

    }

  
    

  return (
      <AuthContext.Provider value={{ register, login, authorizeToken, API }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
