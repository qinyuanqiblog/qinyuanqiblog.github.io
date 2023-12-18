(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{459:function(t,a,e){"use strict";e.r(a);var s=e(12),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"项目背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目背景"}},[t._v("#")]),t._v(" 项目背景")]),t._v(" "),a("ul",[a("li",[t._v("这是一个vue脚手架生成的vue3 + ts的项目，文件都是tsx格式")]),t._v(" "),a("li",[t._v("项目依赖")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/aae1bfbd-d124-4664-add4-02a3f9121cf6-2331693.jpg",alt:""}})]),t._v(" "),a("li",[t._v("vue cli 信息")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/c4b315ee-834c-4898-b417-664f1c202c76-2331693.jpg",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("ul",[a("li",[t._v("我们有一个登录页面，登录页面之前就有输入密码回车登录的功能，回车登录之后会接入网易的校验，防止用户恶意刷新等操作")]),t._v(" "),a("li",[t._v("后来新同事cv 了一份，差不多的代码，差不多的逻辑，然后在他的页面上回车登录就会触发页面刷新，并且带上一些莫名其妙的参数")]),t._v(" "),a("li",[t._v("示例")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/595f0c34-3740-494b-ab6f-d2aefa139a49-2331693.jpg",alt:""}})])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("开始的地址：http://192.168.2.165:1027/h5/permissions/#/doubleAuthVerifyPhone\n出现问题之后的地址：http://192.168.2.165:1027/h5/permissions/?NECaptchaValidate=#/doubleAuthVerifyPhone\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"问题影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题影响"}},[t._v("#")]),t._v(" 问题影响")]),t._v(" "),a("ul",[a("li",[t._v("正常点击登录没问题")]),t._v(" "),a("li",[t._v("当用户回车登录的时候，因为这个bug，会重定向一次，导致用户需要操作两次，才能进入系统，用户体验很差")])]),t._v(" "),a("h2",{attrs:{id:"为啥a页面没有问题-复制过来之后的代码-回车登录就会触发这个问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥a页面没有问题-复制过来之后的代码-回车登录就会触发这个问题"}},[t._v("#")]),t._v(" 为啥a页面没有问题，复制过来之后的代码，回车登录就会触发这个问题？")]),t._v(" "),a("ul",[a("li",[t._v("当form 下面只有一个输入框的时候，按回车键会提交表单")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("规范说的"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" 问题分析")]),t._v(" "),a("h3",{attrs:{id:"猜想1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#猜想1"}},[t._v("#")]),t._v(" 猜想1：")]),t._v(" "),a("blockquote",[a("p",[t._v("自己业务代码上有问题，然后看了下代码，并且和之前的代码做对比，发现不是这个问题")])]),t._v(" "),a("h3",{attrs:{id:"猜想2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#猜想2"}},[t._v("#")]),t._v(" 猜想2：")]),t._v(" "),a("blockquote",[a("p",[t._v("询问网易u盾技术，出现NECaptchaValidate这个参数是啥原因，经常沟通和排查，人家说不是他们那边的问题，还得到了一个网易u盾不为人知的配置")])]),t._v(" "),a("h4",{attrs:{id:"disablevalidateinput-去掉验证码自己添加的-input-元素-默认是false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disablevalidateinput-去掉验证码自己添加的-input-元素-默认是false"}},[t._v("#")]),t._v(" disableValidateInput: 去掉验证码自己添加的 input 元素，默认是false")]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/09afbb73-f43b-4c4b-b7cb-ee63212467e7-2331693.jpg",alt:""}})])]),t._v(" "),a("blockquote",[a("p",[t._v("网易u盾技术让我加了这个之后还不行，就说不是他们的问题了，那这样的话，只能是浏览器默认事件的问题咯")])]),t._v(" "),a("h3",{attrs:{id:"猜想3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#猜想3"}},[t._v("#")]),t._v(" 猜想3：")]),t._v(" "),a("blockquote",[a("p",[t._v("触发了浏览器默认事件，因为使用了element form 组件，并且之前也在人家的api里面有提到说明，事实证明是这个问题，但是我还是想不通a页面为啥没有这个bug 😄😄😄")])]),t._v(" "),a("h4",{attrs:{id:"element-form-官方说明-事实证明也是因为这个问题导致的-o-∩-∩-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-form-官方说明-事实证明也是因为这个问题导致的-o-∩-∩-o"}},[t._v("#")]),t._v(" element form 官方说明，事实证明也是因为这个问题导致的，O(∩_∩)O")]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/60d88d86-d1b1-4328-a6ed-37525a2eed63-2331693.jpg",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/39c3e958-8a50-4880-936a-b9eba889a1c2-2331693.jpg",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"发现了一个好玩的网站-讲的东西挺不错的-喜欢的朋友可以看看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发现了一个好玩的网站-讲的东西挺不错的-喜欢的朋友可以看看"}},[t._v("#")]),t._v(" 发现了一个好玩的网站， 讲的东西挺不错的，喜欢的朋友可以看看")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://zh.javascript.info/")])]),t._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f198fe96-416f-44e1-8aeb-377f624974d3-2331693.jpg",alt:""}})])])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh.javascript.info/default-browser-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器默认事件"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);