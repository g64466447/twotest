import { createStore } from 'vuex'
import api from '@/api/api.js'

export default createStore({
    state: {
        playlist: [{
            name: '热爱105°C的你',

            id: "1840459406",
            al: [{
                id: 72363263,
                name: "囍（Chinese Wedding）",
                pic: 109951163472855060,
                picUrl: require("../assets/1.jpg"),
                pic_str: "109951163472855051",
            }]
        }],
        playcurrentindex: 0,
        lyric: [{}, ],
        currentTime: 0,
        intervalid: 0,
        paused: true,
        showplay: false
    },
    getters: {
        lyriclist: function(state) {
            let lyric = state.lyric
            lyric = lyric.toString();
            let arr = lyric.split(/\n/igs).map((item, index, arr) => {
                    let min = parseInt(item.slice(1, 3));
                    let sec = parseInt(item.slice(4, 6));
                    let mill = parseInt(item.slice(7, 10));
                    let lyric = item.slice(11, item.length);
                    let time = min * 60 * 1000 + sec * 1000 + mill;

                    /*  if (i - 1 < 0) {
                         let pre = 0
                     } else {
                         let pre = arr[index - 1]
                     } */
                    return {
                        min,
                        sec,
                        mill,
                        con: item,
                        lyric,
                        time,
                        /*  pre */
                    }
                })
                /*  console.log(arr);
                 console.log(lyric); */
                /* arr.forEach((item, i) => {
                    if (i == 0) {
                        item.pretwo = 0
                    } else {
                        item.pretwo = arr[i - 2].time
                    }

                }); */
            arr.forEach((item, i) => {
                if (i == 0) {
                    item.pre = 0
                } else {
                    item.pre = arr[i - 1].time
                }

            });
            /*  console.log(arr); */
            /*       arr.forEach((item, index) => {
                      if ((index - 2) > 0) {

                          item.pretwo = arr[index - 2].time
                      } else if (index == 1) {

                          item.pretwo = arr[index].time

                      } else {
                          item.pretwo = 0

                      }

                  }); */
            arr.forEach((item, index) => {
                if (index < arr.length - 1) {
                    /* console.log(arr.length - 1); */
                    /* console.log(arr[index + 1]); */
                    /* console.log(arr[index + 1].time); */
                    item.next = arr[index + 1].time
                }

            });
            /*  arr.forEach((item, i) => {
                 if (i == 0) {
                     item.pretwo = 0
                 }
                 if (i = 1) {
                     item.pretwo = arr[1].time
                 } else {
                     item.pretwo = arr[i - 1].time
                 }

             });*/
            /*  console.log(arr); */
            return arr

        }

    },
    mutations: {
        setPlaylist: function(state, value) {
            state.playlist = value
        },
        pushPlaylist: function(state, value) {
            state.playlist.push(value)
        },
        setPlaycurrentindex: function(state, value) {
            state.playcurrentindex = value
        },
        setlyric: function(state, value) {
            state.lyric = value
        },
        setcurrentTime: function(state, value) {
            state.currentTime = value
        },
        setpaused: function(state, value) {
            state.paused = value
        },
        setshow: function(state, value) {
            state.showplay = value
        }
    },
    actions: {
        async requirelyric(content, playid) {
            /* console.log(playid); */
            let res = await api.getlyric(playid)
            content.commit("setlyric", res.data.lrc.lyric)
                /*  console.log(res); */
                /* console.log(res);
                console.log(res.data.lrc); */
                /*  console.log(res.data.lrc.lyric); */
        }
    },
    modules: {}
})