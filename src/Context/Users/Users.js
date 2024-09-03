import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../index.context";
export const UserAuthContext = createContext()



function UserContextProvider({ children }) {
    const { authorizeToken, API } = useAuthContext()
    const [users, setUsers] = useState([])
    const [disable, setDisable] = useState(false);
    const [page, setPage] = useState(1)


    const getUsers = async () => {
        setDisable(true)
        try {
            const resp = await axios.get(`${API}/user/getAllUserByAdmin?page=${page}&limit=9`, {
                headers: { 'Authorization': `Bearer ${authorizeToken}` }
            })
            setUsers(resp?.data);

        } catch (error) {
            console.log(error);
        }
        finally {
            setDisable(false)
        }

    }



    useEffect(() => {
        if (authorizeToken) {
            getUsers();
        }
    }, [page, authorizeToken])


    return (
        <UserAuthContext.Provider value={{ users, disable, page, setPage }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserContextProvider;
