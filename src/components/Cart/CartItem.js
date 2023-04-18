import React from 'react';

function CartItem(props) {
    const item = props.item;
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;

    function handleRemove() {
        onRemove(item.name, item.price);
    }
    function handleAdd(){
       onAdd(item.id, item.name, item.price)
    }
    function total(){
        return (item.price * item.count)
    }
    return (
        <li key={item.name}>
            <a className="dropdown-item" href="#">{item.name} - {item.price} руб. x {item.count} = {total()}руб.</a>
            <button onClick={handleAdd} className="btn btn-success btn-sm ms-2">Добавить</button>
            <button onClick={handleRemove} className="btn btn-danger btn-sm ms-2">Удалить</button>
        </li>)
}

export {CartItem}

