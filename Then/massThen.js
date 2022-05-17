import fs from 'fs';

let names = ['1.txt', '2.txt', '3.txt'];
let files = [];

for (let name of names) {
	files.push(fs.promises.readFile(name, 'utf8'));
}

Promise.all(files).then(data => {                    //Promise.all осуществляет запись в файл только тогда, когда все файлы будут прочитаны.
	fs.promises.writeFile('res.txt', data.join(''));
}).catch(err => {
	console.log('что-то пошло не так');
});

