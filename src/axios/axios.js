import axios from 'axios';
import config from '../config';
const baseURL = process.env.NODE_ENV === 'production' ? config.prod : config.dev;

class Http {
  constructor (...args) {
    this.service = axios.create({
      // 环境切换
      baseURL,
      // 是否跨站点访问控制请求
      withCredentials: true,
      //   timeout: 30000,
      validateStatus () {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true;
      },
      // 其他配置参数
      ...args
    });
    this.requestInterceptor();
    this.responseInterceptor();
  }
  requestInterceptor () {
    // 请求拦截器
    this.service.interceptors.request.use(
      (config) =>
      // 请求前做处理，携带token等
				 config
      ,
      (err) => Promise.reject(err)
    );
  }
  responseInterceptor () {
    // 响应拦截器
    this.service.interceptors.response.use(
      (response) =>
      // 数据返回做一些处理，比如登录超时等
				 response
      ,
      (err) => Promise.reject(err)
    );
  }
  get (url, config = {}) {
    return this.service.get(url, config);
  }
  post (url, data, config = {}) {
    return this.service.post(url, data, {
      ...config
    });
  }
  put (url, data = undefined, config = {}) {
    return this.service.post(url, data, {
      ...config
    });
  }
  delete (url, config = {}) {
    return this.service.delete(url, config);
  }
  axios (...args) {
    // axios({})
    return this.service(...args);
  }
}

export default (...args) => new Http(...args);
