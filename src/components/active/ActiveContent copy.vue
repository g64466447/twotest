<template>
<div>
    <div class="container">
      <div class="innercontent">
         <div>
    <div class="activecontent">
      <div class="one">
        <img src="@/assets/1.jpg" alt="" />
      </div>
      <div class="two">
        <div class="activetitle">
          <div>
            <p class="imgp" style="color: #bfbebe">
              <span> 已有的</span>
              <img
                v-if="obj.vip"
                src="@/assets/1.jpg"
                alt=""
                style="
                  width: 0.5rem;
                  height: 0.3rem;
                  margin-left: 0.1rem;
                  border-radius: 0.08rem;
                "
              />
              <span> 发表 </span>
            </p>
            <p class="psize">111粉丝</p>
          </div>
          <div class="goodjob" style="position: relative">
            <span>+ 关注</span>
            <!-- <span class="num">xxxx</span>
            <van-icon name="good-job-o" class="goodicon" size="18" /> -->
          </div>
        </div>
        <div style="width: 5.5rem; font-weight: 600" class="activeimg">
          <p>
            <span style="color: blue">#下啊阿信啊#</span>
           {{
changevalue(obj.text)
           }}
            <span style="color: blue" v-if="obj.text.length>99">...查看全文</span>
          </p>

          <div class="showimgtypeone">
            <img src="@/assets/1.jpg" alt="" />
          </div>
          <div class="showimgtypetwo">
            <img src="@/assets/1.jpg" alt="" />
            <img src="@/assets/1.jpg" alt="" />
            <img src="@/assets/1.jpg" alt="" />
            <img src="@/assets/1.jpg" alt="" />
            <img src="@/assets/1.jpg" alt="" /><img
              src="@/assets/1.jpg"
              alt=""
            /><img src="@/assets/1.jpg" alt="" /><img
              src="@/assets/1.jpg"
              alt=""
            />
            <img src="@/assets/2.jpg" alt="" />
          </div>
          <p style="color: blue">#预计到2050年</p>
          <div class="activemusic" style="margin: 0.15rem 0">
            <div class="activemusicimg">
              <img
                src="@/assets/1.jpg"
                style="width: 0.8rem; height: 0.8rem; border-radius: 50%"
                alt=""
              />
              <span>
                <van-icon name="good-job-o" class="goodicon" size="18"
              /></span>
            </div>
            <div style="margin: 0 0.15rem">
              <P>也就是陆地表面</P> <P>的储水量、也</P>
            </div>
          </div>
          <p class="activeother">
            <span>
              <van-icon name="good-job-o" class="goodicon" size="18" /> 转发
            </span>
            <span>
              <van-icon name="good-job-o" class="goodicon" size="18" />15</span
            >
            <span>
              <van-icon name="good-job-o" class="goodicon" size="18" />25</span
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
    </div>
</div>
 
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    /*  const yang=ref(hotlist); */

    const obj = reactive({
      activelist: [],
      index: 0,
      text:'世界气象组织5日警告称，预计到2050年，全球将有50亿人面临水资源短缺问题。据世界气象组织发布的最新报告，2018年，全球就已经至少有36亿人每年至少有一个月面临用水量不足的困境，而到2050年，全球缺水的人数预计将升至50亿。报告指出，过去20年间，地球陆地的储水量、也就是陆地表面和地下的所有水的总和“一直在以每年1厘米的速度下降”，而且',
      
   /*  text:'界气象组织5日警告称，预计到2', */
    show: false,
      vip: false,
    });
     function changevalue() {
  if (obj.text.length>100) {
    const x= obj.text.slice(0,100)
    obj.text=x
    console.log(x);
  }
  else{
    return  obj.text
  }
     
    }
    return { obj,changevalue};
  },
};
</script>

<style lang="less" scoped>
.container{
  position: relative;
  width: 7.5rem;
 height: 16rem;
  overflow: hidden;
  .innercontent{
    position: absolute;
    top: 0;
    left: 0;
    overflow-y:scroll;
   
    width: 7.7rem;
  }
}
.activecontent {
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
    .activeimg {
      .showimgtypetwo {
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
      .showimgtypeone {
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

      .activeother {
        display: flex;
        justify-content: space-between;
      }
    }
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;

    .activetitle {
      .imgp {
        width: 3.5rem;
        overflow: hidden;

        display: flex;
        align-items: center;
        span {
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .psize {
        font-size: 0.2rem;
        margin: 0.03rem 0;
      }
      width: 5.5rem;
      display: flex;
      justify-content: space-between;
      .goodjob {
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