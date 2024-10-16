import throttle from 'lodash/throttle'
/**
 * * 获取url参数
 * @param key
 * @param url
 */
export const getUrlParam = (key: any, url = window.location.href) => {
  const paramsObj:any = []
  let tag = false
  const i = url.indexOf('?')
  const paramsStr = i >= 0 ? url.substr(i+1) : ''
  //if (paramsStr == '') return undefined
  const paramsArr = paramsStr.split('&')
  paramsArr.forEach((val) => {
    const arr = val.split('=')
    paramsObj[arr[0]] = arr[1]
    if (arr[0] == key) tag = true
  })
  if (tag) {
    return paramsObj[key]
  } else {
    return ''
  }
}
/**
 * * 获取cookie
 * @param key
 * @param url
 */
export const getCookie = (name: string) => {
  const arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"))
  if (arr != null) {
    return arr[2]
  } else {
    return null
  }
}
/**
 * * 挂载监听
 */
// eslint-disable-next-line no-undef
export const addEventListener = <K extends keyof WindowEventMap>(
  target: HTMLElement | Document,
  type: K,
  listener: any,
  delay?: number,
  // eslint-disable-next-line no-undef
  options?: boolean | AddEventListenerOptions | undefined
) => {
  if (!target) return
  target.addEventListener(
    type,
    throttle(listener, delay || 300, {
      leading: true,
      trailing: false
    }),
    options
  )
}

/**
 * * 卸载监听
 */
// eslint-disable-next-line no-undef
export const removeEventListener = <K extends keyof WindowEventMap>(
  target: HTMLElement | Document,
  type: K,
  listener: any
) => {
  if (!target) return
  target.removeEventListener(type, listener)
}

/**
 * * 设置元素属性
 * @param HTMLElement 元素
 * @param key 键名
 * @param value 键值
 */
export const setDomAttribute = <K extends keyof CSSStyleDeclaration, V extends CSSStyleDeclaration[K]>(
  HTMLElement: HTMLElement,
  key: K,
  value: V
) => {
  if (HTMLElement) {
    HTMLElement.style[key] = value
  }
}