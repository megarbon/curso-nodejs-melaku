import * as stuff from './fibonacci.js';

const persona = {
	name: {
		first: 'Juan',
		last: 'Pérez',
	},
};

const primero = persona?.name?.first;

stuff.decirHola();
console.log(stuff.generarFibonacci(10));
