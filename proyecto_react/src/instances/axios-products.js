import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-sports-46643.firebaseio.com/'
});

export default instance;