// import React from "react";
import React, { Suspense, lazy, useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
// import Header from "_src/pages/popular/header";
// import Content from "_src/pages/popular/content";
// import SelectPlayer from "_src/pages/battle/selectPlayer";
// import Result from "_src/pages/battle/result";
// import Popular from "_src/pages/popular";
// import Loading from "_src/pages/loading";
// import Battle from "_src/pages/battle";
import "font-awesome/css/font-awesome.min.css";
// import { Link, Route } from "react-router-dom";
import RouteWithSubRoutes from "_src/compontent/routeWithSubRoutes";
import style from "./index.css";
// import Header from "_src/pages/header";
// import "../../node_modules/font-awesome/css/font-awesome.min.css";
// import { HashRouter, Route, Redirect } from 'react-router-dom';
// import { RouteWithSubRoutes } from 'components/routeWithSubRoutes';
// import { DEFAULT_ROUTE_PATH } from 'constant/project';
// import { routes } from "_src/pages/router";

const Result = lazy(() => import("_src/pages/battle/result"));
const SelectPlayer = lazy(() => import("_src/pages/battle/selectPlayer"));
const Popular = lazy(() => import("_src/pages/popular"));
const routes = [
  {
    path: "/",
    component: Popular,
  },
  {
    path: "/battle",
    exact: true,
    component: SelectPlayer,
  },
  {
    path: "/battle/result",
    component: Result,
    exact: true,
  },
];

const popularArr = ["popular", "All", "Javascript", "Ruby", "Java", "CSS"];

function App() {
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
  };
  useEffect(() => {
    window.addEventListener("hashchange", () => {
      getTag(true);
    });
  });
  useEffect(() => {
    getTag(false);
  });
  return (
    <HashRouter>
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
      <Suspense fallback={<div>Loading...</div>}>
        {routes.map((route) => (
          <RouteWithSubRoutes
            key={route.path}
            component={route.component}
            routes={route.routes}
            exact={route.exact}
            path={route.path}
          />
        ))}
      </Suspense>
    </HashRouter>
  );
}

export default hot(App);
