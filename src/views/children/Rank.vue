<template>
  <div>
 
    <rank-top :rank="rank" ></rank-top>
  </div>
</template>

<script>
import RankTop from "@/components/rank/RankTop.vue";
import {getToplist} from "@/api/api.js"
export default {
  data() {
    return {
      rank: "",
   
    };
  },
  components: {
    RankTop,
  },
  methods: {
    async getrank() {
      const res = await getToplist();
      this.rank = res.data;
      console.log(res);
    },
   /*  rankclick(id){
      this.$emit('rankclick',id)
      console.log(id);
    } */
  },
  mounted() {
    this.getrank();
  
  },
};
</script>
<style lang="less" scoped>
</style>