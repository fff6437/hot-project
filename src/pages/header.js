import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import style from "./index.css";

const popularArr = ["popular", "All", "Javascript", "Ruby", "Java", "CSS"];

export default () => {
  const [tag, setTag] = useState("popular");

  const getTag = (isElse) => {
    const hash = window.location.hash.slice(2);
    if (hash) {
      if (hash === "battle" || hash.indexOf("battle/result") > -1) {
        setTag("battle");
      } else {
        console.log(hash);
        if (hash.indexOf("popular") > -1) {
          const keys = hash.slice(12);
          console.log(keys);
          if (hash === "popular") {
            setTag("popular");
            return;
          }
          switch (keys) {
            case "All":
              setTag("All");
              break;
            case "Javascript":
              setTag("Javascript");
              break;
            case "Ruby":
              setTag("Ruby");
              break;
            case "Java":
              setTag("Java");
              break;
            case "CSS":
              setTag("CSS");
              break;
            default:
              setTag(null);
              break;
          }
        } else {
          setTag(null);
        }
      }
    } else if (isElse) {
      setTag("popular");
    }
    // switch (hash) {
    //   case 'battle':
    //     setTag("battle");
    //     break;

    //   default:
    //     break;
    // }
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
      {tag && (
        <div className={style["item-top"]}>
          <Route>
            <Link
              href="/"
              to="/"
              className={`${
                popularArr.includes(tag) ? `${style.checkedTag}` : ""
              }`}
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
      )}
      {!tag ? <div className={style["not-found"]}>404 Not Found</div> : null}
    </div>
  );
};
