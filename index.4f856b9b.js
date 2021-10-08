/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var src_pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/index */ "./src/pages/index.js");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var src_styles_index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/styles/index.less */ "./src/styles/index.less");
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




 // import 'src/styles/index.css';


react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_pages_index__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("root"));

/***/ }),

/***/ "./src/pages/battle/index.js":
/*!***********************************!*\
  !*** ./src/pages/battle/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_pages_battle_selectPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pages/battle/selectPlayer */ "./src/pages/battle/selectPlayer.js");
/* harmony import */ var src_pages_battle_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/battle/result */ "./src/pages/battle/result.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var _default = function _default(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, !props.isBattle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_pages_battle_selectPlayer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    battle: function battle() {
      props.battle();
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_pages_battle_result__WEBPACK_IMPORTED_MODULE_2__["default"], {
    player: props.player,
    reset: function reset() {
      props.reset();
    }
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\battle\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

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
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle.css */ "./src/pages/battle/battle.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index.css */ "./src/pages/index.css");
/* module decorator */ module = __webpack_require__.hmd(module);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();



var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





console.log(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);

var _default = function _default(props) {
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
      setTwoInfos = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.github.com/users/".concat(props.player.playerOne)).then(function (res) {
              setOneInfos(res.data);
              setOneloading(true);
            });
            axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.github.com/users/".concat(props.player.playerTwo)).then(function (res) {
              setTwoInfos(res.data);
              setTwoloading(true);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var reset = function reset() {
    window.location.href = "#/battle";
    props.reset();
  };

  return loadingOne && loadingTwo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"]["result-result"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"]["result-center"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"]["result-info"])
  }, oneInfos.public_repos > twoInfos.public_repos ? "Winner" : "Loser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    src: oneInfos.avatar_url,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"].center, " ").concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"].score)
  }, "Scores: ", oneInfos.public_repos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"].center, " ").concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"]["result-name"])
  }, oneInfos.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-location-arrow"
  }), oneInfos.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-group"
  }), oneInfos.followers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-user-plus"
  }), oneInfos.following), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-code"
  }), oneInfos.public_repos)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"]["result-info"])
  }, twoInfos.public_repos > oneInfos.public_repos ? "Winner" : "Loser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    src: twoInfos.avatar_url,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _battle_css__WEBPACK_IMPORTED_MODULE_5__["default"].center
  }, "Scores: ", twoInfos.public_repos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"].center, " ").concat(_battle_css__WEBPACK_IMPORTED_MODULE_5__["default"]["result-name"])
  }, twoInfos.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-location-arrow"
  }), twoInfos.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-group"
  }), twoInfos.followers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-user-plus"
  }), twoInfos.following), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("i", {
    className: "fa fa-code"
  }), twoInfos.public_repos))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _battle_css__WEBPACK_IMPORTED_MODULE_5__["default"]["result-btn"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      reset();
    }
  }, "Reset"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"].loader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-inner"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  }))));
};

__signature__(_default, "useState{[oneInfos, setOneInfos]({})}\nuseState{[loadingOne, setOneloading](false)}\nuseState{[loadingTwo, setTwoloading](false)}\nuseState{[twoInfos, setTwoInfos]({})}\nuseEffect{}");

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

/***/ }),

/***/ "./src/pages/battle/selectPlayer.js":
/*!******************************************!*\
  !*** ./src/pages/battle/selectPlayer.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle.css */ "./src/pages/battle/battle.css");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


 // import { useFormik } from 'formik';



var _default = function _default(props) {
  // const [checkedName, setCheckedName] = useState("All");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      playerOne = _useState2[0],
      setPlayerOne = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      playerTwo = _useState4[0],
      setPlayerTwo = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      oneImg = _useState6[0],
      setOneImg = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      twoImg = _useState8[0],
      setTwoImg = _useState8[1];

  var setPlay = function setPlay(e, name) {
    if (name === "one") {
      setPlayerOne(e);
      setOneImg("https://github.com/".concat(e, ".png?size=200"));
    } else {
      setPlayerTwo(e);
      setTwoImg("https://github.com/".concat(e, ".png?size=200"));
    }
  };

  var battle = function battle() {
    window.location.href = "#/result?playerOne=".concat(playerOne, "&playerTwo=").concat(playerTwo);
    props.battle();
  };

  var clearPlayer = function clearPlayer(name) {
    if (name === "one") {
      setPlayerOne("");
      setOneImg("");
    } else {
      setPlayerTwo("");
      setTwoImg("");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-select"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-title"])
  }, "Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-center"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-info"])
  }, "Enter two Github Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-column"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-users ".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"].org)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-info"])
  }, "Battle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-column"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-fighter-jet ".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"].gray)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-info"])
  }, "See the winner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-column"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-trophy ".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"].yellow)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Players"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-form-content-wrap"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, " Player One "), !oneImg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      playerOne: ""
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.playerOne) {
        errors.playerOne = "Required";
      }

      return errors;
    },
    onSubmit: function onSubmit(values, actions) {
      console.log(values);
      actions.setSubmitting(false);
      setPlay(values.playerOne, "one");
    }
  }, function (formProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
      onSubmit: formProps.handleSubmit,
      className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-form-content"])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      type: "text",
      onChange: formProps.handleChange,
      value: formProps.values.playerOne,
      name: "playerOne",
      placeholder: "github username"
    }), formProps.errors.playerOne && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      id: "feedback"
    }, formProps.errors.playerOne), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: "submit"
    }, "Submit"));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-selectInfo"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-basicInfo"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: oneImg,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, playerOne)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: function onClick() {
      return clearPlayer("one");
    },
    role: "button",
    tabIndex: -1,
    onKeyUp: function onKeyUp() {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-times-circle",
    style: {
      color: "red"
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, " Player Two "), !twoImg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: {
      playerTwo: ""
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.playerTwo) {
        errors.playerTwo = "Required";
      }

      return errors;
    },
    onSubmit: function onSubmit(values, actions) {
      actions.setSubmitting(false);
      setPlay(values.playerTwo, "two");
    }
  }, function (formProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
      onSubmit: formProps.handleSubmit,
      className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-form-content"])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      type: "text",
      onChange: formProps.handleChange,
      value: formProps.values.playerTwo,
      name: "playerTwo",
      placeholder: "github username"
    }), formProps.errors.playerTwo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      id: "feedback"
    }, formProps.errors.playerTwo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: "submit"
    }, "Submit"));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-selectInfo"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-basicInfo"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: twoImg,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, playerTwo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: function onClick() {
      return clearPlayer("two");
    },
    role: "button",
    tabIndex: -2,
    onKeyUp: function onKeyUp() {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-times-circle",
    style: {
      color: "red"
    }
  }))))), oneImg && twoImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_3__["default"]["battle-button"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      battle();
    }
  }, "Battle")));
};

__signature__(_default, "useState{[playerOne, setPlayerOne](\"\")}\nuseState{[playerTwo, setPlayerTwo](\"\")}\nuseState{[oneImg, setOneImg](\"\")}\nuseState{[twoImg, setTwoImg](\"\")}");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\battle\\selectPlayer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var src_pages_popular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/popular */ "./src/pages/popular/index.js");
/* harmony import */ var src_pages_battle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/battle */ "./src/pages/battle/index.js");
/* harmony import */ var _node_modules_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


 // import Header from "src/pages/popular/header";
// import Content from "src/pages/popular/content";
// import SelectPlayer from "src/pages/battle/selectPlayer";
// import Result from "src/pages/battle/result";


 // import "font-awesome/css/font-awesome.min.css";




function GetComponent() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! src/pages/battle */ "./src/pages/battle/index.js"));
}

console.dir(GetComponent);

function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("stars:%3E1"),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      urlKey = _useState2[0],
      setKey = _useState2[1]; // const [tag, setTag] = useState('battle');


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("popular"),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      tag = _useState4[0],
      setTag = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      player = _useState6[0],
      setPlayer = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      isBattle = _useState8[0],
      setBattle = _useState8[1]; // 把URL的参数解析为对象


  var parseUri = function parseUri(uri) {
    var para = uri.split("?")[1];
    var arrPara = para.split("&");
    var n = arrPara.length;
    var params = {};

    for (var i = 0; i < n; i += 1) {
      var arr = arrPara[i].split("=");

      var _arr = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr, 2),
          a = _arr[0],
          b = _arr[1];

      params[a] = b;
    }

    return params;
  };

  var _battle = function battle() {
    setPlayer(parseUri(window.location.hash));
    setBattle(true);
  };

  var _reset = function reset() {
    setPlayer({});
    setBattle(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var hash = window.location.hash.slice(2, 8);

    if (hash && hash === "battle") {
      setTag("battle");
    } else if (hash && hash === "result") {
      setTag("battle");
      setPlayer(parseUri(window.location.hash));
      setBattle(true);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_5__["default"]["item-top"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    role: "button",
    href: "#",
    tabIndex: 0,
    onKeyUp: function onKeyUp() {},
    className: "".concat(tag === "popular" ? "".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].checkedTag) : ""),
    onClick: function onClick() {
      setTag("popular");
      setBattle(false);
    }
  }, "popular"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    role: "button",
    href: "#/battle",
    tabIndex: 0,
    onKeyUp: function onKeyUp() {},
    className: "".concat(tag === "battle" ? "".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].checkedTag) : ""),
    onClick: function onClick() {
      setTag("battle");
      setBattle(false);
    }
  }, "battle")), tag === "popular" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(src_pages_popular__WEBPACK_IMPORTED_MODULE_2__["default"], {
    urlKey: urlKey,
    getStarList: function getStarList(key) {
      return setKey(key);
    }
  }) :
  /*#__PURE__*/
  // <div>
  //   {!isBattle ? (
  //     <SelectPlayer
  //       battle={() => {
  //         battle();
  //       }}
  //     />
  //   ) : (
  //     <Result
  //       player={player}
  //       reset={() => {
  //         reset();
  //       }}
  //     />
  //   )}
  // </div>
  react__WEBPACK_IMPORTED_MODULE_1__.createElement(src_pages_battle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isBattle: isBattle,
    player: player,
    reset: function reset() {
      _reset();
    },
    battle: function battle() {
      _battle();
    }
  }));
}

__signature__(App, "useState{[urlKey, setKey](\"stars:%3E1\")}\nuseState{[tag, setTag](\"popular\")}\nuseState{[player, setPlayer]({})}\nuseState{[isBattle, setBattle](false)}\nuseEffect{}");

var _default = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__.hot)(App);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GetComponent, "GetComponent", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\index.js");
  reactHotLoader.register(App, "App", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\index.js");
  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/pages/popular/content.js":
/*!**************************************!*\
  !*** ./src/pages/popular/content.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/pages/popular/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index.css */ "./src/pages/index.css");
/* module decorator */ module = __webpack_require__.hmd(module);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






console.log(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"]);

var _default = function _default(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      getDataLoding = _useState6[0],
      setDataLoding = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      isError = _useState10[0],
      setError = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      errorInfo = _useState12[0],
      setErrorInfo = _useState12[1];

  var getStarList = function getStarList(key, pages) {
    var isMore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (getDataLoding) return;
    setDataLoding(true);
    setPage(pages + 1);

    if (!isMore) {
      setLoading(true);
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.github.com/search/repositories?q=".concat(key, "&sort=stars&order=desc&type=Repositories&page=").concat(pages + 1)).then(function (res) {
      if (res.status === 200) {
        if (isMore) {
          setData([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data.items)));
        } else {
          setData(res.data.items);
          setLoading(false);
        }
      }

      setDataLoding(false);
    })["catch"](function (error) {
      setDataLoding(false);
      setLoading(false);
      setErrorInfo(error.response.data.message);
      setError(true);
    });
  }; // window.onscroll = () => {
  //   // 变量scrollTop是滚动条滚动时，距离顶部的距离
  //   const scrollTop =
  //     document.documentElement.scrollTop || document.body.scrollTop;
  //   // 变量windowHeight是可视区的高度
  //   const windowHeight =
  //     document.documentElement.clientHeight || document.body.clientHeight;
  //   // 变量scrollHeight是滚动条的总高度
  //   const scrollHeight =
  //     document.documentElement.scrollHeight || document.body.scrollHeight;
  //   // 滚动条到底部的条件
  //   if (scrollTop + windowHeight === scrollHeight) {
  //     // 写后台加载数据的函数
  //     // console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
  //     getStarList(props.urlKey, page);
  //   }
  // };
  // 加载更多数据


  var loadMoreData = function loadMoreData() {
    // page 当前滚动到了第几页
    // const { data, count } = this.state
    getStarList(props.urlKey, page); // 超过200条数据 不继续监听下拉事件
    // if (count && data.length >= count) {
    //   return false
    // }
    // // page 是当前请求第几页数据
    // // limit 每页我需要返回的数据条数
    // axios.post('https://blogs.zdldove.top/Home/Apis/listWithPage',qs.stringify({pages, limit: 20}))
    //   .then(res => {
    //     this.setState({
    //       data: [...data, ...arr], //拼接每次加载的数据 arr是我自定义的数据
    //       count: res.data.result.count,
    //     }, () => {
    //      console.log(this.state) //查看数据是否已经改变
    //     })
    //   })
    //   .catch(err => console.log(err))
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setData([]);
    setPage(1);
    setDataLoding(false);
    setLoading(false);
    setError(false);
    getStarList(props.urlKey, 0, false);
  }, [props.urlKey]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_5__["default"].list
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"].loader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-inner"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line-wrap"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["loader-line"]
  })))), !isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4___default()), {
    initialLoad: false // 不让它进入直接加载
    ,
    pageStart: 1 // 设置初始化请求的页数
    ,
    loadMore: loadMoreData // 监听的ajax请求
    ,
    hasMore: true // 是否继续监听滚动事件 true 监听 | false 不再监听
    ,
    useWindow: true // 不监听 window 滚动条

  }, " ", data && data.map(function (v, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      key: i,
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"]["list-content"])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].ranking, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].center)
    }, "#", i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].img, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].center)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
      src: v.owner.avatar_url,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"]["list-name"], " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].center)
    }, v.owner.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_5__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-user ".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].green)
    }), v.owner.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_5__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-star ".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].yellow)
    }), v.stargazers_count, " stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_5__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-code-fork ".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].blue)
    }), v.forks, " forks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_5__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-exclamation-triangle ".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].pink)
    }), v.open_issues, " open issues"));
  })) : isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].errorModal, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].center)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, errorInfo || "加载失败，请稍后再试..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      setError(false);
    },
    onKeyUp: function onKeyUp() {}
  }, "\xD7")));
};

__signature__(_default, "useState{[page, setPage](0)}\nuseState{[data, setData]([])}\nuseState{[getDataLoding, setDataLoding](false)}\nuseState{[loading, setLoading](false)}\nuseState{[isError, setError](false)}\nuseState{[errorInfo, setErrorInfo](null)}\nuseEffect{}");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\popular\\content.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/pages/popular/header.js":
/*!*************************************!*\
  !*** ./src/pages/popular/header.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/popular/index.css");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var searchKeys = [{
  name: "All",
  key: "stars:%3E1"
}, {
  name: "Javascript",
  key: "stars:%3E1+language:javascript"
}, {
  name: "Ruby",
  key: "stars:%3E1+language:ruby"
}, {
  name: "Java",
  key: "stars:%3E1+language:java"
}, {
  name: "CSS",
  key: "stars:%3E1+language:css"
}];

var _default = function _default(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All"),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      checkedName = _useState2[0],
      setCheckedName = _useState2[1];

  var getKeysInfo = function getKeysInfo(v) {
    if (v.name === checkedName) return;
    setCheckedName(v.name);
    props.getStarList(v.key);
  };

  console.log(555);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_2__["default"].header, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_2__["default"].center)
  }, searchKeys.map(function (v, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      role: "button",
      href: "#",
      tabIndex: 0,
      onKeyUp: function onKeyUp() {},
      key: i,
      className: "".concat(checkedName === v.name ? "".concat(_index_css__WEBPACK_IMPORTED_MODULE_2__["default"].checked) : ""),
      onClick: function onClick() {
        return getKeysInfo(v);
      }
    }, v.name);
  }));
};

__signature__(_default, "useState{[checkedName, setCheckedName](\"All\")}");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(searchKeys, "searchKeys", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\popular\\header.js");
  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\popular\\header.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/pages/popular/index.js":
/*!************************************!*\
  !*** ./src/pages/popular/index.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_pages_popular_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pages/popular/header */ "./src/pages/popular/header.js");
/* harmony import */ var src_pages_popular_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/popular/content */ "./src/pages/popular/content.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var _default = function _default(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_pages_popular_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    getStarList: function getStarList(v) {
      return props.getStarList(v);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_pages_popular_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    urlKey: props.urlKey
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\pages\\popular\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/styles/index.less":
/*!*******************************!*\
  !*** ./src/styles/index.less ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/battle/battle.css":
/*!*************************************!*\
  !*** ./src/pages/battle/battle.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"battle-select":"qcEIFLHGRL2QU2zYjunJ","battle-title":"WpiBuMTvpeACGE48YF6Z","battle-center":"U11LM8NyWNxtly6JH7zU","battle-info":"nZKmjEspN6k54fk10lkh","battle-column":"a7RTzlOH6xI_s_ZUa1_V","battle-form-content-wrap":"cHZkdH76I04eLZ7EEvkl","battle-form-content":"z8_iS0I9mAt_SiW37Thx","feedback":"_fXfP7cIGmwD64g1UIyb","battle-selectInfo":"nMPWj5cPZsCGPFoT4ptm","battle-basicInfo":"Ieee5M0sO9ELVTlCFLsA","battle-button":"auuPWhyLfNhuW2QNDQKR","center":"X7P91Tl88aTubyjBoIVN","score":"OyWDe4wgU5YQIGMiN1zf","yellow":"XOVsX5fMro6OLUexa9bS","gray":"D3Qa2lxGHQj8UXWoqk88","org":"_JSgWMxFAQEqXlQQKc0Z","result-center":"O5xc36kYuQSzXCDzDJIQ","result-info":"oSB6boLKYo4uBUMbcYmE","result-name":"Oqbb0HAXvfuzxxHrS_mP","result-btn":"_4n7aAkrIfVCCpLFWQmp"});

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"item-top":"VvuP10cuuAAk2Hh7Qfse","checkedTag":"AOoMlMt2XYH_GwHwVlYH","loader":"GDFkXHcri9feQQzRBC8Y","loader-inner":"JJRqg0Z8INYqJ0A1DLdX","loader-line-wrap":"nanw7n4ynLAGsykyKCxV","spin":"VbzUqnEhUrXXdJqq986D","loader-line":"hi7x6M8bfY_Z93lRUIBj"});

/***/ }),

/***/ "./src/pages/popular/index.css":
/*!*************************************!*\
  !*** ./src/pages/popular/index.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"center":"J6g0EDc5cxLrMfbwD_Hv","header":"uBkpd7YgNtiwK1VOVvvg","checked":"_Q7TtaKFpKfILLGWedPA","list":"X6OKJZ3RPdDkuPezgZrS","list-content":"IXjWRBIJogYtHdyVU7Ph","img":"_3K8BXrJ_C9D29s_0pqM","ranking":"eO6M77gjmMZVIwY_IGH_","list-name":"N2zFZk0dcUSWvs0rQA7x","list-info":"Z4qwAzW2dh7JB2lBW9XB","errorModal":"_c7jyweK5J4NHUIvDQbF","green":"KImyZ5GR9XFXpQM_A12h","yellow":"iOxGBmyUBEcAwnm5u2Lz","blue":"yC9R15OfXR00s_uIbbJb","pink":"WJdz39XNMHg4qkk873XF"});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkzlf"] = self["webpackChunkzlf"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.4f856b9b.js.map