<script setup>
const form = ref({
  navn: '',
  tlf: '',
  epost: '',
  password: '',
})

const message = ref('')

const createUser = async () => {
  try {
    const res = await $fetch('/api/users', {
      method: 'POST',
      body: form.value,
    })

    message.value = 'User created!'

    form.value = {
      navn: '',
      tlf: '',
      epost: '',
      password: '',
    }
  } catch (err) {
    message.value = err.data?.statusMessage || 'Error'
  }
  console.log(message.value)
}
</script>

<template>
  <UContainer class="flex justify-center items-center min-h-[70vh]">
    <UCard class="w-full max-w-sm">
      <div class="space-y-6">
        <h1 class="text-2xl font-bold">Lag ny bruker</h1>

        <UForm
          :state="form"
          @submit="createUser"
          class="space-y-4"
        >
          <UFormField label="Navn">
            <UInput
              v-model="form.navn"
              placeholder="Navn"
              icon="i-lucide-user"
              class="w-84"
            />
          </UFormField>

          <UFormField label="Tlf">
            <UInput
              v-model="form.tlf"
              placeholder="Tlf"
              icon="i-lucide-phone"
              class="w-84"
            />
          </UFormField>

          <UFormField label="Epost">
            <UInput
              v-model="form.epost"
              placeholder="Epost"
              icon="i-lucide-mail"
              class="w-84"
            />
          </UFormField>

          <UFormField label="Passord">
            <UInput
              v-model="form.password"
              type="password"
              placeholder="Passord"
              icon="i-lucide-lock"
              class="w-84"
            />
          </UFormField>

          <UButton
            block
            type="submit"
          >
            Opprett bruker
          </UButton>
        </UForm>
      </div>
    </UCard>
  </UContainer>
</template>
