<template>
  <div class="listview">
    <listview-top :playlist=state.playlist />
    
    <listview-content :playlist=state.playlist></listview-content>
   
  </div>
</template>

<script>
import { getMusiclist } from "@/api/api";
import ListviewTop from "@/components/listview/ListviewTop";
import ListviewContent from "@/components/listview/ListviewContent";
import ListviewIcon from "@/components/listview/ListviewIcon";
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from '@/store/index.js'
export default {
  setup() {
    const route = useRoute();
    let state = reactive({
      musiclist: [],
      playlist: {creator:[],tracks:[{ar:[]}],al:[],},
    });
    onMounted(async () => {
      console.log(route);
      let id = route.query.id;
      let res = await getMusiclist(id);
     store.commit('setPlaylist',res.data.playlist.tracks)
      /* console.log(res); */
      state.musiclist = res.data;
      state.playlist=res.data.playlist
      console.log(res.data.playlist.tracks);
    });

    return { state };
  },
  components: {
    ListviewTop,
    ListviewContent,
    ListviewIcon,
  },
};
</script>

<style>
</style>