<template>
  <div class="relative group" aria-hidden="false">
    <aside
      class="fixed left-4 top-19 z-9999 h-[calc(100vh-88px)] overflow-hidden transition-all duration-300 ease-in-out w-16 group-hover:w-[500px] bg-gray-100 dark:bg-gray-950 text-white rounded-2xl shadow-2xl border-r border-white/5 flex items-start"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :aria-expanded="hover"
    >
      <div
        class="w-52 p-2 flex items-start flex-col flex-1 border-r border-white h-full"
      >
        <div class="flex-1 w-full flex flex-col gap-3 overflow-y-auto">
          <button class="h-12 w-12 rounded-xl bg-white flex shadow-sm">
            <svg
              class="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <div
            v-for="(t, i) in tools"
            :key="i"
            class="flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md cursor-pointer"
          >
            <button
              class="h-12 w-12 rounded-xl flex items-center justify-center shadow-md transform transition-all duration-200"
              :class="t.bg"
              @click="$emit('select', t)"
              @mouseenter="hovered(t)"
              @mouseleave="hovered(null)"
              :title="t.title"
            >
              <component :is="t.icon" class="h-5 w-5" />
            </button>
            <span
              class="text-slate-950 dark:text-slate-50 opacity-100 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap"
            >
              {{ t.title }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <!-- Expanded content area -->
        <div
          v-for="value in options"
          class="p-4 text-slate-900 dark:text-slate-100"
          :style="{ marginTop: headerOffsetPx }"
        >
          <h2 class="text-lg font-semibold mb-4">{{ value }}</h2>
          <p>Select a tool from the sidebar to see its options here.</p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Layers,
  Type,
  Image as ImageIcon,
  Square,
  Plus,
  Star,
  AlignLeft,
  MoveVertical,
  Play,
  Code,
} from "lucide-vue-next";

const hover = ref(false);
const headerOffset = 88;
const headerOffsetPx = computed(() => `${headerOffset}px`);

const options = ["Option A", "Option B", "Option C"];

const tools = [
  { icon: Layers, bg: "bg-[#111315] text-white", title: "Layers" },
  { icon: Type, bg: "bg-[#111315] text-white", title: "Text" },
  { icon: ImageIcon, bg: "bg-[#111315] text-white", title: "Image" },
  { icon: Square, bg: "bg-[#111315] text-white", title: "Box" },
  { icon: Plus, bg: "bg-pink-500 text-white", title: "Add" },
  { icon: Star, bg: "bg-orange-500 text-white", title: "Star" },
  { icon: AlignLeft, bg: "bg-yellow-400 text-white", title: "Align" },
  { icon: MoveVertical, bg: "bg-teal-300 text-white", title: "Move" },
  { icon: Play, bg: "bg-sky-400 text-white", title: "Play" },
  { icon: Code, bg: "bg-blue-500 text-white", title: "Code" },
];
const hovered = (tool: any) => {
  console.log("hovered", tool);
  return tool ? options : [];
};
</script>

<style scoped>
aside {
  /* width transition is already enabled via transition-all, but adding this helps */
  will-change: width, transform, box-shadow;
}
</style>
