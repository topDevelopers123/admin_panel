
import { useContext } from "react";
import { AuthContext } from "./authContext/authContext";
import { BannerAuthContext } from "./authContext/bannerContext"; 
import { CategoryContext } from "./categoryContext/categoryContext";
import { ProductAuthContext } from "./ProductContext/ProductContext";

export const useAuthContext = () => useContext(AuthContext)
export const  useBannerAuthContext = () => useContext(BannerAuthContext)
export const useProductAuthContext = () => useContext(ProductAuthContext)


export const useCategoryContext = () => useContext(CategoryContext)
