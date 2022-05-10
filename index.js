import fs from 'fs';

fs.readFile('readme.txt', 'utf8', function(err, data) {
	console.log(data);
});
