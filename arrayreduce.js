// const reducer = (acumulador, valorActual) => nuevoAcumulador
// const reducido = [].reduce(function(acumulador, valorActual), nuevoAcumulador)

// const reducido = [1,2].reduce((acc, el) => acc + el, 0)

// const numeros = [1,2,3,4,5]
// const resultado = numeros.reduce((acc, el) => acc + el, 0)

// INDEXAR

/*
const mascotas = [
	{ nombre: 'Puchini', edad: 12, tipo: 'perro' },
	{ nombre: 'Changuitofeliz', edad: 3, tipo: 'perro' },
	{ nombre: 'Pulga', edad: 10, tipo: 'perro' },
	{ nombre: 'Pelusa', edad: 12, tipo: 'gato' }
]

const indexed = mascotas.reduce((acc, el) =>  ({
	...acc, 
	[el.nombre]: el
}), {})


console.log(indexed)
console.log(indexed['Puchini'])
*/

const anidado = [1, [2, 3], 4, [5]]

const plano = anidado.reduce((acc, el) => acc.concat(el), [])

console.log(plano);