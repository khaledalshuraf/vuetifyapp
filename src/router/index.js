import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Activation",
    component: () => import("./../views/Activation"),
  },
  {
    path: "/Activation",
    name: "Activation",
    component: () => import("./../views/Activation"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("./../views/Profile"),
  },
  {
    path: "/Product",
    name: "Product",
    component: () => import("./../views/Product"),
  },
  {
    path: "/Order",
    name: "Order",
    component: () => import("./../views/Order"),
  },
  {
    path: "/SystemSetting",
    name: "SystemSetting",
    component: () => import("./../views/SystemSetting"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
