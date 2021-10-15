"use strict";
(self["webpackChunkzlf"] = self["webpackChunkzlf"] || []).push([["src_pages_battle_result_js"],{

/***/ "./src/pages/battle/result.js":
/*!************************************!*\
  !*** ./src/pages/battle/result.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_compontent_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _src/compontent/loading */ "./src/compontent/loading.js");
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./battle.css */ "./src/pages/battle/battle.css");
/* module decorator */ module = __webpack_require__.hmd(module);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();



var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




 // import load from '../index.css';

var _default = function _default() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      oneInfos = _useState2[0],
      setOneInfos = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      loadingOne = _useState4[0],
      setOneloading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      loadingTwo = _useState6[0],
      setTwoloading = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      twoInfos = _useState8[0],
      setTwoInfos = _useState8[1]; // 把URL的参数解析为对象


  var parseUri = function parseUri(uri) {
    var params = {};

    try {
      var para = uri.split("?")[1];
      var arrPara = para.split("&");
      var n = arrPara.length;

      for (var i = 0; i < n; i += 1) {
        var arr = arrPara[i].split("=");

        var _arr = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, 2),
            a = _arr[0],
            b = _arr[1];

        params[a] = b;
      }

      return params;
    } catch (error) {
      window.location.href = "#/battle";
    }

    return params;
  };

  var getInfo = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var params;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = parseUri(window.location.hash);

              if (!(!params.playerOne || !params.playerTwo)) {
                _context.next = 4;
                break;
              }

              window.location.href = "#/battle";
              return _context.abrupt("return");

            case 4:
              axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.github.com/users/".concat(params.playerOne)).then(function (res) {
                setOneInfos(res.data);
                setOneloading(true);
              });
              axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.github.com/users/".concat(params.playerTwo)).then(function (res) {
                setTwoInfos(res.data);
                setTwoloading(true);
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getInfo() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getInfo();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    window.addEventListener("hashchange", getInfo);
    return window.removeEventListener("hashchange", getInfo);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var params;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = parseUri(window.location.hash);

            if (!(!params.playerOne || !params.playerTwo)) {
              _context2.next = 4;
              break;
            }

            window.location.href = "#/battle";
            return _context2.abrupt("return");

          case 4:
            axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.github.com/users/".concat(params.playerOne)).then(function (res) {
              setOneInfos(res.data);
              setOneloading(true);
            });
            axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.github.com/users/".concat(params.playerTwo)).then(function (res) {
              setTwoInfos(res.data);
              setTwoloading(true);
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);

  var reset = function reset() {
    window.location.href = "#/battle";
  };

  return loadingOne && loadingTwo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"]["result-result"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"]["result-center"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"]["result-info"])
  }, oneInfos.public_repos > twoInfos.public_repos ? "Winner" : null, oneInfos.public_repos === twoInfos.public_repos ? "Draw" : null, oneInfos.public_repos < twoInfos.public_repos ? "Loser" : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    src: oneInfos.avatar_url,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"].center, " ").concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"].score)
  }, "Scores: ", oneInfos.public_repos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"].center, " ").concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"]["result-name"])
  }, oneInfos.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-location-arrow"
  }), oneInfos.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-group"
  }), oneInfos.followers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-user-plus"
  }), oneInfos.following), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-code"
  }), oneInfos.public_repos)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"]["result-info"])
  }, twoInfos.public_repos > oneInfos.public_repos ? "Winner" : null, twoInfos.public_repos === oneInfos.public_repos ? "Draw" : null, twoInfos.public_repos < oneInfos.public_repos ? "Loser" : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    src: twoInfos.avatar_url,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _battle_css__WEBPACK_IMPORTED_MODULE_6__["default"].center
  }, "Scores: ", twoInfos.public_repos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"].center, " ").concat(_battle_css__WEBPACK_IMPORTED_MODULE_6__["default"]["result-name"])
  }, twoInfos.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-location-arrow"
  }), twoInfos.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-group"
  }), twoInfos.followers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-user-plus"
  }), twoInfos.following), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-code"
  }), twoInfos.public_repos))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _battle_css__WEBPACK_IMPORTED_MODULE_6__["default"]["result-btn"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      reset();
    }
  }, "Reset"))) :
  /*#__PURE__*/
  // <div className={load.loader}>
  //     <div className={load['loader-inner']}>
  //       <div className={load['loader-line-wrap']}>
  //         <div className={load['loader-line']} />
  //       </div>
  //       <div className={load['loader-line-wrap']}>
  //         <div className={load['loader-line']} />
  //       </div>
  //       <div className={load['loader-line-wrap']}>
  //         <div className={load['loader-line']} />
  //       </div>
  //       <div className={load['loader-line-wrap']}>
  //         <div className={load['loader-line']} />
  //       </div>
  //       <div className={load['loader-line-wrap']}>
  //         <div className={load['loader-line']} />
  //       </div>
  //     </div>
  //   </div>
  react__WEBPACK_IMPORTED_MODULE_3__.createElement(_src_compontent_loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

__signature__(_default, "useState{[oneInfos, setOneInfos]({})}\nuseState{[loadingOne, setOneloading](false)}\nuseState{[loadingTwo, setTwoloading](false)}\nuseState{[twoInfos, setTwoInfos]({})}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\battle\\result.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

}]);
//# sourceMappingURL=src_pages_battle_result_js.837f4133.bundlesss.js.map