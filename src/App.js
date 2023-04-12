import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter";
import {NavBar} from "./components/NavBar"
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite"
import {basket, basketAPI} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {Footer} from "./components/Footer";
import {BasketContext} from "./store/BasketStore";

const App = observer(() => {

    const {user, baskets} = useContext(Context)
    const {items, itemsCount, total, updateBasket} = useContext(BasketContext);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        basketAPI()
            .then((response) => response) // Распарсим JSON-ответ
            .then((data) => {
                user.setIsAuth(true)
                updateBasket(data.data);
                setLoading(false);
            })
            .catch((error) => console.log(error)).finally(
            setLoading(false)
        );
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>

    );
})

export default App;
