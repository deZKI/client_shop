import Admin from "./pages/Admin";
import {ADMIN_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";

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
        path: PROFILE_ROUTE + '/:id',
        Component: <ProductPage/>,
    },
]