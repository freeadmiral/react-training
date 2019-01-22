import http from './httpServices';
import {
    apiUrl
} from '../config.json';

const apiEndpoint = apiUrl + "/users";

export function registerUser(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    });
};