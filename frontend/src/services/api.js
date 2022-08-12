import axios from "axios";

const api = axios.create({
    baseUrl: 'http://localhost:3399'
});

export default api;