<template>
  <div class="home">
    <!-- @routechang="routechang" -->
    <nav-top></nav-top>
    <router-view> </router-view>
    
   <!--  
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/yuncun">标签</van-tabbar-item>
      </van-tabbar>
    </div> -->
    <!-- <swiper/>
  <silde> </silde> -->
  </div>
</template>

<script>
// import style (<= Swiper 5.x)

import NavTop from "@/components/home/NavTop.vue";
import Swiper from "@/components/home/Swiper.vue";
import Silde from "@/components/home/Silde.vue";
export default {
  name: "Home",
  data() {
    return {
      active: 1,
    };
  }, 
  components: {
    NavTop,
    Swiper,
    Silde,
  },
  methods: {
    routechang(path) {
      this.$router.push(path);
    },
  },
  mounted() {
    /*  console.log(this.$route); */
  },
};
</script>
<style lang="less" scoped>
/* #d1{
  width: 3.75rem;
  height: 3.75rem;
  background: red;

} */
.home{
  position: relative;
  .control{
    position: absolute;
    left: 0;
    bottom: 50px;
    z-index: 22;
  }
  .footer{
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>