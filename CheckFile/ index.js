import fs from 'fs';
//import fs from 'fs/promises';
import { existsSync } from 'fs';

import { constants } from 'fs';
const fs = require('fs');
fs.readdir('Then', (err, data) =>{
	console.log(data);
})

// fs.access('test.txt', constants.F_OK).then(() => {
// 	console.log('file exists');
// }).catch(() => {
// 	console.error('file does not exists');
// });

// try {
//     await fs.promises.access("info.txt");
//     // The check succeeded
// } catch (error) {
//     // The check failed
// }

// fs.access("info.txt", error => {
//     if (!error) {
//         console.log("нет файла");
//     } else {
//        console.log("есть такой файл!");
//     }
// });

// fs.stat('info.txt', function(err, stat) {
//     if(err == null) {
//         console.log('File exists');
//     } else {
//         console.log('Some other error: ', err.code);
//     }
// });

// if (existsSync('info.txt')){
//   console.log('Путь существует.');
// } else {
// 	console.log('файла нет.');
// }

   