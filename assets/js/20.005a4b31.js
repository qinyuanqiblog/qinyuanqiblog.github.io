(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{419:function(s,a,e){"use strict";e.r(a);var t=e(12),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),a("blockquote",[a("p",[s._v("powershell终端使用管理员启动")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Set-ExecutionPolicy Bypass "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Scope")]),s._v(" Process -Force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("System.Net.ServicePointManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("::SecurityProtocol "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("System.Net.ServicePointManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("::SecurityProtocol "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-bor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3072")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" iex "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("New"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Object System.Net.WebClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".DownloadString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("'https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("community.chocolatey.org"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("install.ps1'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看安装是否成功")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("choco "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看支持的包")])]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://community.chocolatey.org/packages",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://community.chocolatey.org/packages"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("输入包名，然后随便玩")])])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("ul",[a("li",[s._v("查看版本号")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("choco "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("更新到最新版本")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("choco upgrade chocolatey\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看本地已安装的软件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("choco list --local-only\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("安装软件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("choco "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  包名\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("卸载软件")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("choco uninstall  包名\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("查找包")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("choco search  关键词\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://chocolatey.org/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网地址"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);