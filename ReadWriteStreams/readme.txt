
    Примеры
    Unicode
    Статьи
    Блог

    Настройка
    Sass
    Параметры
    Цвет
    Компоненты
    CSS переменные
    Оптимизация

    Переход на v5

Sass

Используйте наши исходные файлы Sass для настройки переменных, карт, миксинов и функции, которые помогут быстрее создавать и настраивать ваши проекты.
Реклама
На этой странице

    Структура файлов
    Импорт
    Значения переменных по умолчанию
    Карты и циклы
        Изменение карты
        Добавление в карту
        Удаление из карты
    Обязательные ключи
    Функции
        Цвета
        Контраст цветов
        Экранирование SVG
        Функции сложения и вычитания
    Миксины
        Цветовые схемы

Использование наших исходников Sass даст вам инструменты переменных, карт, миксинов и многого другого.
Структура файлов

По возможности старайтесь избегать изменения «коренных» файлов Bootstrap. Для Sass это значит, что вам следует создать собственную таблицу стилей, импортировать в нее Bootstrap, и уже там изменять и дополнять его стили. Предполагая, что вы используете менеджер пакетов, такой как npm, у вас будет файловая структура, которая выглядит следующим образом:

your-project/
+-- scss
¦   L-- custom.scss
L-- node_modules/
    L-- bootstrap
        +-- js
        L-- scss

Если вы загрузили исходные файлы и не используете диспетчер пакетов, вам нужно вручную настроить что-то похожее на эту структуру, сохраняя исходные файлы Bootstrap отдельно от ваших собственных.

your-project/
+-- scss
¦   L-- custom.scss
L-- bootstrap/
    +-- js
    L-- scss

Импорт

В своем custom.scss вы импортируете исходники Sass. Тут есть две опции: включить весь Bootstrap или части, вам нужные. Мы советуем делать второе, хотя тут надо знать, что в наших компонентах есть некоторые зависимости и требования. Вам также понадобится включить некоторые скрипты JavaScript для наших плагинов.

В свой custom.scss Вы импортируете исходные файлы Sass для Bootstrap. У Вас есть два варианта: включить весь Bootstrap или выбрать нужные Вам части. Мы поощряем последнее, но имейте в виду, что между нашими компонентами есть некоторые требования и зависимости. Вам также необходимо будет включить некоторый JavaScript для наших плагинов.

// Custom.scss
// Вариант А: Включите весь Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here

// Custom.scss
// Вариант Б. Включите части Bootstrap

// 1. Сначала включите функции (чтобы Вы могли управлять цветами, SVG, вычислением и т.д.)
@import "../node_modules/bootstrap/scss/functions";

// 2. Включите сюда любые переопределения переменных по умолчанию

// 3. Включите оставшуюся часть необходимых таблиц стилей Bootstrap
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 4. Включите любой необязательный Bootstrap CSS по мере необходимости
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 5. При желании можно в последнюю очередь включить служебный API для генерации классов на основе карты Sass в `_utililies.scss`
@import "../node_modules/bootstrap/scss/utilities/api";

// 6. Добавьте сюда дополнительный пользовательский код

С этой настройкой вы можете изменить любые переменные и карты Sass в вашем файле custom.scss. Вы также можете добавлять части Bootstrap в разделе // Optional при необходимости. В качестве отправной точки мы предлагаем использовать полный стек импорта из нашего файла bootstrap.scss.
Значения переменных по умолчанию

Каждая переменная Sass в Bootstrap имеет флаг (т.е. предварительно заданную последовательность битов, содержащую значение в двоичном исчислении) !default, что позволяет переопределить значение этой переменной Sass, заданное по умолчанию, в ваших собственных файлах Sass без необходимости копаться в исходниках Bootstrap. «Копипастируйте» переменные как вам необходимо, изменяйте значения, удаляйте !default flag. Если переменная уже была назначена, ее значение не будет переназначено значениями Bootstrap по умолчанию.

Вы найдете полный список переменных Bootstrap в файле scss/_variables.scss. Некоторые переменные имеют значение null, эти переменные не выводят свойство, если они не переопределены в вашей конфигурации.

Переназначение переменных (когда переменные потом можно переназначать в файлах, или из командной строки, или просто переназначение - непонятно) внутри одного файла Sass может идти в коде до или после переменных по умолчанию. Однако, переназначая переменные в файлах Sass, ваши новые значения должны быть назначены до того как вы импортируете файлы Sass Bootstrap.

Вот пример кода, изменяющего background-color и color для <body>, при импорте и компиляции Bootstrap через npm:

// Обязательные
@import "../node_modules/bootstrap/scss/functions";

// Переопределения переменных по умолчанию
$body-bg: #000;
$body-color: #111;

// Обязательные
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// Дополнительные компоненты Bootstrap здесь
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc

При необходимости повторите для любой переменной в Bootstrap, включая глобальные параметры ниже.
Начните работу с Bootstrap через npm с помощью нашего начального проекта! Перейдите в репозиторий шаблонов twbs/bootstrap-npm-starter, чтобы узнать, как создать и настроить Bootstrap в своем собственном проекте npm. Включает компилятор Sass, Autoprefixer, Stylelint, PurgeCSS и иконки Bootstrap.
Карты и циклы

Bootstrap включает «карты Sass» – массивы парных значений, которые предназначены для облегчения генерации родственных «семейств» CSS. Мы пользуемся картами Sass при работе с цветами, брейкпойнтами сетки и т.д. Как и переменные Sass, все карты Sass включают !default flag и могут быть переназначены и расширены.

Некоторые из карт Sass "слиты" с пустыми картами. Это сделано для возможности легкого расширения данной карты, но слегка усложняет удаление элементов из данной карты.
Изменение карты

Все переменные в карте $theme-colors определены как автономные переменные. Для изменения существующего в нашей карте $theme-colors цвета, добавьте следующий код в ваш стандартный Sass файл:

$primary: #0074d9;
$danger: #ff4136;

Позже эти переменные будут установлены в Bootstrap $theme-colors:

$theme-colors: (
  "primary": $primary,
  "danger": $danger
);

Добавление в карту

Чтобы добавить новый цвет в $theme-colors или любую другую карту, создайте новую Sass с вашими пользовательскими значениями, объединив ее с исходной картой. В этом случае создается новая карта $theme-colors с объединенным $theme-colors.

// Создайте свою карту
$custom-colors: (
  "custom-color": #900
);

// Объедините карты
$theme-colors: map-merge($theme-colors, $custom-colors);

Удаление из карты

Для удаления цветов из карты $theme-colors или любой другой, используйте - map-remove. Имейте в виду, что вы должны вставить его между нашими требованиями и параметрами:

// Обязательные
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

// Необязательные
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
// etc

Обязательные ключи

Bootstrap предполагает наличие определенных ключей в картах Sass, которые мы использовали, и расширяем их сами. Когда Вы настраиваете включенные карты, Вы можете столкнуться с ошибками, когда используется конкретный ключ карты Sass.

Например, мы используем ключи primary, success и danger из карты $theme-colors для ссылок, кнопок и состояний форм. Изменение значений этих ключей не должно в теории вызвать проблем, но их удаление может вызвать проблемы при компиляции Sass. В таких случаях вам потребуется модифицировать код Sass, который использует эти значения.
Функции
Цвета

Наряду с имеющимися картами Sass цвета темы также могут использоваться как отдельные переменные, например $primary.

.custom-element {
  color: $gray-100;
  background-color: $dark;
}

Вы можете осветлить или затемнить цвета с помощью функций Bootstrap tint-color() и shade-color(). Эти функции будут смешивать цвета с черным или белым, в отличие от собственных функций Sass lighten() и darken(), которые изменяют яркость на фиксированную величину, что часто не приводит к желаемому эффекту.

// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

// Shade the color if the weight is positive, else tint it
@function shift-color($color, $weight) {
  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
}

На практике вы должны вызвать функцию и передать параметры цвета и веса.

.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}

Контраст цветов

Чтобы соответствовать стандартам WCAG 2.0 для цветового контраста, авторы должны предоставить коэффициент контрастности не менее 4,5:1 за небольшими исключениями.

Дополнительная функция, которую мы включаем в Bootstrap - это функция цветового контраста color-contrast. Он использует алгоритм WCAG 2.0 для расчета порогов контрастности на основе относительной яркости в цветовом пространстве sRGB, чтобы автоматически возвращать светлый-light (#fff), темный-dark (#212529) или черный-black (#000) контрастный цвет на основе указанного базового цвета. Эта функция особенно полезна для миксинов или циклов, где вы генерируете несколько классов.

Например, генерация образцов цветов из нашей карты $theme-colors:

@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}

Она также может применяться для единовременных нужд при работе с контрастами:

.custom-element {
  color: color-contrast(#000); // returns `color: #fff`
}

Вы также можете задать базовый цвет с помощью наших функций карт цвета:

.custom-element {
  color: color-contrast($dark); // returns `color: #fff`
}

Экранирование SVG

Мы используем функцию escape-svg для того, чтобы не использовать символы <, > и # для фоновых SVG-изображений. При использовании функции escape-svg необходимо указывать URI данные.
Функции сложения и вычитания

Мы используем функции add и subtract чтобы обернуть CSS функцию calc. Основная цель этих функций - избежать ошибок, когда “безразмерное” значение 0 передается в выражение calc. Выражения вроде calc(10px - 0) вернут ошибку во всех браузерах, несмотря на то, что они математически верны.

Пример, где расчет действителен:

$border-radius: .25rem;
$border-width: 1px;

.element {
  // Вывод calc(.25rem - 1px) действителен
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Выведет то же, что и выше calc(.25rem - 1px)
  border-radius: subtract($border-radius, $border-width);
}

Пример неверного расчета:

$border-radius: .25rem;
$border-width: 0;

.element {
  // Вывод calc(.25rem - 0) недействителен
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Вывод .25rem
  border-radius: subtract($border-radius, $border-width);
}

Миксины

В нашем каталоге scss/mixins/ есть множество миксинов, которые являются основными частями Bootstrap, а также могут использоваться в вашем собственном проекте.
Цветовые схемы

Доступен сокращенный миксин для медиа-запроса prefers-color-scheme с поддержкой light, dark и пользовательских цветовых схем.

@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}

.custom-element {
  @include color-scheme(dark) {
    // Вставьте сюда стили темного режима
  }

  @include color-scheme(custom-named-scheme) {
    // Вставьте здесь собственные стили цветовой схемы
  }
}

