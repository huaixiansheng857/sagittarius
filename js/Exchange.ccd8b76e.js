(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Exchange"],{"00d9":function(e,t,a){"use strict";var i=a("bf75"),n=a.n(i);t["default"]=n.a},"2c70":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Exchange"},[e._m(0),a("div",{staticClass:"main"},[a("ul",{staticClass:"tabs"},e._l(e.tabs,(function(t,i){return a("li",{class:{active:e.active==t.name},on:{click:function(a){e.active=t.name}}},[e._v(e._s(e.$t("tabs["+i+"]")))])})),0),"purchase"==e.active?a("div",{staticClass:"purchase"},[a("div",{staticClass:"content"},[a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.exchange[0].val,expression:"exchange[0].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0",onchange:e.price()},domProps:{value:e.exchange[0].val},on:{input:function(t){t.target.composing||e.$set(e.exchange[0],"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"max",on:{click:e.maxFun}},[e._v("MAX")]),a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.exchange[0].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.exchange[0].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.exchange[0].balance))])]),a("div",{staticClass:"switch"},[a("span",{class:["switchBtn",{isSwitch:e.isSwitch}],on:{click:e.switchFun}},[a("svg-icon",{attrs:{"icon-class":"switch"}})],1)]),a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.exchange[1].val,expression:"exchange[1].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0"},domProps:{value:e.exchange[1].val},on:{input:function(t){t.target.composing||e.$set(e.exchange[1],"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.exchange[1].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.exchange[1].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.exchange[1].balance))])]),a("div",{staticClass:"font13 margin_t10 color2"},[e._v(" "+e._s(e.priceT)+" ")]),a("button",{staticClass:"Confirm",on:{click:e.Confirm}},[e._v(e._s(e.hasApprove?e.$t("exchange"):e.$t("approve")))])]),a("div",{staticClass:"ruleMain"},[e._m(1),a("p",{staticClass:"font18"},[e._v(e._s(e.$t("explain")))]),a("div",{staticClass:"text font14",domProps:{innerHTML:e._s(e.$t("purchaseRule"))}})])]):e._e(),"addLiquidity"==e.active?a("div",{staticClass:"addLiquidity"},[a("div",{staticClass:"content"},[a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addLiquidityInfo[0].val,expression:"addLiquidityInfo[0].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0",input:e.priceLiq1()},domProps:{value:e.addLiquidityInfo[0].val},on:{input:function(t){t.target.composing||e.$set(e.addLiquidityInfo[0],"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.addLiquidityInfo[0].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.addLiquidityInfo[0].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.addLiquidityInfo[0].balance))])]),a("div",{staticClass:"switch"},[a("span",{class:["switchBtn",{isSwitch:e.isSwitch}],on:{click:e.addSwitchFun}},[a("svg-icon",{attrs:{"icon-class":"jia"}})],1)]),a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addLiquidityInfo[1].val,expression:"addLiquidityInfo[1].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0",input:e.priceLiq2()},domProps:{value:e.addLiquidityInfo[1].val},on:{input:function(t){t.target.composing||e.$set(e.addLiquidityInfo[1],"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.addLiquidityInfo[1].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.addLiquidityInfo[1].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.addLiquidityInfo[1].balance))])]),a("button",{staticClass:"Confirm",on:{click:e.addLiquidityFun}},[e._v(e._s(e.addLiquidityInfo[0].hasApprove?e.addLiquidityInfo[1].hasApprove?e.$t("tabs[1]"):e.$t("approve")+" SGRv2":e.$t("approve")+" USDT"))])]),a("div",{staticClass:"ruleMain"},[e._m(2),a("p",{staticClass:"font18"},[e._v(e._s(e.$t("explain")))]),a("div",{staticClass:"text font14",domProps:{innerHTML:e._s(e.$t("addRule"))}})])]):e._e(),"removeLiquidity"==e.active?a("div",{staticClass:"removeLiquidity"},[a("div",{staticClass:"content"},[a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.removeLiquidity.val,expression:"removeLiquidity.val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0",onchange:e.priceLiq3()},domProps:{value:e.removeLiquidity.val},on:{input:function(t){t.target.composing||e.$set(e.removeLiquidity,"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[e._m(3),a("span",{staticClass:"currency"},[e._v(e._s(e.removeLiquidity.symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.removeLiquidity.balance))])]),a("div",{staticClass:"font16 margin_tb10 color2 text_c"},[e._v(" "+e._s(e.$t("addLiquidityText"))+" "),a("span",{staticClass:"color5"},[a("span",{staticClass:"font18"},[e._v(e._s(e.removeLiquidity.getUsdt))]),e._v(" USDT + "),a("span",{staticClass:"font18"},[e._v(e._s(e.removeLiquidity.getSgr))]),e._v(" SGRv2 ")])]),a("button",{staticClass:"Confirm",on:{click:e.removeFun}},[e._v(e._s(e.hasApproveLiqRemove?e.$t("tabs[2]"):e.$t("approve")))])]),a("div",{staticClass:"ruleMain"},[e._m(4),a("p",{staticClass:"font18"},[e._v(e._s(e.$t("explain")))]),a("div",{staticClass:"text font14",domProps:{innerHTML:e._s(e.$t("removeRule"))}})])]):e._e()])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"decorate mobileHid"},[i("img",{attrs:{src:a("d323"),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"biaoqian"},[i("img",{attrs:{src:a("68b8"),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"biaoqian"},[i("img",{attrs:{src:a("68b8"),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"icon"},[i("img",{attrs:{src:a("a16f"),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"biaoqian"},[i("img",{attrs:{src:a("68b8"),alt:""}})])}],r=a("3835"),s=a("1da1"),c=a("5530"),o=(a("b680"),a("99af"),a("a9e3"),a("96cf"),a("c94d")),u=a("4128"),d=a.n(u),l={name:"",data:function(){return{active:"purchase",tabs:[{name:"purchase"},{name:"addLiquidity"},{name:"removeLiquidity"}],exchange:[Object(c["a"])(Object(c["a"])({},o["I"]),{},{val:1,balance:0,icon:a("728d")}),Object(c["a"])(Object(c["a"])({},o["D"]),{},{val:0,balance:0,icon:a("5922")})],isSwitch:!1,priceT:"",hasApprove:!1,hasApproveLiqAdd:!1,hasApproveLiqRemove:!1,liqPrice:null,totalLiquidBalance:"",addLiquidityInfo:[Object(c["a"])(Object(c["a"])({},o["I"]),{},{val:1,max:null,hasApprove:!1,balance:0,icon:a("728d")}),Object(c["a"])(Object(c["a"])({},o["D"]),{},{val:0,max:null,hasApprove:!1,balance:0,icon:a("5922")})],removeLiquidity:{val:0,balance:null,symbol:"USDT-SGRv2",getUsdt:"0",getSgr:"0",allUsdt:"0",allSgr:"0"}}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["f"])(e.exchange[0].address,e.exchange[0].decimals);case 2:return e.hasApprove=t.sent,t.next=5,Object(o["p"])();case 5:return e.exchange[0].balance=t.sent,t.next=8,Object(o["o"])();case 8:return e.exchange[1].balance=t.sent,t.next=11,e.initAddInfo();case 11:return t.next=13,e.initRemoveInfo();case 13:case"end":return t.stop()}}),t)})))()},methods:{switchFun:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSwitch=!e.isSwitch,e.exchange.reverse(),t.next=4,Object(o["f"])(e.exchange[0].address,e.exchange[0].decimals);case 4:e.hasApprove=t.sent;case 5:case"end":return t.stop()}}),t)})))()},initAddInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["y"])();case 2:return e.liqPrice=t.sent,t.next=5,Object(o["p"])();case 5:return e.addLiquidityInfo[0].balance=t.sent,t.next=8,Object(o["o"])();case 8:return e.addLiquidityInfo[1].balance=t.sent,e.addLiquidityInfo[1].max="1",e.addLiquidityInfo[0].max=e.liqPrice,t.next=13,Object(o["g"])();case 13:a=t.sent,e.addLiquidityInfo[0].hasApprove=a.usdt,e.addLiquidityInfo[1].hasApprove=a.sgr;case 16:case"end":return t.stop()}}),t)})))()},initRemoveInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["x"])();case 2:return e.removeLiquidity.balance=t.sent,t.next=5,Object(o["h"])();case 5:return e.hasApproveLiqRemove=t.sent,t.next=8,Object(o["A"])();case 8:return a=t.sent,e.removeLiquidity.allUsdt=a.usdt,e.removeLiquidity.allSgr=a.sgr,t.next=13,a.total;case 13:e.totalLiquidBalance=t.sent,console.info(e.totalLiquidBalance);case 15:case"end":return t.stop()}}),t)})))()},addSwitchFun:function(){},Confirm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.hasApprove){t.next=11;break}if(a=Object(r["a"])(e.exchange,2),i=a[0],a[1],"USDT"!=i.symbol){t.next=7;break}return t.next=5,Object(o["e"])(new d.a(i.val).mul(d.a.pow(10,o["I"].decimals)).toFixed());case 5:t.next=9;break;case 7:return t.next=9,Object(o["C"])(new d.a(i.val).mul(d.a.pow(10,o["D"].decimals)).toFixed());case 9:t.next=16;break;case 11:return t.next=13,Object(o["a"])(e.exchange[0].address,e.exchange[0].decimals);case 13:return t.next=15,Object(o["f"])(e.exchange[0].address,e.exchange[0].decimals);case 15:e.hasApprove=t.sent;case 16:case"end":return t.stop()}}),t)})))()},maxFun:function(){var e=Object(r["a"])(this.exchange,2),t=e[0];e[1];this.exchange[0].val=t.balance,this.price(t.balance)},price:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,c,u,l,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=Object(r["a"])(t.exchange,2),n=i[0],s=i[1],c=e||n.val,!c){a.next=15;break}return u=new d.a(10).pow(n.decimals),!isNaN(+c)&&+c>0&&(u=u.mul(c).toFixed()),a.next=7,Object(o["n"])(n.address,u);case 7:l=a.sent,l=new d.a(l).div(new d.a(10).pow(s.decimals)),t.exchange[1].val=l.toFixed(4),v=new d.a(l),!isNaN(+c)&&+c>0&&(v=v.div(c)),t.priceT="1 ".concat(n.symbol," ≈ ").concat(v.toFixed(2)," ").concat(s.symbol),a.next=17;break;case 15:t.priceT="",t.exchange[1].val="";case 17:case"end":return a.stop()}}),a)})))()},priceLiq1:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.info("priceLiq1"),e.liqPrice){t.next=4;break}return t.next=4,e.initAddInfo();case 4:Number(e.addLiquidityInfo[0].val)<=0?e.addLiquidityInfo[1].val="0":e.addLiquidityInfo[1].val=new d.a(e.addLiquidityInfo[1].max).mul(e.addLiquidityInfo[0].val).div(e.addLiquidityInfo[0].max).toFixed(4);case 5:case"end":return t.stop()}}),t)})))()},priceLiq2:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return");case 6:t.liqPrice=e.sent;case 7:new d.a(t.addLiquidityInfo[1].val).cmp(t.addLiquidityInfo[1].max)>0?(t.addLiquidityInfo[1].val=t.addLiquidityInfo[1].max,t.addLiquidityInfo[0].val=t.addLiquidityInfo[0].max):t.addLiquidityInfo[0].val=new d.a(t.addLiquidityInfo[0].max).mul(t.addLiquidityInfo[1].val).div(t.addLiquidityInfo[1].max).toFixed();case 8:case"end":return e.stop()}}),e)})))()},priceLiq3:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(e.removeLiquidity.val||0)<=0)){t.next=4;break}return e.removeLiquidity.getUsdt="0",e.removeLiquidity.getSgr="0",t.abrupt("return");case 4:if(!e.removeLiquidity.balance){t.next=7;break}return t.next=7,e.initRemoveInfo();case 7:new d.a(e.removeLiquidity.val).cmp(e.totalLiquidBalance)>0?(e.removeLiquidity.getUsdt=e.removeLiquidity.allUsdt,e.removeLiquidity.getSgr=e.removeLiquidity.allSgr):(a=new d.a(e.removeLiquidity.val).div(e.totalLiquidBalance),e.removeLiquidity.getUsdt=new d.a(e.removeLiquidity.allUsdt).mul(a).toFixed(4),e.removeLiquidity.getSgr=new d.a(e.removeLiquidity.allSgr).mul(a).toFixed(4));case 8:case"end":return t.stop()}}),t)})))()},addLiquidityFun:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.addLiquidityInfo[0].hasApprove){t.next=7;break}return t.next=3,Object(o["b"])(o["I"].address);case 3:return t.next=5,e.initAddInfo();case 5:t.next=22;break;case 7:if(e.addLiquidityInfo[1].hasApprove){t.next=14;break}return t.next=10,Object(o["b"])(o["D"].address);case 10:return t.next=12,e.initAddInfo();case 12:t.next=22;break;case 14:if(!(Number(e.addLiquidityInfo[1].val)>0&&Number(e.addLiquidityInfo[0].val)>0)){t.next=22;break}if("USDT"!=e.addLiquidityInfo[0].symbol){t.next=20;break}return t.next=18,Object(o["w"])(new d.a(e.addLiquidityInfo[0].val).mul(d.a.pow(10,o["I"].decimals)).toFixed(0),new d.a(e.addLiquidityInfo[1].val).mul(d.a.pow(10,o["D"].decimals)).toFixed(0));case 18:t.next=22;break;case 20:return t.next=22,Object(o["w"])(new d.a(e.addLiquidityInfo[1].val).mul(d.a.pow(10,o["I"].decimals)).toFixed(0),new d.a(e.addLiquidityInfo[0].val).mul(d.a.pow(10,o["D"].decimals)).toFixed(0));case 22:case"end":return t.stop()}}),t)})))()},removeFun:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasApproveLiqRemove){t.next=7;break}return t.next=3,Object(o["c"])();case 3:return t.next=5,e.initRemoveInfo();case 5:t.next=12;break;case 7:if(!(Number(e.removeLiquidity.val)<=0)){t.next=9;break}return t.abrupt("return");case 9:return new d.a(e.removeLiquidity.val).cmp(e.removeLiquidity.balance)>0&&(e.removeLiquidity.val=e.removeLiquidity.balance),t.next=12,Object(o["z"])(new d.a(e.removeLiquidity.val).mul(d.a.pow(10,18)).toFixed(0));case 12:case"end":return t.stop()}}),t)})))()}}},v=l,p=(a("9bd2"),a("2877")),f=a("00d9"),m=Object(p["a"])(v,i,n,!1,null,"e6113fca",null);"function"===typeof f["default"]&&Object(f["default"])(m);t["default"]=m.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var i=a("1d80"),n=a("5899"),r="["+n+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),o=function(e){return function(t){var a=String(i(t));return 1&e&&(a=a.replace(s,"")),2&e&&(a=a.replace(c,"")),a}};e.exports={start:o(1),end:o(2),trim:o(3)}},5922:function(e,t){e.exports="data:image/png;base64,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"},"68b8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA5CAMAAACcaPJfAAAAt1BMVEUAAAAAqqor/9VJ/9s54+M5/+Mz5uZG6NFA6tU88OFG6NxA6uND59tB795F6+JD7N1C7N5E7d9D6eBD7N9C7N9D7N5E7N5E7N5D691E699D6t5F6t9E6t1E7N9E6t1E7N9D695E691E691D695E7N5E695E6t5D695E6t5E695E7N9E691E695E695E7N5E699D6t1D691D695D695E695E6t5D695E691E695E7N9E695D695E694Wx/IMAAAAPHRSTlMAAwYHCQkKCwwRFiQqLzQ1Njg5UGBrbHt+f4WGh4eIiI2Pl5m4wMfK0tbW2trb4Obr8vL29/j6+/v8/f5kVY1FAAAAiElEQVRIx+3KRRbCQBBAwY8Fh+AW3N2Dzf3PxYqHhAyzp2tdHMxUQJmpyZQpU6ZMmf81d4ZzXw3XryZzkASyk59zVQCAUOuinUcnxoM908xhihdW++Qz10U+ZBbfptuJ4xF1XM8cp/nKXr7PTSmAD6t5fs5bL4FGfq6UKkN3O8qhF2lM+0HM3QEihNW285Zp7QAAAABJRU5ErkJggg=="},"728d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAMAAACP+FljAAAByFBMVEUAAAAAAP9VVapVqv+AgP9tkv9xjuNiietwj+9rhuRthudtkvNsietxjuxtieRsi+hxj+ltiulukeprjetrjudtjeltjepujOtujelvjOptjOlwjOlvjeptjepujOtvjuxujepujOpvjOtvjepvjupwjetujepvjupujetvjOlujOlwjupvjepujOpujepujepujepvjOlujelujetvjepvjOpvjepujepvjOlvjepujOpvjOpvjepvjepujepvjelvjelvjetujOpvjepvjepujetwjepvjepujOlvjetvjepujepvjepvjepwjupxjupxj+pyj+pykOp1kut2kut2k+t6luuCnOyDne2Ene2Fn+2HoO2IoO2Kou2Kou6Ko+6Lo+6MpO6Npe6Ope6Opu6Ppu6Qp+6Tqu+Uqu+Vq++ar/CcsfCesvGhtPGkt/GluPKnufKouvKqvPKrvPKrvfOsvvOvwPOywvOywvS2xfS3xvS6yPW7yfW9y/W/zfbBzvbK1ffM1vfN2PfP2ffP2fjR2/jT3PjV3fjV3vjW3vnW3/nY4Pne5frf5frl6/vv8vzz9f319/33+P73+f74+v79/f7+/v////8L9203AAAATXRSTlMAAQMDBAcJDRATFRUaGxwhIiMlJisvMTM6PFJSV2JkamtvcXd6gISHiYyOkJ+nrK63xsfJy8zMztHS2trb3d7f4eHn6evu8PL3/P3+/tHsMmsAAAFXSURBVDjLY2CAAEEZJWUkoCjNy4AEmGQtfdGBt6EUXF7A2BcrMOCCyIs4++IA1jwgeU5HX5zAjBWoQMcXD1BlYBDyxKfAnYNBzRcvkGMwgrIqWlFABFRYl8EVymqZjgLioMLmDF74FdgxwCxrnAwEU4BSUyeBGDAFDnAF/gFAEAtU0OEHZAT6YigAg2iggjYUEYSC4MzCirpmoIL++prS3Eh0BQltTQXJYb4xYBMCI7Mre8oDURRM7AsHq5s2fXo7iBFUNr0ERUFUw4S+huqinLSklMy88vquib3FfuiODM8qq20Bu6EqPzWUDF+AQTxQQSepCrzxK7BncMOvwILBBL8CPQZNZG4iUEE3igIFBlEfJG5IRnp6HLK8BzcDgz6+JKkFTPZ8LrjlrdhBOUfCHZe8kzAk74nZYJc35YflXjYVJ0xpW3kWpAKAWVJRQxsJqMuLM0JkAMZdQShVrJwuAAAAAElFTkSuQmCC"},"99af":function(e,t,a){"use strict";var i=a("23e7"),n=a("d039"),r=a("e8b5"),s=a("861d"),c=a("7b0b"),o=a("50c4"),u=a("8418"),d=a("65f0"),l=a("1dde"),v=a("b622"),p=a("2d00"),f=v("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",x=p>=51||!n((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),A=l("concat"),g=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},y=!x||!A;i({target:"Array",proto:!0,forced:y},{concat:function(e){var t,a,i,n,r,s=c(this),l=d(s,0),v=0;for(t=-1,i=arguments.length;t<i;t++)if(r=-1===t?s:arguments[t],g(r)){if(n=o(r.length),v+n>m)throw TypeError(h);for(a=0;a<n;a++,v++)a in r&&u(l,v,r[a])}else{if(v>=m)throw TypeError(h);u(l,v++,r)}return l.length=v,l}})},"9bd2":function(e,t,a){"use strict";a("e039")},a16f:function(e,t,a){e.exports=a.p+"img/iconS.1218a90b.png"},a9e3:function(e,t,a){"use strict";var i=a("83ab"),n=a("da84"),r=a("94ca"),s=a("6eeb"),c=a("5135"),o=a("c6b6"),u=a("7156"),d=a("c04e"),l=a("d039"),v=a("7c73"),p=a("241c").f,f=a("06cf").f,m=a("9bf2").f,h=a("58a8").trim,x="Number",A=n[x],g=A.prototype,y=o(v(g))==x,b=function(e){var t,a,i,n,r,s,c,o,u=d(e,!1);if("string"==typeof u&&u.length>2)if(u=h(u),t=u.charCodeAt(0),43===t||45===t){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(r=u.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>n)return NaN;return parseInt(r,i)}return+u};if(r(x,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var q,L=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof L&&(y?l((function(){g.valueOf.call(a)})):o(a)!=x)?u(new A(b(t)),a,L):b(t)},j=i?p(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;j.length>w;w++)c(A,q=j[w])&&!c(L,q)&&m(L,q,f(A,q));L.prototype=g,g.constructor=L,s(n,x,L)}},bf75:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"exchange":"确认兑换","approve":"授权","tabs":["买/卖","添加流动性","移出流动性"],"purchaseRule":"新用户首次购买，需要通过本界面购买以绑定推荐人关系","addRule":"使用此页面管理流动性，将免除11%手续费扣除","removeRule":"您可在此页面移除流动性","addLiquidityText":"您可获得：","explain":"说明"},"en-US":{"exchange":"Confirm","approve":"Approve","tabs":["Buy/Sell","Add Liquidity","Remove Liquidity"],"purchaseRule":"When new users purchase for the first time, they need to purchase through this interface to bind the recommender relationship","addRule":"If you use this page to manage liquidity, you will be exempted from 11% commission deduction","removeRule":"You can remove liquidity from this page","addLiquidityText":"You can get：","explain":"explain"}}'),delete e.options._Ctor}},e039:function(e,t,a){}}]);