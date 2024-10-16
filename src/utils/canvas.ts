/**
 * * 绘制圆 
 * @param canvas canvas对象
 * @param x y 中心点xy坐标
 * @param r 圆半径
 * @param color 颜色
 * @param isFill 是否实心圆
 */
export const drawCircle = (canvas: HTMLCanvasElement , x: number, y: number, r: number, color: string, isFill: boolean = true) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI*2)
  if (isFill) {
    ctx.fillStyle = color
    ctx.fill()
  } else {
    ctx.strokeStyle = color
    ctx.stroke()
  }
}

// 清空canvas画布
export const clearCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}