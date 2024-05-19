<template>
  <div>
    <ULandingCTA title="Контактная информация">
      <template #description>
        <p class="text-2xl mb-3">Связаться с нами можно по следующим контактам:</p>
        <div class="buttons mb-3">
          <UButton label="8 (800) 250-41-43" to="tel:+78002504143" />
          <UButton label="sales@zig-zag.org" to="mailto:sales@zig-zag.org" />
        </div>
        <p class="text-2xl mb-3">Реквизиты организации</p>
        <p class="text-purple-400 mb-3">423824, Республика Татарстан</p>
        <p class="text-purple-400 mb-3">г. Набережные Челны, ул. Машиностроительная, д.91</p>
        <p class="text-purple-400">ИНН: 1650319974</p>
      </template>
    </ULandingCTA>
    <ULandingCTA class="mt-7" title="Заказать звонок">
      <template #description>
        <div class="form">
          <UForm>
            <UFormGroup>
              <p class="text-sm">Имя</p>
              <UInput class="mb-3" placeholder="Иван" icon="i-heroicons-user" />
              <p class="text-sm">Телефон</p>
              <UInput class="mb-3" placeholder="8 (800) 250-41-43" icon="i-heroicons-phone" />
              <UButton label="Отправить" />
            </UFormGroup>
          </UForm>
        </div>
      </template>
    </ULandingCTA>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.form {
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: start;
  }
}
</style>
