
import {  } from "uni";
const baseURL = '';
const getData = (params:Params) => {
    params.url = baseURL + params.url;
    uni.showLoading({
        title: ''
    });
    return new Promise((resolve,rejece) => {
        uni.request({
            ...params,
            success: (res) => {
                resolve(res);
            },
            fail:(res)=>{
                rejece(res)
            },
            // 请求结束
            complete: () => {
                uni.hideLoading();
            }
        });
    })
}
const get =  (params:Params)=>{
    params.method = 'GET'
    return getData(params)
}
const post  = (params:Params)=>{
    params.method = 'POST'
    return getData(params)
}
export default  getData;
type Params = {
    url:string
    method?:"GET" | "POST" | "OPTIONS" | "HEAD" | "PUT" | "DELETE" | "TRACE" | "CONNECT"
    date:any
}