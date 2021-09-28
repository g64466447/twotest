<template>
  <div v-if="singerlist">
      <div>
      <ul class="singerlist">
        <li v-for="(item,index) in singerlist" :key="index" >
          <img :src="item.img1v1Url" alt="">
          <span>{{item.name}}</span>
        </li></ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['singerlist']

}
</script>

<style lang="less" scoped>
.singerlist{
  li{
    display: flex;
    padding:0 8vw ;
    margin:2.667vw 0 ;
    img{
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }
    span{
      padding:20px;
    }
  }
}
</style>