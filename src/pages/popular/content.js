import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "_src/compontent/loading";
import InfiniteScroll from "react-infinite-scroller";
import style from "./index.css";
// import load from '../index.css';

export default (props) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [getDataLoding, setDataLoding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
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

  const backTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.onscroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      setShowBtn(false);
    } else if (scrollTop > 200) {
      setShowBtn(true);
    }
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
    setShowBtn(false);
    setPage(1);
    setDataLoding(false);
    setLoading(false);
    setError(false);
    if (props.urlKey) {
      getStarList(props.urlKey, 0, false);
    }
  }, [props.urlKey]);
  return (
    <div className={style.list}>
      {loading && (
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
        <Loading />
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
              <div key={i} className={`${style["list-content"]}`}>
                <div className={`${style.ranking} ${style.center}`}>
                  #{i + 1}
                </div>
                <div className={`${style.img} ${style.center}`}>
                  <img src={v.owner.avatar_url} alt="" />
                </div>
                <div className={`${style["list-name"]} ${style.center}`}>
                  {v.name}
                </div>
                <div className={style["list-info"]}>
                  <i className={`fa fa-user ${style.green}`} />
                  {v.owner.login}
                </div>
                <div className={style["list-info"]}>
                  <i className={`fa fa-star ${style.yellow}`} />
                  {v.stargazers_count} stars
                </div>
                <div className={style["list-info"]}>
                  <i className={`fa fa-code-fork ${style.blue}`} />
                  {v.forks} forks
                </div>
                <div className={style["list-info"]}>
                  <i className={`fa fa-exclamation-triangle ${style.pink}`} />
                  {v.open_issues} open issues
                </div>
              </div>
            ))}
        </InfiniteScroll>
      ) : (
        isError && (
          <div className={`${style.errorModal} ${style.center}`}>
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
      {showBtn && !isError && (
        <button id={`${style.backTop}`} onClick={backTop} type="button">
          回到顶部
        </button>
      )}
      {!loading && getDataLoding && (
        <div style={{ textAlign: "center", color: "skyblue" }}>LOADING...</div>
      )}
    </div>
  );
};
