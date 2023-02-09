import axios from "axios";

const dataApi = axios.create({
    baseURL: 'http://localhost:8080'
});

dataApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;

});


export default dataApi;