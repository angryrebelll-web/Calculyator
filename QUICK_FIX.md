# 🚀 БЫСТРОЕ РЕШЕНИЕ ПРОБЛЕМЫ 404

## Проблема
GitHub Pages не находит `index.html`, потому что файлы находятся в подпапке.

## Решение за 2 минуты:

### Шаг 1: Создайте `index.html` в КОРНЕ репозитория

Скопируйте содержимое файла `ROOT_INDEX.html` (который я создал) и создайте новый файл `index.html` **в корне репозитория** (не в папке `propellini-calculator-fullscreen/`).

**Содержимое для `index.html` в корне:**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propellini — Калькулятор оклейки авто</title>
    <meta http-equiv="refresh" content="0; url=propellini-calculator-fullscreen/index.html">
    <script>
        window.location.href = 'propellini-calculator-fullscreen/index.html';
    </script>
</head>
<body>
    <p>Перенаправление на калькулятор... <a href="propellini-calculator-fullscreen/index.html">Нажмите здесь, если перенаправление не работает</a></p>
</body>
</html>
```

### Шаг 2: Закоммитьте и запушьте

```bash
git add index.html
git commit -m "Add root index.html for GitHub Pages"
git push
```

### Шаг 3: Проверьте настройки GitHub Pages

1. Откройте: https://github.com/angryrebelll-web/Calculyator/settings/pages
2. Убедитесь, что выбрано:
   - **Branch**: `main`
   - **Folder**: `/ (root)` - **КОРЕНЬ репозитория**
3. Сохраните

### Шаг 4: Подождите 2-3 минуты

GitHub Pages обновляется автоматически.

---

## Альтернативное решение: Переместить все в корень

Если хотите, чтобы все было в корне:

1. Переместите ВСЕ файлы из `propellini-calculator-fullscreen/` в корень репозитория
2. В настройках GitHub Pages выберите `/ (root)`
3. Готово!

---

## Структура после исправления:

```
Calculyator/                          ← КОРЕНЬ репозитория
├── index.html                        ← НОВЫЙ файл (создайте его!)
└── propellini-calculator-fullscreen/
    ├── index.html                    ← Уже существует
    ├── calculator-fullscreen.css
    ├── calculator-fullscreen.html
    ├── icons/
    └── js/
```

