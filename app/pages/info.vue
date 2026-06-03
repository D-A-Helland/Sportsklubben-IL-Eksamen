<template>
  <UContainer>
    <UCard class="mt-6 max-w-xl">
      <template #header>
        <div>
          <h1 class="text-2xl font-bold">Minecraft Server</h1>
          <p class="text-muted">
            Koble til serveren med IP-adressen under.
          </p>
        </div>
      </template>

      <div class="space-y-4">
        <div>
          <p class="text-sm text-muted">
            Server IP
          </p>

          <code class="block rounded-lg bg-elevated px-4 py-3 text-lg font-mono">
            {{ serverIp }}
          </code>
        </div>

        <UButton icon="i-heroicons-play" label="Start server" size="lg" block />
      </div>

      <template #footer>
        <UBadge color="success" variant="soft">
          Online
        </UBadge>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const serverIp = '10.0.114.40'
</script>
