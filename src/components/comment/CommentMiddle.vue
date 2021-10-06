<template>
  <div>
    <div class="commentmiddle">
      <div class="one">评论区</div>
      <div class="two">
        <span v-for="(item,index) in list" :key="index" :class="{'active':index==checkindex}" @click="check(index)">
          {{item.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkindex:0,
      list:[{
        name:'推荐'
      },{
        name:'最热'
      },{
        name:'最新'
      }]
    }
  },
  methods:{
    check(index){
      this.checkindex=index
    }
  }
};
</script>

<style lang="less" scoped>
.commentmiddle {
  border-top:5px solid gainsboro ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.7rem;
  margin: 0 0.4rem;
  font-size: 0.32rem;
  .two {
    span{
      margin: 0.2rem;
    }
  }
}
.active{
  color: red;
}
</style>