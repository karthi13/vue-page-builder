<template>
  <div class="relative group">
    <aside
      class="fixed left-4 top-19 z-100 h-[calc(100vh-88px)] overflow-hidden transition-all duration-300 ease-in-out w-16 group-hover:w-[500px] bg-gray-100 dark:bg-gray-950 rounded-2xl shadow-2xl border-r border-white/5 flex"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <div class="w-52 p-2 flex flex-col border-r border-white h-full">
        <div class="flex-1 flex flex-col gap-3 overflow-y-auto">
          <SidebarToolButton
            v-for="tool in tools"
            :key="tool.title"
            :tool="tool"
            :active="selectedTool?.title === tool.title"
            @mouseenter="selectTool(tool)"
          />
        </div>
      </div>
      <SidebarOptions :options="selectedTool" />
    </aside>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidebarToolButton from "./Entity.vue";
import SidebarOptions from "./Options.vue";
import { nanoid } from "nanoid";

const hover = ref(false);
const selectedTool = ref<any>(null);

const tools = [
  { icon: "lucide:layers-2", bg: "bg-[#111315] text-white", title: "Layers" },
  { icon: "lucide:type", bg: "bg-[#111315] text-white", title: "Text" },
  { icon: "lucide:image", bg: "bg-[#111315] text-white", title: "Image" },
  { icon: "lucide:square", bg: "bg-[#111315] text-white", title: "Box" },
  { icon: "lucide:plus", bg: "bg-pink-500 text-white", title: "Add" },
  { icon: "lucide:star", bg: "bg-orange-500 text-white", title: "Star" },
  { icon: "lucide:align-left", bg: "bg-yellow-400 text-white", title: "Align" },
  { icon: "lucide:move-vertical", bg: "bg-teal-300 text-white", title: "Move" },
  { icon: "lucide:play", bg: "bg-sky-400 text-white", title: "Play" },
  { icon: "lucide:code", bg: "bg-blue-500 text-white", title: "Code" },
];

function selectTool(tool: { icon: any; bg: string; title: string }) {
  selectedTool.value = { ...tool, id: nanoid() };
}
</script>
