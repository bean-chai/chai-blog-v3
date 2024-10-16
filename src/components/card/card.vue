<template>
  <div>
    <div
      v-for="(item, index) in props.friendList"
      :key="index"
      :class="activeCard === index ? 'active-color' : 'card-box'"
      @click="activeCard !== index ? checkUrl(item.blogUrl, index) : ''"
    >
      <div class="img-box">
        <img :src="item.url" style="width: 100%" alt="" />
      </div>
      <div class="box-item">
        <div class="friend-name">{{ item.name }}</div>
        <div>
          <div class="friend-text">{{ item.text }}</div>
          <div class="normal_right_arrow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const emit = defineEmits(["checkUrl"]);

const props = defineProps(["friendList"]);

const activeCard = ref("");
console.log(activeCard, "activeCard1");

onMounted(() => {
  console.log(activeCard, "activeCard");

  // emit("checkUrl", props.friendList[0].blogUrl);
  checkUrl(props.friendList[0].blogUrl, 0);
});

const checkUrl = (blogValue, index) => {
  activeCard.value = index;
  emit("checkUrl", blogValue, true);
};
</script>

<style lang="scss">
.active-color {
  background: var(--base-color);
  width: 300px;
  height: 350px;
  border: 2px solid var(--base-color);
  padding: 25px 20px 0 20px;
  margin-bottom: 20px;
}
.card-box {
  display: flex;
  flex-wrap: nowrap;
  width: 300px;
  height: 150px;
  border: 2px solid var(--base-color);
  margin-bottom: 20px;
  padding: 25px 20px 0 20px;
  .img-box {
    flex-shrink: 0;
    border-radius: 50%;
    border: 2px solid var(--base-color);
    width: 70px;
    height: 70px;
    overflow: hidden;
  }
  .box-item {
    width: 100%;
    position: relative;
    margin-left: 20px;
    .friend-name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .friend-text {
      width: 166px;
      white-space: nowrap; /* 防止换行 */
      overflow: hidden; /* 控制元素大小并隐藏溢出部分 */
      text-overflow: ellipsis; /* 添加省略号 */
    }
    .normal_right_arrow {
      position: absolute;
      display: inline-block;
      right: 10px;
      bottom: 20px;
      width: 30px;
      height: 15px;
      box-shadow: 0px 0px 0px 25px var(--base-color) inset;
      background-color: var(--base-color);
    }
    .normal_right_arrow::after {
      content: "";
      display: inline-block;
      position: relative;
      top: -12px;
      left: 30px;
      border-left: 20px solid var(--base-color);
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
    }
  }
  .split-Lbox {
    width: 200px;
    height: 50px;
    background-size: 3px 3px;
    border-color: var(--base-color);
    background-image: radial-gradient(var(--base-color) 40%, transparent 0);
  }
}
</style>