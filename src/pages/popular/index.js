import React, { useState } from "react";
import Header from "src/pages/popular/header";
import Content from "src/pages/popular/content";

export default () => {
  const [urlKey, setKey] = useState("stars:%3E1");

  return (
    <div>
      <Header getStarList={(v) => setKey(v)} />
      <Content urlKey={urlKey} />
    </div>
  );
};
