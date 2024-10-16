
<template>
  <span class="btn orange" @click="click" v-if="plain">
    <slot></slot>
  </span>
  <span class="btn1 orange1" @click="click" v-if="!plain">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emits = defineEmits(["click"]);

const click = () => {
  emits("click");
};

// const insertStrFn = (str: string, index: number, insertStr: string) => {
//   const ary = str.split("");
//   ary.splice(index, 0, insertStr);
//   return ary.join("");
// };

// let bodyDom = document.body;
// let color = bodyDom.style.getPropertyValue("color");
// let backColor = insertStrFn(color, color.split("").length - 1, ",.6");

const props = defineProps({
  plain: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
.btn {
  margin-top: 20px;
  border: 2px solid;
  border-radius: 0;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 1px;
  background: rgba(0, 0, 0, 0);
}

.btn1 {
  margin-top: 20px;
  border: 2px solid;
  border-radius: 0;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  padding: 8px 16px;
  background-color: var(--base-color);
  /* color: #fff; */
  border-radius: 1px;
}

.btn:before {
  content: "";
  height: 6px;
  border-bottom: 2px solid;
  border-left: 2px solid;
  position: absolute;
  bottom: -8px;
  left: 4px;
  right: -8px;
  transition: all 0.3s ease 0s;
}

.btn1:before {
  content: "";
  height: 6px;
  border-bottom: 2px solid;
  border-left: 2px solid;
  position: absolute;
  bottom: -8px;
  left: 4px;
  right: -8px;
  transition: all 0.3s ease 0s;
}

.btn:hover:before {
  bottom: -2px;
  left: -2px;
  right: 2px;
  /* border-color: v-bind(color); */
  border-radius: 0;
}

.btn1:hover:before {
  bottom: -2px;
  left: -2px;
  right: 2px;
  /* border-color: v-bind(color); */
  border-radius: 0;
}

.btn:after {
  content: "";
  width: 6px;
  border-right: 2px solid;
  border-top: 2px solid;
  position: absolute;
  bottom: -8px;
  right: -8px;
  top: 4px;
  transition: all 0.3s ease 0s;
}

.btn1:after {
  content: "";
  width: 6px;
  border-right: 2px solid;
  border-top: 2px solid;
  position: absolute;
  bottom: -8px;
  right: -8px;
  top: 4px;
  transition: all 0.3s ease 0s;
}

.btn:hover:after {
  bottom: 2px;
  right: -2px;
  top: -2px;
  /* border-color: v-bind(color); */
  border-radius: 0;
}

.btn1:hover:after {
  bottom: 2px;
  right: -2px;
  top: -2px;
  /* border-color: v-bind(color); */
  border-radius: 0;
}

.btn.orange {
  border-color: var(--base-color);
  color: var(--base-color);
  border-radius: 5px;
}

.btn.orange:before,
.btn.orange:after {
  border-color: var(--base-color);
  border-radius: 3px;
  color: var(--base-color);
}

.btn1.orange1 {
  white-space: nowrap;
  border-color: var(--base-color);
  color: #fff;
  border-radius: 5px;
}

.btn1.orange1:before,
.btn1.orange1:after {
  border-color: var(--base-color);
  border-radius: 3px;
  color: var(--base-color);
}

@media only screen and (max-width: 767px) {
  .btn {
    margin-bottom: 25px;
  }
}
</style>