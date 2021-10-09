import React from "react";
import SelectPlayer from "src/pages/battle/selectPlayer";
import Result from "src/pages/battle/result";

export default (props) => (
    <div>
        <div>
          {!props.isBattle ? (
            <SelectPlayer
              battle={() => {
                props.battle();
              }}
            />
          ) : (
            <Result
              player={props.player}
              reset={() => {
                props.reset();
              }}
            />
          )}
        </div>
    </div>
  );
