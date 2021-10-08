import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import Header from "./popular/header";
import Content from "./popular/content";
import SelectPlayer from "./battle/selectPlayer";
// import SelectPlayer from '@/pages/battle/selectPlayer';
import Result from "./battle/result";
import "node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";

function App() {
  const [urlKey, setKey] = useState("stars:%3E1");
  // const [tag, setTag] = useState('battle');
  const [tag, setTag] = useState("popular");
  const [player, setPlayer] = useState({});
  const [isBattle, setBattle] = useState(false);

  // 把URL的参数解析为对象
  const parseUri = (uri) => {
    const para = uri.split("?")[1];
    const arrPara = para.split("&");
    const n = arrPara.length;
    const params = {};
    for (let i = 0; i < n; i += 1) {
      const arr = arrPara[i].split("=");
      const [a, b] = arr;
      params[a] = b;
    }
    return params;
  };

  const battle = () => {
    setPlayer(parseUri(window.location.hash));
    setBattle(true);
  };
  const reset = () => {
    setPlayer({});
    setBattle(false);
  };

  useEffect(() => {
    const hash = window.location.hash.slice(2, 8);
    if (hash && hash === "battle") {
      setTag("battle");
    } else if (hash && hash === "result") {
      setTag("battle");
      setPlayer(parseUri(window.location.hash));
      setBattle(true);
    }
  }, []);
  return (
    <div>
      <div className="item-top">
        <a
          role="button"
          href="#"
          tabIndex={0}
          onKeyUp={() => {}}
          className={`${tag === "popular" ? "checkedTag" : ""}`}
          onClick={() => setTag("popular")}
        >
          popular
        </a>
        <a
          role="button"
          href="#/battle"
          tabIndex={0}
          onKeyUp={() => {}}
          className={`${tag === "battle" ? "checkedTag" : ""}`}
          onClick={() => setTag("battle")}
        >
          battle
        </a>
      </div>
      {tag === "popular" ? (
        <div>
          <Header getStarList={(key) => setKey(key)} />
          <Content urlKey={urlKey} />
        </div>
      ) : (
        <div>
          {!isBattle ? (
            <SelectPlayer
              battle={() => {
                battle();
              }}
            />
          ) : (
            <Result
              player={player}
              reset={() => {
                reset();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
export default hot(App);
