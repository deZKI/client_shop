import React, {createContext, useContext, useEffect, useState} from 'react';
import {addToBasketAPI, deleteFromBasketAPI} from "../http/userAPI";
import {Context} from "../index";

export const BasketContext = createContext();

export function BasketContextProvider(props) {
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);
  const {user} = useContext(Context)

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setItems(savedCart.items);
      setItemCount(savedCart.itemCount);
      setTotal(savedCart.total);
    }
  }, []);

  function addToCart(itemId, itemName, itemPrice) {
    const itemIndex = items.findIndex(item => item.id === itemId);
    if(user.isAuth){
      addToBasketAPI(itemId)
    }
    if (itemIndex !== -1) {
      const newItems = [...items];
      newItems[itemIndex].count += 1;
      setItems(newItems);
      setItemCount(itemCount + 1);
      setTotal(total + itemPrice);
    } else {
      setItems([...items, {id: itemId, name: itemName, price: itemPrice, count: 1}]);
      setItemCount(itemCount + 1);
      setTotal(total + itemPrice);
    }
  }

  function clearCart() {
    items.forEach((item) => removeFromCart(item));
  }

  function updateBasket(products) {
    const newItems = products.map((item) => ({
      basket_id: item.id,
      id: item.product.id,
      name: item.product.name,
      price: item.product.price,
      count: item.quantity
    }))
    setItems(newItems)
    setItemCount(newItems.length);
    setTotal(newItems.reduce((acc, item) => acc + item.price * item.count, 0));

  }

  function removeFromCart(itemName, itemPrice) {
    const itemIndex = items.findIndex(item => item.name === itemName)
    if (user.isAuth) {
      const item = items.find(item => item.name === itemName)
      deleteFromBasketAPI(item.basket_id, item.id, item.count - 1)
    }
    if (itemIndex !== -1) {
      const newItems = [...items];
      if (newItems[itemIndex].count > 1) {
        newItems[itemIndex].count -= 1;
        setItems(newItems);
        setItemCount(itemCount - 1);
        setTotal(total - itemPrice);
      } else {
        newItems.splice(itemIndex, 1);
        setItems(newItems);
        setItemCount(itemCount - 1);
        setTotal(total - itemPrice);
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({items, itemCount, total}));
  }, [items, itemCount, total]);

  const contextValue = {
    items,
    itemCount,
    total,
    addToCart,
    removeFromCart,
    clearCart,
    updateBasket,
  };

  return (
      <BasketContext.Provider value={contextValue}>
        {props.children}
      </BasketContext.Provider>
  );
}

