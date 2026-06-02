<script setup lang="ts">
defineProps<{
  user: {
    name: string
    email: string
    phone: string
    role?: string
  }
}>()
</script>

<template>
  <UCard class="max-w-sm mx-auto">
    <div class="flex flex-col items-center text-center gap-4">
      <div>
        <h2 class="text-xl font-semibold">{{ user.name }}</h2>
        <p class="text-sm">{{ user.email }}</p>
        <p class="text-sm">{{ user.phone }}</p>
      </div>
      <UBadge v-if="user.role" color="primary" variant="soft">
        {{ user.role }}
      </UBadge>
    </div>
  </UCard>
</template>
