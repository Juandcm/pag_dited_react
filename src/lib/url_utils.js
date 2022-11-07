// Para saber el tipo de variable
export const toType = obj => {
	return {}.toString
		.call(obj)
		.match(/\s([a-z|A-Z]+)/)[1]
		.toLowerCase()
}
