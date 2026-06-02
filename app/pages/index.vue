<template>
  <UContainer>
    <h1 v-if="user">Velkommen, {{ user.navn }}</h1>
    <h1 v-else>Velkommen</h1>
  </UContainer>
</template>

<script setup lang="ts">
const { data: user } = await useFetch('/api/auth/me')
</script>
