<script setup lang="ts">
defineProps<{
  tool: any;
  active?: boolean;
}>();
</script>

<template>
  <div
    class="h-12 w-full flex items-center gap-3 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
    @click="$emit('click')"
  >
    <UButton
      class="ml-2 h-8 w-8 justify-around rounded-md flex items-center shadow-md transition-all duration-200"
      :class="[tool.bg, active ? 'ring-2 ring-sky-400' : '']"
    >
      <UIcon :name="tool.icon" class="size-5" />
    </UButton>
    <div
      class="text-slate-950 dark:text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
    >
      {{ tool.title }}
    </div>
  </div>
</template>
