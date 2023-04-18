import Admin from "./pages/Admin";
import {
    ACTIVATION_ROUTE,
    ADMIN_ROUTE,
    CATALOG_ROUTE,
    LOGIN_ROUTE, PRODUCT_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";
import Activation from "./pages/Activation";

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>,
    },
    {
        path: PROFILE_ROUTE,
        Component: <Profile/>,
    }
]

export const publicRoutes =[
    {
        path: CATALOG_ROUTE,
        Component: <Catalog />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>,
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <ProductPage/>,
    },

    {
        path: ACTIVATION_ROUTE,
        Component: <Activation/>,
    },
]