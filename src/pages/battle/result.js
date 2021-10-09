import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "src/pages/loading";
import style from "./battle.css";
// import load from '../index.css';

export default (props) => {
  const [oneInfos, setOneInfos] = useState({});
  const [loadingOne, setOneloading] = useState(false);
  const [loadingTwo, setTwoloading] = useState(false);
  const [twoInfos, setTwoInfos] = useState({});

  useEffect(async () => {
    axios
      .get(`https://api.github.com/users/${props.player.playerOne}`)
      .then((res) => {
        setOneInfos(res.data);
        setOneloading(true);
      });
    axios
      .get(`https://api.github.com/users/${props.player.playerTwo}`)
      .then((res) => {
        setTwoInfos(res.data);
        setTwoloading(true);
      });
  }, []);
  const reset = () => {
    window.location.href = "#/battle";
    props.reset();
  };

  return loadingOne && loadingTwo ? (
    <div className={`${style['result-result']}`}>
      <div className={`${style['result-center']}`}>
        <div>
          <div className={`${style['result-info']}`}>
            {oneInfos.public_repos > twoInfos.public_repos ? "Winner" : "Loser"}
          </div>
          <div>
            <img src={oneInfos.avatar_url} alt="" />
          </div>
          <div className={`${style.center} ${style.score}`}>
            Scores: {oneInfos.public_repos}
          </div>
          <div className={`${style.center} ${style['result-name']}`}>{oneInfos.name}</div>
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
            <i className="fa fa-code"/>
            {oneInfos.public_repos}
          </div>
        </div>
        <div>
          <div className={`${style['result-info']}`}>
            {twoInfos.public_repos > oneInfos.public_repos ? "Winner" : "Loser"}
          </div>
          <div>
            <img src={twoInfos.avatar_url} alt="" />
          </div>
          <div className={style.center}>
            Scores: {twoInfos.public_repos}
          </div>
          <div className={`${style.center} ${style['result-name']}`}>{twoInfos.name}</div>
          <div>
            <i className="fa fa-location-arrow"/>
            {twoInfos.location}
          </div>
          <div>
            <i className="fa fa-group" />
            {twoInfos.followers}
          </div>
          <div>
            <i className="fa fa-user-plus"/>
            {twoInfos.following}
          </div>
          <div>
            <i className="fa fa-code" />
            {twoInfos.public_repos}
          </div>
        </div>
      </div>
      <div className={style['result-btn']}>
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