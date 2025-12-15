<script setup lang="ts">
import Header from "@/components/entities/header/Header.vue";
import Sidebar from "@/components/entities/sidebar/Sidebar.vue";
import Editor from "@/components/entities/canvas/editor/Editor.vue";

function onSelect(tool: any) {
  console.log("clicked", tool);
}
</script>

<template>
  <div class="bg-background">
    <Header />
    <div class="flex bg-[#f0f0f3] dark:bg-[#212225] pl-20 h-[calc(100vh-64px)]">
      <!-- Sidebar sits fixed; you still need to keep main content offset by collapsed width -->
      <Sidebar @select="onSelect" />

      <!-- main content: keep left padding equal to collapsed width (64px) -->
      <main class="flex-1">
        <Editor />
      </main>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
