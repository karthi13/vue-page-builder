<script setup lang="ts">
import { computed } from "vue"
import Logo from "@/assets/Logo.vue";
import { Button } from "@/components/ui/button";
import ModeSwitch from "@/components/entities/header/DarkModeSwitch.vue";
import { Bell, Copy as FileCopy, Undo2, Redo2, Heart, Sun, Moon } from "lucide-vue-next";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();

const isDark = computed({
  get: () => mode.value === "dark",
  set: (val: boolean) => {
    mode.value = val ? "dark" : "light"
  }
})
</script>

<template>
  <header
    class="w-full h-16 border-b bg-white dark:bg-zinc-900 flex items-center justify-between px-4 gap-4"
  >
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <Logo />
      </div>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-4">
      <div class="flex items-center space-x-2">
        <ModeSwitch v-model="isDark">
          <template #offIcon>
            <Sun class="w-4 h-4 text-yellow-500" />
          </template>

          <template #onIcon>
            <Moon class="w-4 h-4 text-gray-700" />
          </template>
        </ModeSwitch>
      </div>

      <!-- Divider -->
      <div class="w-px h-6 bg-gray-300"></div>

      <div class="flex items-center gap-3 text-gray-600">
        <Undo2 class="h-5 w-5 cursor-pointer hover:text-black" />
        <Redo2 class="h-5 w-5 cursor-pointer hover:text-black" />
      </div>

      <div class="w-px h-6 bg-gray-300"></div>
      <!-- Icons -->
      <div class="flex items-center gap-3 text-gray-600">
        <Bell class="h-5 w-5 cursor-pointer hover:text-black" />
        <FileCopy class="h-5 w-5 cursor-pointer hover:text-black" />
      </div>

      <!-- Divider -->
      <div class="w-px h-6 bg-gray-300"></div>

      <!-- Cancel -->
      <Button variant="secondary"> Cancel </Button>

      <!-- Publish -->
      <Button> Publish </Button>

      <!-- Heart Icon -->
      <Heart class="h-5 w-5 text-blue-600 cursor-pointer hover:text-blue-700" />
    </div>
  </header>
</template>
