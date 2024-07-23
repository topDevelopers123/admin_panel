import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../index.context";
export const UserAuthContext = createContext()



function UserContextProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [users, setUsers] = useState([])
    // const [disable, setDisable] = useState(false);

    const getUsers = async () => {
        try {
            const resp = await axios.get(`${API}/user/getAllUserByAdmin`, {
                headers: {
                    'Authorization': `Bearer ${authorizeToken}`
                }
            })

            setUsers(resp.data.data);
       

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getUsers()

    }, [])


    return (
        <UserAuthContext.Provider value={{ users }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserContextProvider;
