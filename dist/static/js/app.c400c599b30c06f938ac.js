webpackJsonp([1],[,,,,,,,,,,function(t,e,n){function o(t){n(47)}var i=n(5)(n(16),n(50),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(45)}var i=n(5)(n(17),n(48),o,"data-v-0d062118",null);t.exports=i.exports},function(t,e,n){function o(t){n(46)}var i=n(5)(n(18),n(49),o,"data-v-238f7f7e",null);t.exports=i.exports},,,function(t,e,n){"use strict";function o(t,e,n){var o=new Date;o.setDate(o.getDate()+n);var i="expires="+o.toUTCString();document.cookie=t+"="+e+";"+i+";path=/"}function i(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?e[2]:null}function s(t){var e=new Date;e.setTime(e.getTime()-1);var n=i(t);null!=n&&(document.cookie=t+"="+n+";expires="+e.toGMTString())}Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),r=n(13),l=n(10),c=n.n(l),u=n(11),p=n.n(u),g=n(12),m=n.n(g);a.a.use(r.a);var h=new r.a({mode:"history",routes:[{path:"/login",name:"Login",component:p.a},{path:"/main",name:"Main",component:m.a},{path:"/*",redirect:"/login"}]});a.a.config.productionTip=!1,a.a.prototype.setCookie=o,a.a.prototype.getCookie=i,a.a.prototype.delCookie=s,new a.a({el:"#app",router:h,template:"<App></App>",components:{App:c.a},created:function(){this.checkLogin()},methods:{checkLogin:function(){this.getCookie("session")?this.$router.push("/main"):this.$router.push("/login")}},watch:{$route:"checkLogin"}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{iserr:!0,islogin:!1,message:"Hello Vue.js!!"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=n.n(o),s={h2:"majaja3",ac:"Account3",pw:"Password3",submit:"Push3",mistake:"mistook",nullin:"something is null"},a={h2:"Loginsystem",ac:"Account",pw:"Password",submit:"Login",mistake:"Mistake"},r={h2:"內容管理系統",ac:"帳號",pw:"密碼",submit:"登入",mistake:"錯誤!"},l={h2:"Jp統",ac:"Jp號",pw:"Jp碼",submit:"Jp入",mistake:"Jp錯誤"};e.default={name:"Login",data:function(){return{l:s,account:"",password:"",loginmsg:"",loginiserr:!1,selected:"EN",languagelist:[{text:"English",tt:"EN"},{text:"繁體中文 (Traditional Chinese)",tt:"TC"},{text:"Francais (French)",tt:"FRA"},{text:"Deutsch (German)",tt:"GEM"},{text:"日本語 (Japanese)",tt:"JPN"},{text:"български (Bulgarian)",tt:"BG"},{text:"Češka (Czech)",tt:"CZH"},{text:"Danske (Danish)",tt:"DAN"},{text:"Nederlands (Dutch)",tt:"NLD"},{text:"Ελληνικός (Greek)",tt:"EL"},{text:"עברית (Hebrew)",tt:"HEB"},{text:"Magyar (Hungarian)",tt:"HUN"},{text:"Italiano (Italian)",tt:"ITA"},{text:"Bahasa Indonesia (Indonesian)",tt:"ID"},{text:"Norske (Norwegian)",tt:"NO"},{text:"Lietuvos (Lithuanian)",tt:"LT"},{text:"فارسی (Persian)",tt:"PRS"},{text:"Polski (Polish)",tt:"POL"},{text:"Português (Portuguese)",tt:"PYU"},{text:"Limba română (Romanian)",tt:"RO"},{text:"Русский язык (Russian)",tt:"RUS"},{text:"Српски језик (Serbian)",tt:"SRL"},{text:"简体中文 (Simplified Chinese)",tt:"SC"},{text:"Slovenščina (Slovenian)",tt:"Sl"},{text:"Slovenčina (Slovakian)",tt:"SK"},{text:"Español (Spanish)",tt:"SPN"},{text:"ภาษาไทย (Thai)",tt:"TAI"},{text:"Türkçe (Turkish)",tt:"TR"},{text:"Svenska (Swedish)",tt:"SV"},{text:"Suomi (Finnish)",tt:"FI"},{text:"اللغة العربية (Arabic)",tt:"ARB"}]}},beforeUpdate:function(){console.log("beforeUpdate")},methods:{onChange:function(){switch(console.log("onChange"),this.selected){case"EN":for(var t=0;t<i()(s).length;t++)s[i()(s)[t]]=a[i()(s)[t]];break;case"TC":for(var e=0;e<i()(s).length;e++)s[i()(s)[e]]=r[i()(s)[e]];break;case"JPN":for(var n=0;n<i()(s).length;n++)s[i()(s)[n]]=l[i()(s)[n]]}},closebtn:function(){console.log("closebtn"),this.$router.go(-1)},onSubmit:function(){console.log("onSubmit"),""!==this.account&&""!==this.password?this.tologin():(this.loginiserr=!0,this.loginmsg=this.l.nullin)},tologin:function(){console.log("tologin"),this.setCookie("session",this.account,10),this.loginiserr=!1,this.loginmsg="loading...";var t=this;setTimeout(function(){t.$router.push("/main"),console.info("time up !!!")},3e3)}},watch:{account:function(t){this.account=t.toString().replace(/[^a-zA-Z0-9]/g,"")},selected:function(t){console.log(t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=n.n(o),s={h2:"majaja3",ac:"Account3",pw:"Password3",submit:"Push3",mistake:"mistook",nullin:"something is null"},a={h2:"Loginsystem",ac:"Account",pw:"Password",submit:"Login",mistake:"Mistake"},r={h2:"內容管理系統",ac:"帳號",pw:"密碼",submit:"登入",mistake:"錯誤!"},l={h2:"Jp統",ac:"Jp號",pw:"Jp碼",submit:"Jp入",mistake:"Jp錯誤"};e.default={name:"Login",data:function(){return{l:s,account:"",password:"",loginmsg:"",loginiserr:!1,selected:"EN",languagelist:[{text:"English",tt:"EN"},{text:"繁體中文 (Traditional Chinese)",tt:"TC"},{text:"Francais (French)",tt:"FRA"},{text:"Deutsch (German)",tt:"GEM"},{text:"日本語 (Japanese)",tt:"JPN"},{text:"български (Bulgarian)",tt:"BG"},{text:"Češka (Czech)",tt:"CZH"},{text:"Danske (Danish)",tt:"DAN"},{text:"Nederlands (Dutch)",tt:"NLD"},{text:"Ελληνικός (Greek)",tt:"EL"},{text:"עברית (Hebrew)",tt:"HEB"},{text:"Magyar (Hungarian)",tt:"HUN"},{text:"Italiano (Italian)",tt:"ITA"},{text:"Bahasa Indonesia (Indonesian)",tt:"ID"},{text:"Norske (Norwegian)",tt:"NO"},{text:"Lietuvos (Lithuanian)",tt:"LT"},{text:"فارسی (Persian)",tt:"PRS"},{text:"Polski (Polish)",tt:"POL"},{text:"Português (Portuguese)",tt:"PYU"},{text:"Limba română (Romanian)",tt:"RO"},{text:"Русский язык (Russian)",tt:"RUS"},{text:"Српски језик (Serbian)",tt:"SRL"},{text:"简体中文 (Simplified Chinese)",tt:"SC"},{text:"Slovenščina (Slovenian)",tt:"Sl"},{text:"Slovenčina (Slovakian)",tt:"SK"},{text:"Español (Spanish)",tt:"SPN"},{text:"ภาษาไทย (Thai)",tt:"TAI"},{text:"Türkçe (Turkish)",tt:"TR"},{text:"Svenska (Swedish)",tt:"SV"},{text:"Suomi (Finnish)",tt:"FI"},{text:"اللغة العربية (Arabic)",tt:"ARB"}]}},beforeUpdate:function(){console.log("beforeUpdate")},methods:{onChange:function(){switch(console.log("onChange"),this.selected){case"EN":for(var t=0;t<i()(s).length;t++)s[i()(s)[t]]=a[i()(s)[t]];break;case"TC":for(var e=0;e<i()(s).length;e++)s[i()(s)[e]]=r[i()(s)[e]];break;case"JPN":for(var n=0;n<i()(s).length;n++)s[i()(s)[n]]=l[i()(s)[n]]}},closebtn:function(){console.log("closebtn"),this.$router.go(-1)},onSubmit:function(){console.log("onSubmit"),""!==this.account&&""!==this.password?this.tologin():(this.loginiserr=!0,this.loginmsg=this.l.nullin)},tologin:function(){console.log("tologin"),this.setCookie("session",this.account,10),this.loginiserr=!1,this.loginmsg="loading...";var t=this;setTimeout(function(){t.$router.push("/hello"),console.info("time up !!!")},3e3)},delcookie:function(){console.log("delcookie"),this.delCookie("session"),this.$router.push("/")}},watch:{account:function(t){this.account=t.toString().replace(/[^a-zA-Z0-9]/g,"")},selected:function(t){console.log(t)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loginbox",attrs:{id:"loginbox"}},[n("div",{staticClass:"closebtn top-right",on:{click:t.closebtn}}),t._v(" "),n("h2",{staticClass:"ml-left"},[t._v(" "+t._s(t.l.h2)+" ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form-control",attrs:{placeholder:t.l.ac,maxlength:"12",type:"text"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:t.l.pw,maxlength:"12",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"btn",on:{click:t.onSubmit}},[t._v(" "+t._s(t.l.submit)+" ")]),n("br"),t._v(" "),n("p",{class:{info:!t.loginiserr,error:t.loginiserr}},[t._v(" "+t._s(t.loginmsg)+" ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"bottom-right",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]},t.onChange]}},t._l(t.languagelist,function(e){return n("option",{domProps:{value:e.tt}},[t._v(" "+t._s(e.text)+" ")])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainpage",attrs:{id:"mainpage"}},[n("div",{staticClass:"closebtn top-right",on:{click:t.delcookie}}),t._v(" "),n("h2",{staticClass:"ml-left"},[t._v(" "+t._s(t.l.h2)+" ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form-control",attrs:{placeholder:t.l.ac,maxlength:"12",type:"text"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:t.l.pw,maxlength:"12",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"btn",on:{click:t.onSubmit}},[t._v(" "+t._s(t.l.submit)+" ")]),n("br"),t._v(" "),n("p",{class:{info:!t.loginiserr,error:t.loginiserr}},[t._v(" "+t._s(t.loginmsg)+" ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"bottom-right",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]},t.onChange]}},t._l(t.languagelist,function(e){return n("option",{domProps:{value:e.tt}},[t._v(" "+t._s(e.text)+" ")])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},staticRenderFns:[]}}],[15]);
//# sourceMappingURL=app.c400c599b30c06f938ac.js.map