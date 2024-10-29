import axios from "axios";

export const req = axios.create({
    //acessar biblioteca axios 
    baseURL: 'https://jsonplaceholder.typicode.com',
});