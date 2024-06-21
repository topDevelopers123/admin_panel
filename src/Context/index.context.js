
import { useContext } from "react";
import { AuthContext } from "./authContext/authContext";
import { BannerAuthContext } from "./authContext/bannerContext"; 
import { CategoryContext } from "./categoryContext/categoryContext";


export const useAuthContext = () => useContext(AuthContext)
export const  useBannerAuthContext = () => useContext(BannerAuthContext)



export const useCategoryContext = () => useContext(CategoryContext)
