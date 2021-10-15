import axios from 'axios'
let baseurl = 'http://music.cpengx.cn'
    /* /personalized/newsong */
    /* 0: pc
    1: android
    2: iphone
    3: ipad */
    /* 轮播图 */
export function getBanner(type = 1) {
    return axios.get(`${baseurl}/banner?type=${type}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 推荐歌单 */
export function getSilde(limit = 10) {
    return axios.get(`${baseurl}/personalized?limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 获取歌单详情 */
export function getMusiclist(id) {
    return axios.get(`${baseurl}/playlist/detail?id=${id}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 获取歌词 */
export function getlyric(id) {
    return axios.get(`${baseurl}/lyric?id=${id}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 搜索 */
export function getsearch(keywords) {
    return axios.get(`${baseurl}/search?keywords= ${keywords}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* const res = await axios.get("http://music.cpengx.cn/toplist");
this.rank = res.data;

console.log(res); */
/* 所有榜单 */
export function getToplist() {
    return axios.get(`${baseurl}/toplist`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* let res = await axios.get(`http://music.cpengx.cn/playlist/detail?id=${id}`) */
/* 获取排行歌曲列表 */
export function getdetail(id) {
    return axios.get(`${baseurl}/playlist/detail?id=${id}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 获取新音乐 */
export function getnewsong() {
    return axios.get(`${baseurl}/personalized/newsong`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}

/* export function getartist(type=1) {
    return axios.get(`${baseurl}/toplist/artist`)
       
} */
/* 获取歌手列表 */
export function getartist(offset = 0, limit = 5) {
    return axios.get(`${baseurl}/top/artists?offset=${offset}&limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 歌曲分类列表 */
export function GetArtistCategory(offset = 0, limit = 7) {
    return axios.get(`${baseurl}/artist/list?offset=${offset}&limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 歌单评论 */
/* /comment/playlist?id=705123491 */
export function getplaylistcomment(id, limit = 10) {
    return axios.get(`${baseurl}/comment/playlist?id=${id}&limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* http://music.cpengx.cn/user/event?uid=32953014 */
export function getactive(uid = 32953014, limit = 6) {
    return axios.get(`${baseurl}/user/event?uid=${uid}&limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
/* 全部mv */
export function getallmv(limit = 10) {
    return axios.get(`${baseurl}/mv/all?area=内地&limit=${limit}`)
        /* return axios.get('https://autumnfish.cn/banner?type=${type}') */
}
export default {
    getallmv,
    getactive,
    getBanner,
    getMusiclist,
    getSilde,
    getlyric,
    getsearch,
    getToplist,
    getdetail,
    getnewsong,
    getartist,
    GetArtistCategory,
    getplaylistcomment
}