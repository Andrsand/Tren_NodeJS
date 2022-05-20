import http from 'http';

// Объект запроса request содержит данные запроса браузера к серверу. 
// В этом объекте свойство url содержит адрес запрошенной страницы, свойство method содержит HTTP метод запроса, 
// а свойство headers содержит массив отправленных заголовков. 

http.createServer((request, response) => {
    if (request.url != '/favicon.ico'){ // исключение запроса фавиконки

	console.log(request.url); // теперь выполнится один раз
	console.log(request.url);
	console.log(request.method);
	console.log(request.headers);
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('text');
	response.end();
    }
}).listen(3000);