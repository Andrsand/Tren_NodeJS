import fs from 'fs';

fs.readFile('readme1.txt', 'utf8', function(err, data1) {
	if (!err) {
		fs.readFile('readme2.txt', 'utf8', function(err, data2) {
			if (!err) {
				console.log(data1 * data2);
			} else {
				console.log('ошибка чтения файла readme2');
			}
		});
	} else {
		console.log('ошибка чтения файла readme1');
	}
});