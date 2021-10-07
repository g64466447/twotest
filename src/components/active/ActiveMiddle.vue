<template>
  <div>
    <div class="commentmiddle">
      <div class="one">{{title}}</div>
      <div class="two">
        <span
          v-for="(item, index) in titlelist"
          :key="index"
          :class="{ active: index == obj.checkindex }"
          @click="pop(index)"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive,} from "vue";
export default {
  props:['title','titlelist'],
  setup(context,content,props) {
   /*  console.log(context.emit);
    console.log(content.emit);
    console.log(ctx.emit); */
    /* const parent={...context} */
    
      const  pop = (index)=>{
        obj.checkindex=index
        content.emit('onback',index)
      };
    const obj = reactive({
     
      checkindex: 0,
     
    });
    function check(index){
      obj.checkindex=index
    }
    return {
      obj,check,pop,props
    };
  },
  /* data() {
    return {
     
    }
  },
  methods:{
    check(index){
      this.checkindex=index
    }
  } */
};
</script>

<style lang="less" scoped>
.commentmiddle {
  border-top: 5px solid gainsboro;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.7rem;
  margin: 0 0.4rem;
  font-size: 0.32rem;
  .two {
    span {
      margin: 0.2rem;
    }
  }
}
.active {
  color: red;
}
</style>