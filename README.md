# Propellini Calculator Fullscreen

Полноэкранный калькулятор стоимости оклейки автомобиля для Propellini.

## ⚠️ Настройка GitHub Pages

Если файлы находятся в подпапке `propellini-calculator-fullscreen/`, нужно настроить GitHub Pages:

1. Перейдите в **Settings** → **Pages** вашего репозитория
2. В разделе **Source** выберите:
   - **Branch**: `main` (или ваша основная ветка)
   - **Folder**: `/propellini-calculator-fullscreen` (выберите папку с файлами)
3. Нажмите **Save**
4. Подождите несколько минут для обновления

**Альтернативный вариант** (если хотите, чтобы сайт работал из корня):
- Переместите все файлы из папки `propellini-calculator-fullscreen/` в корень репозитория
- Тогда GitHub Pages автоматически найдет `index.html` в корне

## Структура файлов

```
propellini-calculator-fullscreen/
├── calculator-fullscreen.html    # Основной HTML файл
├── calculator-fullscreen.css     # Стили калькулятора
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

Калькулятор открывается автоматически при загрузке страницы (для тестирования). 

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

## Технические детали

- Чистый JavaScript (без зависимостей)
- CSS Grid и Flexbox для layout
- CSS Keyframes для анимаций
- Полная совместимость с существующей базой данных (cars.js, prices.js)


