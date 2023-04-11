import {$authHost, $host} from "./index";

export const registration = async (username, email, password) => {
    const {data} = await $host.post('api/auth/users/', {username, password, email})
    localStorage.setItem('token', data.auth_token)
}

export async function login(username, password) {
    const {data} = await $host.post('/api/auth/token/login/', {username, password})
    localStorage.setItem('token', data.auth_token)
}

export function basket() {
    return $authHost.get('api/baskets/')
}

export async function deleteFromBasket(basketId, product_id, quantity) {
    try {

        if (quantity <= 0) {
            const {data} = await $authHost.delete(`/api/baskets/${basketId}/`, {product_id});
            return data;
        }
        else {
            const {data} = await $authHost.put(`/api/baskets/${basketId}/`, {product_id, quantity});
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}