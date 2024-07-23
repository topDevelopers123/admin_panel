import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAsyncValue } from "react-router-dom";
import { useAuthContext } from "../index.context";

export const OrderAuthContext = createContext()



function OrderContextProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [orders, setOrders] = useState([])
    const [page, setPage] = useState(1);
    const [disable, setDisable] = useState(false);

    const getOrders = async () => {
        setDisable(true)
        try {
            const resp = await axios.get(`${API}/order/get-orders?index=${page}&limit=5`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            
            setOrders(resp.data.data);
           
       

        } catch (error) {
            console.log(error);
        }finally{
            setDisable(false)
        }

    }


    useEffect(() => {
        getOrders()
       
    }, [page])


    return (
        <OrderAuthContext.Provider value={{ orders, setPage, disable }}>
            {children}
        </OrderAuthContext.Provider>
    )
}

export default OrderContextProvider;
