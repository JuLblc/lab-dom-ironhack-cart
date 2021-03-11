// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  const modifiedPrice = Number(price);

  const test = product.querySelector('.subtotal span');
  const resultat = quantity * modifiedPrice;

  test.textContent = resultat;

  return resultat;
}

function calculateAll() {
  
  const products = document.querySelectorAll('.product');
  
  let somme = 0;
  products.forEach(product => somme = somme + updateSubtotal(product));

  let sum = Array.from(products).reduce((acc, current) => {
    return acc + updateSubtotal(current);
  },0);
  
  const total = document.querySelector("#total-value span");
  total.textContent = somme;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn.btn-remove');
  removeButtons.forEach(btn => btn.addEventListener('click', removeProduct));
});
