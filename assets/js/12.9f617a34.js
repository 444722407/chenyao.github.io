(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{437:function(t,s,a){t.exports=a.p+"assets/img/secrets.877efc9c.png"},438:function(t,s,a){t.exports=a.p+"assets/img/node.b21fa2ce.png"},439:function(t,s,a){t.exports=a.p+"assets/img/nodeyml.38ec9d91.png"},440:function(t,s,a){t.exports=a.p+"assets/img/deploy.2a040660.png"},476:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("GitHub自动部署：")]),t._v(" "),s("p",[t._v("每次监听push 通过github Action 运行自动化的脚本为项目打包和部署")]),t._v(" "),s("p",[t._v("当然也可以发布到codeing其他代码平台")]),t._v(" "),s("p",[t._v("方便之处就只要push 就行了 不用本地打包构建在上传 提升效率")]),t._v(" "),s("h2",{attrs:{id:"_1、获取token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取token"}},[t._v("#")]),t._v(" 1、获取token")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.github.com/cn/github/authenticating-to-github/creating-a-personal-access-token",target:"_blank",rel:"noopener noreferrer"}},[t._v("github获取token官方文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("通过上一步创建了个人token后,然后添加到secrets，token_key的名称要一致")]),t._v(" "),s("p",[s("img",{attrs:{src:a(437),alt:"secrets"}})]),t._v(" "),s("h2",{attrs:{id:"_2、创建yml脚本文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建yml脚本文件"}},[t._v("#")]),t._v(" 2、创建yml脚本文件")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.github.com/cn/actions/learn-github-actions/introduction-to-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("github Action 简介"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在github库的action 选项卡下新建yml文件")]),t._v(" "),s("p",[t._v("以下是node.js的模板:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(438),alt:"node"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(439),alt:"node_yml"}})]),t._v(" "),s("h2",{attrs:{id:"_3、编写yml脚本文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、编写yml脚本文件"}},[t._v("#")]),t._v(" 3、编写yml脚本文件")]),t._v(" "),s("p",[t._v("我们不能按模板给的脚本来执行自动化命令，需要编写自己的")]),t._v(" "),s("p",[t._v("先git pull 拉下来模板，在这基础上编写")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.github.com/cn/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths",target:"_blank",rel:"noopener noreferrer"}},[t._v("构建流程语法"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("完整代码:")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CI\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在master分支发生push事件时触发。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作流")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#运行在虚拟机环境ubuntu-latest")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matrix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("10.x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用的动作。格式：userName/repoName。作用：检出仓库，获取源码。 官方actions库：https://github.com/actions")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Use Node.js $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matrix.node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("version "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤2")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 作用：安装nodejs")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" matrix.node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("version "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 版本")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" run deploy.sh "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤3 （同时部署到github和coding）")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置环境变量")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# toKen私密变量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run push "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行的命令  ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# package.json 中添加 "deploy": "bash deploy.sh"')]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("ACCESS_TOKE 是保存在github仓库的Settings/Secrets位置的私密变量，仓库代码中可以通过<secrets.变量名>来获取，保证了token的私密性。")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v('npm run push 是在package.json中定义的脚本\n{ "push":"bash deploy.sh" }')])]),s("h2",{attrs:{id:"_4、编写deploy-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、编写deploy-sh"}},[t._v("#")]),t._v(" 4、编写deploy.sh")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果$GITHUB_TOKEN环境变量字符串 长度为0则为true  本地长度为0 线上打包环节为保密的值不为0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-z")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GITHUB_TOKEN")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy-local'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("githubUrl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("git@github.com:444722407/blog.git\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n  \n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'来自github action的自动部署'")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("githubUrl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://44722407:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_TOKEN}")]),t._v("@github.com/444722407/444722407.github.io.git\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chenyao"')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"444722407@qq.com"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$msg")]),t._v('"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# # 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$githubUrl")]),t._v("  master\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n\n\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("Shell 可以获取到上一步yml中设置的GITHUB_TOKEN环境变量。")]),t._v(" "),s("p",[t._v("如果没有说明是在本地自己的电脑上运行的部署，使用ssh代码仓库地址，如果有token环境变量，说明是GitHub Actions自动触发的部署，此时使用的是可以通过toKen来获取代码提交权限的提交地址。最后通过git命令")]),t._v(" "),s("p",[t._v("提交到各自的仓库，完成部署。")])]),s("p",[s("img",{attrs:{src:a(440),alt:"deploy"}})]),t._v(" "),s("h2",{attrs:{id:"_5、github-cdn静态资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、github-cdn静态资源"}},[t._v("#")]),t._v(" 5、github cdn静态资源")]),t._v(" "),s("p",[t._v("https://cdn.jsdelivr.net/gh/GitHub用户名/仓库名@分支名/文件路径")]),t._v(" "),s("p",[t._v("例子："),s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/444722407/blog@master/docs/.vuepress/public/bg.jpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cdn.jsdelivr.net/gh/444722407/blog@master/docs/.vuepress/public/bg.jpg"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_5、参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、参考文献"}},[t._v("#")]),t._v(" 5、参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xugaoyi.com/pages/6b9d359ec5aa5019/#%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 实现自动部署静态博客"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1777585",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress教程之部署到Github Action"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);