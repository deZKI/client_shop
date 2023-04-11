import {$authHost, $host} from "./index";

export const registration = async (username, email, password) => {
    const {data} = await $host.post('api/auth/users/', {username, password, email})
    localStorage.setItem('token', data.auth_token)
}

export const login = async (username, password) => {
    const {data} = await $host.post('/api/auth/token/login/', {username, password})
    localStorage.setItem('token', data.auth_token)
}

export const check = async () => {
    let token = localStorage.getItem('token')
    const response = await $authHost.post('api/auth/', {'access_token':token})
}
