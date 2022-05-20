import http from 'http';

http.createServer((request, response) => {
	if (request.url != '/favicon.ico') {
		let text;
		let status = 200;                    // для существующей страницы отдавать статус 200, а для не существующей - 404. 
		
		if (request.url == '/page1') {
			text = '1';
		}
		else if (request.url == '/page2') {
			text = '2';
		}
		else if (request.url == '/page3') {
			text = '3';
		} else {
			text = 'page not found';
			status = 404;                    // для не существующей страницы - статус - 404. 
		}
		
		response.writeHead(status, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(3000);

