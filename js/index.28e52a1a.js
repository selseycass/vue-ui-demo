(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)s=o[u],i[s]&&m.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={index:0},r=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-0b38759e":"4c39b689"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-ui-demo/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"0250":function(t,e,n){},"1a0f":function(t,e,n){"use strict";var a=n("21ef"),i=n.n(a);i.a},"21ef":function(t,e,n){},2814:function(t,e,n){},"429a":function(t,e,n){"use strict";var a=n("e1b6"),i=n.n(a);i.a},4383:function(t,e,n){},"4d1c":function(t,e,n){"use strict";var a=n("5b12"),i=n.n(a);i.a},"56e0":function(t,e,n){"use strict";var a=n("0250"),i=n.n(a);i.a},"5b12":function(t,e,n){},"74f2":function(t,e,n){},"80d7":function(t,e,n){},"854f":function(t,e,n){},"86be":function(t,e,n){"use strict";var a=n("854f"),i=n.n(a);i.a},"96ac":function(t,e,n){"use strict";var a=n("2814"),i=n.n(a);i.a},"9efc":function(t,e,n){},b07c:function(t,e,n){"use strict";var a=n("80d7"),i=n.n(a);i.a},c31f:function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.init?n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"docs-page"},[n("main-header"),n("main-side-nav"),n("main-content")],1)]):n("mainSkeleton")],1)},r=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-header"},[n("span",[t._v("ZM UI")])])}],l={},c=l,u=(n("429a"),n("2877")),d=Object(u["a"])(c,s,o,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-nav"},[n("div",{staticStyle:{"padding-top":"10px"}},[n("ul",t._l(t.navList,function(e,a){return n("li",{key:a,class:{cur:t.$route.path===e.path},on:{click:function(n){return t.$router.push({name:e.name})}}},[t._v("\n                "+t._s(e.navName)+"\n            ")])}),0)])])},h=[],f=n("ee95"),v={data(){return{navList:f}}},g=v,b=(n("56e0"),Object(u["a"])(g,p,h,!1,null,null,null)),_=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-content"},[n("router-view")],1)},x=[],$=(n("caae"),{}),C=Object(u["a"])($,y,x,!1,null,null,null),S=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-skeleton"},[n("zm-skeleton",{attrs:{height:"50px"}}),n("div",[n("div",{staticClass:"skeleton-sidebar"},[n("zm-skeleton",{attrs:{height:"600px"}})],1),n("div",{staticClass:"skeleton-content"},[n("div",{staticClass:"section",staticStyle:{width:"100px","margin-bottom":"20px"}},[n("zm-skeleton",{attrs:{height:"28px"}})],1),n("div",{staticClass:"section",staticStyle:{width:"200px","margin-bottom":"20px"}},[n("zm-skeleton",{attrs:{height:"28px"}})],1),n("div",{staticClass:"section",staticStyle:{width:"400px","margin-bottom":"20px"}},[n("zm-skeleton",{attrs:{height:"28px"}})],1),n("div",{staticClass:"section",staticStyle:{width:"600px","margin-bottom":"20px"}},[n("zm-skeleton",{attrs:{height:"28px"}})],1),n("div",{staticClass:"section",staticStyle:{width:"300px","margin-bottom":"20px"}},[n("zm-skeleton",{attrs:{height:"28px"}})],1)])])],1)},w=[],z={data(){return{}}},j=z,O=(n("b07c"),Object(u["a"])(j,k,w,!1,null,null,null)),Z=O.exports,N={name:"app",components:{mainHeader:m,mainSideNav:_,mainContent:S,mainSkeleton:Z},data(){return{init:!1}},mounted(){setTimeout(()=>{this.init=!0},250)}},E=N,F=(n("4d1c"),Object(u["a"])(E,i,r,!1,null,null,null)),B=F.exports,P=n("8c4f");a["a"].use(P["a"]);let R=f,V=t=>{t.forEach(t=>{t.component=e=>n.e("chunk-0b38759e").then((()=>e(n("62cd")(`./${t.name}.md`))).bind(null,n)).catch(n.oe)})};V(R);var M=new P["a"]({routes:R}),T=n("2f62");a["a"].use(T["a"]);var L=new T["a"].Store({state:{},mutations:{},actions:{}}),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zm-skeleton",style:{backgroundColor:t.bgColor,paddingBottom:t.paddingBottom,width:t.width}})},I=[],q={name:"ZmSkeleton",props:{proportion:{type:Number,default:1},bgColor:{type:String,default:"#b4bccc"},width:{type:String,default:"100%"},height:{type:[String,Boolean],default:!1}},data(){return{paddingBottom:this.height||`${100*this.proportion}%`}}},H=q,A=(n("86be"),Object(u["a"])(H,D,I,!1,null,null,null)),J=A.exports;J.install=function(t){t.component(J.name,J)};var U=J,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zm-test",style:{backgroundColor:t.bgColor}})},K=[],Q={name:"ZmTest",props:{bgColor:{type:String,default:"#ccc"}}},W=Q,X=(n("1a0f"),Object(u["a"])(W,G,K,!1,null,null,null)),Y=X.exports;Y.install=function(t){t.component(Y.name,Y)};var tt=Y,et={name:"ZmRow",componentName:"ZmRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style(){const t={};return this.gutter&&(t.marginLeft=`-${this.gutter/2}px`,t.marginRight=t.marginLeft),t}},render(t){return t(this.tag,{class:["zm-row","start"!==this.justify?`is-justify-${this.justify}`:"","top"!==this.align?`is-align-${this.align}`:"",{"zm-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)},install:function(t){t.component(et.name,et)}},nt=et,at={name:"ZmCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},offset:Number,pull:Number,push:Number,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object]},computed:{gutter(){let t=this.$parent;while(t&&"ZmRow"!==t.$options.componentName)t=t.$parent;return t?t.gutter:0}},render(t){let e=[],n={};return this.gutter&&(n.paddingLeft=this.gutter/2+"px",n.paddingRight=n.paddingLeft),["span","offset","pull","push"].forEach(t=>{(this[t]||0===this[t])&&e.push("span"!==t?`zm-col-${t}-${this[t]}`:`zm-col-${this[t]}`)}),t(this.tag,{class:["zm-col",e],style:n},this.$slots.default)},install:function(t){t.component(at.name,at)}},it=at,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"zm-container",class:{"is-vertical":t.isVertical}},[t._t("default")],2)},st=[],ot={name:"ZmContainer",componentName:"ZmContainer",props:{direction:String},computed:{isVertical(){return"vertical"===this.direction||"horizontal"!==this.direction&&(!(!this.$slots||!this.$slots.default)&&this.$slots.default.some(t=>{const e=t.componentOptions&&t.componentOptions.tag;return"zm-header"===e||"zm-footer"===e}))}}},lt=ot,ct=Object(u["a"])(lt,rt,st,!1,null,null,null),ut=ct.exports;ut.install=function(t){t.component(ut.name,ut)};var dt=ut,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"zm-header",style:{height:t.height}},[t._t("default")],2)},pt=[],ht={name:"ZmHeader",componentName:"ZmHeader",props:{height:{type:String,default:"60px"}}},ft=ht,vt=Object(u["a"])(ft,mt,pt,!1,null,null,null),gt=vt.exports;gt.install=function(t){t.component(gt.name,gt)};var bt=gt,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"zm-footer",style:{height:t.height}},[t._t("default")],2)},yt=[],xt={name:"ZmFooter",componentName:"ZmFooter",props:{height:{type:String,default:"60px"}}},$t=xt,Ct=Object(u["a"])($t,_t,yt,!1,null,null,null),St=Ct.exports;St.install=function(t){t.component(St.name,St)};var kt=St,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"zm-main"},[t._t("default")],2)},zt=[],jt={name:"ZmMain",componentName:"ZmMain"},Ot=jt,Zt=Object(u["a"])(Ot,wt,zt,!1,null,null,null),Nt=Zt.exports;Nt.install=function(t){t.component(Nt.name,Nt)};var Et=Nt,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"zm-aside",style:{width:t.width}},[t._t("default")],2)},Bt=[],Pt={name:"ZmAside",componentName:"ZmAside",props:{width:{type:String,default:"300px"}}},Rt=Pt,Vt=Object(u["a"])(Rt,Ft,Bt,!1,null,null,null),Mt=Vt.exports;Mt.install=function(t){t.component(Mt.name,Mt)};var Tt=Mt,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",t._b({class:["zm-link",t.type?"zm-link--"+t.type:"",t.disabled&&"is-disabled",t.underline&&!t.disabled&&"is-underline"],attrs:{href:t.disabled?null:t.href},on:{click:t.handleClick}},"a",t.$attrs,!1),[t.$slots.default?n("span",{staticClass:"zm-link--inner"},[t._t("default")],2):t._e()])},Dt=[],It={name:"ZmLink",props:{type:{type:String,default:"default"},underline:{type:Boolean,default:!0},disabled:Boolean,href:String,icon:String},methods:{handleClick(t){this.disabled||this.href||this.$emit("click",t)}}},qt=It,Ht=Object(u["a"])(qt,Lt,Dt,!1,null,null,null),At=Ht.exports;At.install=function(t){t.component(At.name,At)};var Jt=At,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zm-page-header"},[n("div",{staticClass:"zm-page-header__left",on:{click:function(e){return t.$emit("back")}}},[n("div",{staticClass:"zm-page-header__title"},[t._t("title",[t._v(t._s(t.title))])],2)]),n("div",{staticClass:"zm-page-header__content"},[t._t("content",[t._v(t._s(t.content))])],2)])},Gt=[],Kt={name:"ZmPageHeader",props:{title:{type:String,default(){return"返回"}},content:String}},Qt=Kt,Wt=Object(u["a"])(Qt,Ut,Gt,!1,null,null,null),Xt=Wt.exports;Xt.install=function(t){t.component(Xt.name,Xt)};var Yt,te,ee=Xt,ne={name:"ZmDivider",functional:!0,props:{direction:{type:String,default:"horizontal",validator(t){return-1!==["horizontal","vertical"].indexOf(t)}},contentPosition:{type:String,default:"center",validator(t){return-1!==["left","center","right"].indexOf(t)}}},render(t,e){const n=e.slots(),{direction:a,contentPosition:i}=e.props;let r=n.default&&"vertical"!==a?t("div",{class:["zm-divider__text",`is-${i}`]},[n.default]):null;return t("div",{class:["zm-divider",`zm-divider--${a}`]},[r])},install:function(t){t.component(ne.name,ne)}},ae=ne,ie={name:"ZmTag",props:{text:String,closable:Boolean,type:String,color:String,size:String,hit:Boolean,effect:{type:String,default:"light",validator(t){return-1!==["light","dark","plain"].indexOf(t)}}},methods:{handleClose(t){t.stopPropagation(),this.$emit("close",t)},handleClick(t){this.$emit("click",t)}},computed:{tagSize(){return this.size||(this.$ELEMENT||{}).size}},render(t){const{type:e,tagSize:n,hit:a,effect:i}=this,r=["zm-tag",e?`zm-tag--${e}`:"",n?`zm-tag--${n}`:"",i?`zm-tag--${i}`:"",a&&"is-hit"];let s=this.closable?t("i",{on:{click:this.handleClose}},["x"]):"";return t("span",{class:r,style:{backgroundColor:this.color},on:{click:this.handleClick}},[this.$slots.default,s])}},re=ie,se=Object(u["a"])(re,Yt,te,!1,null,null,null),oe=se.exports;oe.install=function(t){t.component(oe.name,oe)};var le=oe,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zm-badge"},[t._t("default"),n("transition",{attrs:{name:"zm-zoom-in-center"}},[n("sup",{directives:[{name:"show",rawName:"v-show",value:!t.hidden&&(t.content||0===t.content||t.isDot),expression:"!hidden && (content || content === 0 || isDot)"}],staticClass:"zm-badge__content",class:["zm-badge__content--"+t.type,{"is-fixed":t.$slots.default,"is-dot":t.isDot}],domProps:{textContent:t._s(t.content)}})])],2)},ue=[],de={name:"ZmBadge",props:{value:[String,Number],max:Number,isDot:Boolean,hidden:Boolean,type:{type:String,validator(t){return["primary","success","warning","info","danger"].indexOf(t)>-1}}},computed:{content(){if(this.isDot)return;const t=this.value,e=this.max;return"number"===typeof t&&"number"===typeof e&&e<t?`${e}+`:t}}},me=de,pe=Object(u["a"])(me,ce,ue,!1,null,null,null),he=pe.exports;he.install=function(t){t.component(he.name,he)};var fe=he,ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:""}},[t._t("default")],2)},ge=[],be={name:"ZmForm",provide(){return{form:this}},props:{model:{type:Object},rules:{type:Object}},data(){return{fields:[]}},created(){this.$on("on-form-item-add",t=>{t&&this.fields.push(t)}),this.$on("on-form-item-remove",t=>{t.prop&&this.fields.splice(this.fields.indexOf(t),1)})},methods:{resetFields(){this.fields.forEach(t=>{t.resetField()})},validate(t){return new Promise(e=>{let n=!0,a=0;this.fields.forEach(i=>{i.validate("",i=>{i&&(n=!1),++a===this.fields.length&&(e(n),"function"===typeof t&&t(n))})})})}}},_e=be,ye=Object(u["a"])(_e,ve,ge,!1,null,null,null),xe=ye.exports;xe.install=function(t){t.component(xe.name,xe)};var $e=xe,Ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("label",{class:{"zm-form-item-label-required":t.isRequired}},[t._v(t._s(t.label))]):t._e(),n("div",[t._t("default"),"error"===t.validateState?n("div",{staticClass:"zm-form-item-message"},[t._v(t._s(t.validateMessage))]):t._e()],2)])},Se=[];function ke(t,e,n){this.$children.forEach(a=>{const i=a.$options.name;i===t?a.$emit.apply(a,[e].concat(n)):ke.apply(a,[t,e].concat([n]))})}var we={methods:{dispatch(t,e,n){let a=this.$parent||this.$root,i=a.$options.name;while(a&&(!i||i!==t))a=a.$parent,a&&(i=a.$options.name);a&&a.$emit.apply(a,[e].concat(n))},broadcast(t,e,n){ke.call(this,t,e,n)}}},ze=n("2a95"),je={name:"ZmFormItem",mixins:[we],inject:["form"],props:{label:{type:String,default:""},prop:{type:String}},data(){return{isRequired:!1,validateState:"",validateMessage:""}},computed:{fieldValue(){return this.form.model[this.prop]}},mounted(){this.prop&&(this.dispatch("ZmForm","on-form-item-add",this),this.initialValue=this.fieldValue,this.setRules())},methods:{setRules(){let t=this.getRules();t.length&&t.every(t=>{this.isRequired=t.required}),this.$on("on-form-blur",this.onFieldBlur),this.$on("on-form-change",this.onFieldChange)},getRules(){let t=this.form.rules;return t=t?t[this.prop]:[],[].concat(t||[])},resetField(){this.validateState="",this.validateMessage="",this.form.model[this.prop]=this.initialValue},getFilteredRule(t){const e=this.getRules();return e.filter(e=>!e.trigger||-1!==e.trigger.indexOf(t))},validate(t,e=function(){}){let n=this.getFilteredRule(t);if(!n||0===n.length)return!0;this.validateState="validating";let a={};a[this.prop]=n;const i=new ze["a"](a);let r={};r[this.prop]=this.fieldValue,i.validate(r,{firstFields:!0},t=>{this.validateState=t?"error":"success",this.validateMessage=t?t[0].message:"",e(this.validateMessage)})},onFieldBlur(){this.validate("blur")},onFieldChange(){this.validate("change")}},beforeDestroy(){this.dispatch("ZmForm","on-form-item-remove",this)}},Oe=je,Ze=Object(u["a"])(Oe,Ce,Se,!1,null,null,null),Ne=Ze.exports;Ne.install=function(t){t.component(Ne.name,Ne)};var Ee=Ne,Fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"text"},domProps:{value:t.currentValue},on:{input:t.handleInput,blur:t.handleBlur}})},Be=[],Pe={name:"ZmInput",mixins:[we],props:{value:{type:String,default:""}},data(){return{currentValue:this.value}},watch:{value(t){this.currentValue=t}},methods:{handleInput(t){const e=t.target.value;this.currentValue=e,this.$emit("input",e),this.dispatch("ZmFormItem","on-form-change",e)},handleBlur(){this.dispatch("ZmFormItem","on-form-blur",this.currentValue)}}},Re=Pe,Ve=Object(u["a"])(Re,Fe,Be,!1,null,null,null),Me=Ve.exports;Me.install=function(t){t.component(Me.name,Me)};var Te=Me;const Le=[U,tt,nt,it,dt,bt,kt,Et,Tt,Jt,ee,ae,le,fe,$e,Ee,Te],De=function(t){De.installed||Le.map(e=>t.component(e.name,e))};"undefined"!==typeof window.Vue&&window.Vue&&De(window.Vue);var Ie={install:De,ZmSkeleton:U,ZmTest:tt,ZmRow:nt,ZmCol:it,ZmContainer:dt,ZmHeader:bt,ZmFooter:kt,ZmMain:Et,ZmAside:Tt,ZmLink:Jt,ZmPageHeader:ee,ZmDivider:ae,ZmTag:le,ZmBadge:fe},qe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-demo-wrapper"},[n("div",{staticClass:"demo-container",style:{height:t.isExpand?"auto":"0"}},[n("div",[n("div",{staticClass:"docs-demo docs-demo--expand"},[n("div",{staticClass:"highlight-wrapper"},[t._t("highlight")],2)])])]),n("span",{staticClass:"docs-trans docs-demo__triangle",on:{click:t.toggle}},[t._v(t._s(t.isExpand?"隐藏代码":"显示代码"))])])},He=[],Ae={data(){return{isExpand:!1}},methods:{toggle(){this.isExpand=!this.isExpand}}},Je=Ae,Ue=(n("96ac"),Object(u["a"])(Je,qe,He,!1,null,null,null)),Ge=Ue.exports;n("9efc"),n("4383");a["a"].component("demo-block",Ge),a["a"].use(Ie),a["a"].config.productionTip=!1,new a["a"]({router:M,store:L,render:t=>t(B)}).$mount("#app")},caae:function(t,e,n){"use strict";var a=n("74f2"),i=n.n(a);i.a},e1b6:function(t,e,n){},ee95:function(t){t.exports=[{name:"home",navName:"项目搭建（一）",path:"/"},{name:"project",navName:"项目搭建（二）",path:"/project"},{name:"test",navName:"测试",path:"/test"},{name:"form",navName:"form校验表单",path:"/form"},{name:"layout",navName:"布局",path:"/layout"},{name:"skeleton",navName:"骨架屏",path:"/skeleton"},{name:"container",navName:"container",path:"/container"},{name:"link",navName:"link",path:"/link"},{name:"page-header",navName:"page-header",path:"/page-header"},{name:"divider",navName:"divider",path:"/divider"},{name:"tag",navName:"tag",path:"/tag"},{name:"badge",navName:"badge",path:"/badge"}]}});
//# sourceMappingURL=index.28e52a1a.js.map