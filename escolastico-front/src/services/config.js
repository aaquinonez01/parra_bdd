import axios from 'axios';

const config = {
    baseURL: 'http://localhost:3001/api/v1',
    headers: {
        "Content-type": "application/json",
        "x-token": localStorage.getItem('x-token')
    }
};

export const axiosInstance = axios.create(config);