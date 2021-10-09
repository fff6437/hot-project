import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
// import Header from "src/pages/popular/header";
// import Content from "src/pages/popular/content";
// import SelectPlayer from "src/pages/battle/selectPlayer";
// import Result from "src/pages/battle/result";
import Popular from "src/pages/popular";
import Loading from "src/pages/loading";
// import Battle from "src/pages/battle";
import "font-awesome/css/font-awesome.min.css";
// import "../../node_modules/font-awesome/css/font-awesome.min.css";
import style from './index.css';

const Battle = React.lazy(() => import('src/pages/battle'));

function App() {
  const [urlKey, setKey] = useState("stars:%3E1");
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
      <div className={style['item-top']}>
        <a
          role="button"
          href="#"
          tabIndex={0}
          onKeyUp={() => {}}
          className={`${tag === "popular" ? `${style.checkedTag}` : ""}`}
          onClick={() => {setTag("popular");setBattle(false)}}
        >
          popular
        </a>
        <a
          role="button"
          href="#/battle"
          tabIndex={0}
          onKeyUp={() => {}}
          className={`${tag === "battle" ? `${style.checkedTag}` : ""}`}
          onClick={() => {setTag("battle");setBattle(false)}}
        >
          battle
        </a>
      </div>
      {tag === "popular" ? (
          <Popular urlKey={urlKey} getStarList={(key) => setKey(key)} />
      ) : (
        // <div>
        //   {!isBattle ? (
        //     <SelectPlayer
        //       battle={() => {
        //         battle();
        //       }}
        //     />
        //   ) : (
        //     <Result
        //       player={player}
        //       reset={() => {
        //         reset();
        //       }}
        //     />
        //   )}
        // </div>
        <React.Suspense fallback={<Loading />}>
            <Battle isBattle={isBattle} player={player} reset={() => {reset()}} battle={() => {battle()}} />
        </React.Suspense>
      )}
    </div>
  );
}
export default hot(App);
