import React from "react";
import Header from "src/pages/popular/header";
import Content from "src/pages/popular/content";

export default (props) => (
    <div>
        <Header getStarList={(v)=> props.getStarList(v)} />
        <Content urlKey={props.urlKey} />
    </div>
  );
