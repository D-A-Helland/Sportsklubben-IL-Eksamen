<template>
  <UContainer class="py-10">
    <div class="mb-8">
      <h1 class="text-4xl font-bold">Admin Panel</h1>
      <p>
        Administrer brukere og godkjenn tilgang til serveren
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <NuxtLink to="/admin/users" class="group">
        <UCard class="h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
          <div class="flex items-center gap-4">
            <div class="rounded-xl bg-primary/10 p-3">
              <UIcon name="i-heroicons-users" class="size-7 text-primary" />
            </div>

            <div>
              <h2 class="text-xl font-semibold">Brukere</h2>
              <p>
                Se og administrer registrerte brukere
              </p>
            </div>
          </div>
        </UCard>
      </NuxtLink>

      <NuxtLink to="/admin/approve" class="group">
        <UCard class="h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-xl">
          <div class="flex items-center gap-4">
            <div class="rounded-xl bg-success/10 p-3">
              <UIcon name="i-heroicons-check-badge" class="size-7 text-success" />
            </div>

            <div>
              <h2 class="text-xl font-semibold">Godkjenn</h2>
              <p>
                Se gjennom og godkjenn tilgang til serveren
              </p>
            </div>
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </UContainer>
</template>
