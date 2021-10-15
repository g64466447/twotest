<template>
  <div>
    <div class="hometop">
      <div @click="showPopup">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
      <div class="two">   
        <span
          v-for="(item, index) in state.list"
          :key="index"
          :class="{ active: isactive(item.path) }"
          @click="check(item, index)"
          >{{ item.name }}</span
        >
      </div>
      <div @click="search()">
        <svg class="icon three" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
     
      <van-popup
        v-model:show="show"
        position="left"
        class="popup"
        :style="{ width: '77%', height: '100%' }"
        style="background-color: #f5f0f0;"
      >
        <div class="popuptop">
          <div class="one">
            <div>
              <img src="@/assets/1.jpg" alt="tupian" />
            </div>
            <div class="two">
              人世繁华
              <van-icon name="arrow" />
            </div>
          </div>

          <div><van-icon name="scan" /></div>
        </div>
        <div class="popupvip">
          <div class="vipone">
            <div>
              <p>开通黑胶vip</p>
              <p>立享超21项专属特权></p>
            </div>
            <div>会员中心</div>
          </div>
          <div class="viptwo">疯抢！vip只需0.27元/天，100%得好礼</div>
        </div>
        <div class="popupmiddle">
          <van-cell
            :title="item.title"
            :icon="item.icon"
            is-link
            v-for="(item, index) in state.message"
            :key="index"
            @click="gopath(item.path)"
          >
            <template #value v-if="item.num || item.go">
              <div v-if="item.num">
                <span class="num"> {{ item.num }}</span>
              </div>
              <div v-if="item.go">
                <span class="textone">
                  {{ item.go }}
                </span>
              </div>
            </template>
          </van-cell>
        </div>
        <div class="popupmiddle">
          <div class="middletop">{{ state.message2.title }}</div>

          <van-cell
            :title="item.title"
            :icon="item.icon"
            is-link
            v-for="(item, index) in state.message1.list"
            :key="index"
            @click="gopath(item.path)"
          >
            <template #value v-if="item.list">
              <div v-if="item.list" class="middlelist">
                <span>{{ item.list.title }}</span>
                <img :src="item.list.img" alt="" />
              </div>
            </template>
          </van-cell>
        </div>
        <div class="popupmiddle">
          <div class="middletop">{{ state.message2.title }}</div>

          <van-cell
            :icon="item.icon"
            is-link
            v-for="(item, index) in state.message2.list"
            :key="index"
            @click="gopath(item.path)"
          >
            <template #value v-if="item.show || item.check">
              <div>
                <div v-if="item.show" class="middleshow">
                  <van-switch v-model="item.check" size="12px" />
                </div>
                <div v-if="item.value">
                  {{ item.value }}
                </div>
              </div>
            </template>
            <template #title>
              <div>
                <div>
                  {{ item.title }}
                </div>
              </div>
            </template>
          </van-cell>
        </div>

        <div class="popupbottom">退出登录/关闭</div>
      </van-popup>
    

  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute,useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const themeVars = {
      popupbackgroundcolor: "red",
    };
    const show = ref(false);
    const route=useRoute();
    const router = useRouter();
    const showPopup = () => {
      show.value = true;
    };
    let state = reactive({
      message: [
        {
          title: "我的消息",
          icon: "envelop-o",
          num: 9,
          path: "/message",
        },
        {
          title: "云被中心",
          icon: "shop-o",
          path: "/center",
        },
        {
          title: "创作者中心",
          icon: "envelop-o",
          go: "签到",
          path: "/create",
        },
      ],
      message1: {
        title: "音乐服务",
        list: [
          {
            title: "云村邮票",
            icon: "envelop-o",
            num: 9,
            path: "/yuncun",
          },
          {
            title: "商城",
            icon: "shop-o",
            path: "/center",
          },
          {
            title: "游戏专区",
            icon: "envelop-o",
            path: "/youxi",
          },
          {
            title: "口袋彩铃",
            icon: "envelop-o",
            path: "/koudia",
            list: {
              title: "国庆长假哎谢谢阿欣阿欣",
              img: require("../../assets/1.jpg"),
            },
          },
        ],
      },
      message2: {
        title: "其他",
        list: [
          {
            title: "设置",
            icon: "envelop-o",
            num: 9,
            path: "/setting",
          },
          {
            title: "夜间模式",
            icon: "shop-o",
            path: "",
            check: false,
            show: "true",
          },
          {
            title: "定时关闭",
            icon: "envelop-o",
            path: "/关闭",
          },
          {
            title: "个性装扮",
            icon: "envelop-o",
            path: "/koudia",
          },
          {
            title: "边听边村",
            icon: "envelop-o",
            path: "/koudia",
            value: "未开启",
          },
          {
            title: "在线听歌免流量",
            icon: "envelop-o",
            path: "/koudia",
          },
          {
            title: "音乐黑名单",
            icon: "envelop-o",
            path: "/koudia",
          },
          {
            title: "青少年模式",
            icon: "envelop-o",
            path: "/koudia",
            value: "未开启",
          },
          {
            title: "音乐闹钟",
            icon: "envelop-o",
            path: "/koudia",
          },
        ],
      },
    
      checkindex: 0,
      list: [
        { name: "我的", path: "/userinfo" },
        { name: "云端", path: "/cloud" },
        { name: "音乐", path: "/music" },
        { name: "排行", path: "/rank" },
      ],
    });
    onMounted(() => {
     
    });
    function isactive(path) {
     /* console.log(path);
     console.log(route); */
      if (path === route.path) {
        return true; 
      }
      if (path === "/cloud" && route.path === "/") {
        return true;
      }
      return false;
    }
    function check(item, index) {
      state.checkindex = index;
      router.push(item.path);

     
    }
    function search() {
      router.push("/search");
    }
    function gopath(item) {
      router.push(item);
    }

    return {
      state,
      isactive,
      check,
      search,
      gopath,
      show,
      showPopup,
      themeVars,
    };
  },
  /*  data() {
    return {
      checkindex: 0,
      list: [
        { name: "我的", path: "/userinfo" },
        { name: "云端", path: "/cloud" },
        { name: "音乐", path: "/music" },
        { name: "排行", path: "/rank" },
      ],
    };
  },
  methods: {
    isactive(path) {
      if (path === route.path) {
        return true;
      }
      if (path === "/cloud" && route.path === "/") {
        return true;
      }
      return false;
    },
    check(item, index) {
      this.checkindex = index;
     
      
      emit("routechang", item.path);
    },
    search() {
      router.push("/search");
    },
    videoplay() {
      router.push("/videoplay");
    },
  }, */
};
</script>

<style lang="less"  >

/* .userpopup{
  overflow: hidden;
  width: 278px;
  height: 1000px;
  
  
} */
.popup{
  margin-right:-10px;
}

.van-popup {
  background-color: rgb(245, 240, 240);
}
.popupbottom {
  display: flex;
  justify-content: center;
  color: red;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  height: 50px;
  align-items: center;
  margin: 10px;
}
.popuptop {
  display: flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  .one {
    display: flex;
    justify-content: space-between;
    img {
      width: 31px;
      height: 31px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .two {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
}
.popupvip {
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  background-color: rgb(29, 11, 11);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  color: white;
  .viptwo {
    width: 5rem;
    font-size: 0.15rem;
    height: 0.5rem;
  }
  .vipone {
    width: 5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    p {
      margin: 0;
      padding: 0;
    }
    div:nth-child(2) {
      padding: 3px 6px;
      border-radius: 10px;
      border: 2px solid red;
    }
  }
}
.popupmiddle {
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  .middleshow {
    padding-top: 4px;
  }
  .num {
    background-color: red;
    font-size: 12px;
    padding: 1px 4px;
    color: white;
    border-radius: 50%;
  }
  .textone {
    background: red;
    padding: 2px 6px;
    border-radius: 6px;
    font-size: 10px;
    color: white;
  }
  .switch {
    margin-top: 3px;
  }
  .middlelist {
    display: flex;
    float: right;
    span {
      overflow: hidden;
      /* text-overflow: */
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 50px;
      font-size: 12px;
      height: 24px;
    }
    /* align-items: center; */

    img {
      margin: 3px 0 0 3px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
  .middletop {
    padding: 0 0 5px 10px;
    border-bottom: 1px solid gainsboro;
  }
}
.hometop {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
    padding: 0 0.1rem;
  }
  .two {
    width: 5rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.33rem;
    .active {
      font-weight: 900;
      color:red;
    }
  }
  .three {
    width: 0.45rem;
    height: 0.45rem;
    padding: 0 0.25rem 0 0;
  }
}
</style> 

