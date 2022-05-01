/**
 * @desc 函数防抖
 * @param fn 函数
 * @param timerDelay 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
// export function debounce(fn:any, timerDelay: number, immediate:boolean) {
//   let timer:any
//
//   return ()=>{
//     const that = this
//     const args = arguments
//
//     if (timer) clearTimeout(timer)
//     if (immediate) {
//       var callNow = !timer
//       timer = setTimeout(() => {
//         timer = null
//       }, timerDelay)
//       if (callNow) fn.apply(that, args)
//     } else {
//       timer = setTimeout(function() {
//         fn.apply(that, args)
//       }, timerDelay)
//     }
//   }
// }

/**
 * 转小写
 * @param str
 */
export function letterToUpperCase(str:string) {
  return str.toUpperCase()
}
/**
 * 转大写
 * @param str
 */
export function letterToLowerCase(str:string) {
  return str.toLowerCase()
}