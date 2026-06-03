<script setup lang="ts">
const { data: tickets } = await useFetch('/api/tickets')

const approveRequest = async (ticketId: number) => {
  const currentTicket = await $fetch(`/api/tickets/${ticketId}`, {
    method: 'GET',
  })

  await $fetch('/api/users/rolle', {
    method: 'PUT',
    body: {
      id: currentTicket?.bruker_id
    }
  })
  await $fetch('/api/tickets', {
    method: 'DELETE',
    body: {
      id: ticketId
    }
  })

  await refreshNuxtData()
}

const columns = [
  {
    accessorKey: 'navn',
    header: 'Navn'
  },
  {
    accessorKey: 'epost',
    header: 'E-post'
  },
  {
    id: 'actions',
    header: ''
  }
]

const rows = computed(() =>
  (tickets.value ?? []).map(ticket => ({
    id: ticket.id,
    navn: ticket.brukere.navn,
    epost: ticket.brukere.epost
  }))
)
</script>

<template>
  <UContainer>
    <h1>Tilgang</h1>

    <p class="my-6">
      Godkjenn forespørsler om tilgang til serveren
    </p>

    <UTable :data="rows" :columns="columns" :ui="{ td: 'text-default' }">
      <template #actions-cell="{ row }">
        <UButton icon="i-heroicons-check" label="Godkjenn" @click="approveRequest(row.original.id)" />
      </template>
    </UTable>
  </UContainer>
</template>
