// 1 1 2 3 5 8 13 21 ...

export function generarFibonacci(cuantos) {
	let x = 1;
	let y = 1;
	let secuencia = [x, y];

	Array(cuantos)
		.fill()
		.forEach(() => {
			let suma = x + y;
			secuencia.push(suma);
			x = y;
			y = suma;
		});

	return secuencia;
}
