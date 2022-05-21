import fs from 'fs';
import http from 'http';

http.createServer(async (request, response) => {
	if (request.url != '/favicon.ico') {
		let text = await fs.promises.readFile('page.html', 'utf8'); // считываем разметку из страницы page.html 
		                                                            // и отдаем её в ответ на запрос
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(3000);