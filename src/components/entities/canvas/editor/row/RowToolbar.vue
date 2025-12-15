<script setup lang="ts">
import { Image, Settings, Trash2 } from "lucide-vue-next";
</script>

<template>
  <div
    class="flex items-center gap-2 bg-black/60 text-white px-3 py-2 rounded-lg shadow-lg backdrop-blur-md"
  >
    <button class="hover:text-blue-300 transition">
      <Image class="w-4 h-4" />
    </button>

    <button class="hover:text-blue-300 transition">
      <Settings class="w-4 h-4" />
    </button>

    <button class="hover:text-red-400 transition">
      <Trash2 class="w-4 h-4" />
    </button>
  </div>
</template>
