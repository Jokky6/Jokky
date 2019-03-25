(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{190:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"后端起步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端起步","aria-hidden":"true"}},[s._v("#")]),s._v(" 后端起步")]),s._v(" "),t("h2",{attrs:{id:"你需要了解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你需要了解","aria-hidden":"true"}},[s._v("#")]),s._v(" 你需要了解")]),s._v(" "),t("p",[s._v("入门一个新框架最好的方式就是将这个框架的 demo 运行起来。由于 Lin 采用的是前后端分离的架构，所以相比于传统的网站，它的环境搭建会稍显麻烦。但 Lin 并没有采用任何冷门的技术，相比于传统网站，只不过多出了一些对于 Vue 运行环境的支持。")]),s._v(" "),t("p",[s._v("Lin 的 Server 端是基于 Python Flask 的, 所以你必须首先在自己的 PC 上安装 Python 环境包。此外，Lin 是一个完整的框架，数据库是必然需要的。")]),s._v(" "),t("p",[s._v("无需担心，我们将详细阐述安装的步骤，让你轻松将 Lin 运行起来。")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("对于初学者，我们建议首先安装 Server 的环境，在将 Server 端运行、调试通过后再进行 Client 的安装和配置。")])]),s._v(" "),t("h2",{attrs:{id:"server-端必备环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-端必备环境","aria-hidden":"true"}},[s._v("#")]),s._v(" Server 端必备环境")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("安装"),t("code",[s._v("MySQL")]),s._v("（version： 5.6+）")])]),s._v(" "),t("li",[t("p",[s._v("安装"),t("code",[s._v("Python")]),s._v("环境(version： 3.6+)")])])]),s._v(" "),t("h2",{attrs:{id:"获取工程项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取工程项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 获取工程项目")]),s._v(" "),t("p",[s._v("打开你的命令行工具（terminal），在其中键入:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/TaleLin/lin-cms-flask.git starter\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("此处我们以 "),t("code",[s._v("starter")]),s._v(" 作为工程名，当然你也可以以任意你喜爱的名字作为工程名。")]),s._v(" "),t("p",[s._v("如果你想以某个版本，如"),t("code",[s._v("0.0.1")]),s._v("版，作为起始项目，那么请在 github 上的版本页下载相应的版本即可。")])]),s._v(" "),t("h2",{attrs:{id:"安装依赖包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖包","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装依赖包")]),s._v(" "),t("p",[s._v("我们强烈建议使用 Python 的虚拟环境来安装依赖包，推荐使用 Pipenv 来创建虚拟环境。关于"),t("code",[s._v("Pipenv")]),s._v("的更多使用请参考"),t("a",{attrs:{href:"https://pipenv.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pipenv 官网"),t("OutboundLink")],1),s._v("。接下来，继续在命令行中输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" starter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" pipenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行此命令前，请确保系统中已成功安装了 pipenv。这将为 Lin 创建一个虚拟环境并安装所有依赖包。如果你不想使用虚拟环境，那么键入以下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" starter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -r requirements.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这将调用系统环境中的 pip 来安装依赖包。")]),s._v(" "),t("h2",{attrs:{id:"数据库配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据库配置")]),s._v(" "),t("p",[s._v("Lin 需要你自己在 MySQL 中新建一个数据库，名字由你自己决定。例如，新建一个名为 lin-cms 的数据库，数据库字符编码设置为"),t("code",[s._v("utf-8")]),s._v("。接着，我们需要在工程中进行一项简单的配置。使用编辑器打开 Lin 工程的"),t("code",[s._v("app/config/secure.py")]),s._v("，找到如下配置项：")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库配置示例")]),s._v("\nSQLALCHEMY_DATABASE_URI "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql+cymysql://root:123456@localhost:3306/lin-cms'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("请在"),t("code",[s._v("SQLALCHEMY_DATABASE_URI")]),s._v("这项中配置 MySQL 数据库的用户名、密码、ip、端口号与数据库名。"),t("strong",[s._v("请务必根据自己的实际情况修改此配置项")]),s._v("。")]),s._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("你所使用的数据库账号必须具有创建数据表的权限，否则 Lin 将无法为你自动创建数据表")])]),s._v(" "),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("一切就绪后，再次从命令行中使用 Python 命令运行项目根目录下的"),t("code",[s._v("starter.py")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python starter.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果你是以 pipenv 创建的虚拟环境，那么请先通过下面命令进入虚拟环境，再运行上面的命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pipenv shell\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果一切顺利，你将在命令行中看到项目成功运行的信息。如果你没有修改代码，Lin 将默认在本地启动一个端口号为 5000 的端口用来监听请求。此时，我们访问http://localhost:5000，将看到一组字符：")]),s._v(" "),t("p",[s._v('“心上无垢，林间有风"')]),s._v(" "),t("p",[s._v("这证明你已经成功的将 Lin 运行起来了，Congratulations！")]),s._v(" "),t("p",[s._v("欣喜之余，请你运行一下根目录下的"),t("code",[s._v("add_super.py")]),s._v("文件，我们会为在数据库中新建一个超级管理员账户，方便你后续在前端登陆。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("python add_super.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果你安装时遇到问题，那么尝试看看"),t("router-link",{attrs:{to:"/lin/lin-cms/server/questions.html"}},[s._v("常见问题汇总")]),s._v("，看能否解决，或者去我们的 github 仓库看 issue。如果没有出现你的问题，请给我们提 issue。")],1)])},[],!1,null,null,null);a.default=r.exports}}]);