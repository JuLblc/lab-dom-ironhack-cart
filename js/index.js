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
  //... your code goes here
  const toDelete = target.parentNode.parentNode
  const toDeleteDaddy = toDelete.parentNode
  toDeleteDaddy.removeChild(toDelete);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector(".create-product td:first-child input").value;
  const newProductPrice = document.querySelector(".create-product td:nth-child(2) input").value;

  const nodeCopy = document.querySelector('.product').cloneNode(true);
  nodeCopy.querySelector('.name span').textContent = newProductName;
  nodeCopy.querySelector('.price span').textContent = newProductPrice;
  // console.log("copy:",nodeCopy);

  const parent = document.querySelector('tbody');
  // console.log("parent:",parent);

  parent.append(nodeCopy);

  rmBtnList();

  // Reset input
  document.querySelector(".create-product td:first-child input").value = "";
  document.querySelector(".create-product td:nth-child(2) input").value = 0;
}

function rmBtnList(){
  const removeButtons = document.querySelectorAll('.btn.btn-remove');
  removeButtons.forEach(btn => btn.addEventListener('click', removeProduct));
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  rmBtnList();

  const createBtn = document.querySelector('.createbtn');
  createBtn.addEventListener('click', createProduct);
});
