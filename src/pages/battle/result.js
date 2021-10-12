import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "_src/compontent/loading";
import style from "./battle.css";
// import load from '../index.css';

export default () => {
  const [oneInfos, setOneInfos] = useState({});
  const [loadingOne, setOneloading] = useState(false);
  const [loadingTwo, setTwoloading] = useState(false);
  const [twoInfos, setTwoInfos] = useState({});

  // 把URL的参数解析为对象
  const parseUri = (uri) => {
    const params = {};
    try {
      const para = uri.split("?")[1];
      const arrPara = para.split("&");
      const n = arrPara.length;
      for (let i = 0; i < n; i += 1) {
        const arr = arrPara[i].split("=");
        const [a, b] = arr;
        params[a] = b;
      }
      return params;
    } catch (error) {
      window.location.href = "#/battle";
    }
    return params;
  };

  const getInfo = async () => {
    const params = parseUri(window.location.hash);
    if (!params.playerOne || !params.playerTwo) {
      window.location.href = "#/battle";
      return;
    }
    axios
      .get(`https://api.github.com/users/${params.playerOne}`)
      .then((res) => {
        setOneInfos(res.data);
        setOneloading(true);
      });
    axios
      .get(`https://api.github.com/users/${params.playerTwo}`)
      .then((res) => {
        setTwoInfos(res.data);
        setTwoloading(true);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", getInfo);
    return window.removeEventListener("hashchange", getInfo);
  }, []);

  useEffect(async () => {
    const params = parseUri(window.location.hash);
    if (!params.playerOne || !params.playerTwo) {
      window.location.href = "#/battle";
      return;
    }
    axios
      .get(`https://api.github.com/users/${params.playerOne}`)
      .then((res) => {
        setOneInfos(res.data);
        setOneloading(true);
      });
    axios
      .get(`https://api.github.com/users/${params.playerTwo}`)
      .then((res) => {
        setTwoInfos(res.data);
        setTwoloading(true);
      });
  }, []);
  const reset = () => {
    window.location.href = "#/battle";
  };

  return loadingOne && loadingTwo ? (
    <div className={`${style["result-result"]}`}>
      <div className={`${style["result-center"]}`}>
        <div>
          <div className={`${style["result-info"]}`}>
            {oneInfos.public_repos > twoInfos.public_repos ? "Winner" : null}
            {oneInfos.public_repos === twoInfos.public_repos ? "Draw" : null}
            {oneInfos.public_repos < twoInfos.public_repos ? "Loser" : null}
          </div>
          <div>
            <img src={oneInfos.avatar_url} alt="" />
          </div>
          <div className={`${style.center} ${style.score}`}>
            Scores: {oneInfos.public_repos}
          </div>
          <div className={`${style.center} ${style["result-name"]}`}>
            {oneInfos.name}
          </div>
          <div>
            <i className="fa fa-location-arrow" />
            {oneInfos.location}
          </div>
          <div>
            <i className="fa fa-group" />
            {oneInfos.followers}
          </div>
          <div>
            <i className="fa fa-user-plus" />
            {oneInfos.following}
          </div>
          <div>
            <i className="fa fa-code" />
            {oneInfos.public_repos}
          </div>
        </div>
        <div>
          <div className={`${style["result-info"]}`}>
            {twoInfos.public_repos > oneInfos.public_repos ? "Winner" : null}
            {twoInfos.public_repos === oneInfos.public_repos ? "Draw" : null}
            {twoInfos.public_repos < oneInfos.public_repos ? "Loser" : null}
          </div>
          <div>
            <img src={twoInfos.avatar_url} alt="" />
          </div>
          <div className={style.center}>Scores: {twoInfos.public_repos}</div>
          <div className={`${style.center} ${style["result-name"]}`}>
            {twoInfos.name}
          </div>
          <div>
            <i className="fa fa-location-arrow" />
            {twoInfos.location}
          </div>
          <div>
            <i className="fa fa-group" />
            {twoInfos.followers}
          </div>
          <div>
            <i className="fa fa-user-plus" />
            {twoInfos.following}
          </div>
          <div>
            <i className="fa fa-code" />
            {twoInfos.public_repos}
          </div>
        </div>
      </div>
      <div className={style["result-btn"]}>
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  ) : (
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
    <Loading />
  );
};
