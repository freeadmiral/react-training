import http from './httpServices';
import {
    apiUrl
} from '../config.json';

const apiEndpoint = apiUrl + "/auth";


export function loginUser(email, password) {
    return http.post(apiEndpoint, {
        email,
        password
    });
};