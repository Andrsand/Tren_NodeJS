import http from 'http';

let i = 0; // переменная для счетчика запросов

http.createServer((request, response) => {  // стартуем наш сервер с помощью метода createServer: 
	                                        // параметр request принимает запрос пользователя
                                            // параметр response - содержит ответ сервера
    response.setHeader('Content-Language', 'utf-8'); // методом setHeader можно отправлять HTTP заголовки
    response.setHeader('Content-Type', 'text/html'); // чтобы наш ответ трактовался как HTML

    // Код ответа и заголовки можно объединить в одном методе writeHead. Первым параметром этот метод принимает код ответа, а вторым - объект с заголовками: 
    // http.createServer((request, response) => {
    //     response.writeHead(200, {'Content-Type': 'text/html'}); 

    response.statusCode = 200;              // код 200, сообщающий браузеру о том, что все ок и страница найдена                          
    response.write('<b>hello world</b> </br>');
	response.write('Request counter: ');
    response.write(String ( ++i));           // счетчик запросов
	response.end();                          // завершение ответа сервера
}).listen(3000);                             // порт для ожидания запросов сервером

