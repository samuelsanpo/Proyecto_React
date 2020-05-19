import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://proyectofinal-6555f.firebaseio.com'
});

export default instance;