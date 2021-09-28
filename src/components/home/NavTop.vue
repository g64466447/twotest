<template>
  <div>
    <div class="hometop">
      <div @click="videoplay()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
      <div class="two">
        <span
          v-for="(item, index) in list"
          :key="index"
          :class="{ active: isactive(item.path) }"
          @click="check(item,index)"
          >{{ item.name }}</span
        >
      </div>
      <div @click="search()">
        <svg class="icon three" aria-hidden="true" >
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkindex: 0,
      list: [
        { name: "我的" ,
        path:'/userinfo'},
        { name: "云端",
         path:'/cloud' },
        { name: "音乐",
        path:'/music' },
        { name: "排行",
        path:'/rank' },
      ],
    };
  },
  methods: {
    isactive(path){
      if(path === this.$route.path){
        return true
      }if(path === '/cloud' && this.$route.path==='/'){
          return true
        }
         return false
    },
     check(item,index) {
      this.checkindex = index;
    /*   console.log(this.list[this.checkindex].path); */
      console.log(item.path);
      this.$emit('routechang',item.path)
    },
    search(){
      this.$router.push('/search')
    },
    videoplay(){
this.$router.push('/videoplay')
    }
  },
};
</script>

<style lang="less" scoped>
.hometop {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
    padding: 0 0.1rem;
  }
  .two {
    width: 5rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.33rem;
    .active {
      font-weight: 900;
    }
  }
  .three {
    width: 0.45rem;
    height: 0.45rem;
    padding: 0 0.25rem 0 0;
  }
}
</style> 

