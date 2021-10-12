import Popular from "_src/pages/popular";
import SelectPlayer from "_src/pages/battle/selectPlayer";
import Result from "_src/pages/battle/result";

export const routes = [
  {
    path: "/",
    // exact: true,
    component: Popular,
  },
  // {
  //     path: '/battle',
  //     component: BattleContainer,
  //     routes: [
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
  //     ]
  // }
];
export default routes;
