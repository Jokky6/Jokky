(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,,,,,function(t,e,s){"use strict";s.d(e,"d",function(){return i}),s.d(e,"a",function(){return a}),s.d(e,"i",function(){return r}),s.d(e,"f",function(){return l}),s.d(e,"g",function(){return c}),s.d(e,"h",function(){return u}),s.d(e,"b",function(){return h}),s.d(e,"e",function(){return d}),s.d(e,"k",function(){return p}),s.d(e,"l",function(){return f}),s.d(e,"c",function(){return g}),s.d(e,"j",function(){return m});const i=/#.*$/,n=/\.(md|html)$/,a=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(n,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(i),s=e?e[0]:"",n=o(t);return a.test(n)?t:n+".html"+s}function d(t,e){const s=t.hash,n=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!n||s===n)&&o(t.path)===o(e)}function p(t,e,s){if(l(e))return{type:"external",path:e};s&&(e=function(t,e,s){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const n=e.split("/");s&&n[n.length-1]||n.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?n.pop():"."!==e&&n.push(e)}""!==n[0]&&n.unshift("");return n.join("/")}(e,s));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,s,i){const{pages:n,themeConfig:a}=s,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=r.sidebar||a.sidebar;if(o){const{base:t,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var s;return{}}(e,o);return s?s.map(e=>(function t(e,s,i,n=1){if("string"==typeof e)return p(s,e,i);if(Array.isArray(e))return Object.assign(p(s,e[0],i),{title:e[1]});{n>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(p(s,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,s,i,n+1)),collapsable:!1!==e.collapsable}}})(e,n,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},,,,,,,,,function(t,e,s){"use strict";s.r(e);var i=s(13),n={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:s(38).a},beforeCreate(){this.$options.components.SidebarLinks=s(37).default},methods:{isActive:i.e}},a=(s(47),s(0)),r=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?s("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[s("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?s("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):s("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[s("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?s("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),s("DropdownTransition",[t.open||!t.collapsable?s("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;function o(t,e,s,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},s)}function l(t,e,s,n,a,r=1){return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(i.e)(n,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,s+"#"+e.slug,e.title,c),l(t,e.children,s,n,a,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:n,$themeConfig:a,$themeLocaleConfig:r},props:{item:c,sidebarDepth:u}}){const h=Object(i.e)(n,c.path),d="auto"===c.type?h||c.children.some(t=>Object(i.e)(n,c.basePath+"#"+t.slug)):h,p="external"===c.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,c.path,c.title||c.path):o(t,c.path,c.title||c.path,d),f=e.frontmatter.sidebarDepth||u||r.sidebarDepth||a.sidebarDepth,g=null==f?1:f,m=r.displayAllHeaders||a.displayAllHeaders;if("auto"===c.type)return[p,l(t,c.children,c.basePath,n,g)];if((d||m)&&c.headers&&!i.d.test(c.path)){return[p,l(t,Object(i.c)(c.headers),c.path,n,g)]}return p}};s(48);var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const n=e[s];if("group"===n.type&&n.children.some(e=>"page"===e.type&&Object(i.e)(t,e.path)))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){console.log(4444),this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return console.log(4444),Object(i.e)(this.$route,t.regularPath)}}},h=Object(a.a)(u,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.items.length?s("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return s("li",{key:i},["group"===e.type?s("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):s("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},function(t,e,s){"use strict";var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},n=(s(42),s(0)),a=Object(n.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},function(t,e,s){"use strict";var i=s(16);s.n(i).a},function(t,e,s){"use strict";var i=s(17);s.n(i).a},function(t,e,s){"use strict";var i=s(18);s.n(i).a},function(t,e,s){"use strict";var i=s(19);s.n(i).a},function(t,e,s){"use strict";var i=s(20);s.n(i).a},function(t,e,s){"use strict";var i=s(21);s.n(i).a},function(t,e,s){"use strict";var i=s(22);s.n(i).a},function(t,e,s){"use strict";var i=s(23);s.n(i).a},function(t,e,s){"use strict";var i=s(24);s.n(i).a},function(t,e,s){"use strict";var i=s(25);s.n(i).a},function(t,e,s){"use strict";var i=s(26);s.n(i).a},function(t,e,s){"use strict";var i=s(27);s.n(i).a},function(t,e,s){"use strict";var i=s(28);s.n(i).a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";s.r(e);var i=s(13),n={props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},a=s(0),r=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isExternal(t.link)?s("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),s("OutboundLink")],1):s("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,o={components:{NavLink:r},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(s(39),Object(a.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[t.data.features&&t.data.features.length?s("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return s("div",{key:i,staticClass:"feature"},[s("h2",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),s("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?s("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),c={data:()=>({query:"",focused:!1,focusIndex:0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$localePath,i=e=>e.title&&e.title.toLowerCase().indexOf(t)>-1,n=[];for(let t=0;t<e.length&&!(n.length>=5);t++){const a=e[t];if(this.getPageLocalePath(a)===s&&this.isSearchable(a))if(i(a))n.push(a);else if(a.headers)for(let t=0;t<a.headers.length&&!(n.length>=5);t++){const e=a.headers[t];i(e)&&n.push(Object.assign({},a,{path:a.path+"#"+e.slug,header:e}))}}return n},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(e=>t.path.match(e)).length>0},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},u=(s(40),Object(a.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-box"},[s("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false",placeholder:"请输入搜索内容"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?s("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return s("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[s("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[s("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?s("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),h=(s(41),Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[s("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),d={components:{NavLink:r,DropdownTransition:s(38).a},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},p=(s(43),{components:{NavLink:r,DropdownLink:Object(a.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[s("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[s("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),s("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),s("DropdownTransition",[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return s("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?s("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?s("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return s("li",{key:t.link,staticClass:"dropdown-subitem"},[s("NavLink",{attrs:{item:t}})],1)}),0):s("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,i=this.$site.themeConfig.locales||{},n={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(n=>{const a=t[n],r=i[n]&&i[n].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,n),s.some(t=>t.path===o)||(o=n)),{text:r,link:o}})};return[...this.userNav,n]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:`https://github.com/${t}`},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const i=e[s];if(new RegExp(i,"i").test(t))return i}return"Source"}}}),f=(s(44),Object(a.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.userLinks.length||t.repoLink?s("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return s("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?s("DropdownLink",{attrs:{item:t}}):s("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?s("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),s("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function g(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var m={components:{SidebarButton:h,NavLinks:f,SearchBox:u,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(g(this.$el,"paddingLeft"))+parseInt(g(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},b=(s(45),Object(a.a)(m,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"navbar"},[s("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),t.isAlgoliaSearch?s("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?s("SearchBox"):t._e(),t._v(" "),s("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[s("NavLinks",{staticClass:"can-hide"}),t._v(" "),s("Logo",{staticClass:"can-show"})],1)],1)},[],!1,null,null,null).exports);function v(t,e,s){const i=[];!function t(e,s){for(let i=0,n=e.length;i<n;i++)"group"===e[i].type?t(e[i].children||[],s):s.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const n=i[e];if("page"===n.type&&n.path===decodeURIComponent(t.path))return i[e+s]}}var _={props:["sidebarItems"],computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?Object(i.k)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,v(e,s,-1));var e,s},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?Object(i.k)(this.$site.pages,t,this.$route.path):(e=this.$page,s=this.sidebarItems,v(e,s,1));var e,s},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:s="",docsBranch:i="master",docsRepo:n=t}=this.$site.themeConfig;return n&&e&&this.$page.relativePath?this.createEditLink(t,n,s,i,this.$page.relativePath):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,s,n,a){if(/bitbucket.org/.test(t)){return(i.i.test(e)?e:t).replace(i.a,"")+"/src"+`/${n}/`+(s?s.replace(i.a,"")+"/":"")+a+`?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`}return(i.i.test(e)?e:`https://github.com/${e}`).replace(i.a,"")+"/edit"+`/${n}/`+(s?s.replace(i.a,"")+"/":"")+a}}},k=(s(46),Object(a.a)(_,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"page"},[t._t("top"),t._v(" "),s("div",{staticClass:"main-page"},[s("Content"),t._v(" "),s("footer",{staticClass:"page-edit"},[t.editLink?s("div",{staticClass:"edit-link"},[s("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),s("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?s("div",{staticClass:"last-updated"},[s("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?s("div",{staticClass:"page-nav"},[s("p",{staticClass:"inner"},[t.prev?s("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?s("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?s("span",{staticClass:"next"},[t.next?s("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)],2)},[],!1,null,null,null).exports),x={name:"Sidebar",components:{SidebarLinks:s(37).default,NavLinks:f},props:["items"],data:()=>({isMobileFixed:!1,scrollTop:null,isMobile:!1}),mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1}),this.handleLinksWrapWidth(),window.addEventListener("resize",this.handleLinksWrapWidth,!1)},beforeDestroy(){window.removeEventListener("resize",this.handleLinksWrapWidth)},methods:{handleLinksWrapWidth(){document.documentElement.clientWidth<719?this.isMobile=!0:this.isMobile=!1},handleScroll(t){this.scrollTop=document.getElementsByClassName("adverse")[0].getBoundingClientRect().top,this.scrollTop<70?(this.$emit("listen"),this.isMobileFixed=!0):(this.$emit("destorylisten"),this.isMobileFixed=!1)}}},$=(s(49),Object(a.a)(x,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"sidebar",on:{scroll:t.handleScroll}},[t.isMobile?s("Logo"):t._e(),t._v(" "),t.isMobile?s("Content",{staticStyle:{padding:"0"},attrs:{"slot-key":"author"}}):t._e(),t._v(" "),t.isMobile?s("Content",{class:!!t.isMobileFixed&&"fixed",staticStyle:{height:"180px",padding:"0"},attrs:{"slot-key":"adverse"}}):t._e(),t._v(" "),s("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t._t("info"),t._v(" "),s("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports);let C=0,L=0,S=null;var w={components:{Home:l,Page:k,Sidebar:$,Navbar:b},data:()=>({isSidebarOpen:!1,isScroll:!1,isFixed:!1,isMobile:!1,disScroll:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isScroll||this.isMobileClient()||(this.isSidebarOpen=!1)}),this.handleLinksWrapWidth(),window.addEventListener("resize",this.handleLinksWrapWidth,!1),window.addEventListener("scroll",this.handleScroll,!1)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleLinksWrapWidth)},methods:{isMobileClient(){const t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPod"];let s=!1;for(var i=0;i<e.length;i++)if(t.indexOf(e[i])>0){s=!0;break}return this.isMobile&&(s=!0),s},handleLinksWrapWidth(){this.isScroll=!1;document.documentElement.clientWidth<719?this.isMobile=!0:this.isMobile=!1},handleScroll(){this.isMobile&&!this.disScroll&&(this.isScroll=!0,clearTimeout(S),S=setTimeout(this.isScrollEnd,200),C=document.documentElement.scrollTop||document.body.scrollTop)},isScrollEnd(){(L=document.documentElement.scrollTop||document.body.scrollTop)==C&&(this.isScroll=!1)},toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY},this.touchStart.x<236.16&&this.isSidebarOpen?this.disScroll=!0:this.disScroll=!1},onTouchEnd(t){this.isScroll=!1;const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=60?this.toggleSidebar(!0):this.toggleSidebar(!1))},Fixed(){this.isFixed=!0},NoFixed(){this.isFixed=!1}}},y=(s(50),s(51),Object(a.a)(w,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),s("Sidebar",{class:t.isScroll?"opacity":"normal",attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar,listen:t.Fixed,destorylisten:t.NoFixed}},[t.isMobile?t._e():t._t("sidebar-top",[s("Logo")],{slot:"top"}),t._v(" "),t.isMobile?t._e():t._t("silder-info",[s("div",{staticClass:"info-container"},[s("Content",{attrs:{"slot-key":"author"}}),t._v(" "),s("Content",{class:!!t.isFixed&&"fixed",attrs:{"slot-key":"adverse"}})],1)],{slot:"info"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?s("Home"):s("Page",{class:t.disScroll?"dis-scroll":"",attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,"76b5edba",null));e.default=y.exports}]]);