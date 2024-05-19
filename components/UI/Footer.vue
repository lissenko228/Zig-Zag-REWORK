<script setup>
const links = [
  {
    label: "Меню",
    children: [
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
  },
  {
    label: "Связь с нами",
    children: [
      {
        label: "8 (800) 250-41-43",
        to: "tel:+78002504143",
      },
      {
        label: "sales@zig-zag.org",
        to: "mailto:sales@zig-zag.org",
      },
      {
        label: `© «Zig-Zag», 2021-${new Date().getFullYear()}`,
      },
    ],
  },
];
</script>

<template>
  <UFooterColumns :links="links">
    <template #left>
      <img width="60px" height="60px" src="/logo.svg" alt="" />
      <p class="text-purple-400"><b>ZIG-ZAG</b></p>
    </template>
  </UFooterColumns>
</template>
