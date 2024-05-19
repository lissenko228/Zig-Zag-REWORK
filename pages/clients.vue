<template>
  <div>
    <ULandingSection title="Все клиенты компании" />
    <div class="clients">
      <UCard v-for="({ src, label, desc }, index) in clients" :key="index">
        <template #header>
          <div class="clients-header">
            <img :src="src" />
          </div>
        </template>
        <p class="text-purple-400">{{ label }}</p>
        <template #footer>
          <p>{{ desc }}</p>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const clients = [
  {
    src: "https://zig-zag.org/img/clients/client_logo_18.png",
    label: "Нитрогаз",
    desc: "Продажа жидкого азота и сухого льда. Аренда и продажа сосудов Дьюара.",
  },
  {
    src: "https://zig-zag.org/img/clients/client_logo_16.png",
    label: "Мартин-сад",
    desc: "«Мартин-сад» - интернет-магазин саженцев, выращенных в контейнерах в СОБСТВЕННОМ питомнике в условиях российского климата.",
  },
  {
    src: "https://zig-zag.org/img/clients/client_logo_32.png",
    label: "Форвард",
    desc: "Типография Форвард работает на рынке полиграфии более 15 лет.",
  },
  {
    src: "https://zig-zag.org/img/clients/client_logo_4.png",
    label: "Интера",
    desc: "В интернет-магазине 'Интера' представлен широкий ассортимент товаров для офиса.",
  },
  {
    src: "https://zig-zag.org/img/clients/client_logo_22.png",
    label: "Сибирский пекарь",
    desc: "Профессиональная химчистка с доставкой на дом или в офис.",
  },
  {
    src: "https://zig-zag.org/img/clients/client_logo_33.png",
    label: "БЭСТ",
    desc: "В интернет-магазине 'БЭСТ' представлен широкий ассортимент товаров для офиса.",
  },
];
</script>

<style scoped lang="scss">
.clients {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  &-header {
    display: flex;
    justify-content: center;
  }
}
</style>
