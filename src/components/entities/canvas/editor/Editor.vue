<script setup lang="ts">
import { ref } from "vue";
import Section from "./section/Section.vue";
import { generateAppData } from "@/utils/sampleData";

const appData = generateAppData();
console.log("App Data:", appData);
const sections = ref(appData.children);
</script>

<template>
  <div class="w-full h-full flex flex-col p-2">
    <Section v-for="n in sections" :key="n.id" />
  </div>
</template>

<style scoped></style>
