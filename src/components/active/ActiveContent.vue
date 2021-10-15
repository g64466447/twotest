<template>
  <div>
    <div>
      <div class="activecontent" v-for="(item,index) in activelist" :key="index">
        <div class="activeleft">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="activeright">
          <div class="activetop">
            <div>
              <p class="activeuserinfo" style="color: #bfbebe">
                <span> {{item.user.signature}}</span>
                <img
                  v-if="item.user.vipRights&&item.user.vipRights.associator.rights"
                  :src="item.user.avatarUrl"
                  alt=""
                  style="
                    width: 0.5rem;
                    height: 0.3rem;
                    margin-left: 0.1rem;
                    border-radius: 0.08rem;
                  "
                />
                <span> {{item.user.nickname}} </span>
              </p>
              <p>{{item.user.province}}粉丝</p>
            </div>
            <div class="activefollow" style="position: relative">
              <span>+ 关注</span>
              <!-- <span class="num">xxxx</span>
            <van-icon name="good-job-o" class="goodicon" size="18" /> -->
            </div>
          </div>
          <div style="width: 5.5rem; font-weight: 600" class="activebottom">
            <p>
              <span style="color: blue">#{{item.user.nickname}}#</span>
              {{ changevalue(item.json) }}
             <!--  <span style="color: blue" v-if="obj.text.length > 99"
                >...查看全文</span
              > -->
            </p>

            <div class="activeshowimgtypeone" v-if="obj.imglist.length == 1">
              <img :src="item.user.backgroundUrl" alt="" />
            </div>
            <div class="activeshowimgtypetwo" v-if="obj.imglist.length > 1">
              <img
                :src="item.imgurl"
                alt=""
                v-for="(item, index) in obj.imglist"
                :key="index"
              />
            </div>
            <p style="color: blue" v-if="item.user.anchor">#{{item.user.nickname}}</p>
            <div
              class="activemusic"
              style="
                border-radius: 0.1rem;
                padding: 0.1rem;
                margin: 0.15rem 0px;
                background-color: gainsboro;
              "
            >
              <div class="activemusicimg">
                <img
                  :src="item.user.backgroundUrl"
                  style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
                  alt=""
                />
                <span>
                  <van-icon name="good-job-o" class="goodicon" size="18"
                /></span>
              </div>
              <div style="margin: 0 0.15rem">
                <P>{{item.user.signature}}</P> <P>{{item.user.nickname}}</P>
              </div>
            </div>
            <p class="activefooter">
              <span>
                <van-icon name="good-job-o" class="goodicon" size="18" /> 转发
              </span>
              <span>
                <van-icon
                  name="good-job-o"
                  class="goodicon"
                  size="18"
                />15</span
              >
              <span>
                <van-icon
                  name="good-job-o"
                  class="goodicon"
                  size="18"
                />25</span
              >
              <span>
                <van-icon name="good-job-o" class="goodicon" size="18"
              /></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props:['activelist'],
  setup(props) {
    /*  const yang=ref(hotlist); */

    const obj = reactive({
      activelist: [],
      index: 0,
      text: "世界气象组织5日警告称，预计到2050年，全球将有50亿人面临水资源短缺问题。据世界气象组织发布的最新报告，2018年，全球就已经至少有36亿人每年至少有一个月面临用水量不足的困境，而到2050年，全球缺水的人数预计将升至50亿。报告指出，过去20年间，地球陆地的储水量、也就是陆地表面和地下的所有水的总和“一直在以每年1厘米的速度下降”，而且",
      show: true,
      vip: true,
      imglist: [
        {
          imgurl: require("../../assets/1.jpg"),
        },
       
      ],
    });
    function changevalue(value) {
      if (value.length > 100) {
        const x = value.slice(0, 100);
        return x
     
      } else {
        return value
      }
    }
    return { obj, changevalue,props };
  },
};
</script>

<style lang="less" scoped>
.activecontent {
  display: flex;
  margin: 0.4rem;
  font-size: 0.3rem;
  p {
    margin: 0;
    padding: 0;
  }
  .activeleft {
    flex-shrink: 0;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
  }
  .activeright {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .activebottom {
      .activeshowimgtypetwo {
        widows: 5.5rem;
        border-radius: 0.3rem;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        img {
          width: 31.5%;
          margin: 0.05rem 0.05rem;
          height: 1.73rem;
        }
      }
      .activemusic {
        display: flex;
        .activemusicimg {
          position: relative;
          width: 0.8rem;
          height: 0.8rem;
          img {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
          }
          span {
            position: absolute;
            left: 30%;
            top: 30%;
          }
        }
      }
      .activeshowimgtypeone {
        widows: 5.5rem;
        display: flex;
        justify-content: space-around;
        img {
          width: 100%;
          height: 2.7rem;
          border-radius: 0.4rem;
          margin: 0.15rem 0;
        }
      }
      .activefooter {
        display: flex;
        justify-content: space-between;
      }
    }

    .activetop {
      .activeuserinfo {
        width: 3.5rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        span {
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      display: flex;
      justify-content: space-between;
      .activefollow {
        width: 1.8rem;
        height: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          color: orangered;
          padding: 0.05rem 0.25rem;
          border: 1px solid orangered;
          border-radius: 0.25rem;
        }
      }
    }
  }
}
</style>