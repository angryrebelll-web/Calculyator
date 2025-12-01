# Настройка GitHub Pages

## Проблема
GitHub Pages по умолчанию ищет файл `index.html` в **корне репозитория**, но ваши файлы находятся в папке `propellini-calculator-fullscreen/`.

## Решение 1: Настроить GitHub Pages на папку (РЕКОМЕНДУЕТСЯ)

1. Откройте ваш репозиторий на GitHub: https://github.com/angryrebelll-web/Calculyator
2. Перейдите в **Settings** (Настройки)
3. В левом меню найдите раздел **Pages**
4. В разделе **Source** (Источник):
   - **Branch**: выберите `main` (или вашу основную ветку)
   - **Folder**: выберите `/propellini-calculator-fullscreen` из выпадающего списка
5. Нажмите **Save** (Сохранить)
6. Подождите 1-2 минуты
7. Ваш сайт будет доступен по адресу: `https://angryrebelll-web.github.io/Calculyator/`

## Решение 2: Переместить файлы в корень

Если вы хотите, чтобы сайт работал из корня репозитория:

1. Переместите все файлы из папки `propellini-calculator-fullscreen/` в корень репозитория
2. В настройках GitHub Pages выберите `/ (root)` в качестве папки
3. Убедитесь, что файл `index.html` находится в корне

## Проверка

После настройки проверьте:
- ✅ Файл `index.html` существует в нужной папке
- ✅ Все пути к файлам относительные (без `/` в начале)
- ✅ Файл `.nojekyll` создан (уже создан)

## Структура файлов

Убедитесь, что структура выглядит так:

```
Calculyator/
└── propellini-calculator-fullscreen/
    ├── index.html                    ✅
    ├── calculator-fullscreen.css      ✅
    ├── calculator-fullscreen.html     ✅
    ├── .nojekyll                      ✅
    ├── icons/                         ✅
    │   ├── sedan.svg
    │   ├── suv.svg
    │   └── ...
    └── js/                            ✅
        ├── calculator-fullscreen.js
        ├── prices.js
        └── cars.js
```

## Если все еще не работает

1. Проверьте, что все файлы закоммичены и запушены в репозиторий
2. Убедитесь, что в настройках GitHub Pages выбрана правильная папка
3. Подождите 5-10 минут (GitHub Pages может обновляться с задержкой)
4. Очистите кеш браузера (Ctrl+F5)

