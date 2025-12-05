<script setup lang="ts">
import { Switch } from "@/components/ui/switch";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);
console.log(props.modelValue);
</script>

<template>
  <div class="relative inline-flex items-center">
    <!-- Icons inside track -->
    <div
      class="absolute inset-0 flex items-center justify-between px-2 pointer-events-none"
    >
      <!-- Left Icon (off state) -->
      <slot name="offIcon" v-if="!props.modelValue" />
      <!-- Right Icon (on state) -->
      <slot name="onIcon" v-if="props.modelValue" />
    </div>

    <!-- Real shadcn-vue switch -->
    <Switch
      :checked="props.modelValue"
      @update:checked="emit('update:modelValue', $event)"
      class="w-14 h-8"
    />
  </div>
</template>
