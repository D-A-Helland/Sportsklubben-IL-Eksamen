<script setup lang="ts">
await $fetch('/api/logout', {
  method: 'POST',
})

await navigateTo('/', { external: true })
</script>

<template>
  <UContainer>
    <h1 class="text-2xl font-bold">Logger ut...</h1>
  </UContainer>
</template>
