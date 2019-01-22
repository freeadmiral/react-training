import http from './httpServices';
import {
    apiUrl
} from '../config.json';

export function getGenre() {
    return http.get(apiUrl + '/genres');
}