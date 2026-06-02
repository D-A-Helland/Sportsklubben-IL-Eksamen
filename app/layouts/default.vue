<template>
  <UContainer>
    <UHeader>
      <template #title>
        <h1 class="text-2xl font-bold">Nuxt App</h1>
      </template>

      <UNavigationMenu :items="links" />
      <template #body>
        <UNavigationMenu :items="links" />
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <UMain>
      <slot />
    </UMain>
  </UContainer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute()

const links = computed<NavigationMenuItem[]>(() => [
  { label: 'Home', to: '/', active: route.path === '/' },
])
</script>
