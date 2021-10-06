<template>
  <div class="CommentTop">
      <div class="fanhui">
        <svg class="icon yang" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
        <span>评论({{total}})</span>
      </div>
      <div class="fenxiang">
        <van-icon name="share-o" size="20" />
      </div>
    </div>
</template>

<script>
export default {
props:['total'],
  setup(props) {
    return{props}
  }

}
</script>
<style lang="less" scoped>
.CommentTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.4rem;
  height: 0.7rem;
  font-size: 0.32rem;
  .fanhui {
    display: flex;
    align-items: center;
  }
  .yang{
    margin:0   0.2rem 0 0;
 
  } .icon {
      width: 0.4rem;
      height: 0.4rem;
    }
}
</style>