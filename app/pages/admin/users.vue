<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const isAdmin = true

type User = {
  id: number
  navn: string
  epost: string
  rolle: string
}

const { data: users, pending, error, refresh } = await useFetch<User[]>('/api/users')

const columns: TableColumn<User>[] = [
  { accessorKey: 'navn', header: 'Navn' },
  { accessorKey: 'epost', header: 'E-post' },
  { accessorKey: 'rolle', header: 'Rolle' },
  { id: 'actions', header: 'Handlinger' },
]

const inspectUser = (id: number) => navigateTo(`/profile/${id}`)

const deleteUser = async (id: number) => {
  if (!confirm('Er du sikker på at du vil slette brukeren?')) return
  await $fetch(`/api/users/${id}`, { method: 'DELETE' })
  await refresh()
}
</script>

<template>
  <UContainer>
    <h1 class="text-2xl font-bold mb-4">Brukere</h1>

    <div v-if="pending">Laster...</div>
    <div v-else-if="error">Noe gikk galt</div>

    <UTable v-else :data="users || []" :columns="columns" :ui="{ td: 'text-highlighted' }">
      <template #rolle-cell="{ row }">
        <UBadge v-if="row.original.rolle === 'admin'" color="primary">
          Admin
        </UBadge>
        <UBadge v-else-if="row.original.rolle !== 'admin'" color="secondary">
          Bruker
        </UBadge>
      </template>

      <template #actions-cell="{ row }">
        <div class="flex gap-2">
          <UButton size="xs" icon="i-heroicons-magnifying-glass" variant="soft" @click="inspectUser(row.original.id)" />
          <UButton v-if="isAdmin" size="xs" icon="i-heroicons-trash" variant="soft" color="error"
            @click="deleteUser(row.original.id)" />
        </div>
      </template>
    </UTable>
  </UContainer>
</template>
