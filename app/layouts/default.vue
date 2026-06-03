<template>
  <UContainer>
    <UHeader>
      <template #title>
        <h1 class="text-2xl font-bold">Sportsklubben IL</h1>
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

const { data: user } = await useFetch('/api/auth/me')

const links = computed<NavigationMenuItem[][]>(() => [
  [
    { label: 'Hjem', to: '/' },

    !user.value && { label: 'Login', to: '/login' },
    !user.value && { label: 'Registrer', to: '/register' },

    user.value?.rolle === 'admin' && { label: 'Admin', to: '/admin' },

    user.value && { label: 'Profil', to: `/profile/${user.value.id}` },
    user.value && user.value?.rolle !== 'deltaker' && user.value?.rolle !== 'admin' && { label: 'Tilgang', to: `/access` },
    user.value?.rolle === 'deltaker' && { label: 'Info', to: '/info' },
    user.value && { label: 'Logg ut', to: '/logout' },
  ].filter(Boolean) as NavigationMenuItem[],
])
</script>
