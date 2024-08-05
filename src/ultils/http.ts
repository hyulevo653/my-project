import axios, { AxiosInstance } from "axios";
import config from "../constants/config";
export class Http {
    instance: AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: config.baseUrl,
            timeout: 10000,
            headers: {
              'Content-Type': 'application/json',
            }
          })
    }
}

const http = new Http().instance
export default http