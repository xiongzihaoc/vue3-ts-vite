import { createApp } from "vue";
import App from "./App.vue";
// 引入初始化样式
import "normalize.css/normalize.css";
// 引入全局样式
import "./styles/index.scss";
// 引入路由
import router from "./router/index";
// 引入element-plus
import elementPlus from "element-plus";
import "element-plus/dist/index.css";
// 创建app实例
const app = createApp(App);
app.use(router);
app.use(elementPlus);
app.mount("#app");
