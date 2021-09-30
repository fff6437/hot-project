import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'node_modules/font-awesome/css/font-awesome.min.css';

export default (props) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [getDataLoding, setDataLoding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);
  const getStarList = (key, pages, isMore = true) => {
    if (getDataLoding) return;
    setDataLoding(true);
    setPage(pages + 1);
    if (!isMore) {
      setLoading(true);
    }
    axios.get(`https://api.github.com/search/repositories?q=${key}&sort=stars&order=desc&type=Repositories&page=${pages + 1}`).then((res) => {
      if (res.status === 200) {
        if (isMore) {
          setData([...data, ...res.data.items]);
        } else {
          setData(res.data.items);
          setLoading(false);
        }
      }
      setDataLoding(false);
    }).catch((error) => {
      setDataLoding(false);
      setLoading(false);
      setErrorInfo(error.response.data.message);
      setError(true);
    });
  };

  window.onscroll = () => {
    // 变量scrollTop是滚动条滚动时，距离顶部的距离
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 变量windowHeight是可视区的高度
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // 变量scrollHeight是滚动条的总高度
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // 滚动条到底部的条件
    if (scrollTop + windowHeight === scrollHeight) {
      // 写后台加载数据的函数
      // console.log("距顶部" + scrollTop + "可视区高度" + windowHeight + "滚动条总高度" + scrollHeight);
      getStarList(props.urlKey, page);
    }
  };

  useEffect(() => {
    setData([]);
    setPage(1);
    setDataLoding(false);
    setLoading(false);
    setError(false);
    getStarList(props.urlKey, 0, false);
  }, [props.urlKey]);
  return (
    <div className="list">
      {loading
            && (
            <div className="loader">
              <div className="loader-inner">
                <div className="loader-line-wrap">
                  <div className="loader-line" />
                </div>
                <div className="loader-line-wrap">
                  <div className="loader-line" />
                </div>
                <div className="loader-line-wrap">
                  <div className="loader-line" />
                </div>
                <div className="loader-line-wrap">
                  <div className="loader-line" />
                </div>
                <div className="loader-line-wrap">
                  <div className="loader-line" />
                </div>
              </div>
            </div>
            )}
      { !isError ? data && data.map((v, i) => (
        <div key={i} className="list-content">
          <div className="ranking">#{i + 1}</div>
          <div className="img">
            <img src={v.owner.avatar_url} alt="" />
          </div>
          <div className="list-name">{v.owner.login}</div>
          <div className="list-info">
            <i
              className="fa fa-user"
              style={{
                color: 'green',
                width: '20px',
                marginRight: '5px',
              }}
            />{v.owner.login}
          </div>
          <div className="list-info">
            <i
              className="fa fa-star"
              style={{
                color: 'yellow',
                width: '20px',
                marginRight: '5px',
              }}
            />{v.stargazers_count} stars
          </div>
          <div className="list-info">
            <i
              className="fa fa-code-fork"
              style={{
                color: 'blue',
                width: '20px',
                marginRight: '5px',
              }}
            />{v.forks} forks
          </div>
          <div className="list-info">
            <i
              className="fa fa-exclamation-triangle"
              style={{
                color: 'pink',
                width: '20px',
                marginRight: '5px',
              }}
            />{v.open_issues} open issues
          </div>
        </div>
      ))
        : isError && (
        <div className="errorModal">
          <p>{errorInfo || '加载失败，请稍后再试...'}</p>
          <span role="button" tabIndex={0} onClick={() => { setError(false); }} onKeyUp={() => {}}>×</span>
        </div>
        )}
    </div>
  );
};
