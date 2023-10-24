const fs = require('fs');

const nombre = 'Gary';

fs.writeFile('hola.txt', `Hola ${nombre}!`, (error) => {
	if (error) {
		console.error('¡Hubo un error!');
	} else {
		console.log('¡Hecho!');
	}
});
