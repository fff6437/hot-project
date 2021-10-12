import React, { useState, useEffect } from "react";
import Header from "src/pages/popular/header";
import Content from "src/pages/popular/content";

export default () => {
  const [urlKey, setKey] = useState("");
  const [urlNmae, setUrlNmae] = useState("All");
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    const hash = window.location.hash.slice(2);
    if (hash) {
      if (hash.indexOf("popular") > -1) {
        const keys = hash.slice(8);
        if (hash === 'popular') {
            setKey("stars:%3E1");
            setUrlNmae('All');
            return;
        }
        switch (keys) {
          case 'All':
              setKey("stars:%3E1");
              setUrlNmae('All');
              break;
          case 'Javascript':
              setKey("stars:%3E1+language:javascript");
              setUrlNmae('Javascript');
              break;
          case 'Ruby':
              setKey("stars:%3E1+language:ruby");
              setUrlNmae('Ruby');
              break;
          case 'Java':
              setKey("stars:%3E1+language:java");
              setUrlNmae('Java');
              break;
          case 'CSS':
              setKey("stars:%3E1+language:css");
              setUrlNmae('CSS');
              break;
          default:
              setError(true);
              break;
        }
      } else {
        setError(true);
      }
    } else {
      setKey("stars:%3E1");
      setUrlNmae('All');
    }    
  })
  // const hash = window.location.hash.slice(2);
  // switch (hash) {
  //   case 'All':
  //       setKey("All");
  //       break;
  //   case 'Javascript':
  //       setKey("Javascript");
  //       break;
  //   case 'Ruby':
  //       setKey("Ruby");
  //       break;
  //   case 'Java':
  //       setKey("Java");
  //       break;
  //   case 'CSS':
  //       setKey("CSS");
  //       break;
  //   default:
  //     setKey(null);
  //     break;
  // }

  return (
    !error ?
    <div>
      <Header getStarList={(v) => setKey(v)} urlNmae={urlNmae} />
      <Content urlKey={urlKey} />
    </div>: null
  );
};
