/*! For license information please see src_pages_battle_index_js.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkzlf=self.webpackChunkzlf||[]).push([["src_pages_battle_index_js"],{"./src/pages/battle/index.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l,n=a("./node_modules/react/index.js"),r=a("./src/pages/battle/selectPlayer.js"),c=a("./src/pages/battle/result.js");e=a.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o=function(e){return n.createElement("div",null,n.createElement("div",null,e.isBattle?n.createElement(c.default,{player:e.player,reset:function(){e.reset()}}):n.createElement(r.default,{battle:function(){e.battle()}})))};const s=o;var u,d;(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(o,"default","D:\\新建文件夹\\hot-project-engineering\\src\\pages\\battle\\index.js"),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},"./src/pages/battle/result.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l,n=a("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),r=a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=a("./node_modules/@babel/runtime/regenerator/index.js"),o=a.n(c),s=a("./node_modules/react/index.js"),u=a("./node_modules/axios/index.js"),d=a.n(u),i=a("./src/pages/loading.js"),m=a("./src/pages/battle/battle.css");e=a.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=(0,s.useState)({}),a=(0,r.default)(t,2),l=a[0],c=a[1],u=(0,s.useState)(!1),f=(0,r.default)(u,2),b=f[0],p=f[1],E=(0,s.useState)(!1),v=(0,r.default)(E,2),g=v[0],y=v[1],h=(0,s.useState)({}),w=(0,r.default)(h,2),N=w[0],S=w[1];(0,s.useEffect)((0,n.default)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d().get("https://api.github.com/users/".concat(e.player.playerOne)).then((function(e){c(e.data),p(!0)})),d().get("https://api.github.com/users/".concat(e.player.playerTwo)).then((function(e){S(e.data),y(!0)}));case 2:case"end":return t.stop()}}),t)}))),[]);return b&&g?s.createElement("div",{className:"".concat(m.default["result-result"])},s.createElement("div",{className:"".concat(m.default["result-center"])},s.createElement("div",null,s.createElement("div",{className:"".concat(m.default["result-info"])},l.public_repos>N.public_repos?"Winner":"Loser"),s.createElement("div",null,s.createElement("img",{src:l.avatar_url,alt:""})),s.createElement("div",{className:"".concat(m.default.center," ").concat(m.default.score)},"Scores: ",l.public_repos),s.createElement("div",{className:"".concat(m.default.center," ").concat(m.default["result-name"])},l.name),s.createElement("div",null,s.createElement("i",{className:"fa fa-location-arrow"}),l.location),s.createElement("div",null,s.createElement("i",{className:"fa fa-group"}),l.followers),s.createElement("div",null,s.createElement("i",{className:"fa fa-user-plus"}),l.following),s.createElement("div",null,s.createElement("i",{className:"fa fa-code"}),l.public_repos)),s.createElement("div",null,s.createElement("div",{className:"".concat(m.default["result-info"])},N.public_repos>l.public_repos?"Winner":"Loser"),s.createElement("div",null,s.createElement("img",{src:N.avatar_url,alt:""})),s.createElement("div",{className:m.default.center},"Scores: ",N.public_repos),s.createElement("div",{className:"".concat(m.default.center," ").concat(m.default["result-name"])},N.name),s.createElement("div",null,s.createElement("i",{className:"fa fa-location-arrow"}),N.location),s.createElement("div",null,s.createElement("i",{className:"fa fa-group"}),N.followers),s.createElement("div",null,s.createElement("i",{className:"fa fa-user-plus"}),N.following),s.createElement("div",null,s.createElement("i",{className:"fa fa-code"}),N.public_repos))),s.createElement("div",{className:m.default["result-btn"]},s.createElement("button",{type:"button",onClick:function(){window.location.href="#/battle",e.reset()}},"Reset"))):s.createElement(i.default,null)};f(b,"useState{[oneInfos, setOneInfos]({})}\nuseState{[loadingOne, setOneloading](false)}\nuseState{[loadingTwo, setTwoloading](false)}\nuseState{[twoInfos, setTwoInfos]({})}\nuseEffect{}");const p=b;var E,v;(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&E.register(b,"default","D:\\新建文件夹\\hot-project-engineering\\src\\pages\\battle\\result.js"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},"./src/pages/battle/selectPlayer.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l,n=a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=a("./node_modules/react/index.js"),c=a("./node_modules/formik/dist/formik.esm.js"),o=a("./src/pages/battle/battle.css");e=a.hmd(e),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=function(e){var t=(0,r.useState)(""),a=(0,n.default)(t,2),l=a[0],s=a[1],u=(0,r.useState)(""),d=(0,n.default)(u,2),i=d[0],m=d[1],f=(0,r.useState)(""),b=(0,n.default)(f,2),p=b[0],E=b[1],v=(0,r.useState)(""),g=(0,n.default)(v,2),y=g[0],h=g[1],w=function(e,t){"one"===t?(s(e),E("https://github.com/".concat(e,".png?size=200"))):(m(e),h("https://github.com/".concat(e,".png?size=200")))},N=function(e){"one"===e?(s(""),E("")):(m(""),h(""))};return r.createElement("div",{className:"".concat(o.default["battle-select"])},r.createElement("div",{className:"".concat(o.default["battle-title"])},"Instructions"),r.createElement("div",{className:"".concat(o.default["battle-center"])},r.createElement("div",null,r.createElement("div",{className:"".concat(o.default["battle-info"])},"Enter two Github Users"),r.createElement("div",{className:"".concat(o.default["battle-column"])},r.createElement("i",{className:"fa fa-users ".concat(o.default.org)}))),r.createElement("div",null,r.createElement("div",{className:"".concat(o.default["battle-info"])},"Battle"),r.createElement("div",{className:"".concat(o.default["battle-column"])},r.createElement("i",{className:"fa fa-fighter-jet ".concat(o.default.gray)}))),r.createElement("div",null,r.createElement("div",{className:"".concat(o.default["battle-info"])},"See the winner"),r.createElement("div",{className:"".concat(o.default["battle-column"])},r.createElement("i",{className:"fa fa-trophy ".concat(o.default.yellow)})))),r.createElement("h3",null,"Players"),r.createElement("div",{className:"".concat(o.default["battle-form-content-wrap"])},r.createElement("div",null,r.createElement("h3",null," Player One "),p?r.createElement("div",{className:"".concat(o.default["battle-selectInfo"])},r.createElement("div",{className:"".concat(o.default["battle-basicInfo"])},r.createElement("img",{src:p,alt:""}),r.createElement("span",null,l)),r.createElement("div",{onClick:function(){return N("one")},role:"button",tabIndex:-1,onKeyUp:function(){}},r.createElement("i",{className:"fa fa-times-circle",style:{color:"red"}}))):r.createElement(c.Formik,{initialValues:{playerOne:""},validate:function(e){var t={};return e.playerOne||(t.playerOne="请输入"),t},onSubmit:function(e,t){t.setSubmitting(!1),w(e.playerOne,"one")}},(function(e){return r.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(o.default["battle-form-content"])},r.createElement("input",{type:"text",onChange:e.handleChange,value:e.values.playerOne,name:"playerOne",placeholder:"github username"}),e.errors.playerOne&&r.createElement("div",{id:o.default.feedback},e.errors.playerOne),r.createElement("button",{type:"submit"},"Submit"))}))),r.createElement("div",null,r.createElement("h3",null," Player Two "),y?r.createElement("div",{className:"".concat(o.default["battle-selectInfo"])},r.createElement("div",{className:"".concat(o.default["battle-basicInfo"])},r.createElement("img",{src:y,alt:""}),r.createElement("span",null,i)),r.createElement("div",{onClick:function(){return N("two")},role:"button",tabIndex:-2,onKeyUp:function(){}},r.createElement("i",{className:"fa fa-times-circle",style:{color:"red"}}))):r.createElement(c.Formik,{initialValues:{playerTwo:""},validate:function(e){var t={};return e.playerTwo||(t.playerTwo="请输入"),t},onSubmit:function(e,t){t.setSubmitting(!1),w(e.playerTwo,"two")}},(function(e){return r.createElement("form",{onSubmit:e.handleSubmit,className:"".concat(o.default["battle-form-content"])},r.createElement("input",{type:"text",onChange:e.handleChange,value:e.values.playerTwo,name:"playerTwo",placeholder:"github username"}),e.errors.playerTwo&&r.createElement("div",{id:o.default.feedback},e.errors.playerTwo),r.createElement("button",{type:"submit"},"Submit"))})))),p&&y&&r.createElement("div",{className:"".concat(o.default["battle-button"])},r.createElement("button",{type:"button",onClick:function(){window.location.href="#/result?playerOne=".concat(l,"&playerTwo=").concat(i),e.battle()}},"Battle")))};s(u,'useState{[playerOne, setPlayerOne]("")}\nuseState{[playerTwo, setPlayerTwo]("")}\nuseState{[oneImg, setOneImg]("")}\nuseState{[twoImg, setTwoImg]("")}');const d=u;var i,m;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(u,"default","D:\\新建文件夹\\hot-project-engineering\\src\\pages\\battle\\selectPlayer.js"),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)},"./src/pages/battle/battle.css":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={"battle-select":"battle-select--qcEIF","battle-title":"battle-title--WpiBu","battle-center":"battle-center--U11LM","battle-info":"battle-info--nZKmj","battle-column":"battle-column--a7RTz","battle-form-content-wrap":"battle-form-content-wrap--cHZkd","battle-form-content":"battle-form-content--z8_iS",feedback:"feedback--_fXfP","battle-selectInfo":"battle-selectInfo--nMPWj","battle-basicInfo":"battle-basicInfo--Ieee5","battle-button":"battle-button--auuPW",center:"center--X7P91",score:"score--OyWDe",yellow:"yellow--XOVsX",gray:"gray--D3Qa2",org:"org--_JSgW","result-center":"result-center--O5xc3","result-info":"result-info--oSB6b","result-name":"result-name--Oqbb0","result-btn":"result-btn--_4n7a"}}}]);