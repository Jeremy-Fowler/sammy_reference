
// notice, this array directly correlates with the sandwiches we hard-coded in our html.... the names in the array directly correlates to the name i pass in the arguments on the on-click
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

// we need a separate array to store what is in our cart
let cart = []

function buySando(name) {
  console.log(name);
  let sando = sandwiches.find(s => s.name == name)
  console.log(sando);
  // buying a sandwich pushes it into our cart
  cart.push(sando)
  console.log('cart:', cart);
  console.log('sandwiches:', sandwiches);
  // every time i add something to my cart... i should redraw it
  drawCart()
}

function drawCart() {
  let cartItems = document.getElementById('cart')
  // we use template='' to use as a placeholder in our iteration....w/o this our for loop will not work properly
  let template = ''
  // here we iterate over our cart array...remember this array will remain empty unless we buy something
  cart.forEach(sandwich => {
    template += `
      <div class="d-flex justify-content-between cart-item">
              <p class="m-0 pb-1">${sandwich.name}</p>
              <p class="m-0 pb-1">${sandwich.price}</p>
            </div>
    `
  })
  // @ts-ignore
  cartItems.innerHTML = template
}