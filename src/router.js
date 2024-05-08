import { createRouter, createWebHistory } from "vue-router";
import Schedule from "./pages/Schedule/Schedule.vue"
import Leaderboard from "./pages/Leaderboard/Leaderboard.vue"
import NotFound from "./pages/NotFound.vue"

const routes = [
  { path: "/", component: Schedule },
  { path: "/schedule", component: Schedule },
  { path: "/leaderboard", component: Leaderboard },
  { path: "/404", component: NotFound },
  { path: "/:patchMatch(.*)*", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
