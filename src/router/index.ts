import { Route } from "@vaadin/router";
import "../pages/home-view";
import "../pages/login-view";
import "../pages/register-view";
import "../pages/dashboard-view";

export const views: Route[] = [
  { path: "/", component: "home-view" },
  { path: "/login", component: "login-view" },
  { path: "/register", component: "register-view" },
  { path: "/dashboard", component: "dasboard-view" },
];
