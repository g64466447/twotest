<template>
<div class="cloud">
  <swiper/>
  <silde> </silde>
  <scroll :list='list' :top='430' >
  <div>
      <list-top :listtop="list"></list-top>
  </div>
	</scroll>
   
</div>
</template>

<script>
import Swiper from '@/components/home/Swiper.vue'
import Silde from '@/components/home/Silde.vue'
import ListTop from "@/components/recommend/ListTop.vue";
import {getnewsong} from "@/api/api.js"
import Scroll from "@/components/common/Scroll.vue";
export default {
   data() {
    return {
      list: "",
    }
  },methods: {
    
 async yang(){
      const res=await getnewsong()
      this.list=res.data.result
    /*   console.log(res); */
   }
    
  },
  mounted(){
    this.yang()
  },
components:{
   Swiper,
    Silde,
    	ListTop,
      Scroll
}
}
</script>

<style lang="less" scoped>
/* .cloud{
  position: relative;
} */
</style>