"use strict";(self.webpackChunkzlf=self.webpackChunkzlf||[]).push([[292],{"./src/compontent/loading.js":(e,n,r)=>{r.d(n,{Z:()=>A});var t,a=r("./node_modules/react/index.js"),l=r("./src/compontent/index.css");e=r.hmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o=function(){return a.createElement("div",{className:l.Z.loader},a.createElement("div",{className:l.Z["loader-inner"]},a.createElement("div",{className:l.Z["loader-line-wrap"]},a.createElement("div",{className:l.Z["loader-line"]})),a.createElement("div",{className:l.Z["loader-line-wrap"]},a.createElement("div",{className:l.Z["loader-line"]})),a.createElement("div",{className:l.Z["loader-line-wrap"]},a.createElement("div",{className:l.Z["loader-line"]})),a.createElement("div",{className:l.Z["loader-line-wrap"]},a.createElement("div",{className:l.Z["loader-line"]})),a.createElement("div",{className:l.Z["loader-line-wrap"]},a.createElement("div",{className:l.Z["loader-line"]}))))};const A=o;var i,s;(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(o,"default","D:\\新建文件夹\\hot-project-engineering\\src\\compontent\\loading.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},"./src/pages/battle/result.js":(e,n,r)=>{r.r(n),r.d(n,{default:()=>m});var t,a=r("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),l=r("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=r("./node_modules/@babel/runtime/regenerator/index.js"),A=r.n(o),i=r("./node_modules/react/index.js"),s=r("./node_modules/axios/index.js"),d=r.n(s),c=r("./src/compontent/loading.js"),p=r("./src/pages/battle/battle.css");e=r.hmd(e),(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);var u=function(){var e=(0,i.useState)({}),n=(0,l.Z)(e,2),r=n[0],t=n[1],o=(0,i.useState)(!1),s=(0,l.Z)(o,2),u=s[0],m=s[1],f=(0,i.useState)(!1),C=(0,l.Z)(f,2),b=C[0],I=C[1],B=(0,i.useState)({}),h=(0,l.Z)(B,2),x=h[0],g=h[1],w=function(e){var n={};try{for(var r=e.split("?")[1].split("&"),t=r.length,a=0;a<t;a+=1){var o=r[a].split("="),A=(0,l.Z)(o,2),i=A[0],s=A[1];n[i]=s}return n}catch(e){window.location.href="#/battle"}return n},y=function(){var e=(0,a.Z)(A().mark((function e(){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=w(window.location.hash)).playerOne&&n.playerTwo){e.next=4;break}return window.location.href="#/battle",e.abrupt("return");case 4:d().get("https://api.github.com/users/".concat(n.playerOne)).then((function(e){t(e.data),m(!0)})),d().get("https://api.github.com/users/".concat(n.playerTwo)).then((function(e){g(e.data),I(!0)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){y()}),[]),(0,i.useEffect)((function(){return window.addEventListener("hashchange",y),window.removeEventListener("hashchange",y)}),[]),(0,i.useEffect)((0,a.Z)(A().mark((function e(){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=w(window.location.hash)).playerOne&&n.playerTwo){e.next=4;break}return window.location.href="#/battle",e.abrupt("return");case 4:d().get("https://api.github.com/users/".concat(n.playerOne)).then((function(e){t(e.data),m(!0)})),d().get("https://api.github.com/users/".concat(n.playerTwo)).then((function(e){g(e.data),I(!0)}));case 6:case"end":return e.stop()}}),e)}))),[]),u&&b?i.createElement("div",{className:"".concat(p.Z["result-result"])},i.createElement("div",{className:"".concat(p.Z["result-center"])},i.createElement("div",null,i.createElement("div",{className:"".concat(p.Z["result-info"])},r.public_repos>x.public_repos?"Winner":null,r.public_repos===x.public_repos?"Draw":null,r.public_repos<x.public_repos?"Loser":null),i.createElement("div",null,i.createElement("img",{src:r.avatar_url,alt:""})),i.createElement("div",{className:"".concat(p.Z.center," ").concat(p.Z.score)},"Scores: ",r.public_repos),i.createElement("div",{className:"".concat(p.Z.center," ").concat(p.Z["result-name"])},r.name),i.createElement("div",null,i.createElement("i",{className:"fa fa-location-arrow"}),r.location),i.createElement("div",null,i.createElement("i",{className:"fa fa-group"}),r.followers),i.createElement("div",null,i.createElement("i",{className:"fa fa-user-plus"}),r.following),i.createElement("div",null,i.createElement("i",{className:"fa fa-code"}),r.public_repos)),i.createElement("div",null,i.createElement("div",{className:"".concat(p.Z["result-info"])},x.public_repos>r.public_repos?"Winner":null,x.public_repos===r.public_repos?"Draw":null,x.public_repos<r.public_repos?"Loser":null),i.createElement("div",null,i.createElement("img",{src:x.avatar_url,alt:""})),i.createElement("div",{className:p.Z.center},"Scores: ",x.public_repos),i.createElement("div",{className:"".concat(p.Z.center," ").concat(p.Z["result-name"])},x.name),i.createElement("div",null,i.createElement("i",{className:"fa fa-location-arrow"}),x.location),i.createElement("div",null,i.createElement("i",{className:"fa fa-group"}),x.followers),i.createElement("div",null,i.createElement("i",{className:"fa fa-user-plus"}),x.following),i.createElement("div",null,i.createElement("i",{className:"fa fa-code"}),x.public_repos))),i.createElement("div",{className:p.Z["result-btn"]},i.createElement("button",{type:"button",onClick:function(){window.location.href="#/battle"}},"Reset"))):i.createElement(c.Z,null)};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(u,"useState{[oneInfos, setOneInfos]({})}\nuseState{[loadingOne, setOneloading](false)}\nuseState{[loadingTwo, setTwoloading](false)}\nuseState{[twoInfos, setTwoInfos]({})}\nuseEffect{}\nuseEffect{}\nuseEffect{}");const m=u;var f,C;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&f.register(u,"default","D:\\新建文件夹\\hot-project-engineering\\src\\pages\\battle\\result.js"),(C="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&C(e)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/compontent/index.css":(e,n,r)=>{r.r(n),r.d(n,{default:()=>A});var t=r("./node_modules/css-loader/dist/runtime/sourceMaps.js"),a=r.n(t),l=r("./node_modules/css-loader/dist/runtime/api.js"),o=r.n(l)()(a());o.push([e.id,"\r\n.loader--FjHt9 {\r\n    background: #000;\r\n    background: radial-gradient(#222, #000);\r\n    bottom: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 70px;\r\n    z-index: 99999;\r\n  }\r\n  .loader-inner--oRAHE {\r\n    bottom: 0;\r\n    height: 60px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100px;\r\n  }\r\n  .loader-line-wrap--tDqoO {\r\n    -webkit-animation: spin--DG2UQ 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;\r\n            animation: spin--DG2UQ 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;\r\n    box-sizing: border-box;\r\n    height: 50px;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    transform-origin: 50% 100%;\r\n    width: 100px;\r\n  }\r\n  .loader-line--t5BCR {\r\n    border: 4px solid transparent;\r\n    border-radius: 100%;\r\n    box-sizing: border-box;\r\n    height: 100px;\r\n    left: 0;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100px;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(1) {\r\n    -webkit-animation-delay: -50ms;\r\n            animation-delay: -50ms;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(2) {\r\n    -webkit-animation-delay: -100ms;\r\n            animation-delay: -100ms;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(3) {\r\n    -webkit-animation-delay: -150ms;\r\n            animation-delay: -150ms;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(4) {\r\n    -webkit-animation-delay: -200ms;\r\n            animation-delay: -200ms;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(5) {\r\n    -webkit-animation-delay: -250ms;\r\n            animation-delay: -250ms;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(1) .loader-line--t5BCR {\r\n    border-color: hsl(0, 80%, 60%);\r\n    height: 90px;\r\n    width: 90px;\r\n    top: 7px;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(2) .loader-line--t5BCR {\r\n    border-color: hsl(60, 80%, 60%);\r\n    height: 76px;\r\n    width: 76px;\r\n    top: 14px;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(3) .loader-line--t5BCR {\r\n    border-color: hsl(120, 80%, 60%);\r\n    height: 62px;\r\n    width: 62px;\r\n    top: 21px;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(4) .loader-line--t5BCR {\r\n    border-color: hsl(180, 80%, 60%);\r\n    height: 48px;\r\n    width: 48px;\r\n    top: 28px;\r\n  }\r\n  .loader-line-wrap--tDqoO:nth-child(5) .loader-line--t5BCR {\r\n    border-color: hsl(240, 80%, 60%);\r\n    height: 34px;\r\n    width: 34px;\r\n    top: 35px;\r\n  }\r\n  @-webkit-keyframes spin--DG2UQ {\r\n    0%,\r\n    15% {\r\n      transform: rotate(0);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes spin--DG2UQ {\r\n    0%,\r\n    15% {\r\n      transform: rotate(0);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }","",{version:3,sources:["webpack://./src/compontent/index.css"],names:[],mappings:";AACA;IACI,gBAAgB;IAChB,uCAAuC;IACvC,SAAS;IACT,OAAO;IACP,gBAAgB;IAChB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,cAAc;EAChB;EACA;IACE,SAAS;IACT,YAAY;IACZ,OAAO;IACP,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,YAAY;EACd;EACA;IACE,sFAAuE;YAAvE,8EAAuE;IACvE,sBAAsB;IACtB,YAAY;IACZ,OAAO;IACP,gBAAgB;IAChB,kBAAkB;IAClB,MAAM;IACN,0BAA0B;IAC1B,YAAY;EACd;EACA;IACE,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,OAAO;IACP,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,YAAY;EACd;EACA;IACE,8BAAsB;YAAtB,sBAAsB;EACxB;EACA;IACE,+BAAuB;YAAvB,uBAAuB;EACzB;EACA;IACE,+BAAuB;YAAvB,uBAAuB;EACzB;EACA;IACE,+BAAuB;YAAvB,uBAAuB;EACzB;EACA;IACE,+BAAuB;YAAvB,uBAAuB;EACzB;EACA;IACE,8BAA8B;IAC9B,YAAY;IACZ,WAAW;IACX,QAAQ;EACV;EACA;IACE,+BAA+B;IAC/B,YAAY;IACZ,WAAW;IACX,SAAS;EACX;EACA;IACE,gCAAgC;IAChC,YAAY;IACZ,WAAW;IACX,SAAS;EACX;EACA;IACE,gCAAgC;IAChC,YAAY;IACZ,WAAW;IACX,SAAS;EACX;EACA;IACE,gCAAgC;IAChC,YAAY;IACZ,WAAW;IACX,SAAS;EACX;EACA;IACE;;MAEE,oBAAoB;IACtB;IACA;MACE,yBAAyB;IAC3B;EACF;EARA;IACE;;MAEE,oBAAoB;IACtB;IACA;MACE,yBAAyB;IAC3B;EACF",sourcesContent:["\r\n.loader {\r\n    background: #000;\r\n    background: radial-gradient(#222, #000);\r\n    bottom: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 70px;\r\n    z-index: 99999;\r\n  }\r\n  .loader-inner {\r\n    bottom: 0;\r\n    height: 60px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100px;\r\n  }\r\n  .loader-line-wrap {\r\n    animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;\r\n    box-sizing: border-box;\r\n    height: 50px;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    transform-origin: 50% 100%;\r\n    width: 100px;\r\n  }\r\n  .loader-line {\r\n    border: 4px solid transparent;\r\n    border-radius: 100%;\r\n    box-sizing: border-box;\r\n    height: 100px;\r\n    left: 0;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100px;\r\n  }\r\n  .loader-line-wrap:nth-child(1) {\r\n    animation-delay: -50ms;\r\n  }\r\n  .loader-line-wrap:nth-child(2) {\r\n    animation-delay: -100ms;\r\n  }\r\n  .loader-line-wrap:nth-child(3) {\r\n    animation-delay: -150ms;\r\n  }\r\n  .loader-line-wrap:nth-child(4) {\r\n    animation-delay: -200ms;\r\n  }\r\n  .loader-line-wrap:nth-child(5) {\r\n    animation-delay: -250ms;\r\n  }\r\n  .loader-line-wrap:nth-child(1) .loader-line {\r\n    border-color: hsl(0, 80%, 60%);\r\n    height: 90px;\r\n    width: 90px;\r\n    top: 7px;\r\n  }\r\n  .loader-line-wrap:nth-child(2) .loader-line {\r\n    border-color: hsl(60, 80%, 60%);\r\n    height: 76px;\r\n    width: 76px;\r\n    top: 14px;\r\n  }\r\n  .loader-line-wrap:nth-child(3) .loader-line {\r\n    border-color: hsl(120, 80%, 60%);\r\n    height: 62px;\r\n    width: 62px;\r\n    top: 21px;\r\n  }\r\n  .loader-line-wrap:nth-child(4) .loader-line {\r\n    border-color: hsl(180, 80%, 60%);\r\n    height: 48px;\r\n    width: 48px;\r\n    top: 28px;\r\n  }\r\n  .loader-line-wrap:nth-child(5) .loader-line {\r\n    border-color: hsl(240, 80%, 60%);\r\n    height: 34px;\r\n    width: 34px;\r\n    top: 35px;\r\n  }\r\n  @keyframes spin {\r\n    0%,\r\n    15% {\r\n      transform: rotate(0);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }"],sourceRoot:""}]),o.locals={loader:"loader--FjHt9","loader-inner":"loader-inner--oRAHE","loader-line-wrap":"loader-line-wrap--tDqoO",spin:"spin--DG2UQ","loader-line":"loader-line--t5BCR"};const A=o},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/battle/battle.css":(e,n,r)=>{r.r(n),r.d(n,{default:()=>A});var t=r("./node_modules/css-loader/dist/runtime/sourceMaps.js"),a=r.n(t),l=r("./node_modules/css-loader/dist/runtime/api.js"),o=r.n(l)()(a());o.push([e.id,".battle-select--dnvuR{\r\n\r\n}\r\n.battle-title--oqjyP {\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n.battle-center--PQ9az {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.battle-center--PQ9az>div{\r\n    text-align: center;\r\n    margin: 20px;\r\n    width: 200px;\r\n}\r\n.battle-center--PQ9az .battle-info--u1sY4 {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin: 8px 0px 16px;\r\n    white-space: nowrap;\r\n}\r\n.battle-center--PQ9az  .battle-column--_fcsJ i{\r\n    font-size: 120px;\r\n    padding: 30px;\r\n    background-color: #eee;\r\n}\r\nh3{\r\n    text-align: center;\r\n}\r\n/* .battle-form{\r\n    display: flex;\r\n    padding: 20px 50px;\r\n} */\r\n.battle-form-content-wrap--GJ72Z {\r\n    display: flex;\r\n    padding: 20px 50px;\r\n}\r\n.battle-form-content-wrap--GJ72Z>div{\r\n    width: 50%;\r\n    margin-left: 10px;\r\n}\r\n.battle-form-content-wrap--GJ72Z input {\r\n    width: 60%;\r\n    height: 40px;\r\n}\r\n.battle-form-content-wrap--GJ72Z button{\r\n    width: 33%;\r\n    height: 46px;\r\n    /* margin-left: 3%; */\r\n}\r\n.battle-form-content-wrap--GJ72Z .battle-form-content--SH0fp {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n#feedback--ShDa8{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    color: red;\r\n    width: 52px;\r\n}\r\n.battle-form-content-wrap--GJ72Z h3{\r\n    text-align: left;\r\n}\r\n.battle-selectInfo--_cWy9{\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 16px;\r\n    border-radius: 4px;\r\n    background-color: #dfdfdf;\r\n    align-items: center;\r\n}\r\n.battle-selectInfo--_cWy9 img{\r\n    width: 64px;\r\n    height: 64px;\r\n    border-radius: 16px;\r\n}\r\n.battle-selectInfo--_cWy9 .battle-basicInfo--_bdIT{\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.battle-selectInfo--_cWy9 i{\r\n    font-size: 36px;\r\n    cursor: pointer;\r\n}\r\n.battle-selectInfo--_cWy9 .battle-basicInfo--_bdIT span{\r\n    font-size: 32px;\r\n    color: #1890ff\r\n}\r\n.battle-button--ksZSo{\r\n    text-align: center;\r\n}\r\n.battle-button--ksZSo button{\r\n    font-size: 20px;\r\n    padding: 20px 30px;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.center--_IA_P{\r\n    text-align: center;\r\n}\r\n.score--Vji1c{\r\n    font-size: 22px;\r\n}\r\n.yellow--hmPyn{\r\n    color: yellow;\r\n}\r\n.gray--KcF34{\r\n    color: gray;\r\n}\r\n.org--lU6jb{\r\n    color:rgb(255, 191, 116);\r\n}\r\n.result-center--yIz7R{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n.result-center--yIz7R>div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    padding: 32px;\r\n    background-color: rgb(221, 221, 221);\r\n    margin: 16px 128px;\r\n}\r\n.result-center--yIz7R>div img{\r\n    width: 200px;\r\n    height: 200px;\r\n    margin:0 0 15px;\r\n}\r\n.result-center--yIz7R>div i{\r\n    margin-right: 5px;\r\n}\r\n\r\n.result-info--iAaUH{\r\n    text-align: center;\r\n    font-size: 28px;\r\n    margin: 10px auto;\r\n}\r\n.result-name--kz4aX{\r\n    color: #1890ff;\r\n    font-size: 24px;\r\n    margin: 20px 0; \r\n}\r\n.result-btn--DK9SW{\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n.result-btn--DK9SW button{\r\n    font-size: 20px;\r\n    padding: 20px 30px;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 900px){\r\n    form {\r\n        width: 100%;\r\n    }\r\n    .battle-center--PQ9az{\r\n        display: block;\r\n    }\r\n    .battle-center--PQ9az>div{\r\n        margin: auto;\r\n    }\r\n    .battle-form-content-wrap--GJ72Z{\r\n        flex-wrap: wrap;\r\n        padding: 20px 10px;\r\n    }\r\n    .battle-form-content-wrap--GJ72Z>div{\r\n        width: 100%;\r\n    }\r\n\r\n    .result-center--yIz7R>div{\r\n        margin: 16px auto;\r\n    }\r\n    /* .result-center{\r\n        display: block;\r\n    }\r\n    .result-center>div{\r\n        margin: 16px auto;\r\n    }\r\n    .result-center img{\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    } */\r\n}\r\n@media (max-width: 600px){\r\n    .result-center--yIz7R{\r\n        display: block;\r\n    }\r\n    .result-center--yIz7R img{\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    }\r\n}","",{version:3,sources:["webpack://./src/pages/battle/battle.css"],names:[],mappings:"AAAA;;AAEA;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA;;;GAGG;AACH;IACI,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,YAAY;AAChB;AACA;IACI,UAAU;IACV,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,UAAU;IACV,WAAW;AACf;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IAIb,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,OAAO;IACP,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA;IACI,eAAe;IACf;AACJ;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;AACf;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,cAAc;IACd,eAAe;IACf,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI;QACI,WAAW;IACf;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;QACf,kBAAkB;IACtB;IACA;QACI,WAAW;IACf;;IAEA;QACI,iBAAiB;IACrB;IACA;;;;;;;;;OASG;AACP;AACA;IACI;QACI,cAAc;IAClB;IACA;QACI,sBAAsB;QACtB,uBAAuB;IAC3B;AACJ",sourcesContent:[".battle-select{\r\n\r\n}\r\n.battle-title {\r\n    text-align: center;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n.battle-center {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.battle-center>div{\r\n    text-align: center;\r\n    margin: 20px;\r\n    width: 200px;\r\n}\r\n.battle-center .battle-info {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin: 8px 0px 16px;\r\n    white-space: nowrap;\r\n}\r\n.battle-center  .battle-column i{\r\n    font-size: 120px;\r\n    padding: 30px;\r\n    background-color: #eee;\r\n}\r\nh3{\r\n    text-align: center;\r\n}\r\n/* .battle-form{\r\n    display: flex;\r\n    padding: 20px 50px;\r\n} */\r\n.battle-form-content-wrap {\r\n    display: flex;\r\n    padding: 20px 50px;\r\n}\r\n.battle-form-content-wrap>div{\r\n    width: 50%;\r\n    margin-left: 10px;\r\n}\r\n.battle-form-content-wrap input {\r\n    width: 60%;\r\n    height: 40px;\r\n}\r\n.battle-form-content-wrap button{\r\n    width: 33%;\r\n    height: 46px;\r\n    /* margin-left: 3%; */\r\n}\r\n.battle-form-content-wrap .battle-form-content {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n#feedback{\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    color: red;\r\n    width: 52px;\r\n}\r\n.battle-form-content-wrap h3{\r\n    text-align: left;\r\n}\r\n.battle-selectInfo{\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    padding: 16px;\r\n    border-radius: 4px;\r\n    background-color: #dfdfdf;\r\n    align-items: center;\r\n}\r\n.battle-selectInfo img{\r\n    width: 64px;\r\n    height: 64px;\r\n    border-radius: 16px;\r\n}\r\n.battle-selectInfo .battle-basicInfo{\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.battle-selectInfo i{\r\n    font-size: 36px;\r\n    cursor: pointer;\r\n}\r\n.battle-selectInfo .battle-basicInfo span{\r\n    font-size: 32px;\r\n    color: #1890ff\r\n}\r\n.battle-button{\r\n    text-align: center;\r\n}\r\n.battle-button button{\r\n    font-size: 20px;\r\n    padding: 20px 30px;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n}\r\n.score{\r\n    font-size: 22px;\r\n}\r\n.yellow{\r\n    color: yellow;\r\n}\r\n.gray{\r\n    color: gray;\r\n}\r\n.org{\r\n    color:rgb(255, 191, 116);\r\n}\r\n.result-center{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n.result-center>div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 4px;\r\n    padding: 32px;\r\n    background-color: rgb(221, 221, 221);\r\n    margin: 16px 128px;\r\n}\r\n.result-center>div img{\r\n    width: 200px;\r\n    height: 200px;\r\n    margin:0 0 15px;\r\n}\r\n.result-center>div i{\r\n    margin-right: 5px;\r\n}\r\n\r\n.result-info{\r\n    text-align: center;\r\n    font-size: 28px;\r\n    margin: 10px auto;\r\n}\r\n.result-name{\r\n    color: #1890ff;\r\n    font-size: 24px;\r\n    margin: 20px 0; \r\n}\r\n.result-btn{\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n.result-btn button{\r\n    font-size: 20px;\r\n    padding: 20px 30px;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 900px){\r\n    form {\r\n        width: 100%;\r\n    }\r\n    .battle-center{\r\n        display: block;\r\n    }\r\n    .battle-center>div{\r\n        margin: auto;\r\n    }\r\n    .battle-form-content-wrap{\r\n        flex-wrap: wrap;\r\n        padding: 20px 10px;\r\n    }\r\n    .battle-form-content-wrap>div{\r\n        width: 100%;\r\n    }\r\n\r\n    .result-center>div{\r\n        margin: 16px auto;\r\n    }\r\n    /* .result-center{\r\n        display: block;\r\n    }\r\n    .result-center>div{\r\n        margin: 16px auto;\r\n    }\r\n    .result-center img{\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    } */\r\n}\r\n@media (max-width: 600px){\r\n    .result-center{\r\n        display: block;\r\n    }\r\n    .result-center img{\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n    }\r\n}"],sourceRoot:""}]),o.locals={"battle-select":"battle-select--dnvuR","battle-title":"battle-title--oqjyP","battle-center":"battle-center--PQ9az","battle-info":"battle-info--u1sY4","battle-column":"battle-column--_fcsJ","battle-form-content-wrap":"battle-form-content-wrap--GJ72Z","battle-form-content":"battle-form-content--SH0fp",feedback:"feedback--ShDa8","battle-selectInfo":"battle-selectInfo--_cWy9","battle-basicInfo":"battle-basicInfo--_bdIT","battle-button":"battle-button--ksZSo",center:"center--_IA_P",score:"score--Vji1c",yellow:"yellow--hmPyn",gray:"gray--KcF34",org:"org--lU6jb","result-center":"result-center--yIz7R","result-info":"result-info--iAaUH","result-name":"result-name--kz4aX","result-btn":"result-btn--DK9SW"};const A=o},"./src/compontent/index.css":(e,n,r)=>{r.d(n,{Z:()=>h});var t=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=r.n(t),l=r("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(l),A=r("./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=r.n(A),s=r("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(s),c=r("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),u=r("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=r.n(u),f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/compontent/index.css"),C={};C.styleTagTransform=m(),C.setAttributes=d(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=p();var b=a()(f.default,C);if(!f.default.locals||e.hot.invalidate){var I=!f.default.locals,B=I?f:f.default.locals;e.hot.accept("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/compontent/index.css",(n=>{f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/compontent/index.css"),function(e,n,r){if(!e&&n||e&&!n)return!1;var t;for(t in e)if((!r||"default"!==t)&&e[t]!==n[t])return!1;for(t in n)if(!(r&&"default"===t||e[t]))return!1;return!0}(B,I?f:f.default.locals,I)?(B=I?f:f.default.locals,b(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const h=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/battle/battle.css":(e,n,r)=>{r.d(n,{Z:()=>h});var t=r("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=r.n(t),l=r("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=r.n(l),A=r("./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=r.n(A),s=r("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(s),c=r("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=r.n(c),u=r("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=r.n(u),f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/battle/battle.css"),C={};C.styleTagTransform=m(),C.setAttributes=d(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=p();var b=a()(f.default,C);if(!f.default.locals||e.hot.invalidate){var I=!f.default.locals,B=I?f:f.default.locals;e.hot.accept("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/battle/battle.css",(n=>{f=r("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/battle/battle.css"),function(e,n,r){if(!e&&n||e&&!n)return!1;var t;for(t in e)if((!r||"default"!==t)&&e[t]!==n[t])return!1;for(t in n)if(!(r&&"default"===t||e[t]))return!1;return!0}(B,I?f:f.default.locals,I)?(B=I?f:f.default.locals,b(f.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const h=f.default&&f.default.locals?f.default.locals:void 0}}]);
//# sourceMappingURL=292.7293e8a1.bundlesss.js.map