import React from "react";
import load from "./index.css";

export default () => (
  <div className={load.loader}>
    <div className={load["loader-inner"]}>
      <div className={load["loader-line-wrap"]}>
        <div className={load["loader-line"]} />
      </div>
      <div className={load["loader-line-wrap"]}>
        <div className={load["loader-line"]} />
      </div>
      <div className={load["loader-line-wrap"]}>
        <div className={load["loader-line"]} />
      </div>
      <div className={load["loader-line-wrap"]}>
        <div className={load["loader-line"]} />
      </div>
      <div className={load["loader-line-wrap"]}>
        <div className={load["loader-line"]} />
      </div>
    </div>
  </div>
);
