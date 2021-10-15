<template>
  <router-view />
  <play-control></play-control>
  
</template>

<script>
import PlayControl from '@/views/PlayControl'

export default {
   
  components:{
    PlayControl
  }
}
</script>
<style lang="less">
body {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  font-family: "微软雅黑";
}

.icon {
  width: 0.3rem;
  height: 0.3rem;
}
a{
  color: #333;
  text-decoration: none;
}
input{
            outline: none;
        }
</style>
