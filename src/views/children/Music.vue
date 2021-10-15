<template>
  <div>
    <!--  <singeruser :singer="singer"/>
    <singerlist :singerlist="singerlist" /> -->
    <yun-cun> </yun-cun>
  </div>
</template>

<script>
import YunCun from "@/views/YunCun.vue";
/* import Singeruser from "@/components/singer/Singeruser.vue";
import Singerlist from "@/components/singer/Singerlist.vue";
import { getartist,GetArtistCategory } from "@/api/api.js"; */
export default {
  data() {
    return {
      /*  singerlist: [],
      singer: [], */
    };
  },
  components: {
    YunCun,
    /*   Singerlist,
    Singeruser, */
  },
  methods: {
    /* async Getartist () {
      const res = await getartist();
     this.singerlist=res.data.artists
     console.log(res);

    }, */
    /* async getcategory(){
       const res = await GetArtistCategory();
     
     console.log(res);
    } */
  },
  mounted() {
    /*  this.Getartist()
    this.getcategory() */
  },
};
</script>

<style lang="less" scoped>
</style>