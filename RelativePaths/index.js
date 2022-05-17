import fs from 'fs';

// Пусть у нас есть следующая структура файлов:

// /Tren_NodeJS/
//     /RelativePaths/
//         index.js
// /asyncAwait/
//     readme.txt

// В этом случае нам потребуется выйти наверх два раза:
let path = '../asyncAwait/readme.txt';                  // если нужно будет выйти еще на один уровень вверх, путь будет выглядет так:
let data = await fs.promises.readFile(path, 'utf8');    // let path = '../../asyncAwait/readme.txt';  

console.log(data);