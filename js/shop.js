// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];
console.log(cartList);

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let product;
  for (let i = 0; i < products.length; i++) {
    product = products[id - 1];
  }
  // 2. Add found product to the cartList array
   cartList.push(product);
}

// Exercise 2
function cleanCart() {
  const cartBody = document.querySelector("#cart_list");
  cartBody.innerHTML = "";
  document.getElementById("total_price").innerHTML = 0;
  cartList = [];
  cart = [];
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let total = 0;

  cart.forEach((item) => {
    total += item.subtotal;
  });

  return total.toFixed(2);

  /* const total = cartList
  .map(item => item.price)
  .reduce((counter, item) => counter + item, 0);
  console.log(total);*/

  // Calculate total price of the cart using the "cartList" array
  /*total = 0;
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  return total.toFixed(2);*/
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart = [];
  for (let i = 0; i < cartList.length; i++) {
    if (!cart.includes(cartList[i])) {
      cartList[i].quantity = 1;
      cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
      cart.push(cartList[i]);
    } else {
      cartList[i].quantity += 1;
      cartList[i].subtotal = cartList[i].quantity * cartList[i].price;
    }
  }
  applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == 1 && cart[i].quantity >= 3) {
      cart[i].subtotalWithDiscount = cart[i].subtotal - 10;
      cart[i].subtotal = cart[i].subtotalWithDiscount;
    } else if (cart[i].id == 1 && cart[i].quantity < 3) {
      cart[i].subtotalWithDiscount = "";
    }

    if (cart[i].id == 3 && cart[i].quantity >= 10) {
      cart[i].subtotalWithDiscount = cart[i].subtotal - cart[i].subtotal * 0.3;
      cart[i].subtotal = cart[i].subtotalWithDiscount;
    } else if (cart[i].id == 3 && cart[i].quantity < 10) {
      cart[i].subtotalWithDiscount = "";
    }
  }
  console.log("Me esta haciendo la función");
}
// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
generateCart();
  /*let th =  document.createElement('th');
th.textContent = 'nombreproducto';
let td = document.createElement('td');
td.textContent = 'preciounidad';
cartBody.appendChild(tr);
cartBody.appendChild(th);
cartBody.appendChild(td);*/
  const cartBody = document.getElementById("cart_list");

  cartBody.innerHTML = "";

  const cartTotal = calculateTotal();

  cartTotal.innerHTML = "";

  cart.forEach((item) => {
    const table = document.createElement("tr");

    const tableTitle = document.createElement("th");
    tableTitle.textContent = item.name;
    const tablePrice = document.createElement("td");
    tablePrice.textContent = item.price;
    const tableQuantity = document.createElement("td");
    tableQuantity.textContent = item.quantity;
    const tableSubtotal = document.createElement("td");
    tableSubtotal.textContent = item.subtotal;
   // const tableRemove = document.createElement('td');
   // tableRemove.innerHTML = '<button class="btn btn-outline-dark" onclick="removeFromCart('+element.id+')"><i class="fa fa-trash"></button>';

    // const tableSubtotalWithDiscount = document.createElement("td");
    //tableSubtotalWithDiscount.textContent = item.subtotalWithDiscount;

    const totalPrice = document.getElementById("total_price");
    //let discountTotal = item.subtotal - item.subtotalWithDiscount;
    //totalPrice.innerHTML = cartTotal - discountTotal;
    totalPrice.innerHTML = cartTotal;
    cartBody.appendChild(table);
    table.appendChild(tableTitle);
    table.appendChild(tablePrice);
    table.appendChild(tableQuantity);
    table.appendChild(tableSubtotal);
   // table.appendChild(tableRemove);
    //table.appendChild(tableSubtotalWithDiscount);
  });
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  /*let product;
  for (let i = 0; i < products.length; i++) {
    product = products[id - 1];

    if (cart.includes(product)) {
      let indexItem = cart.indexOf(product);
      cart[indexItem].quantity++;
      cart[indexItem].subtotal = cart[indexItem].quantity * cart[indexItem].price;
    } else {
      cart.push(product);
      let indexItem = cart.indexOf(product);
      cart[indexItem].quantity = 1;
      cart[indexItem].subtotal = cart[indexItem].quantity * cart[indexItem].price;
    }
    applyPromotionsCart();
break;

  }*/
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  /*let product;
  for (let i = 0; i < products.length; i++) {
    product = products[id - 1];

    if (cart.includes(product)) {
      let indexItem = cart.indexOf(product);
      cart[indexItem].quantity--;
      cart[indexItem].subtotal = cart[indexItem].quantity * cart[indexItem].price;
    } else {
      cart.splice(product);
    }
    applyPromotionsCart();
break;

  }*/
}

function open_modal() {
  console.log("Open Modal");
  printCart();
 
}
