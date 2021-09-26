<template>
  <div class="playmusic">
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playlist.al.picUrl})` }"
    ></div>
    <div class="playmusictop">
      <div @click="$emit('back')" class="white">
        <svg class="icon yang" aria-hidden="true" >
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div class="playname">
        <marquee behavior="scroll" direction="left">{{
          playlist.name
        }}</marquee>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <div
      v-show="islysrc"
      class="playmusiclyric"
      @click="islysrc = !islysrc"
      ref="playlyric"
    >
      <p
        :class="{
          active:
            currentTime * 1000 >= item.time && currentTime * 1000 < item.next,
        }"
        v-for="(item, index) in $store.getters.lyriclist"
        :key="index"
      >
        {{ item.lyric }}
      </p>

      <!-- <p :class="{active:yang(item)}" v-for="(item,index) in $store.getters.lyriclist" :key="index">{{item.lyric}}</p>
      -->
      <!-- <p v-for="(item, index) in $store.getters.lyriclist" :key="index">
        {{ item.lyric }}
      </p> -->

      <!-- {{$store.state.lyric}} -->
    </div>
    <div class="playmusicContent" v-show="!islysrc" @click="islysrc = !islysrc">
      <div class="content">
        <div>
          <img
            class="needle"
            :class="{ active: !paused }"
            src="../../assets/needle-ip6.be4ebbeb.png"
            alt=""
          />
        </div>
        <div>
          <img class="disc" src="../../assets/disc-ip6.69796123.png" alt="" />
          <img v-if="playlist" class="pic" :src="playlist.al.picUrl" alt="" />
          <img class="pic" src="../../assets/1.jpg" v-else alt="" />
        </div>
      </div>
    </div>
    <div class="playmusicControl">
      <div class="footer">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xunhuan1"></use>
          </svg>
        </div>
        <div @click="goplay(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyishou"></use>
          </svg>
        </div>
        <div v-if="paused" class="middle">
          <svg class="icon" aria-hidden="true" @click="play">
            <use xlink:href="#icon-bofang"></use>
          </svg>
        </div>
        <div v-else class="middle">
          <svg class="icon" aria-hidden="true" @click="play">
            <use xlink:href="#icon-ico_zanting_xuanzhong"></use>
          </svg>
        </div>
        <div @click="goplay(1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiayishou"></use>
          </svg>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfront-"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["play", "paused", "playlist", ],
  data() {
    return {
      islysrc: true,
    };
  },
  methods: {
    goplay: function (num) {
    /*   console.log(num); */
     /*  console.log(this.playcurrentindex); */

      let x = toString(this.playcurrentindex);
     /*  console.log(x); */
      let index = this.playcurrentindex + num;

    /*   console.log(index); */
      if (index < 0) {
        index = this.playlist.length - 1;
      } else if (index == this.playlist.length) {
        index = 0;
      }
      this.$store.commit("setPlaycurrentindex", index);
    },
  },
  computed: {
    ...mapState(["lyric", "currentTime","playcurrentindex"]),
  },
  watch: {
    currentTime: function (newvalue) {
    /*   console.log([newvalue]);
      console.log([this.$refs.playlyric]); */
      let p = document.querySelector("p.active");
     /*  console.log([p]); */
      /*   let offsetTop=p.offsetTop; */
      /* let h =this.$refs.playlyric.offHeight; */
      /* if (p.offsetTop) {
        p.offsetTop;
      } else {
        p.offsetTop = 0;
      } */
      this.$refs.playlyric.scrollTop = p.offsetTop;
    },
  },
};
</script>

<style lang="less" scoped>
.playmusic {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  background: #fff;
  .playmusiclyric {
    width: 7.5rem;
    height: 8rem;
    overflow: scroll;
    color: #fff;
    position: absolute;
    /*  top:calc(50%-4rem); */
    top: 2rem;
    text-align: center;

    .active {
      color: red;
    }
  }
  .playmusicContent {
    position: absolute;
    width: 7.5rem;
    height: 8rem;
    top: 1.5rem;
    left: 0;
    .content {
      padding: 0 0.4rem;
      .needle {
        position: absolute;
        top: 0;
        left: 46%;
        transform: rotate(-9deg);
        transition: all 1s;
        transform-origin: 0.3rem 0;
        width: 2.5rem;
        height: auto;
        z-index: 2;
      }
      .active {
        position: absolute;
        top: 0;
        left: 46%;
        transform: rotate(13deg);
        transition: all 1s;
        transform-origin: 0.3rem 0;
        width: 2.5rem;
        height: auto;
        z-index: 2;
      }
      .disc {
        position: absolute;
        top: 2.5rem;
        left: 1rem;
        width: 5.5rem;
        height: auto;
      }
      .pic {
        position: absolute;
        top: 3.55rem;
        left: 2.05rem;
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 1.7rem;
      }
    }
  }
  .playmusicControl {
    position: absolute;
    left: 0;
    bottom: 0.6rem;
    width: 7.5rem;
    .footer {
      padding: 0 0.4rem;
      display: flex;
      justify-content: space-around;
      div {
        display: flex;
        align-items: center;

        .icon {
          width: 0.5rem;
          fill: #fff;
          height: 0.5rem;
        }
      }
      .middle {
        .icon {
          width: 1rem;
          fill: #fff;
          height: 1rem;
        }
      }
    }
  }
  .playmusictop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.4rem;
    height: 1.2rem;
    color: #fff;
    position: absolute;
    left: 0.4rem;
    top: 0;
    marquee {
      flex: 1;
      width: 5rem;
      font-size: 0.42rem;
    }
    .icon {
      width: 0.5rem;
      fill: #fff;
      height: 0.5rem;
    }
  }
  .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    filter: blur(60px);
    background-position: center;
    left: 0;
    top: 0;
    /*  z-index: -1; */
  }
}
</style>