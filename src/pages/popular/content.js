import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

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
    axios
      .get(
        `https://api.github.com/search/repositories?q=${key}&sort=stars&order=desc&type=Repositories&page=${
          pages + 1
        }`
      )
      .then((res) => {
        if (res.status === 200) {
          if (isMore) {
            setData([...data, ...res.data.items]);
          } else {
            setData(res.data.items);
            setLoading(false);
          }
        }
        setDataLoding(false);
      })
      .catch((error) => {
        setDataLoding(false);
        setLoading(false);
        setErrorInfo(error.response.data.message);
        setError(true);
      });
  };

  // window.onscroll = () => {
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
  const loadMoreData = () => {
    // page 当前滚动到了第几页
    // const { data, count } = this.state
    getStarList(props.urlKey, page);
    // 超过200条数据 不继续监听下拉事件
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
      {loading && (
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
      {!isError ? (
        <InfiniteScroll
          initialLoad={false} // 不让它进入直接加载
          pageStart={1} // 设置初始化请求的页数
          loadMore={loadMoreData} // 监听的ajax请求
          hasMore // 是否继续监听滚动事件 true 监听 | false 不再监听
          useWindow // 不监听 window 滚动条
        >
          {" "}
          {data &&
            data.map((v, i) => (
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
                      color: "green",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                  {v.owner.login}
                </div>
                <div className="list-info">
                  <i
                    className="fa fa-star"
                    style={{
                      color: "yellow",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                  {v.stargazers_count} stars
                </div>
                <div className="list-info">
                  <i
                    className="fa fa-code-fork"
                    style={{
                      color: "blue",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                  {v.forks} forks
                </div>
                <div className="list-info">
                  <i
                    className="fa fa-exclamation-triangle"
                    style={{
                      color: "pink",
                      width: "20px",
                      marginRight: "5px",
                    }}
                  />
                  {v.open_issues} open issues
                </div>
              </div>
            ))}
        </InfiniteScroll>
      ) : (
        isError && (
          <div className="errorModal">
            <p>{errorInfo || "加载失败，请稍后再试..."}</p>
            <span
              role="button"
              tabIndex={0}
              onClick={() => {
                setError(false);
              }}
              onKeyUp={() => {}}
            >
              ×
            </span>
          </div>
        )
      )}
    </div>
  );
};
