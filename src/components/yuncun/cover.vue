<template>
  <div>
    <div class="coverhead">
      <div class="coverchild" v-for="(item,index) in mvlist" :key="index"  @click="$router.push(`/mvplay?id=${item.id}`)">
        <div class="coverimgpositon">
          <img class="playimg" :src="item.cover" alt="" />
          <span class="playnum"> <van-icon name="play" size="0.1rem" />{{changevalue(item.playCount)}}</span>
          <span class="playtime">{{item.duration}}</span>
        </div>

        <p>{{item.name}}</p>
        <div class="coveruserimg">
          <div class="coveruserinfo">
            <img :src="item.cover" alt="" />
            <span>{{item.artistName}}</span>
          </div>
          <span>10-04</span>
        </div>
      </div>
   
     
    </div>
  </div>
</template>

<script>
export default {
    props:['mvlist'],
    methods: {
       changevalue(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num >= 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }
    },

};
</script>

<style lang="less" scoped>
.coverhead {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0.19rem;
  font-size: 0.2rem;
p{
    padding:0;
    margin:0.03rem 0 ;
    height: 0.63rem;
}
  .coverchild {
    width: 3.5rem;
    height: 3rem;
    margin: 0.2rem 0;
    background-color: ghostwhite;
    .coverimgpositon {
      position: relative;
      width: 3.5rem;
      height: 2rem;
      .playimg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2rem;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
      }
      .playnum {
        position: absolute;
        left: 0.1rem;
        bottom: 0.15rem;
      }
      .playtime {
        position: absolute;
        right: 0.1rem;
        bottom: 0.15rem;
      }
    }
  }
  .coveruserimg {
    height: 0.4rem;
    display: flex;
    justify-content: space-between;align-items: center;
    .coveruserinfo {
      display: flex;
      align-items: center;
    }
    img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
  }
}
</style>