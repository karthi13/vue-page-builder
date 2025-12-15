<script setup lang="ts">
import { ref } from "vue";
import { generateAppData } from "@/utils/sampleData";
import Row from "@/components/entities/canvas/editor/row/Row.vue"

const appData = generateAppData();
const sections = ref(appData.children);
const isHover = ref(false);
</script>

<template>
  <div
    class="relative group overflow-visible border border-transparent hover:border-blue-400 rounded-lg transition-colors duration-200"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- Section Content -->
    <template v-for="section in sections" :key="section.id">
      <section class="p-6 min-h-[200px] bg-gray-900 text-white rounded-lg">
        <Row v-for="row in section.children" :key="row.id" :rowdata="row"></Row>
      </section>
    </template>
  </div>
</template>
