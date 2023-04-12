import {$authHost, $host} from "./index";

export const registrationAPI = async (username, email, password) => {
    try {
        const response = await $host.post('api/auth/users/', {email, username, password});
        return response.data;
    } catch (error) {
        // Обработка ошибки
        console.error(error.response.data);
        throw error.response.data;
    }
};
export const activationAPI = async (uid, token) => {
    try {
        const response = await $host.post('/api/auth/users/activation/', {uid, token});
        return response.data;
    } catch (error) {
        // Обработка ошибки
        console.error(error.response.data);
        throw error.response.data;
    }
}

export async function loginAPI(username, password) {
    const {data} = await $host.post('/api/auth/token/login/', {username, password})
    localStorage.setItem('token', data.auth_token)
}

export async function logoutAPI() {
    const {data} = await $authHost.post('/api/auth/token/logout/')
    localStorage.removeItem('cart')
    localStorage.removeItem('token')
}

export function basketAPI() {
    return $authHost.get('api/baskets/')
}

export async function deleteFromBasketAPI(basketId, product_id, quantity) {
    try {

        if (quantity <= 0) {
            const {data} = await $authHost.delete(`/api/baskets/${basketId}/`, {product_id});
            return data;
        } else {
            const {data} = await $authHost.put(`/api/baskets/${basketId}/`, {product_id, quantity});
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}