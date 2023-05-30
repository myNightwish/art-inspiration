<template>
  <div class="home">
    <el-button type="primary" @click="showTaskForm">发布任务</el-button>
    <el-table :data="taskList" border>
      <el-table-column prop="title" label="任务标题"></el-table-column>
      <el-table-column prop="description" label="任务描述"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column>
        <template #default="{ row }">
          <el-button type="text" @click="showTaskDetail(row)"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <TaskForm v-if="showForm" @submit="handleTaskFormSubmit" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getAllTasklist } from "@/api/index";
import TaskForm from "./taskForm.vue";

import type { Task } from "@/types/index"; // 自定义任务类型，根据实际需要导入
const taskList = ref<Task[]>([]);
const showForm = ref(false);

const showTaskForm = () => {
  showForm.value = true;
};

onMounted(async () => {
  const res = await getAllTasklist();
  taskList.value.push(...res.data);
});

const handleTaskFormSubmit = () => {
  console.log("hijsi");
  showForm.value = false;
};

const showTaskDetail = (task: Task) => {
  //
};
</script>
