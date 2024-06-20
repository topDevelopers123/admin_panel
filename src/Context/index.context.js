
import { useContext } from "react";
import { AuthContext } from "./authContext/authContext";
import { BannerAuthContext } from "./authContext/bannerContext"; 


export const useAuthContext = () => useContext(AuthContext)
export const  useBannerAuthContext = () => useContext(BannerAuthContext)
