import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../index.context";


export const OrderAuthContext = createContext();


function OrderContextProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [orders, setOrders] = useState([])
    const [page, setPage] = useState(1);
    const [disable, setDisable] = useState(false);
    const [returnData, getReturnData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);


    const getOrders = async () => {
        setDisable(true)
        try {
            const resp = await axios.get(`${API}/order/get-orders?index=${page}&limit=5`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            setOrders(resp?.data?.data);

        } catch (error) {
            console.log(error);

        } finally {
            setDisable(false)
        }
    }

    // getMonthlySellingChart

    const getToatalMonthlySelling = async () => {
        setDisable(true)
        try {
            const resp = await axios.get(`${API}/order/Admin-dashboard-revenue`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            setMonthlyData(resp?.data);
        } catch (error) {
            console.log(error);

        } finally {
            setDisable(false)
        }
    }

    // Get Return Product 
    const getRetrunProduct = async () => {
        try {
            const resp = await axios.get(`${API}/return/get-return-order`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })
            getReturnData(resp?.data?.data);
        } catch (error) {
            console.log(error)
        }
    }

    // Update Return Product 
    const updateReturnProduct = async (id, approved,) => {
        const toastId = toast.loading('Loading...');
        try {
            const resp = await axios.patch(`${API}/return/update-return/${id}`, { approved }, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })

            toast.dismiss(toastId);
            toast.success("Status updated succesfully")
            getRetrunProduct();

        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        if (authorizeToken) {
            
            getToatalMonthlySelling()
        }
    }, [authorizeToken])

    useEffect(() => {
        if (authorizeToken){

            getRetrunProduct();
        }
    }, [authorizeToken])


    useEffect(() => {
        if(authorizeToken){

            getOrders();
        }

    }, [page, authorizeToken])


    return (
        <OrderAuthContext.Provider value={{ orders, setPage, disable, returnData, updateReturnProduct, monthlyData }}>
            {children}
        </OrderAuthContext.Provider>
    )
}
export default OrderContextProvider;
