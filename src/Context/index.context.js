
import { useContext } from "react";
import { AuthContext } from "./authContext/authContext";
import { BannerAuthContext } from "./authContext/bannerContext";
import { CategoryContext } from "./categoryContext/categoryContext";
import { ProductAuthContext } from "./ProductContext/ProductContext";
import { OrderAuthContext } from "./OrderContext/OrderContext";
import { UserAuthContext } from "./Users/Users";



export const useAuthContext = () => useContext(AuthContext)
export const useBannerAuthContext = () => useContext(BannerAuthContext)
export const useProductAuthContext = () => useContext(ProductAuthContext)
export const useOrderAuthContext = () => useContext(OrderAuthContext)
export const useUserAuthContext = () => useContext(UserAuthContext)
export const useCategoryContext = () => useContext(CategoryContext)
