// import React, { useState } from "react";
// import SelectPlayer from "src/pages/battle/selectPlayer";
// import Result from "src/pages/battle/result";

// export default (props) => {
//     const [isBattle, setBattle] = useState(false);

//     return (
//         <div>
//             <div>
//                 {!isBattle ? (
//                     <SelectPlayer
//                         battle={() => {
//                             props.battle();
//                         }}
//                     />
//                 ) : (
//                     <Result
//                         player={props.player}
//                         reset={() => {
//                             props.reset();
//                         }}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// }
