# createComponent

上一章我们在分析 `createElement` 的实现的时候，它最终会调用 `_createElement` 方法，其中有一段逻辑是对参数 `tag` 的判断，如果是一个普通的 html 标签，像上一章的例子那样是一个普通的 div，则会实例化一个普通 VNode 节点，否则通过 `createComponent` 方法创建一个组件 VNode。

```js
if (typeof tag === 'string') {
  let Ctor
  ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
  if (config.isReservedTag(tag)) {
    // platform built-in elements
    vnode = new VNode(
      config.parsePlatformTagName(tag), data, children,
      undefined, undefined, context
    )
  } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
    // component
    vnode = createComponent(Ctor, data, context, children, tag)
  } else {
    // unknown or unlisted namespaced elements
    // check at runtime because it may get assigned a namespace when its
    // parent normalizes children
    //未知或未列出的命名空间元素
    //在运行时检查，因为它可能在
    //父级规范化子级
    vnode = new VNode(
      tag, data, children,
      undefined, undefined, context
    )
  }
} else {
  // direct component options / constructor
  // /直接组件选项/构造函数
  vnode = createComponent(tag, data, context, children)
}
```

在我们这一章传入的是一个 App 对象，它本质上是一个 `Component` 类型，那么它会走到上述代码的 else 逻辑，直接通过 `createComponent` 方法来创建 `vnode`。所以接下来我们来看一下 `createComponent` 方法的实现，它定义在 `src/core/vdom/create-component.js` 文件中：

```js
export function createComponent (
  Ctor: Class<Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array<VNode>,
  tag?: string
): VNode | Array<VNode> | void {
  if (isUndef(Ctor)) {
    return
  }

  const baseCtor = context.$options._base

  // plain options object: turn it into a constructor
  //plain options对象：将其转换为构造函数
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor)
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  //如果在此阶段它不是构造函数或异步组件工厂，
  //拒绝。
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(`Invalid Component definition: ${String(Ctor)}`, context)
    }
    return
  }

  // async component
  let asyncFactory
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      //返回异步组件的占位符节点，呈现
      // 作为注释节点，但保留该节点的所有原始信息。
      //该信息将用于异步服务器呈现和水合。
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {}

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  //在应用全局混合后解析构造函数选项
  //组件构造函数创建
  resolveConstructorOptions(Ctor)

  // transform component v-model data into props & events
  //将组件v-model数据转换为属性和事件
  if (isDef(data.model)) {
    transformModel(Ctor.options, data)
  }

  // extract props
  //提取props
  const propsData = extractPropsFromVNodeData(data, Ctor, tag)

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners\
  //提取侦听器，因为需要将这些侦听器视为
  //子组件侦听器而不是DOM侦听器
  const listeners = data.on
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  //用.native修饰符替换为侦听器
  //所以它在父组件修补期间得到处理。
  data.on = data.nativeOn

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    //抽象组件不保留任何内容
    //除了props,监听器和插槽
    //绕流工作
    const slot = data.slot
    data = {}
    if (slot) {
      data.slot = slot
    }
  }

  // install component management hooks onto the placeholder node
  //在占位符节点上安装组件管理挂钩
  installComponentHooks(data)

  // return a placeholder vnode
  const name = Ctor.options.name || tag
  const vnode = new VNode(
    `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
    data, undefined, undefined, undefined, context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // 提取单元槽模板。
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  if (__WEEX__ && isRecyclableComponent(vnode)) {
    return renderRecyclableComponentTemplate(vnode)
  }

  return vnode
}
```

可以看到，`createComponent` 的逻辑也会有一些复杂，但是分析源码比较推荐的是只分析核心流程，分支流程可以之后针对性的看，所以这里针对组件渲染这个 case 主要就 3 个关键步骤：

构造子类构造函数，安装组件钩子函数和实例化 `vnode`。

## 构造子类构造函数

```js
const baseCtor = context.$options._base

// plain options object: turn it into a constructor
//plain options对象：将其转换为构造函数
if (isObject(Ctor)) {
  Ctor = baseCtor.extend(Ctor)
}
```

我们在编写一个组件的时候，通常都是创建一个普通对象，还是以我们的 App.vue 为例，代码如下：

```js
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
```
这里 export 的是一个对象，所以 `createComponent` 里的代码逻辑会执行到 `baseCtor.extend(Ctor)`，在这里 `baseCtor` 实际上就是 Vue，这个的定义是在最开始初始化 Vue 的阶段，在 `src/core/global-api/index.js` 中的 `initGlobalAPI` 函数有这么一段逻辑：

```js
// this is used to identify the "base" constructor to extend all plain-object
// components with in Weex's multi-instance scenarios.
//用于标识“base”构造函数以扩展所有纯对象
//包含在Weex的多实例方案中的组件。
Vue.options._base = Vue
```
细心的同学会发现，这里定义的是 `Vue.options`，而我们的 `createComponent` 取的是 `context.$options`，实际上在 `src/core/instance/init.js` 里 Vue 原型上的 `_init` 函数中有这么一段逻辑：

```js
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
)
```

这样就把 Vue 上的一些 `option` 扩展到了 vm.$options 上，所以我们也就能通过 `vm.$options._base` 拿到 Vue 这个构造函数了。`mergeOptions` 的实现我们会在后续章节中具体分析，现在只需要理解它的功能是把 Vue 构造函数的 `options` 和用户传入的 `options` 做一层合并，到 `vm.$options ` 上。

在了解了 `baseCtor` 指向了 Vue 之后，我们来看一下 `Vue.extend` 函数的定义，在 `src/core/global-api/extend.js` 中。

```js
/**
 * Class inheritance
 */
Vue.extend = function (extendOptions: Object): Function {
  extendOptions = extendOptions || {}
  const Super = this
  const SuperId = Super.cid
  const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
  if (cachedCtors[SuperId]) {
    return cachedCtors[SuperId]
  }

  const name = extendOptions.name || Super.options.name
  if (process.env.NODE_ENV !== 'production' && name) {
    validateComponentName(name)
  }

  const Sub = function VueComponent (options) {
    this._init(options)
  }
  Sub.prototype = Object.create(Super.prototype)
  Sub.prototype.constructor = Sub
  Sub.cid = cid++
  Sub.options = mergeOptions(
    Super.options,
    extendOptions
  )
  Sub['super'] = Super

  // For props and computed properties, we define the proxy getters on
  // the Vue instances at extension time, on the extended prototype. This
  // avoids Object.defineProperty calls for each instance created.
  //对于props和computed属性，我们在
  //扩展时扩展原型上的Vue实例。这个
  //避免为每个创建的实例调用object.defineproperty。
  if (Sub.options.props) {
    initProps(Sub)
  }
  if (Sub.options.computed) {
    initComputed(Sub)
  }

  // allow further extension/mixin/plugin usage
  //允许进一步扩展/混音/插件使用
  Sub.extend = Super.extend
  Sub.mixin = Super.mixin
  Sub.use = Super.use

  // create asset registers, so extended classes
  // can have their private assets too.
  //创建资产寄存器，因此扩展类
  //也可以拥有他们的私人资产。
  ASSET_TYPES.forEach(function (type) {
    Sub[type] = Super[type]
  })
  // enable recursive self-lookup
  //启用递归自查找
  if (name) {
    Sub.options.components[name] = Sub
  }

  // keep a reference to the super options at extension time.
  // later at instantiation we can check if Super's options have
  // been updated.
  //在扩展时保留对超级选项的引用。
  //稍后在实例化时，我们可以检查super的选项是否
  //已更新。
  Sub.superOptions = Super.options
  Sub.extendOptions = extendOptions
  Sub.sealedOptions = extend({}, Sub.options)

  // cache constructor
  //缓存生成器
  cachedCtors[SuperId] = Sub
  return Sub
}
```

`Vue.extend` 的作用就是构造一个 `Vue` 的子类，它使用一种非常经典的原型继承的方式把一个纯对象转换一个继承于 `Vue` 的构造器 `Sub` 并返回，然后对 `Sub` 这个对象本身扩展了一些属性，如扩展 `options`、添加全局 API 等；并且对配置中的 `props` 和 `computed` 做了初始化工作；最后对于这个 `Sub` 构造函数做了缓存，避免多次执行 `Vue.extend` 的时候对同一个子组件重复构造。

这样当我们去实例化 `Sub` 的时候，就会执行 `this._init` 逻辑再次走到了 `Vue` 实例的初始化逻辑，实例化子组件的逻辑在之后的章节会介绍。

```js
const Sub = function VueComponent (options) {
  this._init(options)
}
```

## 安装组件钩子函数

```js
// install component management hooks onto the placeholder node
installComponentHooks(data)
```

我们之前提到 Vue.js 使用的 Virtual DOM 参考的是开源库 [snabbdom](https://github.com/snabbdom/snabbdom)，它的一个特点是在 VNode 的 patch 流程中对外暴露了各种时机的钩子函数，方便我们做一些额外的事情，Vue.js 也是充分利用这一点，在初始化一个 Component 类型的 VNode 的过程中实现了几个钩子函数：

```js
const componentVNodeHooks = {
  init (vnode: VNodeWithData, hydrating: boolean): ?boolean {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      const mountedNode: any = vnode // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode)
    } else {
      const child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      )
      child.$mount(hydrating ? vnode.elm : undefined, hydrating)
    }
  },

  prepatch (oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {
    const options = vnode.componentOptions
    const child = vnode.componentInstance = oldVnode.componentInstance
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    )
  },

  insert (vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, 'mounted')
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        //在更新期间，保持活动的组件的子组件可能
        //更改，因此直接在此处浏览树可能会调用激活的挂钩
        //在不正确的子级上。相反，我们把它们排成一个队列，
        //在整个补丁过程结束后进行处理。
        queueActivatedComponent(componentInstance)
      } else {
        activateChildComponent(componentInstance, true /* direct */)
      }
    }
  },

  destroy (vnode: MountedComponentVNode) {
    const { componentInstance } = vnode
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy()
      } else {
        deactivateChildComponent(componentInstance, true /* direct */)
      }
    }
  }
}

const hooksToMerge = Object.keys(componentVNodeHooks)

function installComponentHooks (data: VNodeData) {
  const hooks = data.hook || (data.hook = {})
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i]
    const existing = hooks[key]
    const toMerge = componentVNodeHooks[key]
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
    }
  }
}

function mergeHook (f1: any, f2: any): Function {
  const merged = (a, b) => {
    // flow complains about extra args which is why we use any
    //Flow抱怨额外的参数，这就是为什么我们使用
    f1(a, b)
    f2(a, b)
  }
  merged._merged = true
  return merged
}
```
整个 `installComponentHooks` 的过程就是把 `componentVNodeHooks` 的钩子函数合并到 `data.hook` 中，在 VNode 执行 `patch` 的过程中执行相关的钩子函数，具体的执行我们稍后在介绍 `patch` 过程中会详细介绍。这里要注意的是合并策略，在合并过程中，如果某个时机的钩子已经存在 `data.hook` 中，那么通过执行 `mergeHook` 函数做合并，这个逻辑很简单，就是在最终执行的时候，依次执行这两个钩子函数即可。

## 实例化 VNode

```js
const name = Ctor.options.name || tag
const vnode = new VNode(
  `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
  data, undefined, undefined, undefined, context,
  { Ctor, propsData, listeners, tag, children },
  asyncFactory
)
return vnode
```

最后一步非常简单，通过 `new VNode` 实例化一个 `vnode` 并返回。需要注意的是和普通元素节点的 `vnode` 不同，组件的 `vnode` 是没有 `children` 的，这点很关键，在之后的 `patch` 过程中我们会再提。

## 总结

这一节我们分析了 `createComponent` 的实现，了解到它在渲染一个组件的时候的 3 个关键逻辑：构造子类构造函数，安装组件钩子函数和实例化 `vnode`。`createComponent` 后返回的是组件 `vnode`，它也一样走到 `vm._update` 方法，进而执行了 `patch` 函数，我们在上一章对 `patch` 函数做了简单的分析，那么下一节我们会对它做进一步的分析。
