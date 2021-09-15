import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Layout from "@/layouts/index.vue";
// import { AddLocation,ArrowLeftBold } from '@element-plus/icons'
// 2. 定义路由配置
const routes = [
  {
    path: "/",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/home",
    component: Layout,
    redirect: "dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/dashboard.vue"),
        meta: {
          title: "首页",
          icon: "el-icon-eleme",
        },
      },
      {
        path: "/hospital",
        name: "hospital",
        component: () => import("@/views/hospital/hospital.vue"),
        meta: {
          title: "医院",
          icon: "el-icon-phone",
        },
      },
    ],
  },
  // 404页面
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/404/404.vue"),
  },
];
// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  // history: createWebHashHistory(),
  // 采用 history 模式
  history: createWebHistory(),
  routes, //使用上方定义的路由配置
});
export default router;
