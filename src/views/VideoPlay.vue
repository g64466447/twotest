<template>
<div class="video">
 <video
  
    id="my-player"
    class="video-js vjs-default-skin vjs-big-play-centered one"
    preload="auto"
    width="600"
    height="400"
    data-setup='{ "html5" : { "nativeTextTracks" : false }}'
    v-for="(item,i) in yang" :key="i" 
  ></video>
</div>
 
</template>
<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import "videojs-flash";
import SWF_URL from "videojs-swf/dist/video-js.swf";
videojs.options.flash.swf = SWF_URL; // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件

export default {
  name: "videojsTest",
   data() {
    return {yang:[{
          id:1,
        },{
          id:2,
        },{
          id:3,
        },{
          id:4
        }

        ],
      VideoOptions: {
        
        autoplay: true, // 是否自动播放
        muted: false, // 是否静音
        controls: false,
       /*  fluid: true, // 宽高自适应 */
        techOrder: ["flash"],
        sources: [
          {
            /*   1. rtmp://live.hkstv.hk.lxdns.com/live/hks1
2. rtmp://live.hkstv.hk.lxdns.com/live/hks2 */
            src: "rtmp://live.hkstv.hk.lxdns.com/live/hks1",
            type: "rtmp",
          }
        ],
      },
    };
  },
  mounted() {
    console.log(this.yang);
    this.player1 = videojs(
      "my-player",
      this.VideoOptions,
      function onPlayerReady() {
        videojs.log("播放器已经准备好了!");
        this.on("play", function () {
          console.log("开始/恢复播放");
        });
        this.on("pause", function () {
          console.log("暂停播放");
        });
        this.on("ended", function () {
          console.log("结束播放");
        });
      }
    );
    setTimeout(() => {
      this.player1.player();
    }, 1000);
  },
 
};
</script>
<style lang="less" scoped>
.video{
display: flex;
justify-content: space-around;
margin:0.2rem;

flex-wrap: wrap;
.one{
  margin:0.2rem;
  
}
}
</style>