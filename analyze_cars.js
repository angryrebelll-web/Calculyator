const fs = require('fs');
const content = fs.readFileSync('js/cars.js', 'utf8');

// Находим все записи автомобилей
const regex = /\{ brand: "([^"]+)", model: "([^"]+)", body: "[^"]+", type: "[^"]+" \}/g;
const brands = new Set();
const models = new Set();
const brandModelPairs = new Set();
const brandCount = {};
let match;
let count = 0;

while ((match = regex.exec(content)) !== null) {
    count++;
    const brand = match[1];
    const model = match[2];
    const pair = brand + '|' + model;
    
    brands.add(brand);
    models.add(pair);
    brandModelPairs.add(pair);
    
    if (!brandCount[brand]) {
        brandCount[brand] = 0;
    }
    brandCount[brand]++;
}

console.log('========================================');
console.log('ПОЛНАЯ ОЦЕНКА БАЗЫ ДАННЫХ АВТОМОБИЛЕЙ');
console.log('========================================\n');

console.log('ОБЩАЯ СТАТИСТИКА:');
console.log('-----------------');
console.log('Всего записей в базе:', count);
console.log('Уникальных марок:', brands.size);
console.log('Уникальных пар марка-модель:', brandModelPairs.size);
console.log('');

console.log('СПИСОК МАРОК (' + brands.size + '):');
console.log('-----------------');
const sortedBrands = Array.from(brands).sort();
sortedBrands.forEach((brand, i) => {
    console.log((i+1).toString().padStart(3) + '. ' + brand.padEnd(25) + ' - ' + brandCount[brand] + ' моделей');
});

console.log('\n');
console.log('ТОП-10 МАРОК ПО КОЛИЧЕСТВУ МОДЕЛЕЙ:');
console.log('-----------------------------------');
const topBrands = Object.entries(brandCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
topBrands.forEach(([brand, count], i) => {
    console.log((i+1).toString().padStart(2) + '. ' + brand.padEnd(25) + ' - ' + count + ' моделей');
});

