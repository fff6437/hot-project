import React, { useState } from "react";
// import { Formik } from "formik";
import Formiks from 'src/compontent/formiks';
import axios from "axios";
// import { useFormik } from 'formik';
import style from "./battle.css";

export default () => {
  // const [checkedName, setCheckedName] = useState("All");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [oneImg, setOneImg] = useState("");
  const [oneLoading, setOneLoading] = useState(false);
  const [twoLoading, setTwoLoading] = useState(false);
  const [oneError, setOneError] = useState('');
  const [twoError, setTwoError] = useState('');

  const [twoImg, setTwoImg] = useState("");

  const setPlay = (e, name) => {
    if (name === "one") {
      setOneLoading(true);
      setPlayerOne(e);
      axios.get(`https://api.github.com/users/${e}`)
      .then(() => {
        setOneImg(`https://github.com/${e}.png?size=200`);
      }).catch((error) => {
        setOneError(error.response.data.message);
      }).finally(() => {
        setOneLoading(false);
      })
      // setOneImg(`https://github.com/${e}.png?size=200`);
    } else {
      setTwoLoading(true);
      setPlayerTwo(e);
      axios.get(`https://api.github.com/users/${e}`)
      .then(() => {
        setTwoImg(`https://github.com/${e}.png?size=200`);
      }).catch((error) => {
        setTwoError(error.response.data.message);
      }).finally(() => {
        setTwoLoading(false);
      })
    }
  };

  const battle = () => {
    window.location.href = `#/battle/result?playerOne=${playerOne}&playerTwo=${playerTwo}`;
    // props.battle();
  };

  const clearPlayer = (name) => {
    if (name === "one") {
      setPlayerOne("");
      setOneImg("");
      setOneError('');
    } else {
      setPlayerTwo("");
      setTwoImg("");
      setTwoError('');
    }
  };
  return (
    <div className={`${style["battle-select"]}`}>
      <div className={`${style["battle-title"]}`}>Instructions</div>
      <div className={`${style["battle-center"]}`}>
        <div>
          <div className={`${style["battle-info"]}`}>
            Enter two Github Users
          </div>
          <div className={`${style["battle-column"]}`}>
            <i className={`fa fa-users ${style.org}`} />
          </div>
        </div>
        <div>
          <div className={`${style["battle-info"]}`}>Battle</div>
          <div className={`${style["battle-column"]}`}>
            <i className={`fa fa-fighter-jet ${style.gray}`} />
          </div>
        </div>
        <div>
          <div className={`${style["battle-info"]}`}>See the winner</div>
          <div className={`${style["battle-column"]}`}>
            <i className={`fa fa-trophy ${style.yellow}`} />
          </div>
        </div>
      </div>
      <h3>Players</h3>
      <div className={`${style["battle-form-content-wrap"]}`}>
        <div>
          <h3> Player One </h3>
          <Formiks style={style} num='one' loading={oneLoading} error={oneError} name='playerTwo' isHave={oneImg || oneError} setPlay={(v,i) => {setPlay(v,i)}} clearPlayer={clearPlayer} img={oneImg} player={playerOne} />
        </div>
        <div>
          <h3> Player Two </h3>
          <Formiks style={style} num='two' name='playerTwo' loading={twoLoading} error={twoError} isHave={twoImg || twoError} setPlay={(v,i) => {setPlay(v,i)}} clearPlayer={clearPlayer} img={twoImg}  player={playerTwo} />
        </div> 
      </div>
      {oneImg && twoImg && (twoImg !== oneImg)  && (
        <div className={`${style["battle-button"]}`}>
          <button
            type="button"
            onClick={() => {
              battle();
            }}
          >
            Battle
          </button>
        </div>
      )}
    </div>
  );
};
