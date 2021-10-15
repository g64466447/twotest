<template>
  <div class="listviewtop">
    <img class="bg" :src="playlist.coverImgUrl" alt="" />
    <div class="listviewtopnav">
      <div class="back">
        <svg class="icon yang" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
        <span class="title">歌单</span>
      </div>
     <!--  $router.push('/search') -->
      <div class="right">
        <svg class="icon search" aria-hidden="true" @click="search()">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentleft">
        <img :src="playlist.coverImgUrl" alt="" />
        <div class="slidetwo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zanting1 " class="left"></use>
          </svg>
          <span>{{ changevalue(playlist.playCount) }}</span>
        </div>
      </div>
      <div class="contentright">
        <h3>{{ playlist.name }}</h3>
        <div class="user">
          <img :src="playlist.creator.avatarUrl" alt="" />
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">
          {{ playlist.description }}
        </div>
      </div>
    </div>
    <div class="iconlist">
      <div @click=comment()>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div @click="$router.push('/active')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-hanhan-01-01"></use>
        </svg>
        <span>下载</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter,useRoute} from 'vue-router'
/* import router from "@/router/index.js" */
export default {
  props: ["playlist"],
  setup() {
    const router =useRouter()
    const route=useRoute()
     function search(){
      router.push('/search')
    };
    function comment() {
     
      const id =route.query.id
       router.push(`/commentlist/${id}`)
    }
    function changevalue(num) {
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
    return { changevalue ,search,comment};
  },
};
</script>
<style lang="less" scoped>
.listviewtop {
  width: 7.5rem;
  height: 5.2rem;
  .iconlist {
    margin: 0.2rem 0 0 0;
    display: flex;
    justify-content: space-around;
    color: #fff;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      margin-bottom: 0.2rem;
      color: #fff;
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      span {
        font-size: 0.26rem;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    .contentright {
      margin: 0 0.4rem 0 0.2rem;
      color: #fff;
      .user {
        display: flex;
        align-items: center;
        margin: 0.1rem 0;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
        }
        span {
          margin-left: 0.2rem;
          color: #ccc;
          font-size: 0.26rem;
        }
      }
      .description {
        font-size: 0.24rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .contentleft {
      position: relative;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.1rem;
        margin: 0.4rem 0 0 0.4rem;
      }
      .slidetwo {
        position: absolute;
        width: 1.5rem;
        top: 0.45rem;
        right: 0rem;
        color: #fff;
        height: 0.35rem;
        display: flex;
        border-radius: 0.17rem;
        background: rgb(236, 234, 234) 0.1;

        font-size: 0.2rem;

        .icon {
          fill: #fff;
        }
      }
    }
  }

  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(40px);
  }
  .listviewtopnav {
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.3rem;
    margin: 0 0.4rem;

    .title {
      margin-left: 0.2rem;
      position: absolute;
      top: 0.15rem;
    }

    .search {
      margin-right: 0.2rem;
      width: 0.35rem;
      height: 0.35rem;
    }
    .icon {
      width: 0.4rem;
      height: 0.4rem;
    }
    .yang {
      width: 0.35rem;
      height: 0.35rem;
      fill: #ccc;
    }
    .back .right {
      color: #fff;
      display: flex;
      align-items: center;
    }
  }
}
</style>