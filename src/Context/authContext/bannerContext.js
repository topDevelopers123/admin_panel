import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAsyncValue } from "react-router-dom";
import { useAuthContext } from "../index.context";

export const BannerAuthContext = createContext()



function BannerContext({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [bannerData, setBannerData] = useState([])
    const [ShortbannerData, setShortBannerData] = useState([])
    const [disable, setDisable] = useState(false);

    const getBanner = async () => {
        try {
            const resp = await axios.get(`${API}/banner/get-admin`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            setBannerData(resp.data.data)
           

        } catch (error) {
            console.log(error);
        }

    }

    const image_Handler = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {

            const resp = await axios.post(`${API}/banner/create`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getBanner();

        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message || error.response.data?.split("<pre>")[1]?.split("</pre>")[0])
        }
        finally { setDisable(false) }

    }


    const deleteBanner = async (id) => {
        setDisable(true)

        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.delete(`${API}/banner/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getBanner();
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
        finally { setDisable(false) }

    }

    const shortBanner_Handler = async (data) => {
        setDisable(true)
        const toastId = toast.loading('Loading...');
        try {

            const resp = await axios.post(`${API}/shortBanner/create`, data, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getShortBanner();

        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
            console.log(error)
        }
        finally { setDisable(false) }

    }

    const getShortBanner = async () => {
        try {
            const resp = await axios.get(`${API}/shortBanner/get-admin`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            setShortBannerData(resp.data.data)


        } catch (error) {
            console.log(error);
        }

    }

    const deleteShortBanner = async (id) => {
        setDisable(true)

        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.delete(`${API}/shortBanner/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            toast.dismiss(toastId);
            toast.success(resp.data.message)
            getShortBanner();
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
        finally { setDisable(false) }

    }

    useEffect(() => {
        getBanner()
        getShortBanner()
    }, [])


    return (
        <BannerAuthContext.Provider value={{ image_Handler, bannerData, deleteBanner, disable, shortBanner_Handler, ShortbannerData, deleteShortBanner }}>
            {children}
        </BannerAuthContext.Provider>
    )
}

export default BannerContext;
