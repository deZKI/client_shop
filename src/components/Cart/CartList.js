import React, {useContext} from 'react';
import {CartItem} from './CartItem';
import {BasketContext} from "../../store/BasketStore";


function CartList() {
    const {items, itemsCount, total, addToCart, removeFromCart} = useContext(BasketContext);
    return (
        <div className="dropdown ms-3">
            <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-cart"></i>
                <span className="badge bg-danger rounded-pill" id="cart-count">{itemsCount}</span>
                <span className="ms-2" id="cart-total">{(total ?? 0)} руб.</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                {itemsCount === 0 && <li><a className="dropdown-item" href="#">Корзина пуста</a></li>}
                {items.map(item => (
                    <li key={item.name}>
                        <a className="dropdown-item" href="#">
                            <CartItem item={item} onAdd={addToCart} onRemove={removeFromCart}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {CartList};


