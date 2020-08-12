const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mascotas = [
	{ nombre: 'Puchini', edaad: 12, raza: 'perro' },
	{ nombre: 'Changuitofeliz', edaad: 3, raza: 'perro' },
	{ nombre: 'Pulga', edaad: 10, raza: 'perro' },
	{ nombre: 'Pelusa', edaad: 16, raza: 'gato' }
]


const numerosFiltrados = numeros.filter(x => x < 5)
// console.log(numerosFiltrados)
// console.log(mascotas, numeros)

const perros = mascotas.filter(x => x.raza == 'perro')
console.log(perros)