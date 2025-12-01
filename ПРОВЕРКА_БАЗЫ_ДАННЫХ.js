/* =========================================
   СКРИПТ ПРОВЕРКИ БАЗЫ ДАННЫХ АВТОМОБИЛЕЙ
   ========================================= */

// Импортируем данные (в реальном использовании нужно подключить cars.js)
// Для проверки используем данные из файла

const typeCategoryMapping = {
    "sedan": ["sedan-small", "sedan-business", "sedan-premium", "sedan-luxury"],
    "hatchback": ["hatch-small", "hatch-medium"],
    "suv": ["suv-compact", "suv-medium", "suv-large", "suv-luxury"],
    "coupe": ["coupe", "coupe-sport", "supercar", "hypercar", "luxury"],
    "pickup": ["pickup-compact", "pickup-small", "pickup-medium", "pickup-large", "pickup-luxury"],
    "minivan": ["minivan-compact", "minivan-standard", "minivan", "minivan-business", "minivan-premium", "minivan-luxury", "minivan-electric"],
    "minibus": ["minibus", "minibus-premium"]
};

// Маппинг body к категориям
const bodyToCategory = {
    "sedan": "sedan",
    "hatchback": "hatchback",
    "suv": "suv",
    "coupe": "coupe",
    "convertible": "coupe", // Конвертируемые относятся к coupe
    "pickup": "pickup",
    "minivan": "minivan",
    "minibus": "minibus",
    "commercial": null // Коммерческие не входят в основные категории
};

// Функция проверки соответствия
function checkCarTypeConsistency(car) {
    const issues = [];
    
    // Проверяем соответствие body и type
    const expectedCategory = bodyToCategory[car.body];
    if (expectedCategory) {
        const allowedTypes = typeCategoryMapping[expectedCategory] || [];
        if (!allowedTypes.includes(car.type)) {
            issues.push({
                severity: "ERROR",
                message: `Несоответствие: body="${car.body}" (категория: ${expectedCategory}), но type="${car.type}" не входит в список разрешенных типов для ${expectedCategory}`,
                allowedTypes: allowedTypes
            });
        }
    }
    
    return issues;
}

// Результаты проверки
const report = {
    total: 0,
    errors: [],
    warnings: [],
    byBrand: {},
    byType: {}
};

console.log("Начинаю проверку базы данных...");
console.log("Для полной проверки нужно запустить этот скрипт в браузере с подключенным cars.js");

// Экспортируем функцию для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkCarTypeConsistency, typeCategoryMapping, bodyToCategory };
}

