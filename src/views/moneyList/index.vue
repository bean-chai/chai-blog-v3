<template>
  <div style="text-align: center">
    <div class="moneyBox">
      <div
        v-for="(item, index) in moneyList"
        v-bind:key="index"
        class="moneyList"
      >
        <div class="iputBox">{{ item.zone }}</div>
        <input width="200" v-model="item.money" @input="handleInput" />
        <div>{{ item.name }}</div>
      </div>
    </div>
    <chai-button @click="changeMoney" style="margin-top: 50px"
      >提交</chai-button
    >
  </div>
</template>

<script setup lang="ts">
import { searchMoney, changeMoney as sendMoney } from "@/api/money";
import chaiButton from "@/components/button/button.vue";
import { onMounted, ref } from "vue";
const moneyList = ref([]);
onMounted(() => {
  searchMoney().then((res: any) => {
    console.log(res, "ressss");
    if (res.status === 200) {
      moneyList.value = res.data;
    }
  });
});

const handleInput = (event: { target: { value: any } }) => {
  console.log(event.target.value, "event");
  console.log(moneyList.value, "moneyList");
};

const changeMoney = () => {
  const data = {
    moneyList: moneyList.value,
  };
  sendMoney(data).then((res) => {
    console.log(res, "ress");
    if (res.data.success) {
      alert("更新成功！");
    } else {
      alert("更新失败，请联系柴柴");
    }
  });
};
</script>

<style>
.moneyBox {
  /* width: 100 */
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  margin-bottom: 40px;
}
.moneyList {
  margin: 0 auto;
  width: 35%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.iputBox {
  width: 80px !important;
}
/* 针对宽度为768px或更小的设备 */
@media (max-width: 768px) {
  .moneyList {
    width: 100%;
  }
}
</style>