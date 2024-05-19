<template>
  <div class="min-h-dvh bg-white dark:bg-gray-900 dark:text-white">
    <UContainer>
      <div class="wrapper">
        <UIHeader @reg="show_modal = true" />
        <UMain>
          <NuxtPage @reg="show_modal = true" />
        </UMain>
        <UIFooter class="py-10" />
      </div>
    </UContainer>
    <ModalReg v-model="show_modal" />
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

<style lang="scss">
@import "/assets/index.scss";
</style>

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
