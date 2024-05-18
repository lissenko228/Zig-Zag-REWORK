<script setup>
const isVisibleAuth = ref(false);

const links = [
  [
    {
      label: "Главная",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "О сервисе",
      icon: "i-heroicons-information-circle",
      to: "/about",
    },
    {
      label: "Возможности",
      icon: "i-heroicons-light-bulb",
      to: "/capabilities",
    },
    {
      label: "Как это работает",
      icon: "i-heroicons-question-mark-circle",
      to: "/how",
    },
    {
      label: "Блог",
      icon: "i-heroicons-chat-bubble-left-right",
      to: "/blog",
    },
    {
      label: "Клиенты",
      icon: "i-heroicons-users",
      to: "/clients",
    },
    {
      label: "Контакты",
      icon: "i-heroicons-identification",
      to: "/contact",
    },
  ],
  [
    {
      label: "Перезвоните мне",
      icon: "i-heroicons-phone",
      click: () => (isVisibleAuth.value = true),
    },
    {
      icon: "i-heroicons-user-circle",
      click: () => (isVisibleAuth.value = true),
    },
    {
      label: "theme",
    },
  ],
];
</script>

<template>
  <div>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800">
      <template #default="{ link }">
        <UColorModeToggle v-if="link.label == 'theme'" />
      </template>
    </UHorizontalNavigation>
    <UModal v-model="isVisibleAuth" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Modal</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isVisibleAuth = false" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
