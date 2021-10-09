import React, { useState } from "react";
import { Formik } from "formik";
// import { useFormik } from 'formik';
import style from "./battle.css";

export default (props) => {
  // const [checkedName, setCheckedName] = useState("All");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [oneImg, setOneImg] = useState("");
  const [twoImg, setTwoImg] = useState("");

  const setPlay = (e, name) => {
    if (name === "one") {
      setPlayerOne(e);
      setOneImg(`https://github.com/${e}.png?size=200`);
    } else {
      setPlayerTwo(e);
      setTwoImg(`https://github.com/${e}.png?size=200`);
    }
  };

  const battle = () => {
    window.location.href = `#/result?playerOne=${playerOne}&playerTwo=${playerTwo}`;
    props.battle();
  };

  const clearPlayer = (name) => {
    if (name === "one") {
      setPlayerOne("");
      setOneImg("");
    } else {
      setPlayerTwo("");
      setTwoImg("");
    }
  };
  return (
    <div className={`${style['battle-select']}`}>
      <div className={`${style['battle-title']}`}>Instructions</div>
      <div className={`${style['battle-center']}`}>
        <div>
          <div className={`${style['battle-info']}`}>Enter two Github Users</div>
          <div className={`${style['battle-column']}`}>
            <i
              className={`fa fa-users ${style.org}`}
            />
          </div>
        </div>
        <div>
          <div className={`${style['battle-info']}`}>Battle</div>
          <div className={`${style['battle-column']}`}>
            <i
              className={`fa fa-fighter-jet ${style.gray}`}
            />
          </div>
        </div>
        <div>
          <div className={`${style['battle-info']}`}>See the winner</div>
          <div className={`${style['battle-column']}`}>
            <i
              className={`fa fa-trophy ${style.yellow}`}
            />
          </div>
        </div>
      </div>
      <h3>Players</h3>
      <div className={`${style['battle-form-content-wrap']}`}>
        <div>
          <h3> Player One </h3>
          {!oneImg ? (
            <Formik
              initialValues={{ playerOne: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.playerOne) {
                  errors.playerOne = "请输入";
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                setPlay(values.playerOne, "one");
              }}
            >
              {(formProps) => (
                <form
                  onSubmit={formProps.handleSubmit}
                  className={`${style['battle-form-content']}`}
                >
                  <input
                    type="text"
                    onChange={formProps.handleChange}
                    value={formProps.values.playerOne}
                    name="playerOne"
                    placeholder="github username"
                  />
                  {formProps.errors.playerOne && (
                    <div id={style.feedback}>{formProps.errors.playerOne}</div>
                  )}
                  <button type="submit">Submit</button>
                </form>
              )}
            </Formik>
          ) : (
            <div className={`${style['battle-selectInfo']}`}>
              <div className={`${style['battle-basicInfo']}`}>
                <img src={oneImg} alt="" />
                <span>{playerOne}</span>
              </div>
              <div
                onClick={() => clearPlayer("one")}
                role="button"
                tabIndex={-1}
                onKeyUp={() => {}}
              >
                <i
                  className="fa fa-times-circle"
                  style={{
                      color: "red",
                    }}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <h3> Player Two </h3>
          {!twoImg ? (
            <Formik
              initialValues={{ playerTwo: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.playerTwo) {
                  errors.playerTwo = "请输入";
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                setPlay(values.playerTwo, "two");
              }}
            >
              {(formProps) => (
                <form
                  onSubmit={formProps.handleSubmit}
                  className={`${style['battle-form-content']}`}
                >
                  <input
                    type="text"
                    onChange={formProps.handleChange}
                    value={formProps.values.playerTwo}
                    name="playerTwo"
                    placeholder="github username"
                  />
                  {formProps.errors.playerTwo && (
                    <div id={style.feedback}>{formProps.errors.playerTwo}</div>
                  )}
                  <button type="submit">Submit</button>
                </form>
              )}
            </Formik>
          ) : (
            <div className={`${style['battle-selectInfo']}`}>
              <div className={`${style['battle-basicInfo']}`}>
                <img src={twoImg} alt="" />
                <span>{playerTwo}</span>
              </div>
              <div
                onClick={() => clearPlayer("two")}
                role="button"
                tabIndex={-2}
                onKeyUp={() => {}}
              >
                <i
                  className="fa fa-times-circle"
                  style={{
                    color: "red",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {oneImg && twoImg && (
        <div className={`${style['battle-button']}`}>
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
