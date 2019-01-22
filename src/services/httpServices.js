import axios from "axios";
import {
    toast
} from "react-toastify";

axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedErrors) {
        console.log("Logging unexpected errors ", error);
        toast.error("An unexpected error occured");
    }
    return Promise.reject(error);
});
export default {
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
    get: axios.get
};