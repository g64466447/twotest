<template>
  <div class="playcontrol">
    <div class="play">
      <div class="left" @click="show = !show">
        <div class="img">
          <img :src="playlist[playcurrentindex].al.picUrl" alt="" />
        </div>
        <div class="musicname">
          <div>{{ playlist[playcurrentindex].name }}</div>
          <div style="color: #ccc">横滑切换上下歌曲</div>
        </div>
      </div>
      <div class="right">
        <div>
          <svg v-if="paused" class="icon" aria-hidden="true" @click="play()">
            <use xlink:href="#icon-zanting1"></use>
          </svg>
          <svg v-else class="icon" aria-hidden="true" @click="play()">
            <use xlink:href="#icon-ico_zanting_xuanzhong"></use>
          </svg>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfront-"></use>
          </svg>
        </div>
      </div>
      <play-music
        :paused="paused"
        @back="show = !show"
        :play="play"
        v-show="show"
        :playlist="playlist[playcurrentindex]"
      ></play-music>

      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${playlist[playcurrentindex].id}.mp3`"
      ></audio>
    </div>
  </div>
</template>

<script>
/* E:\musicapp\src\components\play\PlayMusic.vue */
import PlayMusic from "@/components/play/PlayMusic.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
   /*  console.log([this.$refs.audio]); */
    this.$store.dispatch(
      "requirelyric",
      this.playlist[this.playcurrentindex].id
    );
    this.updatatime();
    console.log(this.paused);
    console.log(this.showplay);
  },
  updated() {
    this.$store.dispatch(
      "requirelyric",
      this.playlist[this.playcurrentindex].id
    );
    this.updatatime();
  },
  methods: {
    play () {
      if (this.paused) {
        this.$refs.audio.play();
        let paused = !this.paused;
       /*  console.log(this.$refs.audio.paused); */
        this.$store.commit("setpaused", paused);
       /*  console.log(paused); */
        this.updatatime();
      } else {
        this.$refs.audio.pause();
        let paused = !this.paused;
       
        this.$store.commit("setpaused", paused);
        clearInterval(this.$store.state.id);
      }
    },
    updatatime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit("setcurrentTime", this.$refs.audio.currentTime);
      }, 1000);
    },
  },
  watch:{
    showplay(){
      if(this.showplay){
        console.log(this.showplay);
       /*  this.$store.commit('setpaused',false) */
       /*  console.log(this.paused); */
        this.play()
        /* console.log(this.play()); */
      }
    }
  },
  components: {
    PlayMusic,
  },
  computed: {
    ...mapState(["playlist", "playcurrentindex", "paused",'showplay']),
  },
};
</script>

<style lang="less" scoped>
.play {
  width: 7.5rem;
  background-color: white;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  .left {
    display: flex;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
      margin: 0 0.2rem;
    }
  }
  .right {
    display: flex;
    align-items: center;
    div {
      margin: 0 0.15rem;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
}
</style>