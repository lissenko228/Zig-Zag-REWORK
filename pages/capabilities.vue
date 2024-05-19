<template>
  <div>
    <ULandingSection title="Возможности программного комплекса для логистики">
      <template #description>
        <img src="https://zig-zag.org/img/Capabilities_Poster.jpg" />
        <div class="steps mt-5">
          <div class="step">
            <div class="h-28 bg-purple-400 w-28 rounded-full text-7xl text-white circle">1</div>
            <p class="text-xl text-purple-400">Загружайте правильно!</p>
          </div>
          <div class="step">
            <div class="h-28 bg-purple-400 w-28 rounded-full text-7xl text-white circle">2</div>
            <p class="text-xl text-purple-400">Разгружайте эффективно!</p>
          </div>
          <div class="step">
            <div class="h-28 bg-purple-400 w-28 rounded-full text-7xl text-white circle">3</div>
            <p class="text-xl text-purple-400">Контролируйте доставку!</p>
          </div>
        </div>
      </template>
    </ULandingSection>

    <ULandingSection title="Подробнее о возможностях сервиса Zig-Zag">
      <template #description>
        <p class="text-purple-400 text-2xl pb-5">Загружайте правильно!</p>
        <p class="bp-5 al-s text-sm">
          При распределении Zig-Zag учитывает множество факторов, начиная от грузоподъемности автомобилей, заканчивая требованиям по совместной доставке
          определенных видов товаров.
        </p>
        <p class="pb-5 text-xl"><b>Распределение грузов</b></p>
        <p class="pb-5 al-s text-sm">
          Zig-Zag знает грузоподъемность и вместительность каждого автомобиля. Поэтому он не допускает, чтобы один экипаж был перегружен, а другой ездил
          полупустой. Он не позволит вам допустить ошибок в загрузке машин и автоматически распределит грузы так, чтобы ресурс транспортных средств
          использовался максимально эффективно.
        </p>

        <ULandingSection :ui="{ title: 'lg:text-4xl' }" align="right">
          <template #description>
            <p><b>Деление на секторы</b></p>
            <p class="my-4 al-s text-sm">
              Традиционно предприятия делят территорию на секторы доставки. Если у вас уже есть сложившиеся секторы, то покажите их Zig-Zag в самом начале.
              Сервис в считанные секунды будет распределять для вас адреса доставки, учитывая все нюансы, ваши обязательства, загрузку водителей, время и
              расстояние.
            </p>
            <p class="al-s text-sm">
              Или же вы можете доверить деление на секторы самому сервису. В этом случае Zig-Zag сам нарисует вам районы доставки, исходя из числа адресов и
              загрузки каждого транспортного средства. Деление будет оптимальным, а секторы будут максимально удобными для планирования маршрутов.
            </p>
          </template>
          <div class="image"></div>
        </ULandingSection>

        <ULandingSection :ui="{ title: 'lg:text-4xl' }" align="left">
          <template #description>
            <p><b>Работа в команде</b></p>
            <p class="my-4 al-s text-sm">
              Zig-Zag никогда не допустит ситуации, когда у одного водителя значительно больше адресов, чем у другого. Сервис умеет передавать адреса на
              пограничных частях секторов от одних экспедиторов к другим.
            </p>
            <p class="al-s text-sm">
              Это позволяет выравнивать загруженность сотрудников таким образом, чтобы доставка грузов в разных секторах происходила равномерно. Кроме того,
              такая кооперация позволяет сократить время доставки грузов.
            </p>
          </template>
          <div class="image image1"></div>
        </ULandingSection>

        <p class="text-purple-400 text-2xl pb-5">Разгружайте эффективно!</p>

        <ULandingSection :ui="{ title: 'lg:text-4xl' }" align="right">
          <template #description>
            <p class="al-s text-sm">Zig-Zag умеет не только распределить грузы по транспорту, но и организовать эффективную доставку до клиента.</p>
            <p class="my-4 al-s text-sm">
              Zig-Zag умеет не только распределить грузы по транспорту, но и организовать эффективную доставку до клиента. Ключевая особенность сервиса – умение
              математически точным методом рассчитывать оптимальный маршрут с учетом объема и веса груза, географии доставки, режима работы клиента или
              договоренности по времени доставки.
            </p>
            <p class="al-s text-sm">Это позволяет вам держать сервис доставки на высочайшем уровне, удовлетворяя запросы даже самых требовательных клиентов.</p>
          </template>
          <div class="image image2"></div>
        </ULandingSection>

        <p class="text-purple-400 text-2xl pb-5">Контролируйте доставку!</p>

        <ULandingSection :ui="{ title: 'lg:text-4xl' }" align="left">
          <template #description>
            <p class="al-s text-sm">
              Сервис Zig-Zag позволяет собирать и анализировать статистику по исполнению маршрутов доставки. В обычном режиме специалист по логистике
              распечатывает путевой лист, сформированный в сервисе, и передает его курьеру. Существует также и более эффективный способ контроля доставки.
            </p>
          </template>
          <div class="image image3"></div>
        </ULandingSection>
      </template>
    </ULandingSection>
  </div>
</template>

<style scoped lang="scss">
.steps {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  .step {
    display: flex;
    align-items: center;
    gap: 16px;

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.image {
  height: 272px;
  width: 416px;
  background-image: url(https://zig-zag.org/img/Capabilities_Sprite.png);
  background-position: 0px -336px;

  &1 {
    background-position: -432px -336px;
  }
  &2 {
    background-position: 0px -624px;
  }
  &3 {
    background-position: -368px -112px;
    height: 108px;
  }
}
</style>
