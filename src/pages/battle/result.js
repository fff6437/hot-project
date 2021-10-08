import React, { useState, useEffect } from "react";
import axios from "axios";
import "./battle.css";

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
    <div className="result-result">
      <div className="result-center">
        <div>
          <div className="result-info">
            {oneInfos.public_repos > twoInfos.public_repos ? "Winner" : "Loser"}
          </div>
          <div>
            <img src={oneInfos.avatar_url} alt="" />
          </div>
          <div className="center" style={{ fontSize: "22px" }}>
            Scores: {oneInfos.public_repos}
          </div>
          <div className="center result-name">{oneInfos.name}</div>
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
          <div className="result-info">
            {twoInfos.public_repos > oneInfos.public_repos ? "Winner" : "Loser"}
          </div>
          <div>
            <img src={twoInfos.avatar_url} alt="" />
          </div>
          <div className="center" style={{ fontSize: "22px" }}>
            Scores: {twoInfos.public_repos}
          </div>
          <div className="center result-name">{twoInfos.name}</div>
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
      <div className="result-btn">
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
  );
};
