<template>
  <div>
    <ul v-for="(item, key) in singer" :key="key" class="singer">
      <li
        v-for="(item1, index) in item"
        :key="index"
        :class="{ 'active': activeindex[key] === index }"
        @click="indexchange(key, index)"
      >
        {{ item1.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["singer"],
  data() {
    return {
      activeindex: {
        sex: 0,
        genre: 0,
        area: 0,
      },
    };
  },
  methods: {
    indexchange(key, index) {
      this.activeindex[key] = index;
      const params = {};
      for (let key in this.activeindex) {
        params[key] = this.singer[key][this.activeindex[key]].id;
      }
      this.$emit('paramschange',params)
     /*  this.param = params; */
     /*  console.log(params);
      console.log(this.activeindex[key]);
      console.log(index); */
    },
  },
};
</script>

<style lang="less" scoped>
.active {
  background-color: blue;
  border-radius: 12px;
  color: white;
}

.singer {
  display: flex;
  flex-wrap: wrap;
  padding: 1.333vw 0;
  padding-left: 5.333vw;
  font-size: 3.733vw;

  li:nth-child(7) {
    margin-left: 62px;
  }
  li:nth-child(12) {
    margin-left: 62px;
  }
  li {
    padding: 0.8vw 2.333vw;
    margin: 0 1.5vw;
  }
}
</style>