<template>
  <div>
        <active-middle :title="obj.title" :titlelist='obj.titlelist'></active-middle>
      <active-content :activelist="obj.activelist"></active-content>
  </div>
</template>

<script>import { reactive,onMounted} from "vue";
import ActiveContent  from '@/components/active/ActiveContent.vue'
import ActiveMiddle  from '@/components/active/ActiveMiddle.vue'
import {getactive} from '@/api/api.js'
export default {
  components:{
    ActiveContent,ActiveMiddle
   
  },setup(){
    const obj = reactive({
      activelist:[],
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
  onMounted(async()=>{
      const res=await getactive()
      console.log(res.data.events);
      obj.activelist=res.data.events
  })
  return { obj };
  }
}
</script>

<style>

</style>