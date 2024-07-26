import axios from 'axios';

const BASE_URL = "https://pet-pal-server.onrender.com/";
// const BASE_URL = "http://localhost:3002";

const petPalApi = axios.create({ baseURL: BASE_URL })

export default petPalApi;