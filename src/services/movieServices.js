import http from './httpServices';
import {
    apiUrl
} from '../config.json';

const apiEndpoint = apiUrl + "/movies";

export function getMovies() {
    return http.get(apiEndpoint);
};

export function deleteMovies(movieId) {
    http.delete(apiEndpoint + "/" + movieId);
};