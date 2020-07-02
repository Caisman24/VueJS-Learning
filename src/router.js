import Vue from "vue";
import Router from "vue-router";

import WelcomePage from "./components/Welcome/Welcome.vue";
import DashboardPage from "./components/Dashboard/Dashboard.vue";
import SignupPage from "./components/Authentication/SignUp.vue";
import SigninPage from "./components/Authentication/SignIn.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: WelcomePage },
  { path: "/signup", component: SignupPage },
  { path: "/signin", component: SigninPage },
  { path: "/dashboard", component: DashboardPage }
];

export default new Router({ mode: "history", routes });
