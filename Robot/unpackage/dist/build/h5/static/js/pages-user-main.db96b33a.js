(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-main"],{"0024":function(t,i,a){"use strict";var n=a("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("f3f3")),o=n(a("29c6")),s=n(a("1967")),r=n(a("c205")),u=a("2f62"),c={components:{uniIcons:o.default,uniList:s.default,uniListItem:r.default},computed:(0,e.default)({},(0,u.mapState)(["hasLogin","forcedLogin"])),data:function(){return{userMenuList:[{title:"签到",icon:"../../static/img/icon/user/my_sign.png",rightText:"签到抽大奖",path:"../login/login"},{title:"我的钱包",icon:"../../static/img/icon/user/my_wallet.png",rightText:"",path:""},{title:"绑定银行卡",icon:"../../static/img/icon/user/my_card.png",rightText:"绑定微信/支付宝/银行卡",path:"./bankList"},{title:"订单中心",icon:"../../static/img/icon/user/my_order.png",rightText:"",path:""},{title:"区域合伙人",icon:"../../static/img/icon/user/my_area.png",rightText:"",path:""},{title:"GPS位置更新",icon:"../../static/img/icon/user/my_location.png",rightText:"",path:""},{title:"实人通行证",icon:"../../static/img/icon/user/my_pass.png",rightText:"",path:"./passCheck"},{title:"服务中心",icon:"../../static/img/icon/user/my_wallet.png",rightText:"",path:""},{title:"设置",icon:"../../static/img/icon/user/my_set.png",rightText:"",path:"./modifySet"}]}},methods:(0,e.default)({goNavigator:function(t,i){"setUserInfo"==t&&void 0==i?uni.navigateTo({url:"../user/modifyUserInfo"}):""==this.userMenuList[i].path?uni.showToast({icon:"none",title:"【"+t+"】未完善！"}):uni.navigateTo({url:this.userMenuList[i].path})}},(0,u.mapMutations)(["logout"]),{bindLogin:function(){uni.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&uni.reLaunch({url:"../login/login"})}})};i.default=c},"0992":function(t,i,a){var n=a("f227");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("a6179068",n,!0,{sourceMap:!1,shadowMode:!1})},1171:function(t,i,a){"use strict";var n={"uni-icons":a("29c6").default,"uni-list":a("1967").default,"uni-list-item":a("c205").default},e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"user"},[a("v-uni-view",{staticClass:"content userMain"},[a("v-uni-view",{staticClass:"user_info",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goNavigator("setUserInfo")}}},[a("v-uni-view",{staticClass:"avatar"},[a("v-uni-image",{attrs:{src:"https://img-blog.csdnimg.cn/20190927151124774.png",mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"personal"},[a("v-uni-view",{staticClass:"uname"},[t._v("陈汝平")]),a("v-uni-text",{staticClass:"uid"},[t._v("QQ:42524073")])],1),a("v-uni-view",{staticClass:"my_white_arrow"},[a("uni-icons",{attrs:{type:"arrowright",size:"30"}})],1)],1),a("v-uni-view",[a("uni-list",t._l(t.userMenuList,(function(i,n){return a("uni-list-item",{key:n,attrs:{title:i.title,thumb:i.icon,rightText:i.rightText},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goNavigator(i.title,n)}}})})),1)],1)],1)],1)},o=[];a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return n}))},"277a":function(t,i,a){"use strict";var n=a("0992"),e=a.n(n);e.a},"2ab4":function(t,i,a){"use strict";a.r(i);var n=a("1171"),e=a("fd7c");for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);a("277a");var s,r=a("f0c5"),u=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"1927aaa6",null,!1,n["a"],s);i["default"]=u.exports},f227:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".userMain[data-v-1927aaa6]{padding:0}.userMain .user_info[data-v-1927aaa6]{width:100%;\n\t/* height: 150px; */background-color:#1acfc1}\t\n\t\n /* \n.userMain .user_info{\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n}\n.user_info .avatar ,  .user_info .personal {\n\t-webkit-box-flex: 1;\n\t-webkit-flex: 1;\n\tflex: 1;\n }\n */.user_info .avatar[data-v-1927aaa6], .user_info .personal[data-v-1927aaa6], .user_info .my_white_arrow[data-v-1927aaa6]{float:left}.user_info .avatar[data-v-1927aaa6]{width:28%}.user_info .avatar uni-image[data-v-1927aaa6]{width:80px;height:80px;border-radius:50%;overflow:hidden;margin:20px 10px}.user_info .avatar uni-image img[data-v-1927aaa6]{width:80px;height:80px}.user_info .personal[data-v-1927aaa6]{width:60%}.user_info .personal .uname[data-v-1927aaa6]{font-size:140%;color:#fff;margin:25px 0 10px 0}.user_info .personal .uid[data-v-1927aaa6]{color:#cffdf9}.my_white_arrow[data-v-1927aaa6]{width:2%;line-height:125px;height:125px;text-align:center}.my_white_arrow .uni-icons[data-v-1927aaa6]{color:#e3fffd!important}.uni-list .uni-list-item[data-v-1927aaa6]{border-bottom:1px solid #eaeaea}.uni-list .uni-list-item[data-v-1927aaa6]:last-of-type{border-bottom:none}",""]),t.exports=i},fd7c:function(t,i,a){"use strict";a.r(i);var n=a("0024"),e=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);i["default"]=e.a}}]);