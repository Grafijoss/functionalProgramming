require('isomorphic-fetch')


const crudds = dominio => recurso => {
	const url = `${dominio}/${recurso}`

	return({
		create: (x) => fetch(url, {
			method: 'POST',
			body: JSON.stringify(),
		}).then(x => x.json),
		get: () => fetch(url).then(x => x.json())
	})
}

const Base = crudds('http://swapi.dev/api')


fetch('https://swapi.dev/api/films/1/')
.then(x => x.json())
.then(x => {
	return new Promise((resolve) => {
		let promisesChars = []

		x.characters.forEach(char => {
				const division = char.split("http://swapi.dev/api/people/");
				const character = Base(`people/${division[1]}`)
	
				const prom = new Promise((childresolve, childreject)=> {
					character.get().then(y => {
						childresolve({
							name: y.name,
							eyeColor: y.eye_color,
							birthYear: y.birth_year
						})
					})
				})
				promisesChars.push(prom)
		});

		Promise.all(promisesChars).then(values => { 
			resolve({
				response: x, 
				name: x.title,
				characters: values
			})
		});
	})
})

.then(x => {
	return new Promise((resolve) => {
		let response = x.response
		let promisesChars = []
	
		response.vehicles.forEach(char => {
				const division = char.split("http://swapi.dev/api/vehicles/");
				const item = Base(`vehicles/${division[1]}`)
	
				const prom = new Promise((childresolve, childreject)=> {
					item.get().then(y => {
						childresolve({
							name: y.name,
							cargoCapacity: y.cargo_capacity,
							passengers: y.passengers,
							pilotsHomeworlds: y.pilots
						})
					})
				})
				promisesChars.push(prom)
		});
	
	
		Promise.all(promisesChars).then(values => { 
			resolve({
				response, 
				name: x.name,
				characters: x.characters,
				wheeledVehicles: values
			})
		});
	})
})

.then(x => {
	return new Promise((resolve) => {
		let response = x.response
		let promisesChars = []
		response.starships.forEach(char => {
				const division = char.split("http://swapi.dev/api/starships/");
				const item = Base(`starships/${division[1]}`)
	
				const prom = new Promise((childresolve, childreject)=> {
					item.get().then(y => {
						childresolve(y)
					})
				})
				promisesChars.push(prom)
		});
		Promise.all(promisesChars).then(values => { 
			resolve({
				name: x.name,
				characters: x.characters,
				wheeledVehicles: x.wheeledVehicles,
				otherVehicles: values
			})
		});
	})
})
.then(x => {
	console.log(x);
})
