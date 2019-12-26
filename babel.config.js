module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage", // babel 处理 polyfill 的方式
        "corejs": 2,
        "modules": false
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": false,
        "regenerator": false,
        "useESModules": false
      }
    ]

  ],
  "env": {
    "test": {
      "presets": [["@babel/preset-env"]]
    }
  },
  "comments": false
}

// Another type
// module.exports = function () {
//   const presets = [
//     ["env", {
//       "targets": { // 指定要转译到哪个环境
//         // 浏览器环境
//         "browsers": ["last 2 versions", "safari >= 7"],
//         // node环境
//         "node": "6.10", // "current" 使用当前版本的node
//       },
//       // 是否将ES6的模块化语法转译成其他类型
//       // 参数："amd" | "umd" | "systemjs" | "commonjs" | false，默认为 commonjs
//       "modules": "umd",
//       // 是否进行 debug 操作，会在控制台打印出所有插件中的 log，已经插件的版本
//       "debug": false,
//       // 强制开启某些模块，默认为 []
//       "include": ["transform-es2015-arrow-functions"],
//       // 禁用某些模块，默认为 []
//       "exclude": ["transform-es2015-for-of"],
//       // babel / preset-env 处理 polyfill 的方式
//       // 参数：usage | entry | false，默认为 false
//       "useBuiltIns": false
//     }]
//   ]
//   const plugins = ["@babel/transform-arrow-functions"]
//   return {
//     presets,
//     plugins
//   }
// }
