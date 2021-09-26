S<template>
  <div class="SearchTop">
    <div class="top">
      <div class="left" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui1"></use>
        </svg>
      </div>
      <div class="right"  @click="musclist.length=0">
        <input
          v-model="searchkeyword"
          type="text"
          :placeholder="placeholder"
          class="searchinput"
          @keydown.enter="savekeyword(searchkeyword)"
         
        />
      </div>
    </div>
    <div class="history" v-show="musclist.length==0">
      <div class="historyleft">历史</div>
      <div class="historyright">
        <div v-for="(item, index) in keywordlist" :key="index">
          <span class="itemspan" @click="SearchHistory(item)">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder","searchkeyword","keywordlist","musclist"],
  data() {
    return {
    
    };
  },
  
  methods: {
    SearchHistory(item){
      this.$emit("SearchHistory", item);
    },
    savekeyword(searchkeyword) {
      let x = this.keywordlist;
      x.push(this.searchkeyword);
      x = Array.from(new Set(x));
      if (x.length > 10) {
        x = x.slice(x.length - 10, x.length);
      }
      localStorage.keywordlist = JSON.stringify(x);
      /*  console.log(searchkeyword); */
      this.$emit("searchclick", searchkeyword);
    },
  },
};
</script>

<style lang="less" scoped>
.SearchTop {
  width: 7.5rem;
  margin:0.4rem  0;
  .history {
    padding: 0 0.4rem;
    margin: 0.2rem 0;
    display: flex;
    overflow: hidden;
    /* scrollbar-width: none; */
    .historyleft {
      width: 1rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      font-weight: 900;
    }
    .historyright {
      display: flex;
      width: 5.3rem;
      overflow-x: auto;
      overflow-y: hidden;
      /*  ::-webkit-scrollbar{
        width: 0;
      } */
      div {
        padding: 0 0.3rem;
        flex-shrink: 0;
        text-align: center;
        line-height: 0.6rem;
        background-color: #ccc;
        margin: 0 0.25rem;
        border-radius: 0.3rem;
      }
    }
  }
  .top {
    display: flex;
    align-items: center;
    .left {
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 0.2rem 0 0.4rem;
      }
    }
    .searchinput {
      width: 6rem;
      border: 0;
      height: 0.55rem;
      border-bottom: 1px solid black;
    }
  }
}
</style>