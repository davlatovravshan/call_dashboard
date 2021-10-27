import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://callapi.ssd.uz/' : 'http://192.168.0.26:7777/'
});

export default instance;