<template>
  <div class="home">home</div>
</template>

<script lang="ts" setup>
import { getUserInfo } from "@/api/index";

getUserInfo({
  username: "xiaohu",
  password: "123456",
}).then((res) => {
  console.log(res);
});
</script>
