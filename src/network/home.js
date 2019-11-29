//封装全部对home页的请求
import {request} from "./request";

export function getHomeMultidata(){
    return request({
        url: '/home/multidata'
    })
}