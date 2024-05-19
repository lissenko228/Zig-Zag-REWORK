<template>
  <div>
    <ULandingSection :ui="{ title: 'lg:text-4xl' }" title="Программный сервис для контроля логистики" align="left">
      <template #description>
        <p><b>Zig-Zag — </b> это сервис управления транспортной логистикой для компаний, чей бизнес связан с доставкой грузов.</p>
        <p class="font-semibold my-4">Его главная задача – сделать вашу службу быстрой, недорогой и эффективной.</p>
        <p>Секрет Zig-Zag в математическом методе, который позволяет создавать оптимальные маршруты и эффективно планировать загрузку водителей и курьеров.</p>
      </template>
      <img src="https://zig-zag.org/img/About_Head.png" />
    </ULandingSection>

    <ULandingSection :ui="{ title: 'lg:text-4xl' }" title="Сервис Zig-Zag решает ключевые задачи транспортной логистики:">
      <template #description>
        <div class="bg-purple-400 key-tasks p-3">
          <div class="key-tasks-item">
            <div class="key-tasks-icon"></div>
            <p class="text-white text-sm">Оптимально распределяет груз по водителям или курьерам.</p>
          </div>
          <UDivider orientation="vertical" />
          <div class="key-tasks-item">
            <div class="key-tasks-icon key-tasks-icon2"></div>
            <p class="text-white text-sm">Создает эффективные маршруты доставки грузов.</p>
          </div>
          <UDivider orientation="vertical" />
          <div class="key-tasks-item">
            <div class="key-tasks-icon key-tasks-icon3"></div>
            <p class="text-white text-sm">Осуществляет оперативный контроль исполнения плана доставки.</p>
          </div>
        </div>
      </template>
    </ULandingSection>

    <ULandingSection :ui="{ title: 'lg:text-4xl' }" title="Сервис обладает преимуществами, которые делают его одним из самых востребованных на рынке:">
      <ULandingGrid>
        <ULandingCard
          class="col-span-6 row-span-2"
          title="ГОТОВНОСТЬ К РАБОТЕ"
          description="Zig-Zag работает с любым интернет-браузером. Он не требует длительного обучения персонала, закупки оборудования или установки дополнительного программного обеспечения. Вы ощутите его эффективность с первых же дней работы."
        />
        <ULandingCard
          class="col-span-6 row-span-3"
          title="БЕЗОПАСНОСТЬ"
          description="Данные в Zig-Zag передаются на сервер с высокой степенью защиты. По желанию, сервис может быть развернут на локальных серверах заказчика, что полностью исключает передачу данных третьим сторонам."
        />
        <ULandingCard
          class="col-span-6 row-span-3"
          title="ГИБКОСТЬ И МАСШТАБИРУЕМОСТЬ"
          description="Zig-Zag гибко подстраивается под любой бизнес, подходит как для крупных, так и небольших компаний. Возможности сервиса растут вместе с вашей компанией без ощутимых вложений в инфраструктуру."
        />
        <ULandingCard
          class="col-span-6 row-span-2"
          title="ПРОАКТИВНОСТЬ"
          description="Zig-Zag позволяет вашей службе доставки работать единой командой, взаимодействуя с друг другом. Это возможно за счет установки мобильного приложения на смартфоны ваших водителей. Таким образом, логист, опираясь на анализ текущих данных, может в режиме реального времени корректировать работу доставки."
        />
        <ULandingCard
          class="col-span-12 row-span-2"
          title="МНОГОЗАДАЧНОСТЬ"
          description="Zig-Zag легко адаптируется к специфике вашего бизнеса. Среди наших пользователей очень разные компании — курьерские службы, интернет-магазины, службы доставки воды, заправки картриджей для принтеров, сервисные компании по обслуживанию банкоматов, терминалов и т.п."
        />
      </ULandingGrid>
    </ULandingSection>

    <ULandingSection title="Начни работу с сервисом Zig-Zag и оптимизируй логистику">
      <div class="steps">
        <div class="progress"></div>
        <div class="step">
          <div class="step_circle text-3xl">1</div>
          <p>Зарегистрируйтесь на нашем сайте</p>
        </div>
        <div class="step">
          <div class="step_circle text-3xl">2</div>
          <p>Менеджер покажет решение Вашей задачи</p>
        </div>
        <div class="step">
          <div class="step_circle text-3xl">3</div>
          <p>Вам не придётся больше думать об этой задаче</p>
        </div>
      </div>
      <div style="display: flex; justify-content: center">
        <UButton size="xl" style="width: fit-content" @click="$emit('reg')" label="Начать экономить" />
      </div>
    </ULandingSection>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.key-tasks {
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
  align-self: center;
  gap: 16px;

  &-icon {
    height: 64px;
    aspect-ratio: 1/1;
    background-image: url(https://zig-zag.org/img/sprite.png);
    background-repeat: no-repeat;
    background-position: -432px 0px;

    &2 {
      background-position: -576px 0px;
    }
    &3 {
      background-position: -720px 0px;
    }
  }

  &-item {
    align-items: center;
    display: flex;
  }
}

.steps {
  display: flex;
  position: relative;
  justify-content: space-between;

  .progress {
    position: absolute;
    width: 100%;
    top: 50px;
    background: #c084fc;
    height: 4px;
  }

  .step {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    &_circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background: #c084fc;
      position: relative;
    }
  }
}
</style>
'
