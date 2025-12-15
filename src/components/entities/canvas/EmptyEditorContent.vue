<template>
  <div class="flex flex-col items-center justify-center py-20 text-center">
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="110" cy="110" r="100" fill="#F5F7FA" />
      <path
        d="M110 30C92 48 84 78 84 100c0 18 6 36 26 36s26-18 26-36c0-22-8-52-26-70z"
        fill="white"
        stroke="#CBD5E1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <circle
        cx="110"
        cy="95"
        r="12"
        fill="#E2E8F0"
        stroke="#94A3B8"
        stroke-width="3"
      />

      <path
        d="M84 120l-18 14c-4 3-3 10 2 12l16 6"
        fill="white"
        stroke="#CBD5E1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M136 120l18 14c4 3 3 10-2 12l-16 6"
        fill="white"
        stroke="#CBD5E1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M110 136c-8 10-8 22 0 34c8-12 8-24 0-34z"
        fill="#FBBF24"
        stroke="#F59E0B"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="55" cy="60" r="4" fill="#E2E8F0" />
      <circle cx="160" cy="55" r="3" fill="#E2E8F0" />
      <circle cx="150" cy="160" r="5" fill="#E2E8F0" />
      <circle cx="60" cy="150" r="3" fill="#E2E8F0" />
    </svg>

    <h2 class="mt-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">
      There's nothing on your page yet.
    </h2>

    <!-- Buttons -->
    <div class="mt-4 flex gap-3">
      <UButton
        variant="secondary"
        class="px-5 py-2"
        @click="$emit('add-section')"
      >
        Add Section
      </UButton>

      <UButton
        variant="default"
        class="px-5 py-2 bg-blue-600 text-white hover:bg-blue-700"
        @click="$emit('open-presets')"
      >
        <Copy class="w-4 h-4 mr-2" />
        Page Presets
      </UButton>
    </div>

    <!-- Large Add Section button -->
    <button
      class="mt-10 flex items-center justify-center gap-3 w-full max-w-xl py-5 bg-white dark:bg-gray-900 shadow rounded-xl border hover:border-blue-500 transition"
      @click="$emit('add-section')"
    >
      <Plus class="w-6 h-6" />
      <span class="text-lg font-medium">Add New Section</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Copy, Plus } from "lucide-vue-next"; // shadcn-vue button
</script>

<style scoped>
img {
  user-select: none;
}
</style>
