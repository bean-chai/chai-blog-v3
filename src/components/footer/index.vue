<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-10-14 14:57:01
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-10-16 17:21:17
 * @FilePath: \chai-blog-new\src\components\footer\index.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="footer-box">
    <div class="end-box">
      <div class="end-lbox" :style="{ 'border-color': color, color: color }">
        <!-- <div>
          <span style="letter-spacing: 1px"
            >I use the following social media a platforms:</span
          >
          <span style="margin-left: 20px">QQ: 2787922490</span>
        </div> -->
        <div class="pc-box">
          总浏览量：{{ watchNum ?? "查询失败" }}
          <span class="slide-box">|</span> 总访客数：{{ peoNum ?? "查询失败" }}
        </div>
        <div class="num-box pc-box">
          网站苟活 {{ dayT }}天 {{ hT }}小时 {{ minT }}分钟 {{ secT }}秒
        </div>
        <div class="num-box">
          主题由 <a href="https://github.com/4-433">🧡4433工作室🧡</a> 设计 ·
          power by <a href="https://github.com/bean-chai">Chaichai</a>
        </div>
        <div class="admin-name">
          &copy;2024 chaichai
          <span class="sakura"></span>
        </div>
      </div>
      <div class="end-rbox" :style="{ color: color }">
        <div
          style="
            margin: 30px 0 0 30px;
            letter-spacing: 0.025rem;
            vertical-align: baseline;
          "
        >
          <div style="font-size: 18px; margin-bottom: 3rem">Profile</div>
          <div>This is a blog theme of chaichai, new one.</div>
          <div>
            If you like this theme, please let me know, and I will do my best
            for it
          </div>
        </div>
        <div class="end-point">→</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import CryptoJS from "crypto-js";

const watchNum = ref(0);
const peoNum = ref(0);

const dayT = ref(0);
const hT = ref(0);
const minT = ref(0);
const secT = ref(0);

onMounted(() => {
  getNums();
  let myTimeDisplay = setInterval(() => {
    getTime(); //每秒更新一次时间
  }, 1000);
});

function sha256(message) {
  return CryptoJS.SHA256(message).toString().toUpperCase();
}

const getTime = () => {
  var t1 = new Date("2021/8/25 4:30:59");
  var data = new Date(); //获取当前时间
  var times = t1.getTime() - data.getTime(); //时间差的毫秒数
  var days = parseInt(times / (24 * 1000 * 3600)); //计算相差的天数
  var leave = times % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var h = parseInt(leave / (3600 * 1000)); //计算小时数
  //计算分钟数
  var h_leave = leave % (3600 * 1000);
  var min = parseInt(h_leave / (60 * 1000));
  //计算秒数
  var min_leave = h_leave % (60 * 1000);
  var sec = parseInt(min_leave / 1000);
  dayT.value = days;
  hT.value = h;
  minT.value = min;
  secT.value = sec;
};

// 使用示例
const getNums = () => {
  const timestamp = new Date().getTime();

  const data = {
    maskId: "3JwKBXX0Ip7niPEX", // 请修改为您的应用统计maskId
    accessKey: "jqF8UdQqRi8Sid6UR0aqZMbYe7pwb67P", // 请修改为您的 accessKey
    nonce: "1234", // 4位随机字符串
    timestamp: timestamp, // 请修改为您的请求时间戳
    sign: "",
  };

  const signString = `accessKey=${data.accessKey}&nonce=1234&secretKey=39H5y0rLHiGyYUonBOx6N1gn2X3jx077&timestamp=${timestamp}`;
  const sign = sha256(signString);

  data.sign = sign;

  console.log(data, "newdata");

  const res = axios.post("https://v6-open.51.la/open/overview/get", data);

  res.then((response) => {
    console.log("请求成功:");
    console.log("respnse", response);
    if (response.data.code === "0000") {
      peoNum.value = response.data.bean.totalUv;
      watchNum.value = response.data.bean.totalPv;
    }
  });
  // 异步操作失败时，执行的回调函数
  res.catch((error) => {
    console.log("请求失败:");
    // console.log('error:',error)
    console.log("请求失败响应对象获取", error.response);
  });
};
</script>

<style lang="scss">
a {
  color: #677d96;
  text-decoration: none;
}
.footer-box {
  width: 100%;
  // width: calc(100% - 40px);
  // position: fixed;
  // bottom: 20px;
  border-top: 2px solid;
}
.end-box {
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: nowrap;
}

.end-lbox {
  width: 60.4rem;
  border-right: 2px solid;
  padding: 20px 3rem 0px 3rem;
  a {
    color: #383c93;
    text-decoration: none;
  }
}

.admin-name {
  font-size: 30px;
  vertical-align: baseline;
  margin-top: 1rem;
}

.end-rbox {
  width: calc(100% - 60.4rem);
  position: relative;
}

.end-point {
  font-size: 80px;
  position: absolute;
  bottom: -12%;
  right: 50px;
}
.num-box {
  // position: relative;
  margin-top: 10px;
}
.slide-box {
  // position: absolute;
  margin: 0 10px;
}
.sakura {
  width: 20px;
  height: 20px;
  display: inline-block;
  animation: spin 2s linear infinite;
  background-image: url("@/assets/sakura.png");
  background-size: cover;
  background-repeat: no-repeat;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 935px) {
  .end-box {
    height: 180px;
  }
  .admin-name {
    font-size: 18px;
    margin-top: 4rem;
  }
  .end-rbox {
    display: none;
  }
  .end-lbox {
    width: 100%;
    border: none;
  }
}
</style>