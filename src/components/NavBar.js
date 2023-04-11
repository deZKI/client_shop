import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../index";
import {Link, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {CartList} from "./Cart/CartList";
import {BasketContext} from "../store/BasketStore";

export const NavBar = observer(() => {
    const history = useNavigate()
    const {user} = useContext(Context)
    const {clearCart} = useContext(BasketContext)
    const logOut = () => {
        localStorage.removeItem('cart')
        localStorage.removeItem('token')
        user.setUser({})
        user.setIsAuth(false)
        clearCart()
        window.location.reload()
    }
    return (<div>
        <nav className="navbar navbar-light navbar-expand-md bg-white bg-gradient py-3">
            <div className="container"><Link className="navbar-brand d-flex align-items-center" to="/"><span
                className="d-flex justify-content-center align-items-center bs-icon-sm bs-icon-rounded bs-icon-primary me-2 bs-icon"><svg
                className="bi bi-bezier" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                viewBox="0 0 16 16"><path fill-rule="evenodd"
                                          d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path><path
                d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path></svg></span><span><span
                style={{color: 'rgb(0, 0, 0)'}}>ostori_handmade</span></span></Link>
                <button data-bs-toggle="collapse" data-bs-target="#navcol-2" className="navbar-toggler"><span
                    className="visually-hidden">Toggle navigation</span><span
                    className="navbar-toggler-icon"></span>
                </button>
                <Container>
                    <div className="collapse navbar-collapse" id="navcol-2">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link active" to={SHOP_ROUTE}>Главное
                                меню</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to={CATALOG_ROUTE}>Каталог</Link></li>
                        </ul>

                        {user.isAuth ?
                            <ul className="navbar-nav ms-auto">
                                <Button>Личный кабинет</Button>
                                <Button variant={"outline-primary"} onClick={() => logOut()}>Выйти</Button>
                            </ul>
                            :
                            <ul className="navbar-nav ms-auto">
                                <Button onClick={() => history(LOGIN_ROUTE)}>Авторизоваться</Button>
                            </ul>
                        }
                        <CartList/>
                    </div>
                </Container>
            </div>
        </nav>
    </div>)
})