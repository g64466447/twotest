<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in swiper" :key="index">
          <img :src="item.pic" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
// import style (>= Swiper 6.x)
/* import 'swiper/swiper-bundle.css' */
import { getBanner } from "@/api/api";
/* import axios from 'axios' */

export default {
  data() {
    return {
     /*  swiper:[] */
      swiper: [
        { pic: require("../../assets/1.jpg") },
        { pic: require("../../assets/2.jpg") },
        { pic: require("../../assets/3.jpg") },
      ],
    };
  },
  updated() {},
  mounted: async function () {
    var mySwiper = new Swiper(".swiper-container", {
      /* ... */
      loop: true, // 循环模式选项
      pagination: {
        el: ".swiper-pagination",
      },
    });
    //正常请求没问题
    /*  let res=await axios.get('https://autumnfish.cn/banner?type=2') */
    let res = await getBanner(1);
    this.swiper = res.data.banners;
    /*     console.log(res);
     */
  },
};
</script>

<style lang="less" scoped>
.swiper{
  width: 7.5rem;
  padding:0 0 0.3rem 0;
}
.swiper-container {
  width: 7.1rem;
  height: 3rem;
  border-radius: 0.1rem;
  .swiper-wrapper {
    width: 7.1rem;
  height: 3rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>