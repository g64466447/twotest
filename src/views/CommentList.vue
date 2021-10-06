<template>
  <div>
    <comment-top :total="obj.commentlist.total"></comment-top>
    <comment-middle></comment-middle>
    <comment-content :commentlist='obj.commentlist.hotComments'></comment-content>
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
    const loading = ref(true);
    const obj = reactive({
    commentlist:[]
    });
    onMounted(async () => {
      console.log(route.params);
      const id = route.params.id;
      console.log(id);
      /*       const res=await getplaylistcomment(705123491); */
      const res = await getplaylistcomment(id, 5);
      /*   setTimeout(async() => {
           const res=await getplaylistcomment(19723756);
               console.log(res);
       }, 2000); */ console.log(res);
      obj.commentlist = res.data;
      console.log(res.data.hotComments[0].time);
    });

    return {
      loading,
      obj,
    };
  },
};
</script>

