/*
 * @Author: your name
 * @Date: 2021-05-24 17:17:13
 * @LastEditTime: 2021-06-01 09:14:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-app\src\utils\index.js
 */

// 变量

// 标准时间转秒数
export function getTimeSeconds(times) {
  const datetime = new Date(times);
  return timeFormat(datetime, "yyyy-MM-dd");
}

// 时间格式化
export function timeFormat(myDate, fmt) {
  var o = {
    "M+": myDate.getMonth() + 1, // 月份
    "d+": myDate.getDate(), // 日
    "h+": myDate.getHours(), // 小时
    "m+": myDate.getMinutes(), // 分
    "s+": myDate.getSeconds(), // 秒
    "q+": Math.floor((myDate.getMonth() + 3) / 3), // 季度
    S: myDate.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (myDate.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

// 时间格式化
export function dateFormatForTime(myDate, fmt) {
  myDate = new Date(myDate);
  var o = {
    "M+": myDate.getMonth() + 1, // 月份
    "d+": myDate.getDate(), // 日
    "h+": myDate.getHours(), // 小时
    "m+": myDate.getMinutes(), // 分
    "s+": myDate.getSeconds(), // 秒
    "q+": Math.floor((myDate.getMonth() + 3) / 3), // 季度
    S: myDate.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (myDate.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

export const removeEmpty = obj => {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    if (obj[key]) newObj[key] = obj[key];
  });
  return newObj;
};
