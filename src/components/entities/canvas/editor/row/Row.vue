<script setup lang="ts">
import { ref, useTemplateRef } from "vue";
import { useElementSize } from "@vueuse/core";
import type { RowEntity } from "@/types/CanvasType";
import Column from "@/components/entities/canvas/editor/column/Column.vue";
import RowLeftPanel from "./RowLeftPanel.vue";
import ColumnResizer from "@/components/entities/canvas/editor/column/ColumnResizer.vue";

const isHover = ref(false);
const columnSpacing = ref(0);
const rowEl = useTemplateRef<HTMLDivElement>("rowEl");
const { width } = useElementSize(rowEl);

defineProps<{
  rowdata: RowEntity;
}>();

const handlePointerDown = (event: PointerEvent) => {
  event.preventDefault();

  const startX = event.clientX;
  const startSpacing = columnSpacing.value;

  // 🔒 Capture pointer so drag doesn't break
  (event.target as HTMLElement).setPointerCapture(event.pointerId);

  const handlePointerMove = (moveEvent: PointerEvent) => {
    const deltaX = moveEvent.clientX - startX;

    // scale in steps of 5px
    let next = startSpacing + Math.round(deltaX / 5) * 5;

    // clamp 0–100px
    next = Math.max(0, Math.min(100, next));

    if (next !== columnSpacing.value) {
      columnSpacing.value = next;
    }
  };

  const handlePointerUp = () => {
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };

  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerup", handlePointerUp);
};
</script>
<template>
  <div
    ref="rowEl"
    class="relative w-full h-full min-h-50 flex p-0.5 hover:p-0 hover:border-2 hover:border-blue-400"
    :style="{ gap: `${columnSpacing}px` }"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <RowLeftPanel v-if="isHover" class="absolute -top-6 -left-0.5" />
    <template v-for="(column, index) in rowdata.children" :key="column.id">
      <div class="relative flex-1">
        <Column :colData="column" :rowHover="isHover" />
        <ColumnResizer
          v-if="index < rowdata.children.length - 1"
          :visible="true"
          :columnSpacing="columnSpacing"
          @pointerdown="handlePointerDown"
        />
      </div>
    </template>
  </div>
</template>
