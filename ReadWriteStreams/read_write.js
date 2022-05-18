// Можно прочитывать один файл, записывая по частям его данные в другой файл:
import fs from 'fs';


let readableStream  = fs.createReadStream('readme.txt', 'utf8');
let writeableStream = fs.createWriteStream('writeme.txt');

readableStream.on('data', function(chunk) { 
	writeableStream.write(chunk);
});