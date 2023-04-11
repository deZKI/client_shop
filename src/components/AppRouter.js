import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
            <Routes>
                {user.isAuth && authRoutes.map(({path, Component})=>
                    <Route exact path={path} element={Component}/>
                )}
                {publicRoutes.map(({path, Component})=>
                    <Route exact path={path} element={Component}/>
                )}
            </Routes>
    );
};

export default AppRouter;