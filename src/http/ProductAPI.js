import {$authHost, $host} from "./index";


export const fetchTags = async () => {
    const {data} = await $host.get('api/tags/')
    return data
}

export const fetchProducts = async (url = '') => {
    const {data} = await $host.get(`api/products/?${url}`)
    return data
}
export const fetchOneProduct = async (id) => {
    const {data} = await $host.get(`api/products/${id}/` )
    return data
}

export const fetchColors = async () => {
    const {data} = await $host.get('api/colors/')
    return data
}