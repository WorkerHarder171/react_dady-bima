import axios from "axios";
// import { CONST } from "../utils/constans";

const axiosInstance = axios.create({
  baseURL: 'https://652a1c1155b137ddc83f4d53.mockapi.io',
});

export default axiosInstance