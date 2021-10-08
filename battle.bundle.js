"use strict";
(self["webpackChunkzlf"] = self["webpackChunkzlf"] || []).push([["battle"],{

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

/***/ })

}]);
//# sourceMappingURL=battle.bundle.js.map