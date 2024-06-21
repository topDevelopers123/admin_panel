import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAsyncValue } from "react-router-dom";
import { useAuthContext } from "../index.context";

export const BannerAuthContext = createContext()



function BannerContext({ children }) {
    const { authorizeToken } = useAuthContext()
    const [bannerData, setBannerData] = useState([])
    const [ShortbannerData, setShortBannerData] = useState([])
    const [disable, setDisable] = useState(false);

    const getBanner = async () => {
        try {
            const resp = await axios.get("/banner/get-admin", {
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

            const resp = await axios.post("/banner/create", data, {
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


    const deleteBanner = async (id) => {
        setDisable(true)

        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.delete(`/banner/delete/${id}`, {
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

            const resp = await axios.post("/shortBanner/create", data, {
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

    const getShortBanner = async () => {
        try {
            const resp = await axios.get("/shortBanner/get", {
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
            const resp = await axios.delete(`/shortBanner/delete/${id}`, {
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
