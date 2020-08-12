//  Immediatly

const p1 = Promise.resolve(1)
console.log(p1)

p1
.then(x => x + 5)
.then(x => Promise.resolve(x + 5))
.then(x => Promise.reject('Error algo sucedio mal'))
.then(x => console.log(x))
.catch(e => console.log(e))



const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 900))

delayed(7)
	.then(x => {
		console.log(x)
		return delayed(x + x)
	})
	.then(x => console.log(x))
	.then(x => Promise.reject('Hubo un error :('))
	.catch(e => console.log(e))


	require('isomorphic-fetch')

	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(x => x.json())
		.then(x => console.log(x))
