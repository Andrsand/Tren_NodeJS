  import fs from 'fs';
//import fs from 'fs/promises';  // Такое поджключение похвляет сократить упоминание "promises" в коде
// например: await fs.writeFile('res.txt', data.join(''));

// Задача:
// Пусть имена наших файлов записаны в массиве. Давайте прочитаем данные наших файлов в цикле, а затем запишем их в новый файл

async function func() {
	try {
		let names = ['1.txt', '2.txt', 
			'3.txt']; 
		let data  = [];
		
		for (let name of names) {
			data.push(await fs.promises.readFile(name, 
				'utf8')); 
		}
		
		await fs.promises.writeFile('res.txt', data.join(''));
	} catch (err) {
		console.log('что-то пошло не так');
	}
}

func();