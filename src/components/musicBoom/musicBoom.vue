<!--
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-01-25 14:23:47
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-26 15:51:54
 * @FilePath: \chaichaiBlog\src\components\musicBoom\musicBoom.vue
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div id="setting-wrap">
    <section>
      <div class="input-row">
        <label for="centerX">X轴的位置喵:</label>
        <input type="range" min="0" max="1" step="0.1" id="centerX" />
      </div>
      <div class="input-row">
        <label for="centerY">Y轴的位置喵:</label>
        <input type="range" min="0" max="1" step="0.1" id="centerY" />
      </div>
      <div class="input-row">
        <label for="lineWidth">音柱宽度喵:</label>
        <input type="range" min="1" max="8" id="lineWidth" />
      </div>
      <div class="input-row">
        <label for="lineSpacing">音柱间距喵:</label>
        <input type="range" min="0" max="8" id="lineSpacing" />
      </div>
    </section>
    <section>
      <div class="input-row">
        <label for="lineColor">音柱颜色喵:</label>
        <input type="color" id="lineColor" />
      </div>
      <div class="input-row">
        <label for="shadowColor">阴影颜色喵:</label>
        <input type="color" id="shadowColor" />
      </div>
      <div class="input-row">
        <label for="shadowBlur">阴影模糊度喵:</label>
        <input type="range" min="1" max="10" id="shadowBlur" />
      </div>
    </section>
    <section>
      <div class="input-row">
        <label for="lineColorO">光柱深浅喵:</label>
        <input type="range" min="0" max="1" step="0.1" id="lineColorO" />
      </div>
      <div class="input-row">
        <label for="shadowColorO">阴影深浅喵:</label>
        <input type="range" min="0" max="1" step="0.1" id="shadowColorO" />
      </div>
      <div class="input-row">
        <label for="isRoundY">圆角音柱喵:</label>
        <input type="radio" name="isRound" value="1" id="isRoundY" />
      </div>
      <div class="input-row">
        <label for="isRoundN">方形音柱喵:</label>
        <input type="radio" name="isRound" value="0" id="isRoundN" />
      </div>
    </section>
    <i id="setting-close" class="iconfont icon-close1"></i>
  </div>
  <div class="container-wrap">
    <div id="bg" class="bg"></div>
    <div class="card-wrap">
      <header class="card-header">
        <div class="card-header--title">
          <i class="iconfont icon-music"></i>
          <span id="song-title">Chaichai Music</span>
        </div>
        <div class="card-header--options">
          <i id="setting-menu" class="iconfont icon-menu--fill"></i>
        </div>
      </header>
      <main class="card-body">
        <canvas id="music-canvas"></canvas>
        <div class="lrc-box">
          <section id="music-lrc"></section>
        </div>
      </main>
      <aside class="info-widget">
        <div class="info-list">
          <dl>
            <dt>当前状态:</dt>
            <dd id="info-state">等待播放中</dd>
          </dl>
          <dl>
            <dt>歌曲时长:</dt>
            <dd id="info-duration">00</dd>
          </dl>
          <dl>
            <dt>当前已播放:</dt>
            <dd id="info-current-time">00</dd>
          </dl>
        </div>
        <div id="info-cover"></div>
      </aside>
      <aside class="time-widget">
        <span id="time-minute">00</span>
        <span>:</span>
        <span id="time-second">00</span>
      </aside>
      <aside class="control-widget">
        <div class="control-btn" id="prevBtn">
          <i class="iconfont icon-play-previous"></i>
        </div>
        <div class="control-btn animation" id="playBtn">
          <i class="iconfont icon-play1"></i>
        </div>
        <div class="control-btn" id="nextBtn">
          <i class="iconfont icon-play-next"></i>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import "./css/index.css";
import "./css/reset.css";
import "./css/setting.css";
import "./css/widget.css";

onMounted(async () => {
  const PLAY_LIST = await AbortFetch()
    .fetch("https://qiniu.sukoshi.xyz/cloud-music/song.json?" + Date.now())
    .then((result) => result.json())
    .catch((error) => {
      console.log(error);
    });

  if (!PLAY_LIST) return alert("获取歌曲信息失败！");

  console.log(PLAY_LIST);

  let i = Math.floor(Math.random() * PLAY_LIST.length);

  const dv = new DomVisual([
    // 'https://qiniu.sukoshi.xyz/src/images/68135789_p0.jpg',
    // 'https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg',
    // 'https://qiniu.sukoshi.xyz/src/images/banner-1.jpg',
  ]);
  const av = new AudioVisual();
  av.onended = playNext;

  eventBus.on("play", () => {
    av.source ? av.togglePlay() : av.play(PLAY_LIST[i], false);
  });
  eventBus.on("prev", playPrev);
  eventBus.on("next", playNext);

  function playPrev() {
    i -= 1;
    if (i < 0) i = PLAY_LIST.length - 1;
    av.play(PLAY_LIST[i]);
  }

  function playNext() {
    i += 1;
    if (i >= PLAY_LIST.length) i = 0;
    av.play(PLAY_LIST[i]);
  }
});

class AudioVisual {
  constructor(options) {
    this.canvas = document.querySelector("#music-canvas");
    this.ctx = this.canvas.getContext("2d");

    this.ac = new AudioContext();
    this.analyser = this.ac.createAnalyser();
    this.analyser.fftSize = 128;
    this.analyser.connect(this.ac.destination);

    this.sourceDuration = 0;
    this.startTime = 0;
    this.loading = false;
    this.started = false;
    this.songInfo = null;
    this.af = null;

    this.defaultSetting = {
      centerX: 0.5,
      centerY: 0.7,
      lineWidth: 6,
      lineSpacing: 2,
      lineColor: localStorage.getItem("activeColor"),
      lineColorO: 1,
      shadowColor: "#231018",
      shadowColorO: 1,
      shadowBlur: 2,
      isRound: true,
    };
    this.opt = Object.assign({}, this.defaultSetting, options);

    this.handleEvent();
    this.resizeCavnas();

    window.addEventListener("resize", this.resizeCavnas.bind(this));
  }

  colorToRGB(color) {
    if (color.length !== 7 && !color.startsWith("#")) return [0, 0, 0];
    let rgb = [];
    color = color.replace("#", "");
    for (let i = 0; i < 3; i++) {
      rgb.push(parseInt(color.substring(i * 2, i * 2 + 2), 16));
    }
    return rgb;
  }

  handleEvent() {
    eventBus.emit("echosetting", this.defaultSetting);
    eventBus.on("setting", (data) => {
      this.opt = Object.assign({}, this.opt, data);
    });
  }

  async loadData() {
    const { songInfo } = this;

    if (this.af) {
      this.af.abort();
      this.af = null;
    }

    this.af = AbortFetch();
    this.loading = true;

    eventBus.emit("init", songInfo);
    eventBus.emit("change", {
      state: "播放中",
      duration: "00.00",
      currentTime: "00.00",
    });

    let ab = await this.af
      .fetch(songInfo.url)
      .then((result) => result.arrayBuffer())
      .catch(({ name }) => {
        if (name === "AbortError") return console.log("cancel");
        this.loading = false;
        eventBus.emit("change", {
          state: "error",
          duration: "T_T",
          currentTime: "T_T",
        });
        return alert("初始化数据失败，请尝试刷新页面（◔‸◔）");
      });

    if (!ab) return;
    /** 可能会出现在取消请求的时候请求已经请求成功，这里对比一下播放的资源是否一致 */
    if (songInfo.url !== this.songInfo.url) return;

    let { ac, analyser } = this;
    this.source = ac.createBufferSource();
    ac.decodeAudioData(
      ab,
      (buffer) => {
        /**
         * 可能会出现在解析AudioDta的时候切换了资源，这里对比一下播放的资源是否一致
         * 在decodeAudioData的时候，可能切换了资源，会调用stop函数，这里source可能会出现为null
         */
        if (songInfo.url !== this.songInfo.url || !this.source) return;
        this.source.buffer = buffer;
        this.source.connect(analyser);
        this.source.start(0);
        this.source.onended = () => {
          this.onended && this.onended();
        };
        this.loading = false;
        this.started = true;
        this.startTime = ac.currentTime;
        this.refreshUI();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  stop() {
    let { source, started } = this;
    if (source && started) {
      source.onended = null;
      source.stop();
    }
    this.source = null;
    this.started = false;
  }

  play(music, isReload = true) {
    if (!isReload && this.loading) return console.log("loading...");
    this.songInfo = music;
    this.stop();
    this.loadData(music);
  }

  togglePlay() {
    const { ac } = this;
    if (ac.state === "running") {
      return ac.suspend();
    }
    if (ac.state === "suspended") {
      return ac.resume();
    }
  }

  resizeCavnas() {
    const { canvas } = this;
    this.cw = canvas.width = canvas.clientWidth;
    this.ch = canvas.height = canvas.clientHeight;
  }

  draw() {
    const { ctx, cw, ch, analyser } = this;
    const {
      lineColor,
      lineColorO,
      shadowColor,
      shadowColorO,
      shadowBlur,
      lineWidth,
      lineSpacing,
      isRound,
    } = this.opt;

    let bufferLen = analyser.frequencyBinCount;
    let buffer = new Uint8Array(bufferLen);
    analyser.getByteFrequencyData(buffer);

    let cx = this.cw * this.opt.centerX;
    let cy = this.ch * this.opt.centerY;
    let sp = (lineWidth + lineSpacing) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.shadowBlur = shadowBlur;
    ctx.strokeStyle = `rgba(${this.colorToRGB(lineColor).join(
      ","
    )}, ${lineColorO})`;
    ctx.shadowColor = `rgba(${this.colorToRGB(shadowColor).join(
      ","
    )}, ${shadowColorO})`;
    if (isRound) {
      ctx.lineCap = "round";
    } else {
      ctx.lineCap = "butt";
    }

    for (let i = 0; i < bufferLen; i++) {
      let h = buffer[i] + 1;
      let xl = cx - i * (lineWidth + lineSpacing) - sp;
      let xr = cx + i * (lineWidth + lineSpacing) + sp;
      let y1 = cy - h / 2;
      let y2 = cy + h / 2;
      ctx.moveTo(xl, y1);
      ctx.lineTo(xl, y2);
      ctx.moveTo(xr, y1);
      ctx.lineTo(xr, y2);
    }

    ctx.stroke();
    ctx.closePath();
  }

  refreshUI() {
    const {
      ac: { state, currentTime },
      source,
      loading,
      started,
      startTime,
    } = this;
    this.draw();
    try {
      if (state === "running" && !loading && started) {
        eventBus.emit("change", {
          state,
          duration: source.buffer.duration,
          currentTime: currentTime - startTime,
        });
      }
    } catch (error) {
      console.log(error);
    }
    requestAnimationFrame(this.refreshUI.bind(this));
  }
}

class DomVisual {
  constructor(bgs) {
    this.domTextMap = new Map();
    this.domInputMap = new Map();
    this.domControlMap = new Map();
    this.domContainerMap = new Map();

    this.domTextSelector = [
      "#song-title",
      "#info-state",
      "#info-duration",
      "#info-current-time",
      "#time-minute",
      "#time-second",
    ];
    this.domInputSelector = [
      "#centerX",
      "#centerY",
      "#lineWidth",
      "#lineSpacing",
      "#lineColor",
      "#shadowColor",
      "#lineColorO",
      "#shadowColor",
      "#shadowColorO",
      "#shadowBlur",
      "#isRoundY",
      "#isRoundN",
    ];
    this.domControlSelector = [
      {
        selector: "#setting-menu",
        event: {
          click: () => {
            let dom = this.getContainerDom("#setting-wrap");
            dom.classList.toggle("show");
            dom.classList.toggle("hide");
          },
        },
      },
      {
        selector: "#setting-close",
        event: {
          click: () => {
            let dom = this.getContainerDom("#setting-wrap");
            dom.classList.remove("show");
            dom.classList.add("hide");
          },
        },
      },
      {
        selector: "#playBtn",
        event: {
          click: () => {
            this.removePlayAnimation();
            eventBus.emit("play");
          },
        },
      },
      {
        selector: "#prevBtn",
        event: {
          click: () => {
            this.removePlayAnimation();
            eventBus.emit("prev");
          },
        },
      },
      {
        selector: "#nextBtn",
        event: {
          click: () => {
            this.removePlayAnimation();
            eventBus.emit("next");
          },
        },
      },
    ];
    this.domContainerSelector = [
      "#bg",
      "#info-cover",
      "#music-lrc",
      "#setting-wrap",
    ];

    this.af = null;
    this.bgs = bgs || [];
    this.lrcList = [];
    this.lrcIndex = 0;
    this.lrcRowH = 30;
    this.findDom("domTextSelector", "domTextMap");
    this.findDom("domInputSelector", "domInputMap");
    this.findDom("domControlSelector", "domControlMap");
    this.findDom("domContainerSelector", "domContainerMap");
    this.handleInit();
    this.handleChange();
    this.bindInputChange();
    this.loadBG();

    eventBus.on("echosetting", (data) => {
      for (let item of this.domInputMap) {
        /** 对 radio 特殊处理 */
        if (item[0].startsWith("#isRound")) {
          let v = data["isRound"];
          let key = `#isRound${v ? "Y" : "N"}`;
          if (item[0] === key) {
            item[1].checked = true;
          }
        } else {
          item[1].value = data[item[0].replace("#", "")];
        }
      }
    });
  }

  removePlayAnimation(dom) {
    let d = dom || this.getControlDom("#playBtn");
    if (d.classList.contains("animation")) {
      d.classList.remove("animation");
    }
  }

  handleChange() {
    eventBus.on("change", ({ state, duration, currentTime }) => {
      this.setDomText("#info-state", state);
      let durationFormat = parseFloat(duration).toFixed(2);
      let currentTimeFormat = parseFloat(currentTime).toFixed(2);
      if (isNaN(duration) || isNaN(currentTimeFormat)) {
        this.setDomText("#info-duration", duration);
        this.setDomText("#info-current-time", currentTime);
        this.setDomText("#time-minute", "00");
        this.setDomText("#time-second", "00");
      } else {
        this.setDomText("#info-duration", durationFormat);
        this.setDomText("#info-current-time", currentTimeFormat);
        let remainTime = parseInt(duration - currentTime);
        this.setDomText(
          "#time-minute",
          this.add0(Math.max(Math.floor(remainTime / 60), 0))
        );
        this.setDomText(
          "#time-second",
          this.add0(Math.max(remainTime % 60, 0))
        );
        if (currentTime >= this.nextLrcTime()) {
          this.nextLrc();
        }
      }
    });
  }

  handleInit() {
    eventBus.on("init", ({ title, cover, lrc }) => {
      this.initSongInfo({ title, cover });
      this.loadData(lrc);
    });
  }

  bindInputChange() {
    for (let item of this.domInputMap) {
      (function (key, dom) {
        dom.addEventListener(
          "input",
          (e) => {
            let { type, value } = e.target;
            if (type === "range") {
              value = parseFloat(value);
            }
            if (type === "radio" && key.startsWith("isRound")) {
              key = "isRound";
              value = value === "0" ? false : true;
            }
            if (key === "lineColor") {
              document.documentElement.style.setProperty(
                "--theme-color",
                value
              );
            }
            eventBus.emit("setting", { [key]: value });
          },
          false
        );
      })(item[0].replace("#", "").replace(".", ""), item[1]);
    }
  }

  findDom(domSelector, domMap) {
    if (this[domSelector].length < 1) return;
    if (!this[domMap]) return;
    this[domSelector].forEach((selector) => {
      let type = Object.prototype.toString.call(selector);
      if (type === "[object String]") {
        this[domMap].set(selector, document.querySelector(selector));
      }
      if (type === "[object Object]") {
        let dom = document.querySelector(selector.selector);
        if (!dom) return;
        this[domMap].set(selector.selector, dom);
        if (selector.event && Object.keys(selector.event).length > 0) {
          for (let key in selector.event) {
            dom.addEventListener(key, selector.event[key]);
          }
        }
      }
    });
  }

  setDomText(selector, value) {
    let dom = this.domTextMap.get(selector);
    if (!dom) return;
    dom.innerText = value;
  }

  getContainerDom(selector) {
    return this.getDom(selector, this.domContainerMap);
  }

  getControlDom(selector) {
    return this.getDom(selector, this.domControlMap);
  }

  getDom(selector, domMap) {
    return domMap.get(selector) || null;
  }

  initSongInfo({ title, cover }) {
    this.lrcList = [];
    this.lrcIndex = 0;
    this.setDomText("#song-title", title);
    this.setDomText("#info-state", "undefined");
    this.setDomText("#info-duration", "00.00");
    this.setDomText("#info-current-time", "00.00");
    this.setDomText("#time-minute", "00");
    this.setDomText("#time-second", "00");
    this.getContainerDom(
      "#info-cover"
    ).style = `background-image: url(${cover});`;
  }

  loadBG() {
    if (this.bgs.length < 1) return;
    let index = Math.floor(Math.random() * this.bgs.length);
    let image = this.bgs[index];
    this.getContainerDom("#bg").style = `background-image: url(${image});`;
  }

  async loadData(url) {
    if (!url) {
      this.lrcList = [[0, "当前歌曲暂无歌词，闭上眼睛静静聆听～"]];
      this.initLrcDom();
      return;
    }
    if (this.af) {
      this.af.abort();
      this.af = null;
    }
    this.af = AbortFetch();
    let list = [],
      text = await this.af
        .fetch(url)
        .then((result) => result.text())
        .catch(({ name }) => {
          if (name === "AbortError") return console.log("cancel");
          list.push([0, "加载歌词出错，我也不知道问题出在哪里(⑉･̆-･̆⑉)"]);
        });
    text &&
      text.split("\n").forEach((row) => {
        if (!row.includes("[")) return;
        let chunk = row.replace("[", "").split("]");
        let times = chunk[0].split(":");
        list.push([times[0] * 60 + parseFloat(times[1] + ""), chunk[1]]);
      });
    this.lrcList = list;
    this.initLrcDom();
  }

  initLrcDom() {
    const { lrcIndex, lrcList } = this;
    let lrcContainer = this.getContainerDom("#music-lrc");
    let df = document.createDocumentFragment();
    lrcContainer.innerHTML = "";
    for (let i = 0; i < lrcList.length; i++) {
      let row = lrcList[i];
      let p = document.createElement("p");
      p.dataset.time = row[0];
      p.innerText = row[1];
      if (i === lrcIndex) p.classList.add("current");
      df.appendChild(p);
      lrcContainer.appendChild(df);
    }
    this.rollLrc();
  }

  currentLrc() {
    const { lrcIndex, lrcList } = this;
    return lrcList[lrcIndex];
  }

  nextLrcTime() {
    const { lrcIndex, lrcList } = this;
    let end = lrcList.length - 1;
    let nextIndex = lrcIndex + 1;
    if (nextIndex >= end || end < 0) return null;
    return lrcList[nextIndex][0];
  }

  nextLrc() {
    const { lrcIndex, lrcList } = this;
    if (lrcIndex >= lrcList.length - 1) return;
    let lrcContainer = this.getContainerDom("#music-lrc");
    this.lrcIndex = this.lrcIndex + 1;
    lrcContainer.querySelectorAll("p").forEach((p, index) => {
      if (index !== this.lrcIndex) {
        p.classList.remove("current");
      } else {
        p.classList.add("current");
      }
    });
    this.rollLrc();
  }

  add0(n) {
    return n > 9 ? n : `0${n}`;
  }

  rollLrc() {
    const { lrcIndex, lrcRowH } = this;
    let lrcContainer = this.getContainerDom("#music-lrc");
    if (lrcIndex === 0) {
      lrcContainer.style = `transform: translateY(${lrcRowH}px)`;
    } else {
      let y = (lrcIndex - 1) * lrcRowH;
      lrcContainer.style = `transform: translateY(-${y}px)`;
    }
  }
}

const eventBus = {
  events: {},
  on(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  },
  emit() {
    let e = this.events[[].shift.call(arguments)];
    if (!e || e.length < 1) return;
    e.forEach((fn) => {
      fn.apply(this, arguments);
    });
  },
};

function AbortFetch() {
  const controller = new AbortController();

  return {
    abort: controller.abort.bind(controller),
    fetch: function (url, params = {}) {
      return new Promise((reslove, reject) => {
        fetch(url, { signal: controller.signal, ...params })
          .then((result) => {
            if (result.ok) return reslove(result);
            throw new Error("Network response was not ok.");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  };
}
</script>

<style>
</style>