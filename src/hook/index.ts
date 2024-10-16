/**
 * @description: 适配rem字体
 * @param {*} doc
 * @param {*} win
 * @param {*} resizeEvt
 * @param {*} recalc
 * @return {*}
 */
export const fitRem = (doc: Document, win: Window & typeof globalThis) => {
  const docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      const clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = 10 * (clientWidth / 1920) + "px"
    };
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener("DOMContentLoaded", recalc, false)
}
