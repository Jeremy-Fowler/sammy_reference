let total = 0

let sandwiches = [
  {
    name: 'Grilled Cheese',
    price: 10.50,
  },
  {
    name: 'Shoe Sandwich',
    price: 14.50,
  }
]

let cart = []

function buySando(name) {
  let sando = sandwiches.find(s => s.name == name)
  cart.push(sando)
  console.log('cart:', cart);
  console.log('sandwiches:', sandwiches);
}