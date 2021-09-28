<template>
  <div>
    <singeruser :singer="singer"/>
    <singerlist :singerlist="singerlist" />
  </div>
</template>

<script>
import Singeruser from "@/components/singer/Singeruser.vue";
import Singerlist from "@/components/singer/Singerlist.vue";
import { getartist,GetArtistCategory } from "@/api/api.js";
export default {
  data() {
    return {
      singerlist: [],
      singer: [],
    };
    
  },
  components: {
    Singerlist,
    Singeruser,
  },
  methods: {
    async Getartist () {
      const res = await getartist();
     this.singerlist=res.data.artists
     console.log(res);

    },
    async getcategory(){
       const res = await GetArtistCategory();
     /* this.singerlist=res.data.artists */
     console.log(res);
    }
  },
  mounted(){
    this.Getartist()
    this.getcategory()
  }
};
</script>

<style lang="less" scoped>
</style>