# Propellini Calculator Fullscreen

Полноэкранный калькулятор стоимости оклейки автомобиля для Propellini.

## Структура файлов

```
propellini-calculator-fullscreen/
├── index.html                    # Главная страница калькулятора
├── calculator-fullscreen.html    # Оригинальный HTML файл
├── calculator-fullscreen.css     # Стили калькулятора
├── .nojekyll                     # Отключает Jekyll для GitHub Pages
├── icons/                        # SVG иконки типов автомобилей
│   ├── sedan.svg
│   ├── suv.svg
│   ├── coupe.svg
│   ├── hatch.svg
│   ├── pickup.svg
│   ├── minivan.svg
│   └── microbus.svg
├── js/
│   ├── calculator-fullscreen.js  # Логика калькулятора
│   ├── prices.js                 # База цен
│   └── cars.js                   # База автомобилей
└── README.md                     # Этот файл
```

## Использование

### Открытие калькулятора

Калькулятор открывается автоматически при загрузке страницы.

Для интеграции на сайт используйте функцию:

```javascript
window.openCalculator();
```

### Закрытие калькулятора

```javascript
window.closeCalculator();
```

### Сброс калькулятора

```javascript
window.resetCalculator();
```

## Интеграция на сайт

1. Скопируйте все файлы в папку вашего проекта
2. Подключите HTML файл через iframe или вставьте код напрямую
3. Для открытия калькулятора добавьте кнопку с обработчиком:

```html
<button onclick="window.openCalculator()">Рассчитать стоимость</button>
```

## Особенности

- ✅ Полноэкранный модальный режим
- ✅ 4 шага конфигурации
- ✅ Адаптивный дизайн (мобильная и desktop версии)
- ✅ Анимации переходов между шагами
- ✅ Фиксированная панель с итоговой стоимостью
- ✅ Интеграция с формой записи
- ✅ Автоматический сброс при открытии/закрытии
- ✅ SVG иконки типов автомобилей

## Технические детали

- Чистый JavaScript (без зависимостей)
- CSS Grid и Flexbox для layout
- CSS Keyframes для анимаций
- Полная совместимость с существующей базой данных (cars.js, prices.js)

## GitHub Pages

Для развертывания на GitHub Pages:

1. Убедитесь, что в корне репозитория есть `index.html` и `.nojekyll`
2. В настройках GitHub Pages выберите папку `/propellini-calculator-fullscreen` или `/ (root)`
3. Подождите 2-3 минуты для развертки
