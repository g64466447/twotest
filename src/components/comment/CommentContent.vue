<template>
  <div>
    <div
      class="commentcontent"
      v-for="(item, index) in commentlist"
      :key="index"
    >
      <div class="one"><img :src="item.user.avatarUrl" alt="" /></div>
      <div class="two">
        <div class="commenttitle">
          <div>
            <p class="imgp" style="color: #bfbebe">
              {{ item.user.nickname }}
              <img
                v-if="
                  item.user.vipRights !== null &&
                  item.user.vipRights.associator.rights
                "
                :src="item.user.avatarUrl"
                alt=""
                style="
                  width: 0.5rem;
                  height: 0.3rem;
                  margin-left: 0.1rem;
                  border-radius: 0.08rem;
                "
              />
            </p>
            <p class="psize">
              09月30日
              <span style="color: red" v-if="item.user.vipType !== 0"
                >热评</span
              >
            </p>
          </div>
          <div class="goodjob" style="position: relative">
            <span class="num">{{ item.likedCount }}</span>
            <van-icon name="good-job-o" class="goodicon" size="18" />
          </div>
        </div>
        <div style="width: 5.5rem; font-weight: 600">
          {{ item.content }}

          <p style="color: blue; font-size: 0.23rem" @click="changeshow(index)">
            {{ item.likedCount }}条回复 >
          </p>
        </div>
      </div>
    </div>
    <van-popup
      v-model:show="obj.show"
      position="bottom"
      class="popup"
      :style="{ width: '100%', height: '80%' }"
    >
      <div>
     <!--    <comment-child :list="hotlist[obj.index]"></comment-child> -->
        <comment-child :list="hotlist"></comment-child>

        <!--  <commentcontent-child  :list='hotlist' style="height:300px"></commentcontent-child> -->
      </div>
    </van-popup>

   <!--  <comment-child :list="commentlist" style="height: 300px"></comment-child>
    <comment-child :list="hotlist" style="height: 300px"></comment-child> -->
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import CommentContentchild from "./CommentContentchild.vue";
import CommentChild from "./CommentChild.vue";
export default {
  components: {
    CommentContentchild,
    CommentChild,
  },
  props: ["commentlist", "hotlist"],
  setup(props) {
    
    

    /*  const yang=ref(hotlist); */
    const obj = reactive({
      commentlist: [],
      index: 0,
      show:false
    });
    function changeshow(index) {
      obj.index = index;
     obj.show = !obj.show;
     console.log(obj.index);
    }
    return { obj, props, changeshow };
  },
};
</script>
/* style="margin-top:'10px" */
<style lang="less" scoped>
.commentcontent {
  display: flex;
  margin: 0.4rem;
  font-size: 0.3rem;
  p {
    margin: 0;
    padding: 0;
  }
  .one {
    flex-shrink: 0;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
  }
  .two {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;

    .commenttitle {
      .imgp {
        display: flex;
        align-items: center;
      }
      .psize {
        font-size: 0.2rem;
        margin: 0.03rem 0;
      }
      width: 5.5rem;
      display: flex;
      justify-content: space-between;
      .goodjob {
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.2rem;

        .num {
          position: absolute;
          top: 33%;
          left: 0;
        }
        .goodicon {
          position: absolute;
          top: 26%;
          right: 0;
        }
      }
    }
  }
}
</style>