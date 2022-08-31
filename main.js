
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

// after basic functionality...come back and add a window prompt everytime we addd a new sando into the cart
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
  // NOTE the following allows us to also provide/access the index within a forEach loop
  cart.forEach((sandwich, index) => {
    // we will want to add an onclick to each cart-sandwich to allow us to delete it 
    template += `
      <div class="d-flex justify-content-between cart-item" >
      <i class="ps-2 pointer mdi mdi-close text-danger" onclick="deleteItem(${index})"></i>
              <p class="m-0 pb-1">${sandwich.name}</p>
             
              <p class="m-0 pb-1">${sandwich.price}</p>

            </div>
    `
  })
  // @ts-ignore
  cartItems.innerHTML = template
  // we will also need to redraw or 'update' our total every time our cart updates
  drawTotal()
}

function drawTotal() {
  // here we want to iterate through our cart and draw the total of all of the prices
  let total = 0
  // ^^ much like template = "" , we have a total that each iteration will add to... this saves or place in the for loop and allows us to have a 'running total'
  cart.forEach(sandwich => {
    total += sandwich.price
  })
  // show off console logging the total before drawing it to the page
  console.log('my total', total);
  // @ts-ignore
  document.getElementById('total').innerText = total
}

// notice.. this function will take in an index, if we review the onclick, we will see that we are passing down an index
function deleteItem(index) {
  console.log('deleting', index);
  let sandwich = cart[index]
  if (window.confirm(`"Do you want to delete ${sandwich.name}"`)) {
    // splice sandwich
  }
}