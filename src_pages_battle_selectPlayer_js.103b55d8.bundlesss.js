"use strict";
(self["webpackChunkzlf"] = self["webpackChunkzlf"] || []).push([["src_pages_battle_selectPlayer_js"],{

/***/ "./src/compontent/formiks.js":
/*!***********************************!*\
  !*** ./src/compontent/formiks.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var formiks = function formiks(props) {
  var style = props.style,
      name = props.name,
      isHave = props.isHave,
      num = props.num,
      loading = props.loading,
      error = props.error;
  return !isHave ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
    initialValues: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, ""),
    validate: function validate(values) {
      var errors = {};

      if (!values[name]) {
        errors[name] = "请输入";
      }

      return errors;
    },
    onSubmit: function onSubmit(values, actions) {
      actions.setSubmitting(false);
      props.setPlay(values[name], num);
    }
  }, function (formProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
      onSubmit: formProps.handleSubmit,
      className: "".concat(style["battle-form-content"])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      type: "text",
      onChange: formProps.handleChange,
      value: formProps.values[name],
      name: name,
      placeholder: "github username"
    }), formProps.errors[name] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      id: style.feedback
    }, formProps.errors[name]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: "submit",
      disabled: loading
    }, "Submit"));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(style["battle-selectInfo"])
  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(style["battle-basicInfo"]),
    style: {
      color: "red"
    }
  }, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(style["battle-basicInfo"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: props.img,
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, props.player)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    onClick: function onClick() {
      return props.clearPlayer(num);
    },
    role: "button",
    tabIndex: -1,
    onKeyUp: function onKeyUp() {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-times-circle",
    style: {
      color: "red"
    }
  })));
};

var _default = formiks;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(formiks, "formiks", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\compontent\\formiks.js");
  reactHotLoader.register(_default, "default", "D:\\\u65B0\u5EFA\u6587\u4EF6\u5939\\hot-project-engineering\\src\\compontent\\formiks.js");
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
/* harmony import */ var _src_compontent_formiks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _src/compontent/formiks */ "./src/compontent/formiks.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battle.css */ "./src/pages/battle/battle.css");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

 // import { Formik } from "formik";


 // import { useFormik } from 'formik';



var _default = function _default() {
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

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      oneLoading = _useState8[0],
      setOneLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      twoLoading = _useState10[0],
      setTwoLoading = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      oneError = _useState12[0],
      setOneError = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
      twoError = _useState14[0],
      setTwoError = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
      twoImg = _useState16[0],
      setTwoImg = _useState16[1];

  var _setPlay = function setPlay(e, name) {
    if (name === "one") {
      setOneLoading(true);
      setPlayerOne(e);
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.github.com/users/".concat(e)).then(function () {
        setOneImg("https://github.com/".concat(e, ".png?size=200"));
      })["catch"](function (error) {
        setOneError(error.response.data.message);
      })["finally"](function () {
        setOneLoading(false);
      }); // setOneImg(`https://github.com/${e}.png?size=200`);
    } else {
      setTwoLoading(true);
      setPlayerTwo(e);
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.github.com/users/".concat(e)).then(function () {
        setTwoImg("https://github.com/".concat(e, ".png?size=200"));
      })["catch"](function (error) {
        setTwoError(error.response.data.message);
      })["finally"](function () {
        setTwoLoading(false);
      });
    }
  };

  var battle = function battle() {
    window.location.href = "#/battle/result?playerOne=".concat(playerOne, "&playerTwo=").concat(playerTwo); // props.battle();
  };

  var clearPlayer = function clearPlayer(name) {
    if (name === "one") {
      setPlayerOne("");
      setOneImg("");
      setOneError("");
    } else {
      setPlayerTwo("");
      setTwoImg("");
      setTwoError("");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-select"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-title"])
  }, "Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-center"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-info"])
  }, "Enter two Github Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-column"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-users ".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"].org)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-info"])
  }, "Battle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-column"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-fighter-jet ".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"].gray)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-info"])
  }, "See the winner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-column"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "fa fa-trophy ".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"].yellow)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Players"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-form-content-wrap"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, " Player One "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_compontent_formiks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: _battle_css__WEBPACK_IMPORTED_MODULE_4__["default"],
    num: "one",
    loading: oneLoading,
    error: oneError,
    name: "playerTwo",
    isHave: oneImg || oneError,
    setPlay: function setPlay(v, i) {
      _setPlay(v, i);
    },
    clearPlayer: clearPlayer,
    img: oneImg,
    player: playerOne
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, " Player Two "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_compontent_formiks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: _battle_css__WEBPACK_IMPORTED_MODULE_4__["default"],
    num: "two",
    name: "playerTwo",
    loading: twoLoading,
    error: twoError,
    isHave: twoImg || twoError,
    setPlay: function setPlay(v, i) {
      _setPlay(v, i);
    },
    clearPlayer: clearPlayer,
    img: twoImg,
    player: playerTwo
  }))), oneImg && twoImg && twoImg !== oneImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_battle_css__WEBPACK_IMPORTED_MODULE_4__["default"]["battle-button"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      battle();
    }
  }, "Battle")));
};

__signature__(_default, "useState{[playerOne, setPlayerOne](\"\")}\nuseState{[playerTwo, setPlayerTwo](\"\")}\nuseState{[oneImg, setOneImg](\"\")}\nuseState{[oneLoading, setOneLoading](false)}\nuseState{[twoLoading, setTwoLoading](false)}\nuseState{[oneError, setOneError](\"\")}\nuseState{[twoError, setTwoError](\"\")}\nuseState{[twoImg, setTwoImg](\"\")}");

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

/***/ })

}]);
//# sourceMappingURL=src_pages_battle_selectPlayer_js.103b55d8.bundlesss.js.map