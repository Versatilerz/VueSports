import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MembersView from "../views/MembersView.vue";
import SportsView from "../views/SportsView.vue";
import MemberView from "../views/MemberView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/sports", name: "sports", component: SportsView },
    { path: "/members", name: "members", component: MembersView },
    { path: "/members/:id", name: "member", component: MemberView },
  ],
});

export default router;
