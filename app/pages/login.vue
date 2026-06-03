<template>
  <UContainer class="flex justify-center items-center min-h-[70vh]">
    <UCard class="w-full max-w-sm">
      <div class="space-y-6">
        <h1 class="text-2xl font-bold">Login</h1>

        <UForm :state="form" @submit="login" class="space-y-4">
          <UFormField label="Epost">
            <UInput v-model="form.epost" placeholder="Epost" icon="i-lucide-mail" class="w-84" />
          </UFormField>

          <UFormField label="Passord">
            <UInput v-model="form.password" type="password" placeholder="Passord" icon="i-lucide-lock" class="w-84" />
          </UFormField>

          <UButton block type="submit" class="max-w-sm">
            Login
          </UButton>
        </UForm>

        <UAlert v-if="error" color="red" variant="soft" :title="error" />
      </div>
    </UCard>
  </UContainer>
</template>

<script setup>
const form = ref({
  epost: '',
  password: '',
})

const error = ref('')

const login = async () => {
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: form.value,
    })

    // redirect after login
    await navigateTo('/', { external: true })
  } catch (err) {
    console.log(err)
    error.value = err.data?.statusMessage || 'Wrong email or password'
  }
}
</script>
