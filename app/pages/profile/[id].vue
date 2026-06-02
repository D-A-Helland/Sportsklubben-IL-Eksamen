<script setup lang="ts">
import ProfileCard from '~/components/ProfileCard.vue'

const route = useRoute()
const id = computed(() => route.params.id as string)

const { data: user, error } = await useAsyncData(`user-${id.value}`, () =>
  $fetch(`/api/users/${id.value}`),
)

</script>
<template>
  <UContainer>
    <div v-if="error">User not found</div>
    <div v-else-if="user">
      <ProfileCard :user="{
        name: user.navn,
        email: user.epost,
        phone: user.tlf,
        role: user.rolle,
      }" class="mt-5" />
    </div>
    <div v-else>Loading...</div>
  </UContainer>
</template>
