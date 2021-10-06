<template>
  <div class="home">
    <!-- @routechang="routechang" -->
    <nav-top ></nav-top>
    <router-view>    
    </router-view>
    <!-- <swiper/>
  <silde> </silde> -->
  </div>
</template>

<script>

// import style (<= Swiper 5.x)


import NavTop from '@/components/home/NavTop.vue'
import Swiper from '@/components/home/Swiper.vue'
import Silde from '@/components/home/Silde.vue'
export default {
  name: "Home",
  components: {
    NavTop,
    Swiper,
    Silde
  },
  methods:{
    routechang(path){
      this.$router.push(path)
    }
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

</style>