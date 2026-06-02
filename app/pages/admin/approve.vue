<template>
  <UContainer>
    <h1>Tilgang</h1>
    <p>
      Godkjenn forespørsler om tilgang til serveren
    </p>
    <div v-for="ticket in tickets">
      <h3>{{ ticket.bruker_id }}</h3>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const { data: tickets } = await useFetch('/api/tickets')
</script>
