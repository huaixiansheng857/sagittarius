(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1af36de"],{6535:function(e,r,t){"use strict";t.r(r);var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"Airdrop"},[e._m(0),t("div",{staticClass:"main"},[t("h2",{staticClass:"text_c"},[e._v(" "+e._s(e.$t("receiveTitle"))+" "),t("span",{staticClass:"italic"},[e._v(e._s(e.$t("logoName"))+" ")])]),t("div",{staticClass:"receiveCont"},[t("div",{staticClass:"explain"},[e._v(" "+e._s(e.$t("receiveText"))+" ")]),t("p",{staticClass:"surplus"},[e._v(" "+e._s(e.$t("receiveOther[0]"))+" "),t("span",{staticClass:"airAmount"},[e._v(e._s(e.airAmount)+" ")]),t("span",[e._v(" SGR ")])]),t("div",{staticClass:"text_r"},[t("button",{class:["receiveBtn",{prohibit:e.receiveAirDrop}],on:{click:e.receiveAfun}},[e._v(" "+e._s(e.receiveAirDrop?e.$t("receiveBtn[2]"):e.$t("receiveBtn[0]"))+" ")])])]),t("div",{staticClass:"AirdropRule"},[e._m(1),t("p",{staticClass:"font14"},[e._v(" "+e._s(e.$t("rule"))+" ")]),t("div",{staticClass:"text font12",domProps:{innerHTML:e._s(e.$t("ruleText"))}})])])])},a=[function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"decorate mobileHid"},[i("img",{attrs:{src:t("d323"),alt:""}})])},function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("span",{staticClass:"biaoqian"},[i("img",{attrs:{src:t("e2c4"),alt:""}})])}],n=t("1da1"),s=(t("96cf"),t("a9e3"),t("caad"),t("2532"),t("ac1f"),t("1276"),t("c94d")),c={name:"",data:function(){return{receiveA:!1,receiveB:!1,receiveC:!1,receiveAirDrop:!0,airAmount:"0"}},created:function(){},methods:{receiveAfun:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(s["T"])();case 2:if(e.receiveAirDrop=r.sent,!e.receiveAirDrop){r.next=5;break}return r.abrupt("return");case 5:if(console.info(e.airAmount),!(Number(e.airAmount)<=0)){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,Object(s["B"])();case 10:case"end":return r.stop()}}),r)})))()},receiveBfun:function(){this.receiveB&&console.log("领取")},receiveCfun:function(){this.receiveC&&console.log("领取")},invitation:function(){var e=window.location.href;return e.includes("ref=")?e.split("ref=")[1].substring(0,42):null}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(s["T"])();case 2:return e.receiveAirDrop=r.sent,r.next=5,Object(s["G"])();case 5:e.airAmount=r.sent,window.invitation=e.invitation;case 7:case"end":return r.stop()}}),r)})))()}},o=c,u=t("2877"),l=t("a200"),d=Object(u["a"])(o,i,a,!1,null,"38ca89e8",null);"function"===typeof l["default"]&&Object(l["default"])(d);r["default"]=d.exports},a200:function(e,r,t){"use strict";var i=t("b7e6"),a=t.n(i);r["default"]=a.a},b7e6:function(e,r){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"receiveTitle":"领取","receiveText":"您可以在这里领取您的Sagittarius","receiveOther":["剩余空投：","已领取："],"rewardTitle":["邀请转发社区空投奖励","微信入群空投奖励","社区联合空投"],"rewardText":["邀请好友进群并转发投资新闻, 每个地址可获得 2000 Sagittarius, 限量1000份.","微信入群并转发活动, 每个地址 500 Sagittarius, 限量1000份.","Sagittarius Finance 和各大社区(Trade, OceanDao, news, media...)联合空投活动."],"surplus":"剩余份数","receiveBtn":["领取","已结束","已领取"],"ruleText":"第一期空投： <br /> 将于2021年5月26日开始，每个用户仅可领取一次空投100SGR。 <br /> <br /> 第二期空投：<br /> 将于2021年5月27日开始，每个用户仅可领取一次空投50SGR。 <br /> <br /> 第三期空投：<br /> 将于2021年6月2日开始，每个用户仅可领取一次空投25SGR。 <br /> <br /> 我们将不定期举行空投活动，数量不定。 <br /> <br /> 推荐他人领取空投，推荐人将额外获得10%的空投，推荐人的推荐人将获得额外5%的空投。"},"en-US":{"receiveTitle":"Claim","receiveText":"You can pick up your Sagittarius here","receiveOther":["Available: ","Claimed: "],"rewardTitle":["Retweet Aridrop","Wechat Airdrop","Community Partnership"],"rewardText":["Join Wechat group and retweet latest news, 2000 Sagittarius per address(1000 addresses only)!","Wechat and Telegram invitation event, 500 Sagittarius per address(1000 addresses only)!","Sagittarius Finance community partnership(Trade, OceanDao, news, media...) airdrop."],"surplus":"Left Count: ","receiveBtn":["Claim","Ended","Unavailable"],"ruleText":"The first airdrop: <br /> Starting on May 26, 2021, each user can only receive 100 SGR for one airdrop. <br /><br /> The second airdrop:<br /> Starting on May 27, 2021, each user can only receive 50 SGR of the airdrop once. <br /><br /> The third airdrop:<br /> Starting on June 2, 2021, each user can only receive 25 SGR of the airdrop once. <br /><br /> We will hold airdrop activities from time to time, and the number is variable. <br /><br /> Refer others to receive the airdrop, the referrer will receive an additional 10% of the airdrop, and the referrer\'s referrer will receive an additional 5% of the airdrop."}}'),delete e.options._Ctor}},e2c4:function(e,r){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA4CAMAAAC49krEAAAAqFBMVEUAAAD/AAD/qgD/tkn/qjn/mTP/s03/okb/qkD/pTz/okb/qkf/pEP/qEf/rEX/qEP/qkL/qET/qkP/p0X/qUb/qEb/q0b/qkX/qUX/qEX/qUX/qUb/qEb/qUX/qEX/qUb/qUX/qEb/qUX/qUb/qEX/qEX/qUX/qUX/qEX/qEb/qUb/qkX/qkb/qUX/qUb/qUX/qUb/qUb/qUX/qUb/qUb/qEb/qUX/qUam2SivAAAAN3RSTlMAAQMHCQoKCwwRFiQqLzQ1Njg5Q1BbW2BrfoWGh4iNj5eZuMDHytLW2trb4Obr8vb3+Pr7/P3+iwqD0AAAAI1JREFUSMftyskSwUAUBdCLmKcYYuyYiTFIcP//z2yoUtFpvVbvrA+8ix14tCNRokSJEiX+Qwzt4nnojO4WcVEF0Nz8iocuAAA5/2aKV1XCmxukx2UNH/J+rI/HPhIaO02MJmV8KaooGdd1aLn7V+yRJE+DLFIUVEyS6JB8zCowaG9JIjMNVy2YOeNg/gQs6a52nLd3pgAAAABJRU5ErkJggg=="}}]);