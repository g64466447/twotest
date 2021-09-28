<template>
  <div v-if="listtop">
    <ul class="top">
      <li v-for="(item, index) in listtop" :key="index" @click="yang(item.id)">
        <img :src="item.picUrl" alt="" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["listtop"],
  methods: {
    yang(id) {
      this.$router.push(`/recommend/${id}`)
      console.log(id);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.top {
  margin: 0;
  padding: 0;
  list-style: none;
 /*  padding-top: 5rem; */
  /* htight:calc(100vh-36px); */
  li {
    display: flex;
    padding: 1.667vw;

    img {
      padding-left: 3vw;
      width: 18.667vw;
      border-radius: 2.667vw;
    }
    span {
      margin-left: 2.667vw;
      padding-top: 6.667vw;
    }
  }
}
</style>