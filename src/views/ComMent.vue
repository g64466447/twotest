<template>
  <div>
    <!-- <comment-top></comment-top>
    <comment-middle></comment-middle>
    <comment-content></comment-content> -->
    <van-skeleton title="xaxa" avatar :row="3"> </van-skeleton>
  </div>
</template>

<script>
import CommentTop from "@/components/comment/CommentTop"
import CommentMiddle from "@/components/comment/CommentMiddle"
import CommentContent from "@/components/comment/CommentContent"
import { reactive, ref, onMounted } from "vue";
export default {
  components:{
    CommentTop,CommentMiddle,CommentContent
  },
  setup() {
    const loading = ref(true);
    const obj = reactive({
      title: "yang",
    });
    onMounted(() => {});

    return {
      loading,
      obj,
    };
  },
};
</script>

