(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{189:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"组件注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件注册")]),n("p",[t._v("在 Vue.js 中，除了它内置的组件如 "),n("code",[t._v("keep-alive")]),t._v("、"),n("code",[t._v("component")]),t._v("、"),n("code",[t._v("transition")]),t._v("、"),n("code",[t._v("transition-group")]),t._v(" 等，其它用户自定义组件在使用前必须注册。很多同学在开发过程中可能会遇到如下报错信息：")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("'Unknown custom element: <xxx> - did you register the component correctly?\n For recursive components, make sure to provide the \"name\" option.'\n")])])]),n("p",[t._v("一般报这个错的原因都是我们使用了未注册的组件。Vue.js 提供了 2 种组件的注册方式，全局注册和局部注册。接下来我们从源码分析的角度来分析这两种注册方式。")]),n("h2",{attrs:{id:"全局注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局注册")]),n("p",[t._v("要注册一个全局组件，可以使用 "),n("code",[t._v("Vue.component(tagName, options)")]),t._v("。例如：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("component")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'my-component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 选项")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("那么，"),n("code",[t._v("Vue.component")]),t._v(" 函数是在什么时候定义的呢，它的定义过程发生在最开始初始化 Vue 的全局函数的时候，代码在 "),n("code",[t._v("src/core/global-api/assets.js")]),t._v(" 中：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ASSET_TYPES")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'shared/constants'")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isPlainObject"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validateComponentName "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'../util/index'")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("initAssetRegisters")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GlobalAPI"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n   * Create asset registration methods.\n   */")]),t._v("\n  "),n("span",{attrs:{class:"token constant"}},[t._v("ASSET_TYPES")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      definition"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("definition"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'s'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("/* istanbul ignore if */")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" type "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token function"}},[t._v("validateComponentName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'component'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isPlainObject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("definition"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          definition"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" definition"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" id\n          definition "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_base"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("extend")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("definition"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'directive'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" definition "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'function'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          definition "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bind"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" definition"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" definition "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'s'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" definition\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" definition\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("函数首先遍历 "),n("code",[t._v("ASSET_TYPES")]),t._v("，得到 "),n("code",[t._v("type")]),t._v(" 后挂载到 Vue 上 。"),n("code",[t._v("ASSET_TYPES")]),t._v(" 的定义在 "),n("code",[t._v("src/shared/constants.js")]),t._v(" 中：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ASSET_TYPES")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'component'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'directive'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v("'filter'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("所以实际上 Vue 是初始化了 3 个全局函数，并且如果 "),n("code",[t._v("type")]),t._v(" 是 "),n("code",[t._v("component")]),t._v(" 且 "),n("code",[t._v("definition")]),t._v(" 是一个对象的话，通过 "),n("code",[t._v("this.opitons._base.extend")]),t._v("， 相当于 "),n("code",[t._v("Vue.extend")]),t._v(" 把这个对象转换成一个继承于 Vue 的构造函数，最后通过 "),n("code",[t._v("this.options[type + 's'][id] = definition")]),t._v(" 把它挂载到 "),n("code",[t._v("Vue.options.components")]),t._v(" 上。")]),n("p",[t._v("由于我们每个组件的创建都是通过 "),n("code",[t._v("Vue.extend")]),t._v(" 继承而来，我们之前分析过在继承的过程中有这么一段逻辑：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Sub"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("mergeOptions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  Super"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  extendOptions\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("也就是说它会把 "),n("code",[t._v("Vue.options")]),t._v(" 合并到 "),n("code",[t._v("Sub.options")]),t._v("，也就是组件的 "),n("code",[t._v("options")]),t._v(" 上， 然后在组件的实例化阶段，会执行 "),n("code",[t._v("merge options")]),t._v(" 逻辑，把 "),n("code",[t._v("Sub.options.components")]),t._v(" 合并到 "),n("code",[t._v("vm.$options.components")]),t._v(" 上。")]),n("p",[t._v("然后在创建 "),n("code",[t._v("vnode")]),t._v(" 的过程中，会执行 "),n("code",[t._v("_createElement")]),t._v(" 方法，我们再来回顾一下这部分的逻辑，它的定义在 "),n("code",[t._v("src/core/vdom/create-element.js")]),t._v(" 中：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("_createElement")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  context"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tag"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Class"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Component"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Function "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNodeData"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  normalizationType"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNode "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Array"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("VNode"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vnode"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ns\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" tag "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'string'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Ctor\n    ns "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ns"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTagNamespace")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isReservedTag")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// platform built-in elements")]),t._v("\n      vnode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("parsePlatformTagName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("isDef")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ctor "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("resolveAsset")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'components'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// component")]),t._v("\n      vnode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("createComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ctor"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// unknown or unlisted namespaced elements")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// check at runtime because it may get assigned a namespace when its")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// parent normalizes children")]),t._v("\n      vnode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VNode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" undefined"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// direct component options / constructor")]),t._v("\n    vnode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("createComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这里有一个判断逻辑 "),n("code",[t._v("isDef(Ctor = resolveAsset(context.$options, 'components', tag))")]),t._v("，先来看一下 "),n("code",[t._v("resolveAsset")]),t._v(" 的定义，在 "),n("code",[t._v("src/core/utils/options.js")]),t._v(" 中：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Resolve an asset.\n * This function is used because child instances need access\n * to assets defined in its ancestor chain.\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("resolveAsset")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  options"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  warnMissing"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/* istanbul ignore if */")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" id "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'string'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" assets "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// check local registration variations first")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("hasOwn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assets"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" assets"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" camelizedId "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("camelize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("hasOwn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assets"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camelizedId"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" assets"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("camelizedId"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PascalCaseId "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("capitalize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("camelizedId"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("hasOwn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("assets"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PascalCaseId"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" assets"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PascalCaseId"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// fallback to prototype chain")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" assets"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" assets"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("camelizedId"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" assets"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PascalCaseId"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" warnMissing "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("warn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'Failed to resolve '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" type"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("slice")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("': '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这段逻辑很简单，先通过 "),n("code",[t._v("const assets = options[type]")]),t._v(" 拿到 "),n("code",[t._v("assets")]),t._v("，然后再尝试拿 "),n("code",[t._v("assets[id]")]),t._v("，这里有个顺序，先直接使用 "),n("code",[t._v("id")]),t._v(" 拿，如果不存在，则把 "),n("code",[t._v("id")]),t._v(" 变成驼峰的形式再拿，如果仍然不存在则在驼峰的基础上把首字母再变成大写的形式再拿，如果仍然拿不到则报错。这样说明了我们在使用 "),n("code",[t._v("Vue.component(id, definition)")]),t._v(" 全局注册组件的时候，id 可以是连字符、驼峰或首字母大写的形式。")]),n("p",[t._v("那么回到我们的调用 "),n("code",[t._v("resolveAsset(context.$options, 'components', tag)")]),t._v("，即拿 "),n("code",[t._v("vm.$options.components[tag]")]),t._v("，这样我们就可以在 "),n("code",[t._v("resolveAsset")]),t._v(" 的时候拿到这个组件的构造函数，并作为 "),n("code",[t._v("createComponent")]),t._v(" 的钩子的参数。")]),n("h2",{attrs:{id:"局部注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#局部注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部注册")]),n("p",[t._v("Vue.js 也同样支持局部注册，我们可以在一个组件内部使用 "),n("code",[t._v("components")]),t._v(" 选项做组件的局部注册，例如：")]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" HelloWorld "),n("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'./components/HelloWorld'")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    HelloWorld\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("其实理解了全局注册的过程，局部注册是非常简单的。在组件的 Vue 的实例化阶段有一个合并 "),n("code",[t._v("option")]),t._v(" 的逻辑，之前我们也分析过，所以就把 "),n("code",[t._v("components")]),t._v(" 合并到 "),n("code",[t._v("vm.$options.components")]),t._v(" 上，这样我们就可以在 "),n("code",[t._v("resolveAsset")]),t._v(" 的时候拿到这个组件的构造函数，并作为 "),n("code",[t._v("createComponent")]),t._v(" 的钩子的参数。")]),n("p",[t._v("注意，局部注册和全局注册不同的是，只有该类型的组件才可以访问局部注册的子组件，而全局注册是扩展到 "),n("code",[t._v("Vue.options")]),t._v(" 下，所以在所有组件创建的过程中，都会从全局的 "),n("code",[t._v("Vue.options.components")]),t._v(" 扩展到当前组件的 "),n("code",[t._v("vm.$options.components")]),t._v(" 下，这就是全局注册的组件能被任意使用的原因。")]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),n("p",[t._v("通过这一小节的分析，我们对组件的注册过程有了认识，并理解了全局注册和局部注册的差异。其实在平时的工作中，当我们使用到组件库的时候，往往更通用基础组件都是全局注册的，而编写的特例场景的业务组件都是局部注册的。了解了它们的原理，对我们在工作中到底使用全局注册组件还是局部注册组件是有这非常好的指导意义的。")])])}],!1,null,null,null);s.default=o.exports}}]);