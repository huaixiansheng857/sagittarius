(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Mining"],{"2b91":function(t,e,a){"use strict";var i=a("3a6f"),n=a.n(i);e["default"]=n.a},"39c6":function(t,e,a){},"3a6f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-CN":{"Total":"总抵押：","MiningTitle":["流动性挖矿","质押挖矿"],"tableTitle":["产品名称","期限","APY","存款","余额"],"PledgePeriod":"质押期：","pledge":"质押","extract":"提取","reward":"您已获得奖励 {get} ；可领取奖励 {rec}"},"en-US":null}'),delete t.options._Ctor}},4680:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Mining"},[a("div",{staticClass:"main"},[a("div",{staticClass:"Total"},[a("div",[t._v(" "+t._s(t.$t("Total"))+" "),a("span",{staticClass:"color5"},[t._v(t._s(t.Total))])])]),a("ul",{staticClass:"tabs"},t._l(t.tabs,(function(e,i){return a("li",{class:{active:t.active==e.name},on:{click:function(a){t.active=e.name}}},[a("span",{staticClass:"icon"},[a("svg-icon",{attrs:{"icon-class":e.icon}})],1),t._v(" "+t._s(t.$t("MiningTitle["+i+"]"))+" ")])})),0),a("div",{staticClass:"content"},[a("ul",{staticClass:"tableTitle"},[a("li",[t._v(t._s(t.$t("tableTitle[0]")))]),a("li",[t._v(t._s(t.$t("tableTitle[1]")))]),a("li",[t._v(t._s(t.$t("tableTitle[2]")))]),a("li",[t._v(t._s(t.$t("tableTitle[3]")))]),a("li",[t._v(t._s(t.$t("tableTitle[4]")))])]),a("ul",{staticClass:"tabData"},t._l(t.product,(function(e){return a("li",{class:["tabDataItem",{active:t.operation.add==e.add}],on:{click:function(a){return t.itemCilck(e)}}},[a("div",{staticClass:"cont_t"},[a("div",{staticClass:"nameMain"},[a("span",{class:t.operation.add==e.add?"Expanded":"NotExpanded"}),a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.icon,alt:""}})]),t._v(" "+t._s(e.name)+" ")]),a("div",[t._v(t._s(e.term))]),a("div",[t._v(t._s(e.APY)+"%")]),a("div",[t._v(t._s(e.deposit))]),a("div",[t._v(t._s(e.balance))])]),t.operation.add==e.add?a("div",{staticClass:"cont_b"},[a("div",[t._v(t._s(t.$t("PledgePeriod"))+"2020.1.1-2020.1.8")]),a("div",{staticClass:"pledgeMain"},[a("div",{staticClass:"operation"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.operation.pledgeVal,expression:"operation.pledgeVal"}],staticClass:"operInput",attrs:{type:"text"},domProps:{value:t.operation.pledgeVal},on:{input:function(e){e.target.composing||t.$set(t.operation,"pledgeVal",e.target.value)}}}),a("br"),a("button",{staticClass:"active",on:{click:t.pledgeFun}},[t._v(" "+t._s(t.$t("pledge"))+" ")])]),a("div",{staticClass:"operation"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.operation.extractVal,expression:"operation.extractVal"}],staticClass:"operInput",attrs:{type:"text"},domProps:{value:t.operation.extractVal},on:{input:function(e){e.target.composing||t.$set(t.operation,"extractVal",e.target.value)}}}),a("br"),a("button",{on:{click:t.extractFun}},[t._v(" "+t._s(t.$t("extract"))+" ")])])]),a("p",{staticClass:"margin_t30"},[t._v(" "+t._s(t.$t("reward",{get:t.operation.get,rec:t.operation.rec}))+" ")])]):t._e()])})),0)])])])},n=[],l=(a("4de4"),{name:"",data:function(){return{Total:1e4,active:"flow",tabs:[{name:"flow",icon:"liudong"},{name:"pledge",icon:"zhiya"}],productList:[{add:222,name:"USDT-SGR",term:"活期",APY:12,deposit:"70k",balance:1e3,icon:a("a16f"),type:1},{add:111,name:"USDT",term:1,APY:12,deposit:"70k",balance:1e3,icon:a("728d"),type:2}],operation:{pledgeVal:null,extractVal:null,get:1e3,rec:100,add:null}}},computed:{product:function(){var t=this.active,e=this.productList,a="flow"==t?1:2;return e.filter((function(t){return t.type==a}))}},created:function(){},methods:{itemCilck:function(t){this.operation={pledgeVal:null,extractVal:null,get:1e3,rec:100,add:t.add}},pledgeFun:function(){console.log(this.operation)},extractFun:function(){console.log(this.operation)}}}),o=l,s=(a("bcbb"),a("2877")),p=a("2b91"),c=Object(s["a"])(o,i,n,!1,null,"655bc65c",null);"function"===typeof p["default"]&&Object(p["default"])(c);e["default"]=c.exports},"728d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAMAAACP+FljAAAByFBMVEUAAAAAAP9VVapVqv+AgP9tkv9xjuNiietwj+9rhuRthudtkvNsietxjuxtieRsi+hxj+ltiulukeprjetrjudtjeltjepujOtujelvjOptjOlwjOlvjeptjepujOtvjuxujepujOpvjOtvjepvjupwjetujepvjupujetvjOlujOlwjupvjepujOpujepujepujepvjOlujelujetvjepvjOpvjepujepvjOlvjepujOpvjOpvjepvjepujepvjelvjelvjetujOpvjepvjepujetwjepvjepujOlvjetvjepujepvjepvjepwjupxjupxj+pyj+pykOp1kut2kut2k+t6luuCnOyDne2Ene2Fn+2HoO2IoO2Kou2Kou6Ko+6Lo+6MpO6Npe6Ope6Opu6Ppu6Qp+6Tqu+Uqu+Vq++ar/CcsfCesvGhtPGkt/GluPKnufKouvKqvPKrvPKrvfOsvvOvwPOywvOywvS2xfS3xvS6yPW7yfW9y/W/zfbBzvbK1ffM1vfN2PfP2ffP2fjR2/jT3PjV3fjV3vjW3vnW3/nY4Pne5frf5frl6/vv8vzz9f319/33+P73+f74+v79/f7+/v////8L9203AAAATXRSTlMAAQMDBAcJDRATFRUaGxwhIiMlJisvMTM6PFJSV2JkamtvcXd6gISHiYyOkJ+nrK63xsfJy8zMztHS2trb3d7f4eHn6evu8PL3/P3+/tHsMmsAAAFXSURBVDjLY2CAAEEZJWUkoCjNy4AEmGQtfdGBt6EUXF7A2BcrMOCCyIs4++IA1jwgeU5HX5zAjBWoQMcXD1BlYBDyxKfAnYNBzRcvkGMwgrIqWlFABFRYl8EVymqZjgLioMLmDF74FdgxwCxrnAwEU4BSUyeBGDAFDnAF/gFAEAtU0OEHZAT6YigAg2iggjYUEYSC4MzCirpmoIL++prS3Eh0BQltTQXJYb4xYBMCI7Mre8oDURRM7AsHq5s2fXo7iBFUNr0ERUFUw4S+huqinLSklMy88vquib3FfuiODM8qq20Bu6EqPzWUDF+AQTxQQSepCrzxK7BncMOvwILBBL8CPQZNZG4iUEE3igIFBlEfJG5IRnp6HLK8BzcDgz6+JKkFTPZ8LrjlrdhBOUfCHZe8kzAk74nZYJc35YflXjYVJ0xpW3kWpAKAWVJRQxsJqMuLM0JkAMZdQShVrJwuAAAAAElFTkSuQmCC"},a16f:function(t,e,a){t.exports=a.p+"img/iconS.1218a90b.png"},bcbb:function(t,e,a){"use strict";a("39c6")}}]);