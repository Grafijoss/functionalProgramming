// const x = 'Fluffy'

// const f = () => {
// 	const y = 'kins'
// 	console.log(x, y)
// }

// f()

require('isomorphic-fetch')

const crudder = dominio => recurso => {
	const url = `${dominio}/${recurso}`

	return({
		create: (x) => fetch(url, {
			method: 'POST',
			body: JSON.stringify(),
		}).then(x => x.json),
		get: () => fetch(url).then(x => x.json())
	})
}

const Base = crudder('https://jsonplaceholder.typicode.com/todos/1')
const Todos = Base('todos')
const Users = Base('users')

Users.get().then(x => console.log(x[0]))
