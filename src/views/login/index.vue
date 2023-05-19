<template>
  <div>
    <el-form :model="userForm" ref="loginForm" class="login-form">
      <el-form-item prop="username" :rules="rules.username">
        <el-input
          v-model="userForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" :rules="rules.password">
        <el-input
          v-model="userForm.password"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item class="btn-kind">
        <el-button plain @click="goRegister(loginForm)">注册</el-button>
        <el-button type="primary" @click="goLogin(loginForm)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { Ref } from "vue";
import { getUserRegister, getUserLogin } from "@/api/index";
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import { setCookie } from "@/utils/cookie";
import { TIPS_SUCCESS, TIPS_FAIL } from "@/utils/const";
import type { LoginForm, MessageType } from "@/utils/types/index";

const userForm: Ref<LoginForm> = ref({
  username: "",
  password: "",
});
const loginForm = ref<FormInstance>();
const router = useRouter();
const rules: FormRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 2, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 4, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" },
  ],
};

const messageTip = (message: string, type: MessageType) => {
  ElMessage({
    message,
    type,
  });
};

// 注册新用户
const goRegister = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      getUserRegister({
        username: userForm.value.username,
        password: userForm.value.password,
      }).then(() => {
        messageTip(TIPS_SUCCESS.registerSuccess, "success");
      });
    } else {
      messageTip(TIPS_FAIL.registerFail, "error");
    }
  });
};

// 登录
const goLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      getUserLogin({
        username: userForm.value.username,
        password: userForm.value.password,
      }).then((res) => {
        messageTip(TIPS_SUCCESS.loginSuccess, "success");
        if (res?.data?.access_token) {
          // 存储 token 到 cookie 中
          setCookie("access_token", res?.data?.access_token);
          router.push({ path: "/home" });
        }
      });
    } else {
      messageTip(TIPS_FAIL.loginFail, "error");
    }
  });
};
</script>

<style scoped>
.login-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.el-form-item {
  margin-bottom: 20px;
}

.btn-kind .el-button {
  width: 20%;
}
</style>
