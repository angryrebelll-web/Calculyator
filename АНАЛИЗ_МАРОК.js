/* Анализ базы данных - подсчет моделей по маркам и типам */

// Это скрипт для анализа, нужно запустить в браузере с подключенным cars.js

const typeCategoryMapping = {
    "sedan": ["sedan-small", "sedan-business", "sedan-premium", "sedan-luxury"],
    "hatchback": ["hatch-small", "hatch-medium"],
    "suv": ["suv-compact", "suv-medium", "suv-large", "suv-luxury"],
    "coupe": ["coupe", "coupe-sport", "supercar", "hypercar", "luxury"],
    "pickup": ["pickup-compact", "pickup-small", "pickup-medium", "pickup-large", "pickup-luxury"],
    "minivan": ["minivan-compact", "minivan-standard", "minivan", "minivan-business", "minivan-premium", "minivan-luxury", "minivan-electric"],
    "minibus": ["minibus", "minibus-premium"]
};

function analyzeDatabase() {
    const analysis = {};
    
    // Группируем по маркам
    carDatabaseArray.forEach(car => {
        if (!analysis[car.brand]) {
            analysis[car.brand] = {
                sedan: [],
                hatchback: [],
                suv: [],
                coupe: [],
                pickup: [],
                minivan: [],
                minibus: []
            };
        }
        
        // Определяем категорию по типу
        let category = null;
        for (const [cat, types] of Object.entries(typeCategoryMapping)) {
            if (types.includes(car.type)) {
                category = cat;
                break;
            }
        }
        
        if (category && analysis[car.brand][category]) {
            if (!analysis[car.brand][category].includes(car.model)) {
                analysis[car.brand][category].push(car.model);
            }
        }
    });
    
    // Находим марки с малым количеством моделей
    const issues = [];
    Object.keys(analysis).forEach(brand => {
        Object.keys(typeCategoryMapping).forEach(category => {
            const count = analysis[brand][category]?.length || 0;
            if (count < 3 && count > 0) {
                issues.push({
                    brand: brand,
                    category: category,
                    count: count,
                    models: analysis[brand][category]
                });
            }
        });
    });
    
    return { analysis, issues };
}

// Экспорт для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { analyzeDatabase, typeCategoryMapping };
}

