(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Ranking"],{"0a38":function(e,t,n){e.exports=n.p+"img/monthly_image_mobile@2x.1d68ec99.png"},"39a1":function(e,t,n){e.exports=n.p+"img/weekly_image_mobile@2x.a0d3f61c.png"},4320:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Ranking"},[n("div",{staticClass:"content"},[n("p",{staticClass:"rule"},[n("svg-icon",{attrs:{"icon-class":"activate_rule"}}),n("span",{on:{click:e.onVisible}},[e._v(e._s(e.$t("rule")))])],1),n("div",{staticClass:"count-down"},[n("p",[e._v(e._s(e.$t("time")))]),n("div",{staticClass:"count-down-banner"},[n("p",[n("span",[e._v(e._s(e.countDown.day))]),n("span",[e._v(":")]),n("span",[e._v(e._s(e.countDown.hour))]),n("span",[e._v(":")]),n("span",[e._v(e._s(e.countDown.minute))])]),n("p",[n("span",[e._v(e._s(e.$t("timeUnit")[0]))]),n("span"),n("span",[e._v(e._s(e.$t("timeUnit")[1]))]),n("span"),n("span",[e._v(e._s(e.$t("timeUnit")[2]))])])])]),n("div",{staticClass:"tabs"},[n("ul",e._l(e.tabs,(function(t,i){return n("li",{key:i,class:{active:e.active==t.type},on:{click:function(n){return e.switchClick(t.type)}}},[n("svg-icon",{attrs:{"icon-class":e.active==t.type?e.activeIcons[i]:e.icons[i]}}),n("span",[e._v(e._s(e.$t("tabs["+i+"]")))])],1)})),0)]),n("div",{staticClass:"table-wrap"},[n("div",{staticClass:"active-banner"},[n("p",{staticClass:"title"},[e._v(e._s(e.$t("title")))]),n("img",{staticClass:"img-banner",attrs:{src:e.isMobile?e.bannerMobile[e.active]:e.bannerPC[e.active]}}),n("p",{staticClass:"sub-title"},[e._v(e._s(e.$t(e.active)[0]))]),n("p",{staticClass:"desc",domProps:{innerHTML:e._s(e.$t(e.active)[1])}})]),n("div",{staticClass:"table-content"},[n("p"),n("ul",{staticClass:"contList"},e._l(e.nodes,(function(t,i){return n("li",{key:i},[n("div",{staticClass:"cont_t"},[n("div",{staticClass:"name color2"},[n("svg-icon",{class:["hot",t.enabled?"isHot":"ord"],attrs:{"icon-class":"hot"}}),e._v(" "+e._s(t.name)+" ")],1),n("div",{staticClass:"ind font15"},[e._v(" "+e._s(e.$t("dataLabel[0]"))+" "),n("span",{staticClass:"color2"},[e._v(e._s(t.index)+" ")])])]),n("div",{staticClass:"cont_b"},[n("div",[e._v(" "+e._s(e.$t("dataLabel[1]"))+" "),n("span",[e._v(" "+e._s(t[e.active])+" ")])]),n("div",[e._v(" "+e._s(e.$t("dataLabel[2]"))+" "),n("span",[e._v(" "+e._s(t.amount)+" ")])])])])})),0)])])]),n("el-dialog",{attrs:{title:e.$t("dialogRule"),visible:e.visible,width:e.isMobile?"90%":"50%"},on:{"update:visible":function(t){e.visible=t}}},[n("div",{staticClass:"dialog-content"},[n("div",{domProps:{innerHTML:e._s(e.$t("dialogDesc"))}}),n("p",[n("button",{on:{click:e.onVisible}},[e._v(e._s(e.$t("iknow")))])])])])],1)},a=[],s=n("1da1"),o=(n("96cf"),n("a9e3"),n("ac1f"),n("1276"),n("c94d")),r=n("fa7d"),c={name:"Ranking",data:function(){return{tabs:[{type:"week"},{type:"month"},{type:"quarter"}],active:"quarter",List:[],countDown:{day:0,hour:0,minute:0},time:{},icons:{0:"weekly_tab",1:"monthly_tab",2:"quarterly_tab"},activeIcons:{0:"weekly_tab_selected",1:"monthly_tab_selected",2:"quarterly_tab_selected"},bannerMobile:{week:n("39a1"),month:n("0a38"),quarter:n("6650")},bannerPC:{week:n("44f7"),month:n("e888"),quarter:n("c8d7")},isMobile:!1,visible:!1}},computed:{nodes:function(){var e=this;return this.List.sort((function(t,n){return Number(t[e.active])!=Number(n[e.active])?Number(n[e.active])-Number(t[e.active]):Number(n.amount)-Number(t.amount)}))}},created:function(){},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isMobile=Object(r["d"])(),e.getCountDown(),t.next=4,e.init();case 4:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["y"])();case 2:n=t.sent.data,e.List=n.rank,e.time=n.time,console.info(e.time);case 6:case"end":return t.stop()}}),t)})))()},getCountDown:function(){this.startTiming()},onVisible:function(){this.visible=!this.visible},startTiming:function(){var e=this;if(e.time)var t={week:8,month:31,quarter:91},n=setInterval((function(){console.info();var i=Math.floor((new Date).getTime()/1e3),a=86400*(Number(e.time[e.active].split("-")[1])+t[e.active])-i;e.countDown=Object(r["b"])(a),a<0&&clearInterval(n)}),1e3)},switchClick:function(e){this.active=e}}},l=c,d=(n("c221"),n("2877")),u=n("9f4b"),m=Object(d["a"])(l,i,a,!1,null,"1feda9aa",null);"function"===typeof u["default"]&&Object(u["default"])(m);t["default"]=m.exports},"44f7":function(e,t,n){e.exports=n.p+"img/weekly_image_pc@2x.c4c7e066.png"},6650:function(e,t,n){e.exports=n.p+"img/quarterly_image_mobile@2x.be78e478.png"},"7d93":function(e,t,n){},"972a":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-CN":{"tabs":["周榜","月榜","季度榜"],"time":"活动倒计时：","timeUnit":["天","时","分"],"dataLabel":["节点号：","新增LP：","总LP："],"rule":"赛事规则","title":"SGR全球节点排位赛火热进行中...","week":["周榜冠军","将获得5000枚SGR"],"month":["月榜TOP3","冠亚季军将分别获得20000、15000、10000枚SGR"],"quarter":["季榜达标","新增1000万LP：梅赛德斯奔驰大G一台<br/>新增500万LP：路虎揽运一台<br/>新增400万LP：梅赛德斯奔驰E300一台<br/>新增300万LP：特斯拉model3一台"],"header":["排名","社群"],"dialogRule":"SGRv2全球节点排位赛赛事规则","dialogDesc":"自SGRv2上线至今市场发展一直都在往好的方向前进，每个阶段都在计划中进行；为了让真正在努力的市场伙伴享受更多福利，特别举办本次节点大赛，奖励全球节点贡献者。本次所有代币奖励，将从空投合约地址发放兑现。部分奖品将会通过指定线下社区执行分发奖励。 <br/> <br/> 排位规则 赛事开始后 周赛（每7天提取数据） 月赛（每30天提取数据） 季度赛（每90天提取数据） 初始数据截取于活动公布开始时刻，各节点较上周/月/季度考核为基础，周/月/季周期内新增LP数量进行顺位排序。 周赛取冠军，月赛取冠/亚/季，季度赛达到新增LP考核标准进行奖励。 季度赛取节点新增1000万/500万/400万/300万LP进行奖励。 <br/> 大赛奖项 周赛（冠军） 月赛（冠军/亚军/季军） 季度赛（达到考核要求即可） <br/> <br/> 开始时间：2021/8/22 <br/> 奖励规则 周赛 冠军：5000枚SGRv2 月赛 冠军：20000枚SGRv2 亚军：15000枚SGRv2 季军：10000枚GRv2 季度赛： 新增1000万LP：梅赛德斯奔驰大G一台 新增500万LP：路虎揽运一台 新增400万LP：梅赛德斯奔驰E300一台 新增300万LP：特斯拉model3一台。 季度赛结束后7天内，节点LP数量需保持不少于各级考核标准，否则将取消奖励。","iknow":"我知道了"},"en-US":{"tabs":["Weekly List","Monthly List","Quarterly List"],"time":"Countdown:","timeUnit":["Day","Hour","Minute"],"dataLabel":["idnex:","LP add:","LP total:"],"rule":"Game Rule","title":"SGRv2 Global Node Competition is in progress...","week":["Weekly champion","Will receive 5000 sgrs"],"month":["Month TOP3","The champion, Runner-up and Third place will receive 20000, 15000 and 10000 SGR respectively"],"quarter":["Quarterly standard","Add 10M LP: Mercedes Benz G-Class <br/> Add 5M LP: Range Rover Sport <br/> Add 4M LP: Mercedes Benz E-Class <br/> Add 3M LP: Tesla Model 3"],"header":["Ranking","Community"],"dialogRule":"SGR global node Ranking Rule","dialogDesc":" Since the launch of SGRv2, every stage has been planned.The prize money for this node competition comes from the remaining 0.8% share of airdrop tokens. Some of the prizes will be distributed by the cooperative community. <br/> <br/> The rules of the contest Weekly competition (data extraction every 7 days) Monthly competition (data extraction every 30 days) Quarterly competition (extract data every 90 days) The initial data is intercepted at the beginning of the announcement of the activity. Based on the assessment of each node compared with last week / month / quarter, the number of newly added LP in the week / month / quarter cycle is sorted in order. <br/> <br/> Win the champion in weekly competition, Win the champion in the monthly competition/sub-season competitions, and meet the new LP assessment standards in quarterly competitions. quarterly competition,nodes added 10M / 5M / 4M / 3M LP, will win the ultimate prize. <br/> Contest Awards Weekly Competition (Champion) Monthly Competition (champion/Runner-up/Third place) Quarterly Competition (to meet the assessment requirements) <br/> <br/> Start time: August 22, 2021 <br/> Reward rules Weeks Winner: 5000 SGR Monthly race Winner: 20000 SGR Runner-up: 15000 SGR Third place: 10000 SGR Quarterly competition: Add 10M LP: one Mercedes Benz G-Class Add 5M LP: Range Rover Sport Add 4M LP: one Mercedes Benz E-Class Add 3M LP: one Tesla Model 3. Within 7 days after the end of the season, the number of node LP shoule be no less than the assessment standards at each levels, otherwise the reward will be cancelled.","iknow":"Okay"}}'),delete e.options._Ctor}},"9f4b":function(e,t,n){"use strict";var i=n("972a"),a=n.n(i);t["default"]=a.a},c221:function(e,t,n){"use strict";n("7d93")},c8d7:function(e,t,n){e.exports=n.p+"img/quarterly_image_pc@2x.4f6bb0a6.png"},e888:function(e,t,n){e.exports=n.p+"img/monthly_image_pc@2x.e2123425.png"}}]);