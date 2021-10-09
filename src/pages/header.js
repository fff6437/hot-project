import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import style from "./index.css";

export default () => {
  const [tag, setTag] = useState("popular");

  const getTag = (isElse) => {
    const hash = window.location.hash.slice(2);
    if (hash) {
      if (hash === "battle" || hash.indexOf("battle/result") > -1) {
        setTag("battle");
      } else {
        setTag(null);
      }
    } else if (isElse) {
      setTag("popular");
    }
  };

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      // const hash = window.location.hash.slice(2);
      // if (hash) {
      //     if (hash === "battle" || hash.indexOf("battle/result") > -1) {
      //         setTag("battle");
      //     } else {
      //         setTag(null);
      //     }
      // } else {
      //     setTag('popular');
      // }
      getTag(true);
    });
  });
  useEffect(() => {
    // const hash = window.location.hash.slice(2);
    // if (hash) {
    //     if (hash === "battle" || hash.indexOf("battle/result") > -1) {
    //         setTag("battle");
    //     } else {
    //         setTag(null);
    //     }
    // }
    getTag(false);
  });

  return (
    <div>
      <div className={style["item-top"]}>
        <Route>
          <Link
            href="/"
            to="/"
            className={`${tag === "popular" ? `${style.checkedTag}` : ""}`}
            onClick={() => {
              setTag("popular");
            }}
          >
            popular
          </Link>
          <Link
            href="#/battle"
            to="/battle"
            className={`${tag === "battle" ? `${style.checkedTag}` : ""}`}
            onClick={() => {
              setTag("battle");
            }}
          >
            battle
          </Link>
        </Route>
      </div>
      {!tag ? <div className={style["not-found"]}>404 Not Found</div> : null}
    </div>
  );
};
