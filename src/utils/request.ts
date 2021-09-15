import axios from "axios"

const service = axios.create({
  timeout:20000
})
service.interceptors.request.use(config=>{
  console.log('请求拦截器')
})
service.interceptors.response.use(res=>{
  console.log('响应拦截器')
})