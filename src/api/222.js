import axios from 'axios'
/* let baseurl = 'https://autumnfish.cn' */
var baseurl = axios.create({
        baseURL: "/api",
    })
    /* 0: pc

    1: android

    2: iphone

    3: ipad */
export function getBanner(type = 1) {
    return axios.get(`/api/banner?type=${type}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getSilde(limit = 10) {
    return axios.get(`/api/personalized?limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getMusiclist(id) {
    return axios.get(`/api/playlist/detail?id=${id}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getlyric(id) {
    return axios.get(`/api/lyric?id=${id}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getsearch(keywords) {
    return axios.get(`/api/search?keywords= ${keywords}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 歌单评论 */
/* /comment/playlist?id=705123491 */

export default {
    getBanner,
    getMusiclist,
    getSilde,
    getlyric,
    getsearch
}