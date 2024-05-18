<template>
  <div>
    <ULandingHero
      title="Zig-Zag - cервис для оптимизации транспортной логистики"
      description="Наш сервис для построения маршрутов выбирают 72% организаций"
      card
    >
    </ULandingHero>

    <ULandingGrid class="my-5">
      <ULandingCard
        class="col-span-6 row-span-2"
        icon="i-heroicons-swatch"
        title="Вовремя"
        description="Сокращение опозданий на 47% при доставке с временными окнами"
      />
      <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-banknotes" title="Прибыльно" description="Увеличение обработанных заказов на 40% в день" />
      <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-clock" title="Быстро" description="Построит маршрут на 100 точек за 9 секунд" />
      <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-currency-dollar" title="Выгодно" description="Экономия ГСМ минимум на 27%" />
    </ULandingGrid>

    <ULandingCTA title="Клиенты Zig-Zag ежемесячно" :links="[{ label: 'Регистрируйтесь сейчас', click: () => $emit('reg'), size: 'lg' }]">
      <template #description>
        <p>Экономят 1680 часов на построении маршрутов</p>
        <p>Строят маршруты для 15 600 авто</p>
        <p>Экономят 176 400 литров ГСМ</p>
      </template>
    </ULandingCTA>

    <ULandingSection title="Как работает Zig-Zag?" align="left">
      <template #description>
        <ul style="list-style: auto">
          <li>
            <p>Мониторинг онлайн на вашем мобильном устройстве</p>
          </li>
          <li>
            <p>Контроль исполнения заявок через мобильное приложение</p>
          </li>
          <li>
            <p>Сокращение времени на планирование логистики</p>
          </li>
          <li>
            <p>Оптимальное распределение доставки на транспортный парк</p>
          </li>
          <li>
            <p>Экономия времени и ГСМ</p>
          </li>
        </ul>
      </template>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nVoAzIy0Z1A?si=FWaI5FMiD-mEamTC"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      ></iframe>
    </ULandingSection>

    <ULandingSection title="Какие проблемы решает Zig-Zag?">
      <ULandingFAQ :items="problems">
        <template #item="{ item: { content } }">
          <div v-html="content"></div>
        </template>
      </ULandingFAQ>
    </ULandingSection>

    <ULandingSection class="opportunities" title="Возможности сервиса Zig-Zag" description="Сервис Zig-Zag решает ключевые задачи транспортной логистики">
      <UPricingGrid :compact="false">
        <UPricingCard title="Распределение груза" highlight>
          <template #description>
            <ul>
              <li>Автоматически распределит адреса по транспортным средствам</li>
              <li>Определит оптимальный порядок отгрузки</li>
              <li>Правильно подберет транспорт для доставки с учетом объема и веса груза</li>
            </ul>
          </template>
        </UPricingCard>
        <UPricingCard title="Создание маршрута" highlight>
          <template #description>
            <ul>
              <li>Построит оптимальный маршрут в соотношении время / расстояние</li>
              <li>Учтет множество факторов: режим работы, срок доставки, приоритетность и т.п.</li>
              <li>Проследит, чтобы курьеры получили сбалансированные маршруты</li>
            </ul>
          </template>
        </UPricingCard>
        <UPricingCard title="Контроль исполнения" highlight>
          <template #description>
            <ul>
              <li>Покажет на карте, как происходит исполнение заявок</li>
              <li>Соберет статистику по реальным расходам ГСМ, времени и расстоянию</li>
              <li>Позволит «на ходу» корректировать маршрут, в зависимости от ситуации</li>
            </ul>
          </template>
        </UPricingCard>
      </UPricingGrid>
    </ULandingSection>
    <ULandingSection title="Планирование маршрутов для любого бизнеса">
      <ul class="custom-grid">
        <li>Интернет магазины</li>
        <li>Доставка воды</li>
        <li>Курьерские службы</li>
        <li>Доставка продуктов</li>
        <li>Доставка пиццы</li>
        <li>Транспортные компании</li>
        <li>Инкассация</li>
        <li>Службы сервиса</li>
        <li>Торговые представители</li>
        <li>Торговые компании</li>
        <li>Доставка суши</li>
        <li>Обслуживающие организации</li>
      </ul>
      <ULandingLogos class="logos -mt-32" align="center">
        <img class="img1 w-10 h-10 flex-shrink-0" />
        <img class="img2 w-10 h-10 flex-shrink-0" />
        <img class="img3 w-10 h-10 flex-shrink-0" />
        <img class="img4 w-10 h-10 flex-shrink-0" />
      </ULandingLogos>
    </ULandingSection>

    <ULandingSection title="Zig-Zag повышает эффективность вашей работы">
      <div class="effectiveness">
        <ULandingCard>
          <template #container>
            <div class="effectiveness_card p-8">
              <img src="https://zig-zag.org/img/Index_Map1.png" alt="" />
              <p>Маршрут составленный вручную</p>
              <div class="text-xl mt-3">Минусы работы вручную:</div>
              <ul class="ml-5 mt-3">
                <li>Неэффективное распределение времени на доставку</li>
                <li>Высокие расходы на ГСМ и амортизацию транспорта</li>
                <li>Необходимость содержать дополнительных сотрудников для составления маршрутов</li>
                <li>Отсутствие возможности централизованной корректировки маршрута в реальном времени</li>
                <li>Отсутствие оперативного контроля за работой водителей</li>
              </ul>
            </div>
          </template>
        </ULandingCard>
        <ULandingCard>
          <template #container>
            <div class="effectiveness_card p-8">
              <img src="https://zig-zag.org/img/Index_Map2.png" alt="" />
              <p>Оптимальный маршрут Zig-Zag</p>
              <div class="text-xl mt-3">Плюсы работы с Zig-Zag:</div>
              <ul class="ml-5 mt-3">
                <li>Формирование четкого графика доставки без лишних временных затрат</li>
                <li>Значительная экономия на топливе и обслуживании автомобилей</li>
                <li>Оптимизация кадрового состава, экономия на персонале</li>
                <li>Оперативное внесение корректив в текущий маршрут, возможность мгновенного изменения маршрута</li>
              </ul>
            </div>
          </template>
        </ULandingCard>
      </div>
    </ULandingSection>

    <ULandingSection
      title="Отраслевые комплексные решения"
      description="Сервис Zig-Zag можно интегрировать с любыми системами учета клиентов (заказов) через открытое API. Более того для клиентов у которых есть потребность в CRM системе, команда Zig-Zag предлагает CRM систему которая сразу связана с сервисом Zig-Zag и учитывает особенности отрасли."
    >
      <div class="solutions">
        <div class="solutions_item">
          <div class="solutions_item-icon" />
          <ULink>Служба инкассации</ULink>
        </div>
        <div class="solutions_item">
          <div class="solutions_item-icon solutions_item-icon2" />
          <ULink>Дистрибьюция</ULink>
        </div>
        <div class="solutions_item">
          <div class="solutions_item-icon solutions_item-icon3" />
          <ULink>Доставка воды</ULink>
        </div>
        <div class="solutions_item">
          <div class="solutions_item-icon solutions_item-icon4" />
          <ULink>Вывоз мусора и ТБО</ULink>
        </div>
        <div class="solutions_item">
          <div class="solutions_item-icon solutions_item-icon5" />
          <ULink>Мобильное приложение</ULink>
        </div>
        <div class="solutions_item">
          <div class="solutions_item-icon solutions_item-icon6" />
          <ULink>Курьерская служба</ULink>
        </div>
        <div class="solutions_item">
          <div class="solutions_item-icon solutions_item-icon7" />
          <ULink>Интернет магазин</ULink>
        </div>
        <div class="solutions_item">
          <div class="solutions_item-icon solutions_item-icon8" />
          <ULink>Контроль движения</ULink>
        </div>
      </div>
    </ULandingSection>

    <ULandingSection title="Начни работу с сервисом Zig-Zag и оптимизируй логистику">
      <div class="steps">
        <div class="progress"></div>
        <div class="step">
          <div class="step_circle text-3xl">1</div>
          <p>Зарегистрируйтесь на нашем сайте</p>
        </div>
        <div class="step">
          <div class="step_circle text-3xl">1</div>
          <p>Менеджер покажет решение Вашей задачи</p>
        </div>
        <div class="step">
          <div class="step_circle text-3xl">1</div>
          <p>Вам не придётся больше думать об этой задаче</p>
        </div>
      </div>
      <div style="display: flex; justify-content: center">
        <UButton size="xl" style="width: fit-content" @click="$emit('reg')" label="Начать экономить" />
      </div>
    </ULandingSection>
  </div>
</template>

<script setup>
const problems = [
  {
    label: "Как организовать процесс логистики (доставки)",
    content: `Данный кейс возможен в разных ситуациях. Рассмотрим несколько частых ситуаций:
    <p class='mt-3'><b>1. На стадии развития бизнеса от малого к среднему</b></p>
    В компании нет человека с необходимыми компетенциями. Раньше справлялись ручным методом планирования или все отдается на откуп курьерам.
    Чем больше адресов, тем острее встает проблема.
    <p class='mt-3'><b>2. Компания выиграла тендер.</b></p>
    Есть ситуации когда маршрутизация нужна на определенный период, появляется необходимость нанимать отдельного сотрудника с нужными компетенциями.
    <p class='mt-3'><b>3. Одноразовая задача.</b></p>
    Появилась потребность разово рассчитать оптимальные маршруты.
    <p class='mt-3'><b>4. Все другие случаи когда перед компаниями стоит задача организовать процесс логистики с нуля.</b></p>
    Во всех этих случаях Zig-zag может закрыть полностью по потребности компании в транспортной логистики! Сервисом может пользоваться любой сотрудник, обучение обычно не занимает более 2-х часов. В итоге компания получает готовое автоматизированное решения для процессов логистики.`,
  },
  {
    label: "Опоздания курьеров",
    content: `<p>Довольно частая проблема - не пунктуальность курьеров. Основная задача чтобы курьер подъезжал не раньше и не позже временного окна.<br> Данная проблема тянет за собой сильный негатив от клиентов, с возможным отказом от деньшего сотрудничества.</p>
    <p class='mt-3'>Сервис Zig-Zag учитывает временные окна при планирование, позволяет осуществлять онлайн мониторинг курьеров и статуса выполнения заявок, осуществлять SMS информирование клиентов.</p>
    <p class='mt-3'>Все это позволяет снизить процент опоздания курьеров и повысить лояльность клиентов.</p>`,
  },
  {
    label: "Нецелевое использование или раздутый бюджет на транспорт",
    content: `<p>Данная проблема актуальна для средних и крупных компаний, причин может быть несколько: нецелевое использование автотранспорта, неэффективное планирование маршрутов и как следствие увеличение бюджетов на ГСМ и обслуживание транспорта.<p>
      <p class='mt-3'>Сервис Zig-Zag за счет оптимальных маршрутов снижает общий километраж, возможно даже снижение кол-ва используемого автотранспорта. Нецелевое использование автотранспорта решается - онлайн мониторингом автотранспорта, плановым и фактическим сравнением километража, наличием истории пути по каждому автомобилю.</p>`,
  },
  {
    label: "Некорректная загрузка автомобиля с маршрутом очередности доставки",
    content:
      "Сервис Zig-Zag осуществляет автоматическое планирование маршрутов и распределение заказов по автомобилям (курьерам). При необходимости формируются листы с порядком загрузки автотранспорта с учетом маршрутных листов.",
  },
  {
    label: "Тратиться много времени на планирование маршрутов",
    content: `Данная ситуация актуальна для средний и крупных компаний у которых большой объем адресов, в планирование присутствуют временные окна.
<p class='mt-3'>Сервис Zig-Zag позволяет значительно сократить время планирование, обычно более чем в 10 раз (против ручного планирования).</p>
<p class='mt-3'>Для крупных компаний возможен вариант покупки коробочной версии (программа устанавливается на сервера компании).</p>`,
  },
  {
    label: "Курьеры не справляются с планируемым объемом",
    content: `Данная проблематика может возникнуть в нескольких случаях: при активном росте количества адресов, низкий показатель эффективности курьеров, низкая эффективность планируемых маршрутов.
    <p class='mt-3'>Сервис Zig-Zag позволяет рассчитывать оптимальные маршруты, осуществлять онлайн мониторинг курьеров и заявок, повысить прозрачность коэффициента эффективности курьеров (процент опоздания, отчет план-факт). Таким образом Zig-Zag сможет максимально увеличить эффективность курьеров.</p>`,
  },
  {
    label: "Неэффективная работа отдела логистики (логиста)",
    content: `Логистов много, но курьеры опаздываю, расходы на ГСМ постоянно растут, время на планирование увеличивается - данная проблематика встречается у средних и крупных компаний.
    <p class='mt-3'>Наши специалисты могут провести аудит ваших маршрутов и прямо на ваших данных показать узкие места и где на сколько можно улучшить процесс. После этого вы наглядно сможете оценить эффективность от использования сервиса Zig-Zag. Как показывает практика экономия против ручного планирования оказывается значительной.</p>`,
  },
  {
    label: "Непрозрачный процесс оценки эффективности курьеров",
    content: "Сервис Zig-Zag позволяет настроить прозрачный оценки эффективности курьеров. Возможно настроить автоматический расчет заработной платы.",
  },
];
</script>

<style lang="scss" scoped>
.opportunities {
  :deep(.truncate) {
    white-space: unset;
  }
  ul {
    list-style-type: upper-roman;
  }
}

.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  li {
    list-style: inside;
  }
}
.logos {
  img {
    width: 224px;
    height: 96px;
    background-image: url(https://zig-zag.org/img/Index_Clients.png);
    margin: 16px;
  }
  .img {
    &2 {
      background-position: -224px 0;
    }
    &3 {
      background-position: -448px 0;
    }
    &4 {
      background-position: -672px 0;
    }
  }
}

.effectiveness {
  gap: 24px;
  display: flex;
  flex-wrap: wrap;

  &_card {
    p {
      text-align: center;
    }

    ul {
      list-style-type: upper-roman;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}
.solutions {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
  &_item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;

    &-icon {
      height: 144px;
      width: 144px;
      background-image: url(https://zig-zag.org/img/sprite.png);
      background-position: -144px -144px;

      &2 {
        background-position: -288px -144px;
      }
      &3 {
        background-position: -432px -144px;
      }
      &4 {
        background-position: -576px -144px;
      }
      &5 {
        background-position: -720px -144px;
      }
      &6 {
        background-position: 0px -288px;
      }
      &7 {
        background-position: -144px -288px;
      }
      &8 {
        background-position: 0px -144px;
      }
    }
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
    background: #4ade80;
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
      background: #4ade80;
      position: relative;
    }
  }
}
</style>
