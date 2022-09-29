import axios from "axios"

/** Default config for axios instance */
let config = {
  baseURL: 'https://api.pintu.co.id/v2',
}

/** Creating the instance for axios */
const fetch = axios.create(config)

/** Adding the response interceptors */
fetch.interceptors.response.use(
  response => {
    /** TODO: Add any response interceptors */
    return response.data;
  },
  error => {
    /** TODO: Do something with response error */
    return Promise.reject(error)
  }
)

export { fetch }
