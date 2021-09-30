"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;
var searchKeys = [{
  name: 'All',
  key: 'stars:%3E1'
}, {
  name: 'Javascript',
  key: 'stars:%3E1+language:javascript'
}, {
  name: 'Ruby',
  key: 'stars:%3E1+language:ruby'
}, {
  name: 'Java',
  key: 'stars:%3E1+language:java'
}, {
  name: 'CSS',
  key: 'stars:%3E1+language:css'
}];

var Header = function Header(props) {
  var _useState = useState('All'),
      _useState2 = _slicedToArray(_useState, 2),
      checkedName = _useState2[0],
      setCheckedName = _useState2[1];

  var getKeysInfo = function getKeysInfo(v) {
    if (v.name === checkedName) return;
    setCheckedName(v.name);
    props.getStarList(v.key);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, searchKeys.map(function (v, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "".concat(checkedName === v.name ? 'checked' : '', " item"),
      onClick: function onClick() {
        return getKeysInfo(v);
      }
    }, v.name);
  }));
};

var Content = function Content(props) {
  var _useState3 = useState(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      getDataLoding = _useState8[0],
      setDataLoding = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var _useState13 = useState(null),
      _useState14 = _slicedToArray(_useState13, 2),
      errorInfo = _useState14[0],
      setErrorInfo = _useState14[1];

  var getStarList = function getStarList(key, page) {
    var isMore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (getDataLoding) return;
    setDataLoding(true);
    setPage(++page);

    if (!isMore) {
      setLoading(true);
    }

    axios.get("https://api.github.com/search/repositories?q=".concat(key, "&sort=stars&order=desc&type=Repositories&page=").concat(page)).then(function (res) {
      console.log(res);

      if (res.status === 200) {
        if (isMore) {
          setData([].concat(_toConsumableArray(data), _toConsumableArray(res.data.items)));
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

  window.onscroll = function () {
    //变量scrollTop是滚动条滚动时，距离顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度

    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度

    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件

    if (scrollTop + windowHeight == scrollHeight) {
      //写后台加载数据的函数
      // console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
      getStarList(props.urlKey, page);
    }
  };

  useEffect(function () {
    setData([]);
    setPage(1);
    setDataLoding(false);
    setLoading(false);
    setError(false);
    getStarList(props.urlKey, 0, false);
  }, [props.urlKey]);
  return /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, loading && /*#__PURE__*/React.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-line-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "loader-line-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "loader-line-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "loader-line-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "loader-line-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader-line"
  })))), !error ? data && data.map(function (v, i) {
    var forks = v.forks,
        open_issues = v.open_issues,
        stargazers_count = v.stargazers_count,
        _v$owner = v.owner,
        avatar_url = _v$owner.avatar_url,
        login = _v$owner.login;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "list-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ranking"
    }, "#", i + 1), /*#__PURE__*/React.createElement("div", {
      className: "img"
    }, /*#__PURE__*/React.createElement("img", {
      src: avatar_url,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "list-name"
    }, login), /*#__PURE__*/React.createElement("div", {
      className: "list-info"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-user",
      style: {
        color: "green",
        width: "20px",
        marginRight: '5px'
      }
    }), login), /*#__PURE__*/React.createElement("div", {
      className: "list-info"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-star",
      style: {
        color: "yellow",
        width: "20px",
        marginRight: '5px'
      }
    }), stargazers_count, " stars"), /*#__PURE__*/React.createElement("div", {
      className: "list-info"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-code-fork",
      style: {
        color: "blue",
        width: "20px",
        marginRight: '5px'
      }
    }), forks, " forks"), /*#__PURE__*/React.createElement("div", {
      className: "list-info"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-exclamation-triangle",
      style: {
        color: "pink",
        width: "20px",
        marginRight: '5px'
      }
    }), open_issues, " open issues"));
  }) : error && /*#__PURE__*/React.createElement("div", {
    className: "errorModal"
  }, /*#__PURE__*/React.createElement("p", null, errorInfo ? errorInfo : '加载失败，请稍后再试...'), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      setError(false);
    }
  }, "\xD7")));
};

function App(props) {
  var _useState15 = useState('stars:%3E1'),
      _useState16 = _slicedToArray(_useState15, 2),
      urlKey = _useState16[0],
      setKey = _useState16[1];

  return /*#__PURE__*/React.createElement("div", {
    id: "root"
  }, /*#__PURE__*/React.createElement(Header, {
    getStarList: function getStarList(key) {
      return setKey(key);
    }
  }), /*#__PURE__*/React.createElement(Content, {
    urlKey: urlKey
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('container') //指明插⼊位置
);