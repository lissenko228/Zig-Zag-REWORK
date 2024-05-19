<template>
  <div>
    <ULandingSection title="Как работает сервис для логистики «Zig-Zag»">
      <template #description>
        <p>
          Zig-Zag — это интернет сервис, работа с которым доступна вам через любой веб-браузер( Google Chrome, Mozilla Firefox, Opera ). Начать работать с
          Zig-Zag и составить свой первый марщрут просто.
        </p>
        <UButton class="my-5" label="Зарегистрироваться" @click="$emit('reg')" size="lg" />
        <p>и выполнить следующие шаги:</p>
      </template>
    </ULandingSection>

    <ULandingSection title="Шаг 1. Заполнить справочники системы">
      <template #description>
        <p class="al-s">Справочник <b>База</b> — место откуда выезжают и возвращаются ваши автомобили</p>
        <p class="al-s">Справочник <b>Автомобили</b> — парк транспортных средств Вашего предприятия</p>
        <UCarousel arrows v-slot="{ item }" :items="how_sliders['1']" :ui="{ item: 'basis-full' }" class="mt-5">
          <img height="500px" :src="item.src" draggable="false" />
        </UCarousel>
      </template>
    </ULandingSection>

    <ULandingSection title="Шаг 2. Составьте свой первый маршрут">
      <template #description>
        <UCarousel arrows v-slot="{ item }" :items="how_sliders['2']" :ui="{ item: 'basis-full' }" class="mt-5">
          <img height="500px" :src="item.src" draggable="false" />
        </UCarousel>
      </template>
    </ULandingSection>

    <ULandingSection title="Шаг 3. Проложите маршрут">
      <template #description>
        <UCarousel arrows v-slot="{ item }" :items="how_sliders['3']" :ui="{ item: 'basis-full' }" class="mt-5">
          <img height="500px" :src="item.src" draggable="false" />
        </UCarousel>
        <iframe
          class="mt-20"
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/_icJAunU4nQ?si=5txKrErlC70G7wM2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </template>
    </ULandingSection>

    <ULandingCTA title="Остались вопросы?">
      <template #description>
        <p>Позвоните нам по телефону <UButton label="8 (800) 250-41-43" /></p>
        <p>Мы поможем Вам начать работу и ответим на все вопросы!</p>
      </template>
    </ULandingCTA>
  </div>
</template>

<script setup>
const how_sliders = {
  1: [{ src: "https://zig-zag.org/img/how/1-1.jpg" }, { src: "https://zig-zag.org/img/how/1-2.jpg" }, { src: "https://zig-zag.org/img/how/1-3.jpg" }],
  2: [
    { src: "https://zig-zag.org/img/how/2-1.jpg" },
    { src: "https://zig-zag.org/img/how/2-2.jpg" },
    { src: "https://zig-zag.org/img/how/2-3.jpg" },
    { src: "https://zig-zag.org/img/how/2-4.jpg" },
    { src: "https://zig-zag.org/img/how/2-5.jpg" },
    { src: "https://zig-zag.org/img/how/2-6.jpg" },
    { src: "https://zig-zag.org/img/how/2-7.jpg" },
    { src: "https://zig-zag.org/img/how/2-8.jpg" },
    { src: "https://zig-zag.org/img/how/2-9.jpg" },
  ],
  3: [
    { src: "https://zig-zag.org/img/how/3-1.jpg" },
    { src: "https://zig-zag.org/img/how/3-2.jpg" },
    { src: "https://zig-zag.org/img/how/3-3.jpg" },
    { src: "https://zig-zag.org/img/how/3-4.jpg" },
    { src: "https://zig-zag.org/img/how/3-5.jpg" },
  ],
};
</script>

<style></style>
