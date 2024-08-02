import Banner from "../banner/Banner"
import ShortBanner from "../banner/ShortBanner"
import Add_new_banner from "../banner/Add_new_banner"
import Add_short_banner from "../banner/Add_short_banner"
import Category from "../category/main_category/Category"
import Category_table from "../category/main_category/Category_table"
import Sub_category from "../category/sub_category/Sub_category"
import Sub_category_table from "../category/sub_category/Sub_category_table"
import Sub_inner_category from "../category/sub_inner_category/Sub_inner_category"
import Sub_inner_category_table from "../category/sub_inner_category/Sub_inner_category_table"
import Index from "../index/Index"
import Order from "../order/order"
import Add_new_product from "../product/Add_new_product"
import Add_new_product_table from "../product/Add_new_product_table"
import Product_details_table from "../product/Product_details_table"
import Return from "../Return/Return"
import Users from "../Users/Users"
import Product_details from "../product/Product_details"



const PrivateRoutes = [
    {
        path: "/dashboard",
        element: <Index />
    },
    {
        path: "/banner",
        element: <Banner />
    },
    {
        path: "/short-banner",
        element: <ShortBanner />
    },
    {
        path: "/add-new-banner",
        element: <Add_new_banner />
    },
    {
        path: "/add-short-banner",
        element: <Add_short_banner />
    },
    {
        path: "/product-details",
        element: <Product_details />
    },
    {
        path: "/add-new-product",
        element: <Add_new_product />
    },
    {
        path: "/add-new-product-table",
        element: <Add_new_product_table />
    },
    {
        path: "/category",
        element: <Category />
    },
    {
        path: "/product_details_table",
        element: <Product_details_table />
    },
    {
        path: "/category_table",
        element: <Category_table />
    },
    {
        path: "/Sub_category_table",
        element: <Sub_category_table />
    
    },
    {
        path: "/sub_category",
        element: <Sub_category />
    },
    {
        path: "/sub_inner_category_table",
        element: <Sub_inner_category_table />
    },
    {
        path: "/sub_inner_category",
        element: <Sub_inner_category />
    },
    {
        path: "/users",
        element: <Users />
    },
    {
        path: "/orders",
        element: <Order />
    },
    {
        path: "/returns",
        element: <Return />
    }
]

export default PrivateRoutes