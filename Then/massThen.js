import fs from 'fs';

let names = ['1.txt', '2.txt', '3.txt'];
let files = [];

for (let name of names) {
	files.push(fs.promises.readFile(name, 'utf8'));
}

Promise.all(files).then(data => {                    //Promise.all only writes to a file when all files have been read.
	fs.promises.writeFile('res.txt', data.join(''));
}).catch(err => {
	console.log('что-то пошло не так');
});

