import React from "react";
// import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { hot } from "react-hot-loader/root";
// import Header from "src/pages/popular/header";
// import Content from "src/pages/popular/content";
// import SelectPlayer from "src/pages/battle/selectPlayer";
// import Result from "src/pages/battle/result";
// import Popular from "src/pages/popular";
// import Loading from "src/pages/loading";
// import Battle from "src/pages/battle";
import "font-awesome/css/font-awesome.min.css";
import Header from "src/pages/header";
// import "../../node_modules/font-awesome/css/font-awesome.min.css";
// import { HashRouter, Route, Redirect } from 'react-router-dom';
// import { RouteWithSubRoutes } from 'components/routeWithSubRoutes';
// import { DEFAULT_ROUTE_PATH } from 'constant/project';
import { routes } from "src/pages/router";
import RouteWithSubRoutes from "src/compontent/routeWithSubRoutes";
// import style from './index.css';

function App() {
  // const [tag, setTag] = useState("popular");

  // useEffect(() => {
  //   const hash = window.location.hash.slice(2);
  //   if (hash) {
  //     if (hash === "battle" || hash.indexOf("battle/result") > -1) {
  //       setTag("battle");
  //     } else {
  //       setTag(null);
  //     }
  //   }
  // });
  return (
    <HashRouter>
      {/* <div className={style['item-top']}>
        <Route>
          <Link
            href="/"
            to="/"
            className={`${tag === "popular" ? `${style.checkedTag}` : ""}`}
            onClick={() => { setTag("popular") }}
          >
            popular
          </Link>
          <Link
            href="#/battle"
            to="/battle"
            className={`${tag === "battle" ? `${style.checkedTag}` : ""}`}
            onClick={() => { setTag("battle") }}
          >
            battle
          </Link>
        </Route>
      </div> */}
      <Header />
      {routes.map((route) => (
        <RouteWithSubRoutes
          key={route.path}
          component={route.component}
          routes={route.routes}
          exact={route.exact}
          path={route.path}
        />
      ))}
    </HashRouter>
  );
}

export default hot(App);
