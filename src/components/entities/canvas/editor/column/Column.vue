<script setup lang="ts">
import type { ColumnEntity } from "@/types/CanvasType";
import ColumnRow from "./ColumnRow.vue";

const props = defineProps<{
  colData: ColumnEntity;
  rowHover: boolean;
}>();
</script>
<template>
  <div
    class="flex flex-col w-full h-full"
    :class="[rowHover ? 'border border-dotted' : '']"
  >
    <ColumnRow
      v-for="value in colData.children"
      :key="colData.id"
      :data="value"
    />
  </div>
</template>
