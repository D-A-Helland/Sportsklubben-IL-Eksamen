<script setup lang="ts">
const { data: user } = await useFetch('/api/auth/me')
const requestAccess = async () => {
  await $fetch('/api/tickets', {
    method: 'POST',
    body: {
      bruker_id: user.value?.id
    }
  })
}
</script>

<template>
  <UContainer>
    <h1>Tilgang</h1>

    <UCard class="mt-10 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
      @click="requestAccess">
      <div class="flex items-center gap-4">
        <div class="rounded-xl bg-primary/10 p-3">
          <UIcon name="i-heroicons-lock-open" class="size-7 text-primary" />
        </div>

        <div>
          <h2 class="text-xl font-semibold">Be om tilgang</h2>
          <p>
            Administratorer vil kunne gi deg tilgang til minecraft serveren
          </p>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
