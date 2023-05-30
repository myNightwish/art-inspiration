<template>
  <div class="task-form">
    <el-form
      ref="taskForm"
      :model="form"
      :rules="rules"
      label-position="left"
      label-width="100px"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="任务描述" prop="description">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="任务类型" prop="type">
        <el-select v-model="form.type">
          <el-option label="买饭" value="eating"></el-option>
          <el-option label="拿快递" value="package"></el-option>
          <el-option label="拿药" value="doctor"></el-option>
          <el-option label="买零食" value="yumy"></el-option>
          <el-option label="其他" value="others"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="起始位置" prop="startLocation">
        <el-input v-model="form.startLocation"></el-input>
      </el-form-item>
      <el-form-item label="终点位置" prop="endLocation">
        <el-input v-model="form.endLocation"></el-input>
      </el-form-item>
      <el-form-item label="支付价格" prop="price">
        <el-input-number
          v-model="form.price"
          :controls="false"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(taskForm)">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue";
import type { createTask, MessageType } from "@/types";
import { postCreateTask } from "@/api/index";
import type { FormInstance, FormRules } from "element-plus";
import { TIPS_SUCCESS, TIPS_FAIL } from "@/utils/const";
import { ElMessage } from "element-plus";

const form = ref<createTask>({
  title: "",
  description: "",
  type: "",
  startLocation: "",
  endLocation: "",
  price: 0,
});

const taskForm = ref<FormInstance>();

const rules: FormRules = {
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  description: [{ required: true, message: "请输入任务描述", trigger: "blur" }],
  type: [{ required: true, message: "请选择任务类型", trigger: "change" }],
  startLocation: [
    { required: true, message: "请输入起始位置", trigger: "blur" },
  ],
  endLocation: [{ required: true, message: "请输入终点位置", trigger: "blur" }],
  price: [{ required: true, message: "请输入支付价格", trigger: "blur" }],
};

const messageTip = (message: string, type: MessageType): void => {
  ElMessage({
    message,
    type,
  });
};

const submitForm = (formEl: FormInstance | undefined): void => {
  if (!formEl) return;
  const taskData = JSON.stringify(form.value);
  formEl.validate((valid) => {
    if (valid) {
      postCreateTask(taskData).then(() => {
        messageTip(TIPS_SUCCESS.createTaskSuccess, "success");
        // 弹窗消失todo
        $emit("submit");
      });
    } else {
      messageTip(TIPS_FAIL.createTaskFail, "error");
    }
  });
};
</script>

<style>
.task-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
