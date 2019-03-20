import axios from 'axios';
import URL from './URL';
export const instance = axios.create({
    baseURL: URL.BASE_URL_API,
    timeout: URL.SERVER_TIMEOUT,
})

