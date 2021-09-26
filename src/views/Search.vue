<template>
  <div>
    
    <search-top
    @SearchHistory="SearchHistory"
      @searchclick="searchclick"
      :placeholder="placeholder"
      :searchkeyword='searchkeyword'
      :keywordlist='keywordlist'
      :musclist="musclist"
    ></search-top>
    <search-content :musclist='musclist'></search-content>
  </div>
</template>

<script>
import SearchTop from "@/components/search/SearchTop.vue";
import SearchContent from "@/components/search/SearchContent.vue";
import { getsearch } from "@/api/api";
export default {
  data() {
    return {
      musclist: [],
      placeholder: "请输入内容",
      keywordlist: [],
      searchkeyword: "",
    };
  },
  beforeMount() {
    this.keywordlist = localStorage.keywordlist
      ? JSON.parse(localStorage.keywordlist)
      : [];
      console.log(this.musclist.length);
  },
  components: {
    SearchTop,
    SearchContent,
  },
  methods: {
    async searchclick(searchkeyword) {
      /*  console.log(searchkeyword); */
      let res = await getsearch(searchkeyword);
      console.log(res.data.result.songs);
      this.musclist = res.data.result.songs;
    },
     SearchHistory(item){
       this.searchclick(item)
/* let res = await getsearch(item);
 this.musclist = res.data.result.songs; */
   }
  },
};
</script>

<style>
</style>