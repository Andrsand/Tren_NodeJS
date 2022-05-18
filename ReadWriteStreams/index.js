import fs from 'fs';

// Потоки позволяют прочитывать файл по кусочкам.

let readableStream = fs.createReadStream('readme.txt', 'utf8'); // создаем поток чтения с помощью метода createReadStream: 

readableStream.on('data', function(chunk) {                     // Теперь прочитаем наш файл по кусочкам
	console.log(chunk);
});

// Можно также создавать потоки записи. Это делается с помощью метода createWriteStream: 

let writeableStream = fs.createWriteStream('writeme.txt');

writeableStream.write('text1\n'); // Давайте что-нибудь запишем в наш поток с помощью метода write
writeableStream.write('text2\n');
writeableStream.write('text3\n');


writeableStream.end(); // Завершим процедуру записи с помощью метода end

