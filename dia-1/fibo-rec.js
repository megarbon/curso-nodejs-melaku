// 1 1 2 3 5 8 13 21 ...

export function generarFibonacciRecursivo(cuantos) {
	if (cuantos === 1) {
		return [1];
	} else if (cuantos === 2) {
		return [1, 1];
	} else {
		let secuencia = generarFibonacciRecursivo(cuantos - 1);
		let suma =
			secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
		secuencia.push(suma);
		return secuencia;
	}
}
