import fs from 'fs';
import { createGzip } from 'zlib'; // библиотека для сжатия данных


let readableStream  = fs.createReadStream('../readme.txt', 'utf8'); //  поток чтения 
let writeableStream = fs.createWriteStream('writeme.txt'); //поток записи

// readableStream.pipe(writeableStream); // метод pipe, чтобы поток чтения сразу перенаправлялся в поток записи.

// Цепочки
// Методы pipe можно вызывать цепочкой друг за другом. При этом каждый вызов метода в цепочке позволяет выполнять над данными некоторые операции: 
// синтаксис: readableStream.pipe(операция).pipe(операция).pipe(операция);


readableStream.pipe(createGzip('utf8')).pipe(writeableStream); //  с помощью цепочки методов сначала заархивируем поток чтения, а потом запишем в поток записи: 

