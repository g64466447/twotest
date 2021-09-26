<template>
  <div class="silde">
    <div class="sildeone">
      <div>发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="swiper-container" id="yang">
      <div class="swiper-wrapper">
        <router-link :to="{path:'listview',
        query:{
          id:item.id
        }}"
          class="swiper-slide"
          v-for="(item, index) in state.slide"
          :key="index"
        >
          <img :src="item.picUrl" alt="" />

          <div class="slidetwo">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zanting1 " class="left"></use>
            </svg>
            <span>{{ changevalue(item.playCount) }}</span>
          </div>

          <p>
            {{ item.name }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { getSilde } from "@/api/api";
import { reactive, onMounted, onUpdated } from "vue";

export default {
  setup() {
    let state = reactive({ slide: [] });
    function changevalue(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num >= 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }
    onMounted(async () => {
      let res = await getSilde(10);
      console.log(res);
      state.slide = res.data.result;
    });
    onUpdated(() => {
      var swiper = new Swiper("#yang", {
        slidesPerView: 3,
        spaceBetween: 10,
      });
    });
    return {
      state,
      changevalue,
    };
  },
};
// import style (>= Swiper 6.x)
/* export default {
  data() {
    return {
      slide: [],
    };
  },
  methods: {
    changevalue(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      }
      else if (num >= 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    },
  },

  mounted: async function () {
    let res = await getSilde(10);
    console.log(res);
    this.slide = res.data.result;
  },
  updated() {
    var swiper = new Swiper("#yang", {
      slidesPerView: 3,
      spaceBetween: 10,
    });
  },
}; */
</script>

<style lang="less" scoped>
.silde {
  width: 7.5rem;
  margin: 0.5rem 0 0 0;
  height: 0.3rem;
  .sildeone {
    display: flex;
    margin: 0.2rem 0.2rem;
    justify-content: space-between;
    align-items: center;
    .more {
      width: 1.5rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background: #ccc;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.25rem;
    }
  }
  .swiper-container {
    width: 7.1rem;
    height: 3.1rem;

    .swiper-slide {
      position: relative;
      display: flex;
      flex-direction: column;

      /*  position: relative; */
      .slidetwo {
        position: absolute;
        width: 1.5rem;
        top: 0.05rem;
        right: 0.1rem;
        color: #fff;
        height: 0.35rem;
        display: flex;
        border-radius: 0.17rem;
        background: rgb(236, 234, 234) 0.1;

        font-size: 0.2rem;

        .icon {
          fill: #fff;
        }
      }

      p {
        font-size: 0.2rem;
        line-height: 0.3rem;
      }
      img {
        width: 100%;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>