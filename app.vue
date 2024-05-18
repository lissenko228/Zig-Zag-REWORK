<template>
  <div class="min-h-dvh bg-white dark:bg-gray-900 dark:text-white">
    <UContainer>
      <div class="wrapper">
        <UIHeader />
        <NuxtPage @reg="show_modal = true" />
      </div>
    </UContainer>
    <UModal v-model="show_modal">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"></h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="show_modal = false" />
          </div>
        </template>
        <UAuthForm
          class="auth-form"
          title="Регистрация"
          :submit-button="{ label: 'Зарегистрироваться', onclick: () => (show_modal = false) }"
          :fields="[
            { name: 'email', type: 'email', label: 'Email', placeholder: 'Введите Email', color: 'gray' },
            { name: 'phone', type: 'phone', label: 'Контактный телефон', placeholder: 'Введите телефон', color: 'gray' },
            { name: 'job', type: 'select', label: 'Ваша должность', placeholder: '--', color: 'gray' },
          ]"
        />
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const show_modal = ref(false);

const links = [
  {
    label: "Docs",
    icon: "i-heroicons-book-open",
    to: "/getting-started",
  },
  {
    label: "Pro",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/pro",
  },
  {
    label: "Releases",
    icon: "i-heroicons-rocket-launch",
    to: "/releases",
  },
];
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.auth-form {
  :deep(.max-w-sm) {
    max-width: 100% !important;
  }
}
</style>
