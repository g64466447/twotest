<template>
  <div class="content" v-show="musclist.length !== 0">
    <div class="ContentTop">
      <div class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="test">播放全部</div>
        <div class="num">（共{{ musclist.length }}首）</div>
      </div>
      <!-- <div class="btn">+收藏（{{ changevalue(playlist.playCount) }}）</div> -->
    </div>
    <div class="playlist">
      <div class="playitem" v-for="(item, index) in musclist" :key="index">
        <div class="left">
          <div class="index">{{ index + 1 }}</div>
          <div class="listcontent">
            <div class="title">{{ item.name }}</div>
            <div>
              <span class="name">{{ item.album.name }}</span>

              <!--   <span
                class="tag"
                v-for="(item1, index1) in playlist.tags"
                :key="index1"
                >{{ item1[1]}}</span
              > -->
              <span> - </span>
              <span
                class="name"
                v-for="(item2, index2) in item.artists"
                :key="index2"
                >{{ item2.name }}
              </span>
            </div>
          </div>
        </div>

        <div class="right">
          <div @click="setplay(item, index)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
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
export default {
  props: ["musclist"],
  methods: {
    changname(name) {
      console.log(name.length);
      if (name.length > 4) {
        let newname = name.slice(0, 3);
        name = newname;
      }
    },
    setplay(item, index) {
      item.al = item.album;
    /*   console.log(item); */
      item.al.picUrl = item.album.artist.img1v1Url;
      this.$store.commit("pushPlaylist", item);
      this.$store.commit(
        "setPlaycurrentindex",
        this.$store.state.playlist.length - 1
      );
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 7.5rem;

  .playlist {
    width: 7.5rem;
    height: 9rem;
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
        .name {
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