import React, {useContext, useState} from 'react';
import {Card, Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {basketAPI, loginAPI, registrationAPI} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {BasketContext} from "../store/BasketStore";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const {updateBasket} = useContext(BasketContext)

    async function fetchBasket() {
        basketAPI().then((response) => response) // Распарсим JSON-ответ
            .then((data) => {
                updateBasket(data.data);
            });
    }

    const click = async () => {
        try {
            if (isLogin) {
                loginAPI(username, password).then(() => {
                    fetchBasket()
                    user.setUser(username)
                    user.setIsAuth(true)
                    history(CATALOG_ROUTE)
                }).catch((error) => {
                    // Здесь выполняется код при возникновении ошибки в методе login
                    alert('не удалось войти');
                })
            } else {
                if (password !== password2) {
                    alert('Пароли не совпадают');
                    return;
                }
                registrationAPI(username, email, password)
                    .then(response => {
                        history(LOGIN_ROUTE)
                    })
                    .catch(error => {
                        // Обработка ошибки
                        const errorMessages = Object.values(error).join('\n');
                        alert('Не удалось создать аккаунт:\n' + errorMessages);
                    });
            }

        } catch (e) {
            alert(e)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш логин..."
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    {isLogin ? '' :
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш email..."
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    }
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {isLogin ? '' :
                        <Form.Control
                            className="mt-3"
                            placeholder="Повторите пароль..."
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                        />
                    }
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});
export default Auth