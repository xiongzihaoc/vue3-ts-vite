<template>
  <div class="container">
    <h2>vue3 + ts + vite</h2>
    <div class="form">
      <el-form ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules">
        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone"
            maxlength="11"
            placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code"
            maxlength="6"
            placeholder="请输入验证码"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary"
      size="mini"
      @click="login"
      class="login">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { loginFormRules } from "@/utils/formRules";

interface loginType {
  phone: String;
  code: String;
}
const loginFormRef = ref();
const router = useRouter();
// 登录表单
const loginForm: loginType = reactive({
  phone: "",
  code: "",
});
// 登录事件
function login() {
  loginFormRef.value.validate((valid: Boolean) => {
    if (valid) {
      router.push("/home");
    } else {
      console.log("error submit!!");
      return false;
    }
  });
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  color: #fff;
  background: #2d3a4b;
}
.form {
  width: 500px;
}
</style>