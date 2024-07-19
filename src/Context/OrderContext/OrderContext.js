import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAsyncValue } from "react-router-dom";
import { useAuthContext } from "../index.context";

export const OrderAuthContext = createContext()



function OrderContextProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [orders, setOrders] = useState([])
    const [disable, setDisable] = useState(false);

    const getOrders = async () => {
        try {
            const resp = await axios.get(`${API}/order/get-orders`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            
            setOrders(resp.data.data);

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getOrders()
       
    }, [])


    return (
        <OrderAuthContext.Provider value={{ orders }}>
            {children}
        </OrderAuthContext.Provider>
    )
}

export default OrderContextProvider;
