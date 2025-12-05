<script setup lang="ts">
import AppHeader from "@/components/entities/header/AppHeader.vue";
import Sidebar from "@/components/entities/sidebar/Sidebar.vue";
function onSelect(tool: any) {
  console.log("clicked", tool);
}
</script>

<template>
  <AppHeader />
    <!-- page body -->
  <div class="flex bg-[#f0f0f3] dark:bg-[#212225] pl-20 h-[calc(100vh-64px)]">
    <!-- Sidebar sits fixed; you still need to keep main content offset by collapsed width -->
    <Sidebar @select="onSelect" />

    <!-- main content: keep left padding equal to collapsed width (64px) -->
    <main class="flex-1">
      <h1>Main content</h1>
      <p>When you hover sidebar, it expands overlaying this area — main doesn't move.</p>
    </main>
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
