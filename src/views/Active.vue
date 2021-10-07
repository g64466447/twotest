<template>
  <div>
        <active-middle :title="obj.title" :titlelist='obj.titlelist'></active-middle>
      <active-content></active-content>
  </div>
</template>

<script>import { reactive,} from "vue";
import ActiveContent  from '@/components/active/ActiveContent.vue'
import ActiveMiddle  from '@/components/active/ActiveMiddle.vue'
export default {
  components:{
    ActiveContent,ActiveMiddle
   
  },setup(){
    const obj = reactive({
      titlelist:[{
          name: "全部",
        },
        {
          name: "音乐人",
        },
        {
          name: "朋友",
        },],
      title:'我的关注'

  });
  return { obj };
  }
}
</script>

<style>

</style>