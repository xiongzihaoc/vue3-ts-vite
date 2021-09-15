i<template>
  <div class="app-container">
    <div class="logo">
      <img class="logo-img"
        src="@/assets/logo.svg" />
      vue3+ts+vite
    </div>
    <el-menu :default-active="activeMenu"
      background-color="#f7f7fa"
      class="el-menu-vertical-demo"
      router>
      <div v-for="item in routes"
        :key="item.path">
        <!-- 多层级 -->
        <el-sub-menu v-if="item.children && item.children.length > 0"
          :index="item.name">
        </el-sub-menu>
        <!-- 只有一级 -->
        <el-menu-item v-else
          :index="item.name">
          <span class="icon">
            <i :class="item.meta.icon"></i>
          </span>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// 获取home下所有菜单
const routes = router.options.routes[2].children;
// 当前选中菜单高亮
const activeMenu = computed(() => {
  return router.currentRoute.value.name;
});
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59px;
  border-bottom: 1px solid #f3f3f4;
  &-img {
    width: 40px;
    height: 40px;
  }
}
.el-menu {
  border: none;
}
.el-menu-item {
  display: flex;
}
.icon {
  margin: 0 10px;
}
</style>
