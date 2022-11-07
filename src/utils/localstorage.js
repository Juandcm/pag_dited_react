const STORAGE_KEY = '__cart'
let saveListener = null

const listen = cb => {
	saveListener = cb
}

const list = key => JSON.parse(localStorage.getItem(key || STORAGE_KEY)) || []

const save = (data, key) => {
	localStorage.setItem(key || STORAGE_KEY, JSON.stringify(data))
	if (saveListener) saveListener(list(key || STORAGE_KEY))
}

const clear = key => {
	localStorage.removeItem(key || STORAGE_KEY)
	if (saveListener) saveListener(list(key || STORAGE_KEY))
}

const get = id => list().find(product => product.product_id === id)

const exists = id => !!get(id)

const add = (product, quantity) =>
	isValid(product)
		? exists(product.product_id)
			? update(product.product_id, 'quantity', get(product.product_id).quantity + (quantity || 1))
			: save(list().concat({ ...product, quantity: quantity || 1 }))
		: null

const remove = id => save(list().filter(product => product.product_id !== id))

const quantity = (id, diff) =>
	exists(id) && get(id).quantity + diff > 0
		? diff == 0
			? update(id, 'quantity', get(id).quantity)
			: update(id, 'quantity', get(id).quantity + diff)
		: remove(id)

const quantityCantidad = (id, cantidad) => (exists(id) && get(id).quantity + cantidad > 0 ? update(id, 'quantity', cantidad) : remove(id))

const update = (id, field, value) => save(list().map(product => (product.product_id === id ? { ...product, [field]: value } : product)))

const precioProducto = item => (item.precio_descuento != null ? item.precio_descuento : item.precio)

const total = cb => list().reduce((sum, product) => (isCallback(cb) ? cb(sum, product) : (sum += subtotal(product))), 0)

const isValid = product => product.product_id && precioProducto(product)

const subtotal = product => (isCalcable(product) ? precioProducto(product) * product.quantity : 0)

const isCalcable = product => product && precioProducto(product) && product.quantity

const onChange = cb => (isCallback(cb) ? listen(cb) : console.log(typeof cb))

const destroy = () => clear()

const isCallback = cb => cb && typeof cb === 'function'

export { list, get, add, remove, update, quantity, total, destroy, exists, subtotal, onChange,quantityCantidad }
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// ## Documentation
// const myproduct = {id: 3, name: "Vans", price: 75}
// add(myproduct, 2)

// #### get(id)
// Get product from the cart by id
// get(1) => {id: 1, name: "Nike Air", price: 100, quantity: 1}

// #### exists(id)
// Checks if the product already exists in the cart
// exists(21) => true or false

// #### list()
// Get the content of the cart as an array of products.
// list() => [{id: 1, name: "Nike Air", price: 100, quantity: 1}, {id: 2, name: "Adidas Superstar", price: 120, quantity: 2}]

// #### remove(id)
// Removes the product from the cart from the id
// remove(1)

// #### update(id, property, value)
// Updates the product's property with a certain value.
// update(1,'price',200)

// #### quantity(id, diff)
// Increase / decrease product's quantity with a positive or negative value.
// quantity(22,-1) // will decrease the quantity of product [id:22] with 1.

// #### total([reducer])
// By default returns with the total price:
// total()
// // 220

// Deletes the cart array from the browser's localStorage.
// destroy()
