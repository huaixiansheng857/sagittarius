(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Exchange"],{"00d9":function(e,t,a){"use strict";var n=a("bf75"),i=a.n(n);t["default"]=i.a},"15e4":function(e,t,a){"use strict";a("ce96")},"2c70":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Exchange"},[e._m(0),a("div",{staticClass:"main"},[a("span",{staticClass:"pancake"},[a("a",{attrs:{target:"_blank",href:"https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x56231D55391bd6382bc2a0761a644ea188B007cc"}},[e._v(e._s(e.$t("pancake")))])]),a("ul",{staticClass:"tabs"},e._l(e.tabs,(function(t,n){return a("li",{class:{active:e.active==t.name},on:{click:function(a){e.active=t.name}}},[e._v(e._s(e.$t("tabs["+n+"]")))])})),0),"buyAndAdd"==e.active?a("div",{staticClass:"buyAndAdd"},[a("div",{staticClass:"content"},[a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.buyAndAdd.val,expression:"buyAndAdd.val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0"},domProps:{value:e.buyAndAdd.val},on:{input:function(t){t.target.composing||e.$set(e.buyAndAdd,"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"max",on:{click:function(t){e.buyAndAdd.val=e.buyAndAdd.balance}}},[e._v("MAX")]),e._m(1),a("span",{staticClass:"currency"},[e._v(e._s(e.buyAndAdd.symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.buyAndAdd.balance))])]),a("p",[e.hasApproveBuyAndAddSgr&&e.hasApproveBuyAndAddUsdt?e._e():a("button",{class:["ConfirmUsdt",{disabledBTN:e.hasApproveBuyAndAddUsdt}],attrs:{disabled:e.hasApproveBuyAndAddUsdt},on:{click:e.buyAndAddFunUsdt}},[e._v(e._s(e.$t("approve")+"USDT"))]),e.hasApproveBuyAndAddSgr&&e.hasApproveBuyAndAddUsdt?e._e():a("button",{class:["ConfirmSgr",{disabledBTN:e.hasApproveBuyAndAddSgr}],attrs:{disabled:e.hasApproveBuyAndAddSgr},on:{click:e.buyAndAddFunSgr}},[e._v(e._s(e.$t("approve")+"SGRv2"))]),e.hasApproveBuyAndAddSgr&&e.hasApproveBuyAndAddUsdt?a("button",{staticClass:"Confirm",on:{click:e.buyAndAddFun}},[e._v(e._s(e.$t("tabs[0]")))]):e._e()])]),a("div",{staticClass:"ruleMain"},[e._m(2),a("p",{staticClass:"font18"},[e._v(e._s(e.$t("explain")))]),a("div",{staticClass:"text font14",domProps:{innerHTML:e._s(e.$t("buyAndAddRule"))}})])]):e._e(),"purchase"==e.active?a("div",{staticClass:"purchase"},[a("div",{staticClass:"content"},[a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.exchange[0].val,expression:"exchange[0].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0"},domProps:{value:e.exchange[0].val},on:{input:[function(t){t.target.composing||e.$set(e.exchange[0],"val",t.target.value)},function(t){return e.price()}]}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"max",on:{click:e.maxFun}},[e._v("MAX")]),a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.exchange[0].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.exchange[0].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.exchange[0].balance))])]),a("div",{staticClass:"switch"},[a("span",{class:["switchBtn",{isSwitch:e.isSwitch}],on:{click:e.switchFun}},[a("svg-icon",{attrs:{"icon-class":"switch"}})],1)]),a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.exchange[1].val,expression:"exchange[1].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0"},domProps:{value:e.exchange[1].val},on:{input:function(t){t.target.composing||e.$set(e.exchange[1],"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.exchange[1].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.exchange[1].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.exchange[1].balance))])]),a("div",{staticClass:"font13 margin_t10 color2"},[e._v(" "+e._s(e.priceT)+" ")]),a("button",{staticClass:"Confirm",on:{click:e.Confirm}},[e._v(e._s(e.hasApprove?e.$t("exchange"):e.$t("approve")))])]),a("div",{staticClass:"ruleMain"},[e._m(3),a("p",{staticClass:"font18"},[e._v(e._s(e.$t("explain")))]),a("div",{staticClass:"text font14",domProps:{innerHTML:e._s(e.$t("purchaseRule"))}})])]):e._e(),"addLiquidity"==e.active?a("div",{staticClass:"addLiquidity"},[a("div",{staticClass:"content"},[a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addLiquidityInfo[0].val,expression:"addLiquidityInfo[0].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0"},domProps:{value:e.addLiquidityInfo[0].val},on:{input:[function(t){t.target.composing||e.$set(e.addLiquidityInfo[0],"val",t.target.value)},function(t){return e.priceLiq1()}]}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"max",on:{click:function(t){return e.addLipMax(1)}}},[e._v("MAX")]),a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.addLiquidityInfo[0].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.addLiquidityInfo[0].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.addLiquidityInfo[0].balance))])]),a("div",{staticClass:"switch"},[a("span",{class:["switchBtn",{isSwitch:e.isSwitch}],on:{click:e.addSwitchFun}},[a("svg-icon",{attrs:{"icon-class":"jia"}})],1)]),a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addLiquidityInfo[1].val,expression:"addLiquidityInfo[1].val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0"},domProps:{value:e.addLiquidityInfo[1].val},on:{input:[function(t){t.target.composing||e.$set(e.addLiquidityInfo[1],"val",t.target.value)},function(t){return e.priceLiq2()}]}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"max",on:{click:function(t){return e.addLipMax(2)}}},[e._v("MAX")]),a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.addLiquidityInfo[1].icon,alt:""}})]),a("span",{staticClass:"currency"},[e._v(e._s(e.addLiquidityInfo[1].symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.addLiquidityInfo[1].balance))])]),a("button",{staticClass:"Confirm",on:{click:e.addLiquidityFun}},[e._v(e._s(e.addLiquidityInfo[0].hasApprove?e.addLiquidityInfo[1].hasApprove?e.$t("tabs[2]"):e.$t("approve")+" SGRv2":e.$t("approve")+" USDT"))])]),a("div",{staticClass:"ruleMain"},[e._m(4),a("p",{staticClass:"font18"},[e._v(e._s(e.$t("explain")))]),a("div",{staticClass:"text font14",domProps:{innerHTML:e._s(e.$t("addRule"))}})])]):e._e(),"removeLiquidity"==e.active?a("div",{staticClass:"removeLiquidity"},[a("div",{staticClass:"content"},[a("div",{staticClass:"TransactionParty"},[a("div",{staticClass:"inputWrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.removeLiquidity.val,expression:"removeLiquidity.val"}],staticClass:"TransactionInput",attrs:{type:"text",placeholder:"0",onchange:e.priceLiq3()},domProps:{value:e.removeLiquidity.val},on:{input:function(t){t.target.composing||e.$set(e.removeLiquidity,"val",t.target.value)}}})]),a("div",{staticClass:"currencyWrap"},[a("span",{staticClass:"max",on:{click:function(t){e.removeLiquidity.val=e.removeLiquidity.balance}}},[e._v("MAX")]),e._m(5),a("span",{staticClass:"currency"},[e._v(e._s(e.removeLiquidity.symbol))])])]),a("p",{staticClass:"margin_t5 color7"},[e._v(" Balance: "),a("span",[e._v(e._s(e.removeLiquidity.balance))])]),a("div",{staticClass:"font16 margin_tb10 color2 text_c"},[e._v(" "+e._s(e.$t("addLiquidityText"))+" "),a("span",{staticClass:"color5"},[a("span",{staticClass:"font18"},[e._v(e._s(e.removeLiquidity.getUsdt))]),e._v(" USDT + "),a("span",{staticClass:"font18"},[e._v(e._s(e.removeLiquidity.getSgr))]),e._v(" SGRv2 ")])]),a("button",{staticClass:"Confirm",on:{click:e.removeFun}},[e._v(e._s(e.hasApproveLiqRemove?e.$t("tabs[3]"):e.$t("approve")))])]),a("div",{staticClass:"ruleMain"},[e._m(6),a("p",{staticClass:"font18"},[e._v(e._s(e.$t("explain")))]),a("div",{staticClass:"text font14",domProps:{innerHTML:e._s(e.$t("removeRule"))}})])]):e._e()])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"decorate mobileHid"},[n("img",{attrs:{src:a("d323"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon"},[n("img",{attrs:{src:a("728d"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"biaoqian"},[n("img",{attrs:{src:a("68b8"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"biaoqian"},[n("img",{attrs:{src:a("68b8"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"biaoqian"},[n("img",{attrs:{src:a("68b8"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon"},[n("img",{attrs:{src:a("a16f"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"biaoqian"},[n("img",{attrs:{src:a("68b8"),alt:""}})])}],r=a("3835"),s=a("1da1"),c=a("5530"),d=(a("b680"),a("99af"),a("a9e3"),a("96cf"),a("c94d")),o=a("4128"),u=a.n(o),l={name:"",data:function(){return{active:"buyAndAdd",tabs:[{name:"buyAndAdd"},{name:"purchase"},{name:"addLiquidity"},{name:"removeLiquidity"}],exchange:[Object(c["a"])(Object(c["a"])({},d["R"]),{},{val:1,balance:0,icon:a("728d")}),Object(c["a"])(Object(c["a"])({},d["M"]),{},{val:0,balance:0,icon:a("5922")})],isSwitch:!1,priceT:"",hasApprove:!1,hasApproveLiqAdd:!1,hasApproveLiqRemove:!1,hasApproveBuyAndAddSgr:!1,hasApproveBuyAndAddUsdt:!1,liqPrice:null,totalLiquidBalance:"",liqInfo:{},addLiquidityInfo:[Object(c["a"])(Object(c["a"])({},d["R"]),{},{val:1,max:null,hasApprove:!1,balance:0,icon:a("728d")}),Object(c["a"])(Object(c["a"])({},d["M"]),{},{val:0,max:null,hasApprove:!1,balance:0,icon:a("5922")})],removeLiquidity:{val:0,balance:null,symbol:"USDT-SGRv2",getUsdt:"0",getSgr:"0",allUsdt:"0",allSgr:"0"},buyAndAdd:{val:0,balance:null,symbol:"USDT",getUsdt:"0",getSgr:"0",allUsdt:"0",allSgr:"0"}}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["I"])();case 2:return e.liqInfo=t.sent,e.liqPrice=e.liqInfo.price,t.next=6,Object(d["j"])(e.exchange[0].address,e.exchange[0].decimals);case 6:return e.hasApprove=t.sent,t.next=9,Object(d["z"])();case 9:return a=t.sent,e.exchange[0].balance=a,e.buyAndAdd.balance=a,t.next=14,Object(d["y"])();case 14:return e.exchange[1].balance=t.sent,t.next=17,e.initAddInfo();case 17:return t.next=19,e.initRemoveInfo();case 19:return t.next=21,e.initBuyAndAddInfo();case 21:case"end":return t.stop()}}),t)})))()},methods:{switchFun:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isSwitch=!e.isSwitch,e.exchange.reverse(),t.next=4,Object(d["j"])(e.exchange[0].address,e.exchange[0].decimals);case 4:e.hasApprove=t.sent;case 5:case"end":return t.stop()}}),t)})))()},initAddInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["z"])();case 2:return e.addLiquidityInfo[0].balance=t.sent,t.next=5,Object(d["y"])();case 5:return e.addLiquidityInfo[1].balance=t.sent,a=new u.a(e.addLiquidityInfo[0].balance).div(e.liqPrice),new u.a(e.addLiquidityInfo[1].balance).cmp(a)>0?(e.addLiquidityInfo[0].max=e.addLiquidityInfo[0].balance,e.addLiquidityInfo[1].max=a.toFixed(4)):(e.addLiquidityInfo[1].max=e.addLiquidityInfo[1].balance,e.addLiquidityInfo[0].max=new u.a(e.addLiquidityInfo[1].balance).mul(e.liqPrice).toFixed(4)),t.next=10,Object(d["k"])();case 10:n=t.sent,e.addLiquidityInfo[0].hasApprove=n.usdt,e.addLiquidityInfo[1].hasApprove=n.sgr;case 13:case"end":return t.stop()}}),t)})))()},initRemoveInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["H"])();case 2:return e.removeLiquidity.balance=t.sent,t.next=5,Object(d["l"])();case 5:e.hasApproveLiqRemove=t.sent,e.removeLiquidity.allUsdt=e.liqInfo.usdt,e.removeLiquidity.allSgr=e.liqInfo.sgr,e.totalLiquidBalance=e.liqInfo.total,console.info(e.totalLiquidBalance);case 10:case"end":return t.stop()}}),t)})))()},initBuyAndAddInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["o"])(d["R"].address,d["R"].decimals);case 2:return e.hasApproveBuyAndAddUsdt=t.sent,t.next=5,Object(d["o"])(d["M"].address,d["M"].decimals);case 5:e.hasApproveBuyAndAddSgr=t.sent;case 6:case"end":return t.stop()}}),t)})))()},addSwitchFun:function(){},Confirm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.hasApprove){t.next=11;break}if(a=Object(r["a"])(e.exchange,2),n=a[0],a[1],"USDT"!=n.symbol){t.next=7;break}return t.next=5,Object(d["g"])(new u.a(n.val).mul(u.a.pow(10,d["R"].decimals)).toFixed());case 5:t.next=9;break;case 7:return t.next=9,Object(d["L"])(new u.a(n.val).mul(u.a.pow(10,d["M"].decimals)).toFixed());case 9:t.next=16;break;case 11:return t.next=13,Object(d["b"])(e.exchange[0].address,e.exchange[0].decimals);case 13:return t.next=15,Object(d["j"])(e.exchange[0].address,e.exchange[0].decimals);case 15:e.hasApprove=t.sent;case 16:case"end":return t.stop()}}),t)})))()},maxFun:function(){var e=Object(r["a"])(this.exchange,2),t=e[0];e[1];this.exchange[0].val=t.balance,this.price(t.balance)},price:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i,s,c,o,l,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=Object(r["a"])(t.exchange,2),i=n[0],s=n[1],c=e||i.val,!c){a.next=15;break}return o=new u.a(10).pow(i.decimals),!isNaN(+c)&&+c>0&&(o=o.mul(c).toFixed()),a.next=7,Object(d["x"])(i.address,o);case 7:l=a.sent,l=new u.a(l).div(new u.a(10).pow(s.decimals)),t.exchange[1].val=l.toFixed(4),v=new u.a(l),!isNaN(+c)&&+c>0&&(v=v.div(c)),t.priceT="1 ".concat(i.symbol," ≈ ").concat(v.toFixed(2)," ").concat(s.symbol),a.next=17;break;case 15:t.priceT="",t.exchange[1].val="";case 17:case"end":return a.stop()}}),a)})))()},price1:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n,i,s,c,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=Object(r["a"])(e.exchange,2),n=a[0],i=a[1],s=i.val,!s){t.next=15;break}return c=new u.a(10).pow(n.decimals),!isNaN(+s)&&+s>0&&(c=c.mul(s).toFixed()),t.next=7,Object(d["x"])(n.address,c);case 7:o=t.sent,o=new u.a(o).div(new u.a(10).pow(i.decimals)),e.exchange[1].val=o.toFixed(4),l=new u.a(o),!isNaN(+s)&&+s>0&&(l=l.div(s)),e.priceT="1 ".concat(n.symbol," ≈ ").concat(l.toFixed(2)," ").concat(i.symbol),t.next=17;break;case 15:e.priceT="",e.exchange[1].val="";case 17:case"end":return t.stop()}}),t)})))()},priceLiq1:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.info("priceLiq1"),e.liqPrice){t.next=4;break}return t.next=4,e.initAddInfo();case 4:Number(e.addLiquidityInfo[0].val)<=0?e.addLiquidityInfo[1].val="0":new u.a(e.addLiquidityInfo[0].val).cmp(e.addLiquidityInfo[0].max)>0?(e.addLiquidityInfo[1].val=e.addLiquidityInfo[1].max,e.addLiquidityInfo[0].val=e.addLiquidityInfo[0].max):e.addLiquidityInfo[1].val=new u.a(e.addLiquidityInfo[0].val).div(e.liqPrice).toFixed(4);case 5:case"end":return t.stop()}}),t)})))()},priceLiq2:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.info("priceLiq2"),new u.a(e.addLiquidityInfo[1].val).cmp(e.addLiquidityInfo[1].max)>0?(e.addLiquidityInfo[1].val=e.addLiquidityInfo[1].max,e.addLiquidityInfo[0].val=e.addLiquidityInfo[0].max):e.addLiquidityInfo[0].val=new u.a(e.liqPrice).mul(e.addLiquidityInfo[1].val).toFixed(4);case 2:case"end":return t.stop()}}),t)})))()},addLipMax:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.addLiquidityInfo[1].val=t.addLiquidityInfo[1].max,t.addLiquidityInfo[0].val=t.addLiquidityInfo[0].max;case 2:case"end":return e.stop()}}),e)})))()},priceLiq3:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Number(e.removeLiquidity.val||0)<=0)){t.next=4;break}return e.removeLiquidity.getUsdt="0",e.removeLiquidity.getSgr="0",t.abrupt("return");case 4:if(!e.removeLiquidity.balance){t.next=7;break}return t.next=7,e.initRemoveInfo();case 7:new u.a(e.removeLiquidity.val).cmp(e.totalLiquidBalance)>0?(e.removeLiquidity.getUsdt=e.removeLiquidity.allUsdt,e.removeLiquidity.getSgr=e.removeLiquidity.allSgr):(a=new u.a(e.removeLiquidity.val).div(e.totalLiquidBalance),e.removeLiquidity.getUsdt=new u.a(e.removeLiquidity.allUsdt).mul(a).toFixed(4),e.removeLiquidity.getSgr=new u.a(e.removeLiquidity.allSgr).mul(a).toFixed(4));case 8:case"end":return t.stop()}}),t)})))()},addLiquidityFun:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.addLiquidityInfo[0].hasApprove){t.next=7;break}return t.next=3,Object(d["c"])(d["R"].address);case 3:return t.next=5,e.initAddInfo();case 5:t.next=22;break;case 7:if(e.addLiquidityInfo[1].hasApprove){t.next=14;break}return t.next=10,Object(d["c"])(d["M"].address);case 10:return t.next=12,e.initAddInfo();case 12:t.next=22;break;case 14:if(!(Number(e.addLiquidityInfo[1].val)>0&&Number(e.addLiquidityInfo[0].val)>0)){t.next=22;break}if("USDT"!=e.addLiquidityInfo[0].symbol){t.next=20;break}return t.next=18,Object(d["G"])(new u.a(e.addLiquidityInfo[0].val).mul(u.a.pow(10,d["R"].decimals)).toFixed(0),new u.a(e.addLiquidityInfo[1].val).mul(u.a.pow(10,d["M"].decimals)).toFixed(0));case 18:t.next=22;break;case 20:return t.next=22,Object(d["G"])(new u.a(e.addLiquidityInfo[1].val).mul(u.a.pow(10,d["R"].decimals)).toFixed(0),new u.a(e.addLiquidityInfo[0].val).mul(u.a.pow(10,d["M"].decimals)).toFixed(0));case 22:case"end":return t.stop()}}),t)})))()},removeFun:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasApproveLiqRemove){t.next=7;break}return t.next=3,Object(d["d"])();case 3:return t.next=5,e.initRemoveInfo();case 5:t.next=12;break;case 7:if(!(Number(e.removeLiquidity.val)<=0)){t.next=9;break}return t.abrupt("return");case 9:return new u.a(e.removeLiquidity.val).cmp(e.removeLiquidity.balance)>0&&(e.removeLiquidity.val=e.removeLiquidity.balance),t.next=12,Object(d["J"])(new u.a(e.removeLiquidity.val).mul(u.a.pow(10,18)).toFixed(0));case 12:case"end":return t.stop()}}),t)})))()},buyAndAddFunUsdt:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["i"])(d["R"].address,d["R"].decimals);case 2:return t.next=4,e.initBuyAndAddInfo();case 4:case"end":return t.stop()}}),t)})))()},buyAndAddFunSgr:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["i"])(d["M"].address,d["M"].decimals);case 2:return t.next=4,e.initBuyAndAddInfo();case 4:case"end":return t.stop()}}),t)})))()},buyAndAddFun:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(t.buyAndAdd.val)<=0)){e.next=2;break}return e.abrupt("return");case 2:return new u.a(t.buyAndAdd.val).cmp(t.buyAndAdd.balance)>0&&(t.buyAndAdd.val=t.buyAndAdd.balance),e.next=5,Object(d["h"])(new u.a(t.buyAndAdd.val).mul(u.a.pow(10,18)).toFixed(0));case 5:case"end":return e.stop()}}),e)})))()}}},v=l,p=(a("15e4"),a("2877")),m=a("00d9"),f=Object(p["a"])(v,n,i,!1,null,"70949c2e",null);"function"===typeof m["default"]&&Object(m["default"])(f);t["default"]=f.exports},"68b8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAA5CAMAAACcaPJfAAAAt1BMVEUAAAAAqqor/9VJ/9s54+M5/+Mz5uZG6NFA6tU88OFG6NxA6uND59tB795F6+JD7N1C7N5E7d9D6eBD7N9C7N9D7N5E7N5E7N5D691E699D6t5F6t9E6t1E7N9E6t1E7N9D695E691E691D695E7N5E695E6t5D695E6t5E695E7N9E691E695E695E7N5E699D6t1D691D695D695E695E6t5D695E691E695E7N9E695D695E694Wx/IMAAAAPHRSTlMAAwYHCQkKCwwRFiQqLzQ1Njg5UGBrbHt+f4WGh4eIiI2Pl5m4wMfK0tbW2trb4Obr8vL29/j6+/v8/f5kVY1FAAAAiElEQVRIx+3KRRbCQBBAwY8Fh+AW3N2Dzf3PxYqHhAyzp2tdHMxUQJmpyZQpU6ZMmf81d4ZzXw3XryZzkASyk59zVQCAUOuinUcnxoM908xhihdW++Qz10U+ZBbfptuJ4xF1XM8cp/nKXr7PTSmAD6t5fs5bL4FGfq6UKkN3O8qhF2lM+0HM3QEihNW285Zp7QAAAABJRU5ErkJggg=="},"99af":function(e,t,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),s=a("861d"),c=a("7b0b"),d=a("50c4"),o=a("8418"),u=a("65f0"),l=a("1dde"),v=a("b622"),p=a("2d00"),m=v("isConcatSpreadable"),f=9007199254740991,b="Maximum allowed index exceeded",y=p>=51||!i((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),x=l("concat"),h=function(e){if(!s(e))return!1;var t=e[m];return void 0!==t?!!t:r(e)},A=!y||!x;n({target:"Array",proto:!0,forced:A},{concat:function(e){var t,a,n,i,r,s=c(this),l=u(s,0),v=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?s:arguments[t],h(r)){if(i=d(r.length),v+i>f)throw TypeError(b);for(a=0;a<i;a++,v++)a in r&&o(l,v,r[a])}else{if(v>=f)throw TypeError(b);o(l,v++,r)}return l.length=v,l}})},bf75:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"exchange":"确认兑换","approve":"授权","tabs":["购买并添加","买/卖","添加流动性","移除流动性"],"pancake":"PancakeSwap","purchaseRule":"新用户首次购买，需要通过本界面购买以绑定推荐人关系","addRule":"使用此页面管理流动性，将免除11%手续费扣除","removeRule":"您可在此页面移除流动性","buyAndAddRule":"您可以在此页面购买并自动添加流动性","addLiquidityText":"您可获得：","explain":"说明"},"en-US":{"exchange":"Confirm","approve":"Approve","tabs":["Buy & Add","Buy/Sell","Add Liquidity","Remove Liquidity"],"pancake":"PancakeSwap","purchaseRule":"When new users purchase for the first time, they need to purchase through this interface to bind the recommender relationship","addRule":"If you use this page to manage liquidity, you will be exempted from 11% commission deduction","removeRule":"You can remove liquidity from this page","buyAndAddRule":"You can buy and automatically add liquidity on this page","addLiquidityText":"You can get：","explain":"explain"}}'),delete e.options._Ctor}},ce96:function(e,t,a){}}]);