<template>
 
  <listview-top :playlist=state.playlist />
    
    <listview-content :playlist=state.playlist></listview-content>
</template>

<script>
import { useRoute } from "vue-router";
import { getdetail } from "@/api/api";
import store from "@/store/index.js";
import { reactive, onMounted } from "vue";
import ListviewTop from "@/components/listview/ListviewTop";
import ListviewContent from "@/components/listview/ListviewContent";
import ListviewIcon from "@/components/listview/ListviewIcon";

export default {
  setup() {
    let state = reactive({
      musiclist: [],
      playlist: { creator: [], tracks: [{ ar: [] }], al: [] },
    });
    onMounted(async () => {
      const route = useRoute();
      let id = route.query.id;
      let res = await getdetail(id);
      state.musiclist = res.data;
      state.playlist = res.data.playlist;
     /*  console.log(res); */
      store.commit("setPlaylist", res.data.playlist.tracks);
    });
    return { state };
  },
  components: {
   
     ListviewTop,
    ListviewContent,
    ListviewIcon,
    /* ListviewIcon, */
  },
  /* async mounted(){
    console.log(this.$route);
      console.log(this.$route.query.id);
      let id=this.$route.query.id
    let res=await getdetail(id)
    console.log(res);
  } */
};
</script>

<style>
</style>