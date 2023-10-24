const fs = require('fs');

const args = process.argv.slice(2);
const name = args[0];

fs.writeFile('hola.txt', `Hola ${name}!`, (err) => {
	console.log('Done!');
});
