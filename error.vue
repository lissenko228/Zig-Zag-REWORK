<template>
  <div class="min-h-dvh bg-white dark:bg-gray-900 dark:text-white">
    <section class="flex items-center h-full p-16">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div class="max-w-md text-center">
          <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400"><span class="sr-only">Ошибка</span>{{ error.statusCode }}</h2>
          <p class="mt-4 mb-8 dark:text-gray-600">{{ error.message }}</p>
          <NuxtLink rel="noopener noreferrer" to="/"> <UButton label="На главную" /></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const error = useError();
</script>
