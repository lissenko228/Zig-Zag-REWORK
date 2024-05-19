<template>
  <UModal v-model="model">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"></h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="model = false" />
        </div>
      </template>
      <UAuthForm
        class="auth-form"
        title="Регистрация"
        :submit-button="{ label: 'Зарегистрироваться', onclick: () => (model = false) }"
        :fields="[
          { name: 'email', type: 'email', label: 'Email', placeholder: 'Введите Email', color: 'gray' },
          { name: 'phone', type: 'phone', label: 'Контактный телефон', placeholder: 'Введите телефон', color: 'gray' },
          { name: 'job', type: 'select', label: 'Ваша должность', placeholder: '--', color: 'gray' },
        ]"
      />
    </UCard>
  </UModal>
</template>

<script setup>
const model = defineModel({ default: false });
</script>

<style scoped lang="scss">
:deep(.max-w-sm) {
  max-width: 100%;
}
</style>
