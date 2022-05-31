import fs from 'fs';
import http from 'http';
import promises from 'fs/promises';
//import __dirname from './__dirname.js.js';

http.createServer(async (request, response) => {
	if (request.url != '/favicon.ico') {
		let text;
		let status;
		let path = 'root' + request.url; // путь формируемый из request
		
		try {
			if ((await fs.promises.stat(path)).isDirectory()) { // если не указано имя файла и его расширение				path += '/index.html';
				path += '/index.html';                          // отправить на главную страницу - index.html
			}
			
			status = 200;
			text = await fs.promises.readFile(path, 'utf8');    // прочитать index.html
		} catch (err) {                                         //  если ошибка, вернуть статус 404 и вывести соотвествующе сообщение
			status = 404;
			text = '404 page not found';
		}
		
		response.writeHead(status, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(3000);
