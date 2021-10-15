<template>
  <div class="cloud">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <swiper />
      <silde> </silde>
    </van-pull-refresh>
    <scroll :list="list" :top="430">
      <div>
        <list-top :listtop="list"></list-top>
      </div>
    </scroll>
  </div>
</template>

<script>
import { Toast } from "vant";
import Swiper from "@/components/home/Swiper.vue";
import Silde from "@/components/home/Silde.vue";
import ListTop from "@/components/recommend/ListTop.vue";
import { getnewsong } from "@/api/api.js";
import Scroll from "@/components/common/Scroll.vue";
export default {
  data() {
    return {
      list: "",
      isLoading: false,
    };
  },
  methods: {
    async yang() {
      const res = await getnewsong();
      this.list = res.data.result;
      /*   console.log(res); */
    },
    onRefresh() {
      if (this.list) {
          const x = this.list.reverse();
          this.list = x;
        setTimeout(() => {
          Toast("刷新成功");
          this.isLoading = false;
        
        }, 1000);
      } else {
        Toast("刷新失败");
      }
    },
  },
  mounted() {
    this.yang();
  },
  components: {
    Swiper,
    Silde,
    ListTop,
    Scroll,
  },
};
</script>

<style lang="less" scoped>
/* .cloud{
  position: relative;
} */
</style>