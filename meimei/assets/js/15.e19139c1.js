(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{409:function(t,a,e){"use strict";e.r(a);var s=e(12),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目背景"}},[t._v("#")]),t._v(" 项目背景")]),t._v(" "),a("blockquote",[a("p",[t._v("是一个三年前基于 element-admin 搞出来的项目，一开始都还挺好的，虽然启动项目慢了点，但是编译速度不慢，后来经过某一次需求之后，就开始编译速度很慢了，😣😣")])]),t._v(" "),a("h2",{attrs:{id:"项目存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目存在的问题"}},[t._v("#")]),t._v(" 项目存在的问题")]),t._v(" "),a("ul",[a("li",[t._v("启动速度慢\n"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/82867e5b-37b8-463c-b4b6-ef8bc9ed46ea-2331693.jpg",alt:"图图"}})]),t._v(" "),a("li",[t._v("编译速度慢\n"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/a661d9dc-a6e0-4520-8d6d-21521b63ba65-2331693.jpg",alt:"图图"}})])]),t._v(" "),a("h2",{attrs:{id:"原项目依赖和文件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原项目依赖和文件目录"}},[t._v("#")]),t._v(" 原项目依赖和文件目录")]),t._v(" "),a("h3",{attrs:{id:"文件目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件目录"}},[t._v("#")]),t._v(" 文件目录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/2334eb87-b44b-4165-b1ca-eae936129767-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h3",{attrs:{id:"package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[t._v("#")]),t._v(" package.json")]),t._v(" "),a("h4",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" dependencies")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/c85b0fe2-5185-47f4-ae1d-fee9b962ad24-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h4",{attrs:{id:"devdependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies"}},[t._v("#")]),t._v(" devDependencies")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/ab4ea6c9-7efd-4fff-805d-8ce8c8ebcf36-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h2",{attrs:{id:"迁移到cli3-之后-感觉还是不错的😄😄😄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移到cli3-之后-感觉还是不错的😄😄😄"}},[t._v("#")]),t._v(" 迁移到cli3 之后，感觉还是不错的😄😄😄")]),t._v(" "),a("ul",[a("li",[t._v("启动项目\n"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/42ce52a4-a80c-49d9-883c-b042424c66bd-2331693.jpg",alt:"图图"}})]),t._v(" "),a("li",[t._v("编译速度\n"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/d22914cb-463c-4339-8540-8b6f929fdc7c-2331693.jpg",alt:"图图"}})])]),t._v(" "),a("h2",{attrs:{id:"开始迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始迁移"}},[t._v("#")]),t._v(" 开始迁移")]),t._v(" "),a("ul",[a("li",[t._v("思路1： 构建一个vue cli新的项目，然后把依赖拷贝过去（结果做到一半搞不下去了，坑太多了，哈哈）")]),t._v(" "),a("li",[t._v("思路2")])]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("因为当初这个项目是三年前我基于"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-admin-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-admin-template"),a("OutboundLink")],1),t._v("这个项目来做的，")]),t._v(" "),a("li",[t._v("我去官网看了下， 他现在升级到了vue cli3 的版本，我把他拷贝下来，然后做一下替换，应该比我的思路1，踩的坑少一点，")]),t._v(" "),a("li",[t._v("感觉思路1也是可以做的，奈何懒得折腾，就走了捷径把")])])]),t._v(" "),a("h2",{attrs:{id:"迁移步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移步骤"}},[t._v("#")]),t._v(" 迁移步骤")]),t._v(" "),a("h3",{attrs:{id:"_1-static-目录和index-html文件要拷贝到public文件夹下-static静态文件路径更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-static-目录和index-html文件要拷贝到public文件夹下-static静态文件路径更改"}},[t._v("#")]),t._v(" 1.  static 目录和index.html文件要拷贝到public文件夹下，static静态文件路径更改")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/212fff15-360e-4a5c-a23a-b61f00980c17-2331693.jpg",alt:"图图"}}),t._v(" "),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/183be4bf-4625-4a11-88e2-667385777458-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h3",{attrs:{id:"_2-修改package-json依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改package-json依赖"}},[t._v("#")]),t._v(" 2. 修改package.json依赖")]),t._v(" "),a("h4",{attrs:{id:"dependencies依赖对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies依赖对比"}},[t._v("#")]),t._v(" dependencies依赖对比")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/3b9ae062-8af3-4313-8916-01252c89d574-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h4",{attrs:{id:"devdependencies依赖对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devdependencies依赖对比"}},[t._v("#")]),t._v(" devDependencies依赖对比")]),t._v(" "),a("h5",{attrs:{id:"vue-template-compiler-要和vue-的版本一样-以免出现什么诡异的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-template-compiler-要和vue-的版本一样-以免出现什么诡异的问题"}},[t._v("#")]),t._v(" vue-template-compiler 要和vue 的版本一样，以免出现什么诡异的问题，")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/6cc1fba5-c740-4983-a7e2-c061782a6c8a-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h5",{attrs:{id:"babel-eslint-要进行降级处理-不然会报错-typeerror-cannot-read-property-range-of-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-eslint-要进行降级处理-不然会报错-typeerror-cannot-read-property-range-of-null"}},[t._v("#")]),t._v(" babel-eslint 要进行降级处理，不然会报错： TypeError: Cannot read property 'range' of null")]),t._v(" "),a("h5",{attrs:{id:"问题原因-https-segmentfault-com-a-1190000022127732"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题原因-https-segmentfault-com-a-1190000022127732"}},[t._v("#")]),t._v(" 问题原因：https://segmentfault.com/a/1190000022127732")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/735666a3-bf3d-44c1-8294-2314b927dc2f-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h3",{attrs:{id:"_3-替换eslint成原来项目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-替换eslint成原来项目的"}},[t._v("#")]),t._v(" 3. 替换eslint成原来项目的")]),t._v(" "),a("h3",{attrs:{id:"_4-修改上下文和代理文件-启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改上下文和代理文件-启动项目"}},[t._v("#")]),t._v(" 4. 修改上下文和代理文件，启动项目")]),t._v(" "),a("h4",{attrs:{id:"有一个警告-项目没有报错-开心😄😄😄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有一个警告-项目没有报错-开心😄😄😄"}},[t._v("#")]),t._v(" 有一个警告，项目没有报错，开心😄😄😄")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/6c74ab19-0272-4b1d-8fe6-4ab0e541622e-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h4",{attrs:{id:"报错critical-deependency-the-request-of-a-dependency-is-an-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错critical-deependency-the-request-of-a-dependency-is-an-expression"}},[t._v("#")]),t._v(" 报错critical deependency: the request of a dependency  is   an  expression")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/6a3cf0ab-9df6-4fde-8f11-b14d5e4a481c-2331693.jpg",alt:"图图"}}),t._v("\n问题原因："),a("a",{attrs:{href:"https://segmentfault.com/a/1190000015648036",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack import 动态加载组件的坑"),a("OutboundLink")],1),t._v("\n解决方案")]),t._v(" "),a("ul",[a("li",[t._v("改成require 的方式就好了\n"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/bf110f42-cf27-4be1-98dc-1a12af07df1d-2331693.jpg",alt:"图图"}})]),t._v(" "),a("li",[t._v("改成require 的方式就好了\n"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/8c0af24d-c6bc-4448-8e47-f9e99e366a61-2331693.jpg",alt:"图图"}})])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("load")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("views"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("callManage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n 变成 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("load")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("views"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("callManage$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"修改publicpath-如果部署的环境是多项目的话-就需要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改publicpath-如果部署的环境是多项目的话-就需要"}},[t._v("#")]),t._v(" 修改publicPath，如果部署的环境是多项目的话，就需要")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/0a679d44-12a5-4b3f-877b-7921d053d2b4-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h4",{attrs:{id:"因为现在的架构是把node-saas-迁移成dart-saas-所以要处理一些语法不兼容的问题-其实就是一个语法不兼容-还是很容易解决的-全局替换一下咯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#因为现在的架构是把node-saas-迁移成dart-saas-所以要处理一些语法不兼容的问题-其实就是一个语法不兼容-还是很容易解决的-全局替换一下咯"}},[t._v("#")]),t._v(" 因为现在的架构是把node-saas 迁移成dart-saas,所以要处理一些语法不兼容的问题，其实就是一个语法不兼容，还是很容易解决的，全局替换一下咯")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/sass.html#%E5%8D%87%E7%BA%A7%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网说明"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/1ff5d7e2-c1e0-4fd9-80a0-de6d31c26dbe-2331693.jpg",alt:"图图"}})]),t._v(" "),a("h4",{attrs:{id:"module-parse-failed-unexpected-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-parse-failed-unexpected-token"}},[t._v("#")]),t._v(" Module parse failed: Unexpected token")]),t._v(" "),a("blockquote",[a("p",[t._v("问题描述，报错，说element ui 的包有问题，一脸懵逼，github走一波")])]),t._v(" "),a("h5",{attrs:{id:"报错信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错信息"}},[t._v("#")]),t._v(" 报错信息")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/cab9953b-00ad-4ef6-8831-d8b78b92f857-2331693.jpg",alt:"图图"}})]),t._v(" "),a("ul",[a("li",[t._v("报错原因：我们使用饿了么内置的工具类！！！！，因为之前某个产品一直强制要求做一个很恶心的功能，所以有个同事就基于饿了么的日期再用他的工具类再封装了一个组件！！！！\n"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/053e3911-656a-45d5-8a57-cc58f7f36f52-2331693.jpg",alt:"图图"}}),t._v(" "),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/ce2a12c6-de15-4e15-b8de-3bfde4a1fbe3-2331693.jpg",alt:"图图"}})])]),t._v(" "),a("h5",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ElemeFE/element/issues/14379",target:"_blank",rel:"noopener noreferrer"}},[t._v("饿了么官网issue1"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/8b490c8a-f7d0-4c3a-8129-add352d04513-2331693.jpg",alt:"图图"}})]),t._v(" "),a("li",[a("a",{attrs:{href:"https://api2.mubu.com/v3/document_image/8b490c8a-f7d0-4c3a-8129-add352d04513-2331693.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("饿了么官网issue2"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/142cfd42-86e8-4364-92ca-772f8b333412-2331693.jpg",alt:"图图"}})])]),t._v(" "),a("h2",{attrs:{id:"引申问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引申问题"}},[t._v("#")]),t._v(" 引申问题")]),t._v(" "),a("ul",[a("li",[t._v("为啥经过某一次需求就回这么慢，那一次需求添加的文件也不多哈？")]),t._v(" "),a("li",[t._v("还是webpack不熟，哈哈")])]),t._v(" "),a("h2",{attrs:{id:"结束语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),a("ul",[a("li",[t._v("本文如有错误，欢迎指正，非常感谢")]),t._v(" "),a("li",[t._v("觉得有用的老铁，点个双击，小红心走一波")]),t._v(" "),a("li",[t._v("欢迎灌水，来呀，互相伤害哈 o(∩_∩)o 哈哈")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903759970058254",target:"_blank",rel:"noopener noreferrer"}},[t._v("【vue-cli3升级】老项目提速50%（一）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000022127732",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeError: Cannot read property 'range' of null"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);