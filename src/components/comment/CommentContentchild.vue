<template>
  <div>
    <div
      class="commentcontent"
      v-for="(item, index) in obj.commentlist"
      :key="index"
    >
      <div class="one"><img :src="item.user.avatarUrl" alt="" /></div>
      <div class="two">
        <div class="commenttitle">
          <div>
            <p class="imgp">
              {{ item.user.nickname }}
              <img
              v-if="item.user.vipRights!==null&&item.user.vipRights.associator.rights"
                :src="item.user.avatarUrl"
                alt=""
                style="
                  width: 0.5rem;
                  height: 0.3rem;
                  margin-left: 0.1rem;border-radius: 0.08rem;
                "
              />
            </p>
            <p class="psize">
              09月30日
              <span style="color: red" v-if="item.user.vipType!==0">热评</span>
            </p>
          </div>
          <div class="goodjob" style="position: relative">
            <span class="num">{{ item.likedCount }}</span>
            <van-icon name="good-job-o" class="goodicon" size="18" />
          </div>
        </div>
        <div style="width: 5.5rem">
          {{ item.content }}

          <p style="color: blue; font-size: 0.23rem">{{item.likedCount}}条回复 ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { getplaylistcomment } from "@/api/api.js";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const obj = reactive({
      commentlist: [],
    });
    onMounted(async () => {
      console.log(route.params);
      const id = route.params.id;
      console.log(id);
      /*       const res=await getplaylistcomment(705123491); */
      const res = await getplaylistcomment(id, 5);
      /*   setTimeout(async() => {
           const res=await getplaylistcomment(19723756);
               console.log(res);
       }, 2000); */ console.log(res);
      obj.commentlist = res.data.comments;
     
    });
    return { obj };
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