<template>
  <div
    v-if="visible"
    class="relative flex justify-center items-center mx-[calc(var(--col-gap)/2)]"
    :style="{ '--col-gap': props.columnSpacing + 'px' }"
  >
    <div
      class="absolute cursor-col-resize w-1 h-10 bg-blue-500 rounded-sm touch-none select-none"
      @pointerdown="onPointerDown"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  visible: boolean;
  columnSpacing: number;
}>();

const emit = defineEmits<{
  (e: "pointerdown", event: PointerEvent): void;
}>();

const onPointerDown = (event: PointerEvent) => {
  emit("pointerdown", event);
};
</script>
