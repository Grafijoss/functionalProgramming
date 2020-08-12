const  conteoRegresivo = (a) => {
	if (a < 0) return console.log(a)
	console.log(a)
	return conteoRegresivo(a - 1)
}

conteoRegresivo(10)



