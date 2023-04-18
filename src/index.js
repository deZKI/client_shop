import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from "./store/UserStore";
import App from './App';
import ProductStore from "./store/ProductStore";
import {BasketContextProvider} from "./store/BasketStore";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Context.Provider value={{
            user: new UserStore(),
            products: new ProductStore(),
        }}>
            <BasketContextProvider>
                <App/>
            </BasketContextProvider>
        </Context.Provider>
);

