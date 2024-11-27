import axios from 'axios';

// Do not use localhost, use your machine's IPv4 address instead
// Reason: Our phone / emulator is not on the same "localhost" as our machine

// const BASE_URL = "http://localhost";
const BASE_URL = "http://10.91.208.37";
const PORT = ":3001";

const petPalMockApi = axios.create({ baseURL: BASE_URL + PORT })

export default petPalMockApi;