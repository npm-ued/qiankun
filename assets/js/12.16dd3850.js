(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{233:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api-说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-说明"}},[t._v("#")]),t._v(" API 说明")]),t._v(" "),s("h2",{attrs:{id:"registermicroapps-apps-lifecycles-opts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registermicroapps-apps-lifecycles-opts"}},[t._v("#")]),t._v(" "),s("code",[t._v("registerMicroApps(apps, lifeCycles?, opts?)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[t._v("apps - "),s("code",[t._v("Array<RegistrableApp<T>>")]),t._v(" - 必选，子应用的一些注册信息")]),t._v(" "),s("li",[t._v("lifeCycles - "),s("code",[t._v("LifeCycles<T>")]),t._v(" - 可选，全局的子应用生命周期钩子")]),t._v(" "),s("li",[t._v("opts - "),s("code",[t._v("RegisterMicroAppsOpts")]),t._v(" - 可选")])])]),t._v(" "),s("li",[s("p",[t._v("类型")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("RegistrableApp<T>")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("name - "),s("code",[t._v("string")]),t._v(" - 必选，子应用的名称，子应用之间必须确保唯一。")])]),t._v(" "),s("li",[s("p",[t._v("entry - "),s("code",[t._v("string | { scripts?: string[]; styles?: string[]; html?: string }")]),t._v(" - 必选，子应用的 entry 地址。")])]),t._v(" "),s("li",[s("p",[t._v("render - "),s("code",[t._v("(props?: { appContent: string; loading: boolean }) => any")]),t._v(" - 必选，子应用在需要被激活时触发的渲染方法。")])]),t._v(" "),s("li",[s("p",[t._v("activeRule - "),s("code",[t._v("(location: Location) => boolean")]),t._v(" - 必选，子应用的激活规则。")]),t._v(" "),s("p",[t._v("浏览器 url 发生变化会调用这个函数，"),s("code",[t._v("activeRule")]),t._v(" 返回 "),s("code",[t._v("true")]),t._v(" 时表明该子应用需要被激活。")])]),t._v(" "),s("li",[s("p",[t._v("props - "),s("code",[t._v("object")]),t._v(" - 可选，主应用需要传递给子应用的数据。")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("LifeCycles<T>")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Lifecycle"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RegistrableApp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("beforeLoad - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - 可选")]),t._v(" "),s("li",[t._v("beforeMount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - 可选")]),t._v(" "),s("li",[t._v("afterMount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - 可选")]),t._v(" "),s("li",[t._v("beforeUnmount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - 可选")]),t._v(" "),s("li",[t._v("afterUnmount - "),s("code",[t._v("Lifecycle<T> | Array<Lifecycle<T>>")]),t._v(" - 可选")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("RegisterMicroAppsOpts")])]),t._v(" "),s("ul",[s("li",[t._v("fetch - "),s("code",[t._v("Function")]),t._v(" - 可选")]),t._v(" "),s("li",[t._v("getDomain - "),s("code",[t._v("Function")]),t._v(" - 可选")]),t._v(" "),s("li",[t._v("getTemplate - "),s("code",[t._v("(tpl: string) => string")]),t._v(" - 可选")])])])])]),t._v(" "),s("li",[s("p",[t._v("用法")]),t._v(" "),s("p",[t._v("主应用中注册子应用的配置信息。")])]),t._v(" "),s("li",[s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" registerMicroApps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerMicroApps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//localhost:8080'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" appContent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" ReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("appContent")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("appContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(", document.getElementById('container')),\n    activeRule: location => location.pathname.startsWith('/react'),\n    props: ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kuitos'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  }],\n  ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeLoad")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'before load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    beforeMount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'before mount'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(",\n);\n")])])])])])]),t._v(" "),s("h2",{attrs:{id:"start-opts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-opts"}},[t._v("#")]),t._v(" "),s("code",[t._v("start(opts?)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[t._v("opts - "),s("code",[t._v("Options")]),t._v(" 可选")])])]),t._v(" "),s("li",[s("p",[t._v("类型")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("Options")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("prefetch - "),s("code",[t._v("boolean | 'all'")]),t._v(" - 可选，是否开启预加载，默认为 "),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("p",[t._v("配置为 "),s("code",[t._v("true")]),t._v(" 则会在第一个子应用 mount 完成后开始预加载其他子应用的静态资源。配置为 "),s("code",[t._v("'all'")]),t._v(" 则主应用 "),s("code",[t._v("start")]),t._v(" 后即开始预加载所有子应用静态资源。")])]),t._v(" "),s("li",[s("p",[t._v("jsSandbox - "),s("code",[t._v("boolean")]),t._v(" - 可选，是否开启沙箱，默认为 "),s("code",[t._v("true")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("singular - "),s("code",[t._v("boolean | ((app: RegistrableApp<any>) => Promise<boolean>);")]),t._v(" - 可选，是否为单实例场景，默认为 "),s("code",[t._v("true")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("fetch - "),s("code",[t._v("Fetch")]),t._v(" - 可选，自定义的 fetch 方法。")])])])])])]),t._v(" "),s("li",[s("p",[t._v("用法")]),t._v(" "),s("p",[t._v("启动 qiankun。")])]),t._v(" "),s("li",[s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"setdefaultmountapp-applink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setdefaultmountapp-applink"}},[t._v("#")]),t._v(" "),s("code",[t._v("setDefaultMountApp(appLink)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[t._v("appLink - "),s("code",[t._v("string")]),t._v(" - 必选")])])]),t._v(" "),s("li",[s("p",[t._v("用法")]),t._v(" "),s("p",[t._v("设置主应用启动后默认进入的子应用。")])]),t._v(" "),s("li",[s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" setDefaultMountApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaultMountApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeApp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"runafterfirstmounted-effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runafterfirstmounted-effect"}},[t._v("#")]),t._v(" "),s("code",[t._v("runAfterFirstMounted(effect)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[t._v("effect - "),s("code",[t._v("() => void")]),t._v(" - 必选")])])]),t._v(" "),s("li",[s("p",[t._v("用法")]),t._v(" "),s("p",[t._v("第一个子应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。")])]),t._v(" "),s("li",[s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runAfterFirstMounted "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runAfterFirstMounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startMonitor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"adderrorhandler-removeerrorhandler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adderrorhandler-removeerrorhandler"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://single-spa.js.org/docs/api#adderrorhandler",target:"_blank",rel:"noopener noreferrer"}},[t._v("addErrorHandler/removeErrorHandler"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"addglobaluncaughterrorhandler-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addglobaluncaughterrorhandler-handler"}},[t._v("#")]),t._v(" "),s("code",[t._v("addGlobalUncaughtErrorHandler(handler)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[t._v("handler - "),s("code",[t._v("(...args: any[]) => void")]),t._v(" - 必选")])])]),t._v(" "),s("li",[s("p",[t._v("用法")]),t._v(" "),s("p",[t._v("添加全局的未捕获异常处理器。")])]),t._v(" "),s("li",[s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" addGlobalUncaughtErrorHandler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGlobalUncaughtErrorHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"removeglobaluncaughterrorhandler-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removeglobaluncaughterrorhandler-handler"}},[t._v("#")]),t._v(" "),s("code",[t._v("removeGlobalUncaughtErrorHandler(handler)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[t._v("handler - "),s("code",[t._v("(...args: any[]) => void")]),t._v(" - 必选")])])]),t._v(" "),s("li",[s("p",[t._v("用法")]),t._v(" "),s("p",[t._v("移除全局的未捕获异常处理器。")])]),t._v(" "),s("li",[s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" removeGlobalUncaughtErrorHandler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiankun'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeGlobalUncaughtErrorHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);