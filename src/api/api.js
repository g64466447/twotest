import axios from 'axios'
let baseurl = 'http://music.cpengx.cn '
    /* 0: pc

    1: android

    2: iphone

    3: ipad */
export function getBanner(type = 1) {
    return axios.get(`${baseurl}/banner?type=${type}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getSilde(limit = 10) {
    return axios.get(`${baseurl}/personalized?limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getMusiclist(id) {
    return axios.get(`${baseurl}/playlist/detail?id=${id}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getlyric(id) {
    return axios.get(`${baseurl}/lyric?id=${id}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export function getsearch(keywords) {
    return axios.get(`${baseurl}/search?keywords= ${keywords}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export default {
    getBanner,
    getMusiclist,
    getSilde,
    getlyric,
    getsearch
}