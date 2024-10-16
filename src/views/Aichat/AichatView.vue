<template>
  <div class="content">
    <div class="message" id="message-box">
      <div
        v-for="(msg, index) in msgList"
        :key="index"
        :class="{
          user: msg.role === 'user',
          assistant: msg.role === 'assistant',
        }"
      >
        <div>
          <div>
            <img
              class="role-img"
              src="https://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blogimg/loading.jpg"
              v-if="msg.role === 'user'"
            />
          </div>
          <div class="imgbox" v-if="msg.role === 'assistant'">
            <img
              class="role-img"
              src="http://chaichaiimage.oss-cn-hangzhou.aliyuncs.com/blog3.0/chaichaiLogo.jpeg"
            />
            <div class="name">柴柴GPT</div>
          </div>
        </div>
        <div
          v-highlight
          v-html="msg.content"
          style="text-align: left; width: 100%"
        ></div>
      </div>
    </div>

    <div class="footer">
      <textarea
        rows="5"
        placeholder="请输入问题"
        class="text"
        v-model="msgValue"
        @keydown.enter="submitMsg"
      ></textarea>
      <chai-button @click="submitMsg">发送</chai-button>
    </div>
  </div>
</template>
  
  <script setup>
import chaiButton from "@/components/button/button.vue";

import { nextTick, onMounted, ref } from "vue";
import TTSRecorder from "@/utils/TTSRecorder";
import { userMsgStore } from "@/stores/msgStore";
const msgStore = userMsgStore();
const msgValue = ref("");
let ttsRecorder = new TTSRecorder();
const msgList = ref([]);
let msgDom = ref(null);

onMounted(() => {
  msgDom.value = document.getElementById("message-box");
  msgList.value = msgStore.list;
  scroll();
});

// 滚动到最底部
const scroll = () => {
  nextTick(() => {
    msgDom.value.scrollTop = msgDom.value.scrollHeight;
  });
};

// 发送消息
const submitMsg = async () => {
  msgStore.userAddMsg(msgValue.value);
  msgValue.value = "";
  // 开始提问
  ttsRecorder.start(msgStore, msgDom);
  scroll();
};
</script>
  
  <style scoped lang="less">
.content {
  height: 100%;
  position: relative;

  .message {
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    bottom: 150px;
    display: flex;
    overflow: auto;
    flex-direction: column;
    .user {
      background-color: #ebf7f8;
      padding: 15px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border: 2px solid var(--base-color);
      margin-top: 10px;
    }
    .assistant {
      background-color: #f7f7f7;
      padding: 15px;
      box-sizing: border-box;
      border: 2px solid var(--base-color);
      margin-top: 10px;
    }
  }

  textarea::-webkit-input-placeholder {
    color: var(--base-color);
  }

  .footer {
    position: absolute;
    bottom: 50px;
    left: 20%;
    right: 20%;
    display: flex;
    align-items: flex-end;
    gap: 15px;
    .text {
      width: 100%;
      border: 2px solid var(--base-color) !important;
      resize: none;
    }
  }

  @media screen and (max-width: 768px) {
    .message,
    .footer {
      left: 0;
      right: 0;
    }
    .message {
      bottom: 100px;
    }
    .footer {
      bottom: 10px;
    }
  }
}

.imgbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  .name {
    font-size: 13px;
    color: var(--base-color);
    font-weight: 400;
  }
}

.role-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
  