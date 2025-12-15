<script setup lang="ts">
import { MoveVertical, Cog, Copy, Trash2 } from "lucide-vue-next";

const tools = [
  { icon: MoveVertical, color: "text-white" },
  { icon: Cog, color: "text-white" },
  { icon: Copy, color: "text-white" },
  { icon: Trash2, color: "text-white" },
];
</script>

<template>
  <aside
    class="bg-blue-500 text-white w-42.5 shadow-xl flex items-center gap-4"
  >
    <button
      v-for="(t, i) in tools"
      :key="i"
      class="p-2 rounded-lg hover:bg-blue-600 transition"
    >
      <component :is="t.icon" class="w-4 h-2" />
    </button>
  </aside>
</template>
