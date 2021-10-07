<template>
  <div>
    <comment-top :total="obj.commentlist.total"></comment-top>
    <comment-middle @onback=onback></comment-middle>
    <comment-content :commentlist='obj.comments' :hotlist="obj.commentlist.hotComments"></comment-content>
   <!--  <van-skeleton title="xaxa" avatar :row="3"> </van-skeleton> -->
  </div>
</template>

<script>
import CommentTop from "@/components/comment/CommentTop"
import CommentMiddle from "@/components/comment/CommentMiddle"
import CommentContent from "@/components/comment/CommentContent"
import { getplaylistcomment } from "@/api/api.js";
import { useRoute } from "vue-router";
import { reactive, ref, onMounted, } from "vue";
export default {
  components:{
    CommentTop,CommentMiddle,CommentContent
  },
  setup() { const route = useRoute();
     /*  const route =useRoute(); */
     const onback=(index)=>{
       /* console.log(index); */
       if(index==1){
         obj.comments=obj.commentlist.comments
        
       }
       
       else{
         obj.comments=obj.commentlist.hotComments
       }
     };
    const loading = ref(true);
    const obj = reactive({
      comments:[],
    commentlist:[]
    });
    onMounted(async () => {
     
      const id = route.params.id;
     
      /*       const res=await getplaylistcomment(705123491); */
      const res = await getplaylistcomment(id, 5);
      /*   setTimeout(async() => {
           const res=await getplaylistcomment(19723756);
               console.log(res);
       }, 2000); */ 
      obj.commentlist = res.data;
      obj.comments=res.data.hotComments
      /* console.log(res.data.hotComments[0].time); */
    });

    return {
      loading,
      obj,onback
    };
  },
};
</script>

