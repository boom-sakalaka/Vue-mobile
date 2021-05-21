/*
 * @Author: your name
 * @Date: 2021-05-17 18:55:34
 * @LastEditTime: 2021-05-21 17:01:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\vue-app\.postcssrc.js
 */
const path = require("path");

module.exports = ({ file }) => {
  // const designWidth = file.dirname.includes(path.join("node_modules", "vant"))
  //   ? 1024
  //   : 1024;

  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: 1024,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  };
};
