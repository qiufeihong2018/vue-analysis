(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),t._m(1),a("p",[t._v("让我们从一个简单的 Vue 计数应用开始：")]),t._m(2),a("p",[t._v("这个状态自管理应用包含以下几个部分：")]),t._m(3),a("p",[t._v("以下是一个表示“单向数据流”理念的极简示意：")]),a("img",{attrs:{src:t.$withBase("/assets/vuex.png")}}),a("p",[t._v("但是，当我们的应用遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：")]),t._m(4),a("p",[t._v("对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。")]),a("p",[t._v("因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为。")]),t._m(5),a("p",[t._v("Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。有些同学可能会问，那我定义一个全局对象，再去上层封装了一些数据存取的接口不也可以么？")]),a("p",[t._v("Vuex 和单纯的全局对象有以下两点不同：")]),t._m(6),a("p",[t._v("另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，我们的代码将会变得更结构化且易维护。")]),a("img",{attrs:{src:t.$withBase("/assets/vuex1.png")}})])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuex")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是“状态管理模式”？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是“状态管理模式”？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是“状态管理模式”？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// state")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// view")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n    <div>{{ count }}</div>\n  `")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// actions")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("increment")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("state，驱动应用的数据源；")]),s("li",[this._v("view，以声明方式将 state 映射到视图；")]),s("li",[this._v("actions，响应在 view 上的用户输入导致的状态变化。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("多个视图依赖于同一状态。")]),s("li",[this._v("来自不同视图的行为需要变更同一状态。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vuex-核心思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-核心思想","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuex 核心思想")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")])]),s("li",[s("p",[this._v("你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。")])])])}],!1,null,null,null);s.default=e.exports}}]);