const suma = (ns) => {
	let acumulado = 0;
	for (let i = 0; i < ns.length; i++) {
		acumulado += ns[i];
	}
	return acumulado;
}

const numeros = [1,2,3,4,5]
const mascotas = [
	{ nombre: 'Puchini', edad: 12, tipo: 'perro' },
	{ nombre: 'Changuitofeliz', edad: 3, tipo: 'perro' },
	{ nombre: 'Pulga', edad: 10, tipo: 'perro' },
	{ nombre: 'Pelusa', edad: 12, tipo: 'gato' }
]

// console.log(suma(numeros))

// const multiplicados = numeros.map(x => x * 2)
// const parejas = numeros.map(x => [x, x])
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)

console.log(resultado / edades.length)