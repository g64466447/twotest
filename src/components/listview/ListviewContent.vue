<template>
  <div class="content">
    <div class="ContentTop">
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="test">播放全部</div>
        <div class="num">（共{{ playlist.tracks.length }}首）</div>
      </div>
      <div class="btn">+收藏（{{ changevalue(playlist.playCount) }}）</div>
    </div>
    <div class="playlist">
      <div
        class="playitem"
        v-for="(item, index) in playlist.tracks"
        :key="index"
      >
        <div class="left">
          <div class="index">{{ index + 1 }}</div>
          <div class="listcontent">
            <div class="title">{{ item.name }}</div>
            <div>
              <!-- <span class="name">{{ item.al.name }}</span> -->
             
              <span
                class="tag"
                v-for="(item1, index1) in playlist.tags"
                :key="index1"
                >{{ item1[1]}}</span
              >
              <span> - </span>
               <span
                class="name"
                v-for="(item2, index2) in item.ar"
                :key="index2"
                >{{ item2.name }}</span
              >
            </div>
          </div>
        </div>

        <div class="right">
          <div v-show="state.showicon" >
            <svg class="icon" aria-hidden="true" @click="showplay(index)">
              <use xlink:href="#icon-bofang"></use>
            </svg>
          </div>
          <div v-show="!state.showicon">
            <svg class="icon" aria-hidden="true" @click="showplay(index)">
              <use xlink:href="#icon-ico_zanting_xuanzhong"></use>
            </svg>
          </div>
          
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liebiao"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import store from '@/store/index.js'
import { reactive,onMounted} from 'vue'
export default {
  props: ["playlist"],
  setup() {
    let state = reactive({
     showicon:true
    });
    function changevalue(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(1) + "亿";
      } else if (num >= 10000) {
        res = num / 10000;
        res = res.toFixed(1) + "万";
      }
      return res;
    }
     onMounted( () => {
     /*  console.log(state); */
    });
    function showplay(index){ 
      console.log(state);
      state.showicon =!state.showicon
       store.commit("setPlaycurrentindex",index)
       store.commit("setshow",true)
      /* this.setPlaycurrentindex(index) */
      /* console.log(this.setPlaycurrentindex());
      console.log(this.$store); */
       /* return */
    }
    return {
      changevalue,...mapMutations(['setPlaycurrentindex']),showplay,state
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 7.5rem;
  
  .playlist {
    width: 7.5rem;
    height: 6rem;
    overflow: scroll;
    background-color: #fff;
    .playitem {
      display: flex;
      justify-content: space-between;
      height: 1rem;
      align-items: center;
      padding: 0 0.4rem;
      .index {
        margin: 0 0.25rem;
      }
      .left {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tag {
          color: red;

        }
        .name{
            color: #ccc;
        }
      }
      .right {
        display: flex;
        justify-content: space-around;
        align-items: center;
        div {
          margin: 0 0.2rem;
          .icon {
            width: 0.4rem;
            height: 0.4rem;
            fill: #ccc;
          }
        }
      }
    }
  }
  .ContentTop {
    display: flex;
    padding: 0 0.4rem;
    height: 0.8rem;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    .title {
      display: flex;
      align-items: center;
    }
    .icon {
      width: 0.4rem;
      height: 0.4rem;
    }
    .test {
      font-size: 0.4rem;
      font-weight: 500;
      padding: 0 0 0 0.2rem;
    }
    .num {
      color: #ccc;
    }
    .btn {
      width: 2rem;
      height: 0.6rem;
      background-color: red;
      border-radius: 0.3rem;
      text-align: center;
      padding: 0 0.34rem;
      font-size: 0.16rem;
      line-height: 0.6rem;
      color: #fff;
    }
  }
}
</style>