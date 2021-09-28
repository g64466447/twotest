<template>
  <div>
    <div v-if="rank">
      <div class="ranksomg">
        <div class="img">
          <img :src="rank.artistToplist.coverUrl" alt="" />
        </div>

        <p>{{ rank.artistToplist.upateFrequency }}</p>
        <p>{{ rank.artistToplist.name }}</p>
      </div>
      <ul class="ranklist">
        <li
          v-for="(item, index) in rank.list"
          :key="index"
          @click="rankplay(item.id)"
        >
          <span>{{ index + 1 }}</span>
          <div>
            <img :src="item.coverImgUrl" alt="" />
          </div>

          <span class="twoname">{{ changerankname(item.name) }}</span>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rank"],
  data() {
    return {};
  },
  methods: {
    changerankname(item) {
      if (item.length > 3) {
        var item = item.slice(0, 3);
      /*   console.log(item); */
      } else {
        return item;
      }
      return item;
    },
    rankplay(id) {
      /* console.log(); */

      /*  this.$router.push(`/playdetail/${id}`,
         ); */
      this.$router.push(
      {
          path:'/playdetail',
      query:{
        id:id
      }
      });
     /*  console.log(id); */
    },
  },
};
</script>


<style lang="less" scoped>
.ranksomg {
  .img {
    padding: 0 0.2rem;
    img {
      width: 7.1rem;
      height: 3rem;
    }
  }
  p {
    text-align: center;
    /* font: 16px; */
  }
}
.ranklist {
  margin: 0;
  padding: 0;
  li {
    display: flex;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 1rem;
      }
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.2rem;
      flex-direction: row;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis; /* white-space: nowrap; */
      height: 0.8rem;
      padding-right: 0.2rem;
    }
    .twoname {
      font-size: 0.27rem;
    }
    /* span:nth-child(2) {
     font-size: 0.2rem;
    } */
  }
}
</style>