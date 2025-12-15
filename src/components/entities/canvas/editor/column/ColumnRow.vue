<script setup lang="ts">
import type { ColumnRowEntity } from "@/types/CanvasType";

defineProps<{
  data: ColumnRowEntity;
}>();
</script>

<template>
  <div class="w-full h-full flex flex-col">{{ data.type }}</div>
</template>
