import fs from 'fs';
import http from 'http';
import promises from 'fs/promises';

http.createServer(async (request, response) => {
	let lpath  = 'layout.html';
	let layout = await fs.promises.readFile(lpath, 'utf8');
	
	let reg = /\{% get element '(.+?)' %\}/g;
	layout = layout.replace(reg, async (match0, match1) => {
		return await fs.promises.readFile('elems/' + match1 + '.html', 
			'utf8'); 
	});
	
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(layout);
	response.end();
}).listen(3000);
