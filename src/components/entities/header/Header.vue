<script setup lang="ts">
import Logo from "@/assets/Logo.vue";
</script>

<template>
  <UHeader>
    <template #title #left>
      <Logo class="h-6 w-auto" />
    </template>

    <template #right>
      <UColorModeButton />
      <USeparator orientation="vertical" class="h-8" />
      <UButton
        icon="lucide:monitor"
        variant="ghost"
        color="neutral"
        size="md"
      />
      <USeparator orientation="vertical" class="h-8" />
      <UButton icon="lucide:undo-2" variant="ghost" color="neutral" size="md" />
      <UButton icon="lucide:redo-2" variant="ghost" color="neutral" size="md" />
      <USeparator orientation="vertical" class="h-8" />

      <UButton variant="soft" color="neutral" size="md"> Cancel </UButton>
      <div
        class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse"
      >
        <UButton
          size="md"
          label="Publish"
          class="rounded-none rounded-l-md shadow-none focus-visible:z-10 border-r-2 border-secondary"
        />
        <UButton
          size="md"
          icon="lucide:heart"
          color="primary"
          variant="solid"
          class="rounded-none bg-primary flex items-center rounded-r-md text-sm font-medium"
        />
      </div>
    </template>
  </UHeader>
</template>
