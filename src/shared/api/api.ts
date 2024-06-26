import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: _API_,
    headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    }
});
