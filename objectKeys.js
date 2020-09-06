const x = { 1: { a: 1 }, 2: { a: 2 } }

Object.keys(x)
console.log(Object.keys(x))

Object.keys(x).map(y => {
	const obj = x[y]
	console.log(obj)
})

const list = Object.keys(x).map(y => x[y])
console.log(list)