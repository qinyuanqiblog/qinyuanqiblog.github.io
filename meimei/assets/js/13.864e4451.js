(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{403:function(t,a,s){"use strict";s.r(a);var e=s(12),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("blockquote",[a("p",[t._v("接入微信扫码登录整个流程的记录")])]),t._v(" "),a("h2",{attrs:{id:"具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://open.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. 注册开发者账号"),a("OutboundLink")],1),t._v("​")]),t._v(" "),a("h3",{attrs:{id:"_2-创建应用-得到appid和appsecret-并配置回调域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建应用-得到appid和appsecret-并配置回调域名"}},[t._v("#")]),t._v(" 2.创建应用，得到appid和AppSecret，并配置回调域名")]),t._v(" "),a("p",[t._v("2.1  创建应用")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/d9d42050-e860-4b59-b50d-11d3ee24de96-2331693.jpg",alt:""}})]),t._v(" "),a("p",[t._v("2.2  填写应用资料，提交审核，审核通过会得到开发需要用的appid和AppSecret，这两个值， 这个值会给到后台，然后然后再通过接口给到我们")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/195b2530-8327-44f6-ba29-ab7d63a59be8-2331693.jpg",alt:""}})]),t._v(" "),a("p",[t._v("2.3 应用创建成功，配置回调域名")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/11595d19-b61d-4431-8d5f-5d14b18f2b5e-2331693.jpg",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/6910e534-11e1-40f4-aef0-bab3bcd94a6a-2331693.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_4-开发者资质认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-开发者资质认证"}},[t._v("#")]),t._v(" 4. 开发者资质认证")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/5331c9bf-d211-4759-b23a-0f7f772b39af-2331693.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_5-配置一个内网穿透-方便调试-如果你们公司的是内网域名-那也可以-微信只校验了域名的合法性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置一个内网穿透-方便调试-如果你们公司的是内网域名-那也可以-微信只校验了域名的合法性"}},[t._v("#")]),t._v(" 5. 配置一个内网穿透，方便调试（如果你们公司的是内网域名，那也可以，微信只校验了域名的合法性）")]),t._v(" "),a("p",[t._v("我使用的natapp来做内网穿透，")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://natapp.cn/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://natapp.cn/login"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"如果是使用vue-cli-构建的项目-开启穿透会报错-invalid-host-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果是使用vue-cli-构建的项目-开启穿透会报错-invalid-host-header"}},[t._v("#")]),t._v(" 如果是使用vue-cli 构建的项目，开启穿透会报错 invalid  host header")]),t._v(" "),a("h5",{attrs:{id:"invalid-host-header-解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalid-host-header-解决办法"}},[t._v("#")]),t._v(" invalid  host header 解决办法")]),t._v(" "),a("ul",[a("li",[t._v("报错信息")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/44c43ae4-3a1d-4e07-96e9-56cee34e1834-2331693.jpg",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("解决办法")])]),t._v(" "),a("blockquote",[a("p",[t._v("webpack 4：可以在build目录下的webpack.dev.conf.js文件，devServer下添加disableHostCheck: true，跳过检查")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/9531b0d0-5c47-4bdb-8b69-c22441336c17-2331693.jpg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("webpack5:一样是在修改vue 的devService 配置中添加  allowedHosts: 'all' 即可")])]),t._v(" "),a("h3",{attrs:{id:"_6-授权流程说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-授权流程说明"}},[t._v("#")]),t._v(" 6.授权流程说明")]),t._v(" "),a("p",[t._v("官网的说明")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/cbc3ab96-dd5c-402b-a55f-bf1ceefc5bef-2331693.jpg",alt:""}})]),t._v(" "),a("p",[t._v("我个人的理解")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/dd62f5b9-032f-465a-83ab-08d79ff06af3-2331693.jpg",alt:""}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.processon.com/view/link/61797d00e0b34d7894f710e2",target:"_blank",rel:"noopener noreferrer"}},[t._v("流程图"),a("OutboundLink")],1),t._v("​")]),t._v(" "),a("h3",{attrs:{id:"_7-核心代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-核心代码"}},[t._v("#")]),t._v(" 7. 核心代码")]),t._v(" "),a("ul",[a("li",[t._v("参数说明")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/1923a627-951b-476d-87b4-986c745d9108-2331693.jpg",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"重点说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点说明"}},[t._v("#")]),t._v(" 重点说明")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("href的连接必须是一个外网的可访问的地址")]),t._v(" "),a("li",[t._v("自定义二维码样式相关代码")])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".impowerBox .qrcode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".impowerBox .title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".impowerBox .info")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".\n\nstatus_icon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".impowerBox .status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h5",{attrs:{id:"常规套路-会新开一个页面-然后扫码授权的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常规套路-会新开一个页面-然后扫码授权的方式"}},[t._v("#")]),t._v(" 常规套路，会新开一个页面，然后扫码授权的方式")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://open.weixin.qq.com/connect/qrconnect?appid=wxce0a56c2bb620e25&redirect_uri=https%3A%2F%2Fpassport.vip.com%2Fcallback%2Fweixin&response_type=code&scope=snsapi_login&state=e77986eb500341029f1e1aff094ee6c2#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://open.weixin.qq.com/connect/qrconnect?appid=wxce0a56c2bb620e25&redirect_uri=https%3A%2F%2Fpassport.vip.com%2Fcallback%2Fweixin&response_type=code&scope=snsapi_login&state=e77986eb500341029f1e1aff094ee6c2#wechat_redirect"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1.将上面的连接放到一个a标签中即可")]),t._v(" "),a("p",[t._v("2.当前页面显示二维码")]),t._v(" "),a("p",[t._v("3.引入js: "),a("a",{attrs:{href:"http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("4.在需要使用微信登录的地方实例以下JS对象，参数见上文介绍")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WxLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("self_redirect")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login_container"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("appid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("redirect_uri")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h3",{attrs:{id:"_8-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-总结"}},[t._v("#")]),t._v(" 8. 总结")]),t._v(" "),a("p",[t._v("好好看文档，许多坑都是不好好看文档的下场 😄，与君共勉之")]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1447723",target:"_blank",rel:"noopener noreferrer"}},[t._v("微云-微信扫码流程"),a("OutboundLink")],1),t._v("​")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("​")])])}),[],!1,null,null,null);a.default=r.exports}}]);