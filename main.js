
// notice, this array directly correlates with the sandwiches we hard-coded in our html.... the names in the array directly correlates to the name i pass in the arguments on the on-click
let sandwiches = [
  {
    name: 'Grilled Cheese',
    price: 10.50,
    quantity: 0
  },
  {
    name: 'Shoe Sandwich',
    price: 14.50,
    quantity: 0

  }
]


// after basic functionality...come back and add a window prompt everytime we addd a new sando into the cart
function buySando(name) {
  console.log(name);
  let sando = sandwiches.find(s => s.name == name)
  console.log(sando);
  // buying a sandwich increases its quantity
  // @ts-ignore
  sando.quantity++
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
  sandwiches.forEach(sandwich => {
    if (sandwich.quantity > 0) {
      // we will want to add an onclick to each cart-sandwich to allow us to delete it 
      template += `
        <div class="d-flex justify-content-between cart-item" >
        <i class="ps-2 pointer mdi mdi-close text-danger" onclick="deleteItem('${sandwich.name}')"></i>
                <p class="m-0 pb-1">${sandwich.name}</p>
                <p class="m-0 pb-1">${sandwich.quantity}</p>
                <p class="m-0 pb-1">${sandwich.price}</p>
  
              </div>
      `
    }
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
  sandwiches.forEach(sandwich => {
    total += sandwich.price * sandwich.quantity
  })
  // show off console logging the total before drawing it to the page
  console.log('my total', total);
  // @ts-ignore
  document.getElementById('total').innerText = total.toFixed(2)
}

// notice.. this function will take in an index, if we review the onclick, we will see that we are passing down an index
function deleteItem(name) {
  console.log('deleting', name);
  let sandwich = sandwiches.find(s => s.name == name)
  // @ts-ignore
  if (window.confirm(`"Do you want to delete ${sandwich.name}"`)) {
    // @ts-ignore
    sandwich.quantity--
    drawCart()
  }
}