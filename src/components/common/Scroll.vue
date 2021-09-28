<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: ["list", "top"],
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    initscroll() {
      this.$refs.wrapper.style.top = this.top + "px";

      /*  this.scroll = new BScroll(this.$refs.warpper); */
      /*  this.scroll =new BScroll('wrapper',{
        scrollY: true,
        click: true
   }) */
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true,
      });
      /* console.log(this.$refs.wrapper); */
    },
  },
  mounted() {
    /*  this.$nextTick(()=>{
			    this.scroll =new BScroll(this.$refs.warpper)
			 }) */
    this.initscroll();
  },
  watch: {
    list() {
      this.$nextTick(() => {
        this.refresh();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  width: 7.5rem;
  height: 3.3rem;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
