import fs from 'fs';
import http from 'http';

// Файлы ресурсов в NodeJS
// Задача:
// Под ресурсами понимаются файлы картинок, файлы CSS стилей, файлы клиентских скриптов и так далее.
// По адресу /page.html мы хотим отдавать HTML файл, а по адресу /image.png - картинку. 

http.createServer(async (request, response) => {
	if (request.url === '/favicon.ico') {
		let data = await fs.promises.readFile('favicon.ico');
        let type;
		
		if (request.url === '/page.html') {
			data = await fs.promises.readFile('page.html', 'utf8');
			type = 'text/html';
		}
		
		if (request.url === '/image.png') {
			data = await fs.promises.readFile('image.png');
			type = 'image/png'; // правильно укажем mime-тип
		}
		
		response.writeHead(200, {'Content-Type': type});
		response.write(data);
		response.end();
	}
}).listen(3000);