import {$authHost, $host} from "./index";


export const fetchTags = async () => {
    const {data} = await $host.get('api/tags/')
    return data
}

export const fetchtColors = async () => {
    const {data} = await $host.get('api/colors')
    return data
}