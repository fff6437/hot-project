import React from "react";
import { Route } from "react-router-dom";

function createElement(Component, props) {
  return <Component props={props} />;
}

export default (props) => {
  const { path, component, routes, exact } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        // if (props.location.pathname === path && defaultPath) {
        //   return <Redirect to={defaultPath} />;
        // }
        if (!component) return null;
        return createElement(component, { ...props, routes });
      }}
    />
  );
};
