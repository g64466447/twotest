<template>
  <div>
    <div>
      <van-tabs sticky v-model="active" swipeable  >
        <van-tab
          v-for="(item, index) in mvlist"
          :title="item.artistName"
          :key="index"
           @click="checkindex(index)"
        >
          <cover :mvlist="mvlist"> </cover>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import cover from "@/components/yuncun/cover.vue";
import { getallmv } from "@/api/api.js";
export default {
  data() {
    return {
      active: 2,
      mvlist: [],
      checkdindex:0
    };
  },
  components: {
    cover,
  },
  methods: {
    async getmv() {
      const res = await getallmv();
     
      this.mvlist = res.data.data;
    },
    checkindex(index){
      this.checkdindex=index
      console.log(index);
      console.log(this.checkdindex);
    }
  },
  mounted() {
    this.getmv();
  },
};
</script>

<style>
.van-tab__text{
  background-color: rgb(253, 48, 48);
  padding:0.05rem 0.2rem  ;
  border-radius:0.2rem ;
  color: white;
}
</style>