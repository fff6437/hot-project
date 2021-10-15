"use strict";
(self["webpackChunkzlf"] = self["webpackChunkzlf"] || []).push([["src_pages_popular_index_js"],{

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
/* harmony import */ var _src_compontent_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _src/compontent/loading */ "./src/compontent/loading.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/pages/popular/index.css");
/* module decorator */ module = __webpack_require__.hmd(module);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





 // import load from '../index.css';

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

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      showBtn = _useState12[0],
      setShowBtn = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      errorInfo = _useState14[0],
      setErrorInfo = _useState14[1];

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
  };

  var backTop = function backTop() {
    document.documentElement.scrollTop = 0;
  };

  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop === 0) {
      setShowBtn(false);
    } else if (scrollTop > 200) {
      setShowBtn(true);
    }
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
    setShowBtn(false);
    setPage(1);
    setDataLoding(false);
    setLoading(false);
    setError(false);

    if (props.urlKey) {
      getStarList(props.urlKey, 0, false);
    }
  }, [props.urlKey]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"].list
  }, loading &&
  /*#__PURE__*/
  // <div className={load.loader}>
  //   <div className={load['loader-inner']}>
  //     <div className={load['loader-line-wrap']}>
  //       <div className={load['loader-line']} />
  //     </div>
  //     <div className={load['loader-line-wrap']}>
  //       <div className={load['loader-line']} />
  //     </div>
  //     <div className={load['loader-line-wrap']}>
  //       <div className={load['loader-line']} />
  //     </div>
  //     <div className={load['loader-line-wrap']}>
  //       <div className={load['loader-line']} />
  //     </div>
  //     <div className={load['loader-line-wrap']}>
  //       <div className={load['loader-line']} />
  //     </div>
  //   </div>
  // </div>
  react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_compontent_loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), !isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default()), {
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
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["list-content"])
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].ranking, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].center)
    }, "#", i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].img, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].center)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
      src: v.owner.avatar_url,
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["list-name"], " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].center)
    }, v.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-user ".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].green)
    }), v.owner.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-star ".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].yellow)
    }), v.stargazers_count, " stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-code-fork ".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].blue)
    }), v.forks, " forks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: _index_css__WEBPACK_IMPORTED_MODULE_6__["default"]["list-info"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("i", {
      className: "fa fa-exclamation-triangle ".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].pink)
    }), v.open_issues, " open issues"));
  })) : isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].errorModal, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].center)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", null, errorInfo || "加载失败，请稍后再试..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    role: "button",
    tabIndex: 0,
    onClick: function onClick() {
      setError(false);
    },
    onKeyUp: function onKeyUp() {}
  }, "\xD7")), showBtn && !isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    id: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].backTop),
    onClick: backTop,
    type: "button"
  }, "\u56DE\u5230\u9876\u90E8"), !loading && getDataLoding && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    style: {
      textAlign: "center",
      color: "skyblue"
    }
  }, "LOADING..."));
};

__signature__(_default, "useState{[page, setPage](0)}\nuseState{[data, setData]([])}\nuseState{[getDataLoding, setDataLoding](false)}\nuseState{[loading, setLoading](false)}\nuseState{[isError, setError](false)}\nuseState{[showBtn, setShowBtn](false)}\nuseState{[errorInfo, setErrorInfo](null)}\nuseEffect{}");

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

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setCheckedName(props.urlNmae);
  }, [props.urlNmae]);

  var getKeysInfo = function getKeysInfo(v) {
    if (v.name === checkedName) return;
    setCheckedName(v.name);
    props.getStarList(v.key);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(_index_css__WEBPACK_IMPORTED_MODULE_2__["default"].header, " ").concat(_index_css__WEBPACK_IMPORTED_MODULE_2__["default"].center)
  }, searchKeys.map(function (v, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      role: "button",
      href: "#/popular?key=".concat(v.name),
      tabIndex: 0,
      onKeyUp: function onKeyUp() {},
      key: i,
      className: "".concat(checkedName === v.name ? "".concat(_index_css__WEBPACK_IMPORTED_MODULE_2__["default"].checked) : "".concat(v.name)),
      onClick: function onClick() {
        return getKeysInfo(v);
      }
    }, v.name);
  }));
};

__signature__(_default, "useState{[checkedName, setCheckedName](\"All\")}\nuseEffect{}");

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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _src_pages_popular_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _src/pages/popular/header */ "./src/pages/popular/header.js");
/* harmony import */ var _src_pages_popular_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _src/pages/popular/content */ "./src/pages/popular/content.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var _default = function _default() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      urlKey = _useState2[0],
      setKey = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("All"),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      urlNmae = _useState4[0],
      setUrlNmae = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setError(false);
    var hash = window.location.hash.slice(2);

    if (hash) {
      if (hash.indexOf("popular") > -1) {
        var keys = hash.slice(12);

        if (hash === "popular") {
          setKey("stars:%3E1");
          setUrlNmae("All");
          return;
        }

        switch (keys) {
          case "All":
            setKey("stars:%3E1");
            setUrlNmae("All");
            break;

          case "Javascript":
            setKey("stars:%3E1+language:javascript");
            setUrlNmae("Javascript");
            break;

          case "Ruby":
            setKey("stars:%3E1+language:ruby");
            setUrlNmae("Ruby");
            break;

          case "Java":
            setKey("stars:%3E1+language:java");
            setUrlNmae("Java");
            break;

          case "CSS":
            setKey("stars:%3E1+language:css");
            setUrlNmae("CSS");
            break;

          default:
            setError(true);
            break;
        }
      } else {
        setError(true);
      }
    } else {
      setKey("stars:%3E1");
      setUrlNmae("All");
    }
  });
  return !error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_pages_popular_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    getStarList: function getStarList(v) {
      return setKey(v);
    },
    urlNmae: urlNmae
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_pages_popular_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    urlKey: urlKey
  })) : null;
};

__signature__(_default, "useState{[urlKey, setKey](\"\")}\nuseState{[urlNmae, setUrlNmae](\"All\")}\nuseState{[error, setError](false)}\nuseEffect{}");

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/popular/index.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/popular/index.css ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n\r\n.center--_zYA6{\r\n  text-align: center;\r\n}\r\n.header--RuXrD {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n.header--RuXrD a {\r\n  padding: 0 25px;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n}\r\n.header--RuXrD .checked--yZ4yN {\r\n  color: #1890ff;\r\n}\r\n.list--Tkx6Y {\r\n  padding: 0 200px;\r\n  /* display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around; */\r\n}\r\n.list--Tkx6Y>div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n.list--Tkx6Y .list-content--LgKjZ {\r\n  max-width: 200px;\r\n  min-width: 200px;\r\n  background-color: #EBEBEB;\r\n  margin: 20px 15px;\r\n  height: 370px;\r\n  padding: 15px;\r\n}\r\n.list--Tkx6Y .list-content--LgKjZ .img--AC36n {\r\n  width: 100%;\r\n}\r\n.list--Tkx6Y .list-content--LgKjZ .img--AC36n img {\r\n  width: 125px;\r\n}\r\n.list--Tkx6Y .list-content--LgKjZ .ranking--BQgBJ {\r\n  font-size: 20px;\r\n  line-height: 45px;\r\n  margin-bottom: 10px;\r\n}\r\n.list--Tkx6Y .list-content--LgKjZ .list-name--QkQeL {\r\n  line-height: 25px;\r\n  color: red;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  margin-top: 15px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.list--Tkx6Y .list-content--LgKjZ .list-info--_fijw {\r\n  padding-left: 10%;\r\n  margin: 10px 0;\r\n}\r\n\r\n#backTop--_qycO{\r\n  position: fixed;\r\n  right: 10px;\r\n  bottom: 10px;\r\n  border-radius: 4px;\r\n  background-color: skyblue;\r\n  color: #Fff;\r\n  padding: 3px 20px;\r\n  border-color: #fff;\r\n}\r\n\r\n/*.loader {\r\n  background: #000;\r\n  background: radial-gradient(#222, #000);\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 70px;\r\n  z-index: 99999;\r\n}\r\n.loader-inner {\r\n  bottom: 0;\r\n  height: 60px;\r\n  left: 0;\r\n  margin: auto;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100px;\r\n}\r\n.loader-line-wrap {\r\n  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;\r\n  box-sizing: border-box;\r\n  height: 50px;\r\n  left: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  transform-origin: 50% 100%;\r\n  width: 100px;\r\n}\r\n.loader-line {\r\n  border: 4px solid transparent;\r\n  border-radius: 100%;\r\n  box-sizing: border-box;\r\n  height: 100px;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100px;\r\n}\r\n.loader-line-wrap:nth-child(1) {\r\n  animation-delay: -50ms;\r\n}\r\n.loader-line-wrap:nth-child(2) {\r\n  animation-delay: -100ms;\r\n}\r\n.loader-line-wrap:nth-child(3) {\r\n  animation-delay: -150ms;\r\n}\r\n.loader-line-wrap:nth-child(4) {\r\n  animation-delay: -200ms;\r\n}\r\n.loader-line-wrap:nth-child(5) {\r\n  animation-delay: -250ms;\r\n}\r\n.loader-line-wrap:nth-child(1) .loader-line {\r\n  border-color: hsl(0, 80%, 60%);\r\n  height: 90px;\r\n  width: 90px;\r\n  top: 7px;\r\n}\r\n.loader-line-wrap:nth-child(2) .loader-line {\r\n  border-color: hsl(60, 80%, 60%);\r\n  height: 76px;\r\n  width: 76px;\r\n  top: 14px;\r\n}\r\n.loader-line-wrap:nth-child(3) .loader-line {\r\n  border-color: hsl(120, 80%, 60%);\r\n  height: 62px;\r\n  width: 62px;\r\n  top: 21px;\r\n}\r\n.loader-line-wrap:nth-child(4) .loader-line {\r\n  border-color: hsl(180, 80%, 60%);\r\n  height: 48px;\r\n  width: 48px;\r\n  top: 28px;\r\n}\r\n.loader-line-wrap:nth-child(5) .loader-line {\r\n  border-color: hsl(240, 80%, 60%);\r\n  height: 34px;\r\n  width: 34px;\r\n  top: 35px;\r\n} */\r\n/* @keyframes spin {\r\n  0%,\r\n  15% {\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n} */\r\n.errorModal--s_rpF {\r\n  width: 60%;\r\n  padding: 30px;\r\n  background-color: lightpink;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-family: \"微软雅黑\";\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.errorModal--s_rpF span {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.list-info--_fijw i{\r\n  width: 20px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.green--lgHd_{\r\n  color: green;\r\n}\r\n.yellow--K8g6R{\r\n  color: yellow;\r\n}\r\n.blue--d5bbz{\r\n  color:blue;\r\n}\r\n.pink--X6z55{\r\n  color: pink;\r\n}\r\n\r\n@media (max-width: 800px){\r\n  .list--Tkx6Y>div {\r\n    padding:0 20px;\r\n  }\r\n  .header--RuXrD span{\r\n    padding: 0 10px;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/pages/popular/index.css"],"names":[],"mappings":";;;AAGA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;EAChB;;kCAEgC;AAClC;AACA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,aAAa;AACf;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAwFG;AACH;;;;;;;;GAQG;AACH;EACE,UAAU;EACV,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,eAAe;AACjB;;;AAGA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,UAAU;AACZ;AACA;EACE,WAAW;AACb;;AAEA;EACE;IACE,cAAc;EAChB;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":["\r\n\r\n\r\n.center{\r\n  text-align: center;\r\n}\r\n.header {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n.header a {\r\n  padding: 0 25px;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n}\r\n.header .checked {\r\n  color: #1890ff;\r\n}\r\n.list {\r\n  padding: 0 200px;\r\n  /* display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around; */\r\n}\r\n.list>div {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n.list .list-content {\r\n  max-width: 200px;\r\n  min-width: 200px;\r\n  background-color: #EBEBEB;\r\n  margin: 20px 15px;\r\n  height: 370px;\r\n  padding: 15px;\r\n}\r\n.list .list-content .img {\r\n  width: 100%;\r\n}\r\n.list .list-content .img img {\r\n  width: 125px;\r\n}\r\n.list .list-content .ranking {\r\n  font-size: 20px;\r\n  line-height: 45px;\r\n  margin-bottom: 10px;\r\n}\r\n.list .list-content .list-name {\r\n  line-height: 25px;\r\n  color: red;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  margin-top: 15px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.list .list-content .list-info {\r\n  padding-left: 10%;\r\n  margin: 10px 0;\r\n}\r\n\r\n#backTop{\r\n  position: fixed;\r\n  right: 10px;\r\n  bottom: 10px;\r\n  border-radius: 4px;\r\n  background-color: skyblue;\r\n  color: #Fff;\r\n  padding: 3px 20px;\r\n  border-color: #fff;\r\n}\r\n\r\n/*.loader {\r\n  background: #000;\r\n  background: radial-gradient(#222, #000);\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 70px;\r\n  z-index: 99999;\r\n}\r\n.loader-inner {\r\n  bottom: 0;\r\n  height: 60px;\r\n  left: 0;\r\n  margin: auto;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100px;\r\n}\r\n.loader-line-wrap {\r\n  animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;\r\n  box-sizing: border-box;\r\n  height: 50px;\r\n  left: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  transform-origin: 50% 100%;\r\n  width: 100px;\r\n}\r\n.loader-line {\r\n  border: 4px solid transparent;\r\n  border-radius: 100%;\r\n  box-sizing: border-box;\r\n  height: 100px;\r\n  left: 0;\r\n  margin: 0 auto;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 100px;\r\n}\r\n.loader-line-wrap:nth-child(1) {\r\n  animation-delay: -50ms;\r\n}\r\n.loader-line-wrap:nth-child(2) {\r\n  animation-delay: -100ms;\r\n}\r\n.loader-line-wrap:nth-child(3) {\r\n  animation-delay: -150ms;\r\n}\r\n.loader-line-wrap:nth-child(4) {\r\n  animation-delay: -200ms;\r\n}\r\n.loader-line-wrap:nth-child(5) {\r\n  animation-delay: -250ms;\r\n}\r\n.loader-line-wrap:nth-child(1) .loader-line {\r\n  border-color: hsl(0, 80%, 60%);\r\n  height: 90px;\r\n  width: 90px;\r\n  top: 7px;\r\n}\r\n.loader-line-wrap:nth-child(2) .loader-line {\r\n  border-color: hsl(60, 80%, 60%);\r\n  height: 76px;\r\n  width: 76px;\r\n  top: 14px;\r\n}\r\n.loader-line-wrap:nth-child(3) .loader-line {\r\n  border-color: hsl(120, 80%, 60%);\r\n  height: 62px;\r\n  width: 62px;\r\n  top: 21px;\r\n}\r\n.loader-line-wrap:nth-child(4) .loader-line {\r\n  border-color: hsl(180, 80%, 60%);\r\n  height: 48px;\r\n  width: 48px;\r\n  top: 28px;\r\n}\r\n.loader-line-wrap:nth-child(5) .loader-line {\r\n  border-color: hsl(240, 80%, 60%);\r\n  height: 34px;\r\n  width: 34px;\r\n  top: 35px;\r\n} */\r\n/* @keyframes spin {\r\n  0%,\r\n  15% {\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n} */\r\n.errorModal {\r\n  width: 60%;\r\n  padding: 30px;\r\n  background-color: lightpink;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-family: \"微软雅黑\";\r\n  font-size: 1.2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.errorModal span {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.list-info i{\r\n  width: 20px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.green{\r\n  color: green;\r\n}\r\n.yellow{\r\n  color: yellow;\r\n}\r\n.blue{\r\n  color:blue;\r\n}\r\n.pink{\r\n  color: pink;\r\n}\r\n\r\n@media (max-width: 800px){\r\n  .list>div {\r\n    padding:0 20px;\r\n  }\r\n  .header span{\r\n    padding: 0 10px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"center": "center--_zYA6",
	"header": "header--RuXrD",
	"checked": "checked--yZ4yN",
	"list": "list--Tkx6Y",
	"list-content": "list-content--LgKjZ",
	"img": "img--AC36n",
	"ranking": "ranking--BQgBJ",
	"list-name": "list-name--QkQeL",
	"list-info": "list-info--_fijw",
	"backTop": "backTop--_qycO",
	"errorModal": "errorModal--s_rpF",
	"green": "green--lgHd_",
	"yellow": "yellow--K8g6R",
	"blue": "blue--d5bbz",
	"pink": "pink--X6z55"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/popular/index.css":
/*!*************************************!*\
  !*** ./src/pages/popular/index.css ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/popular/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/popular/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/pages/popular/index.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_postcss_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_pages_popular_index_js.18d173ae.bundlesss.js.map