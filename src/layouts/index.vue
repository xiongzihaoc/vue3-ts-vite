<template>
  <el-container>
    <el-aside width="220px">
      <Sider />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from "@/layouts/header/header.vue";
import Sider from "@/layouts/sider/sider.vue";
</script>

<style lang="scss" scoped>
.el-container,
.el-main,
.el-aside {
  height: 100%;
}
.el-aside {
  background: #f7f7fa;
}
.el-header {
  border-bottom: 1px solid #f3f3f4;
}
</style>>