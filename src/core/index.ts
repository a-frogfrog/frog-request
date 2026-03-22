import axios, { type AxiosInstance } from 'axios'
import { AxiosRequestConfig } from 'axios'

class FrogRequest {
  private instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: '/api',
      timeout: 10000,
      headers: {},
    })
  }

  public request(config: AxiosRequestConfig) {
    return this.instance(config)
  }
}

export { FrogRequest }
