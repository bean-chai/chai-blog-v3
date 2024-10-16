/*
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-06-11 15:45:48
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-06-12 10:40:17
 * @FilePath: \chaichaiBlog\src\api\request.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import axios from "axios";

const server = axios.create({
    baseURL: "http://45.155.220.111:3000/chai",
    // baseURL: "http://localhost:3000/chai",
    // baseURL: "http://192.168.2.35:3000/chai",
    responseType: "json",
    timeout: 60000
})
//请求拦截器
server.interceptors.response.use(resp => {
    return Promise.resolve(resp);
});
export default server;