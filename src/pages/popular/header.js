import React, { useState, useEffect } from "react";
import style from "./index.css";

const searchKeys = [
  { name: "All", key: "stars:%3E1" },
  { name: "Javascript", key: "stars:%3E1+language:javascript" },
  { name: "Ruby", key: "stars:%3E1+language:ruby" },
  { name: "Java", key: "stars:%3E1+language:java" },
  { name: "CSS", key: "stars:%3E1+language:css" },
];

export default (props) => {
  const [checkedName, setCheckedName] = useState("All");
  useEffect(() => {
    setCheckedName(props.urlNmae);
  }, [props.urlNmae]);
  const getKeysInfo = (v) => {
    if (v.name === checkedName) return;
    setCheckedName(v.name);
    props.getStarList(v.key);
  };
  return (
    <div className={`${style.header} ${style.center}`}>
      {searchKeys.map((v, i) => (
        <a
          role="button"
          href={`#/popular?key=${v.name}`}
          tabIndex={0}
          onKeyUp={() => {}}
          key={i}
          className={`${
            checkedName === v.name ? `${style.checked}` : `${v.name}`
          }`}
          onClick={() => getKeysInfo(v)}
        >
          {v.name}
        </a>
      ))}
    </div>
  );
};
