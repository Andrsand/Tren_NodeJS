import fs from 'fs';
import http from 'http';
import promises from 'fs/promises';
//import __dirname from './__dirname.js.js';

http.createServer(async (request, response) => {
	if (request.url != '/favicon.ico') {
		let text;
		let status;
		let path = 'root' + request.url; // path generated from request
		
		try {
			if ((await fs.promises.stat(path)).isDirectory()) { // if filename and extension are not specified path += '/index.html';
				path += '/index.html';                          // send to main page - index.html
			}
			
			status = 200;
			text = await fs.promises.readFile(path, 'utf8');    // read index.html
		} catch (err) {                                         //  if error, return status 404 and display appropriate message
			status = 404;
			text = '404 page not found';
		}
		
		response.writeHead(status, {'Content-Type': 'text/html'});
		response.write(text);
		response.end();
	}
}).listen(4000);
