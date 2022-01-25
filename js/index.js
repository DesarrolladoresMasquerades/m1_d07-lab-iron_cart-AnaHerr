// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subResult = price*quantity;
  const subtotalPrice = product.querySelector(".subtotal span")
  subtotalPrice.innerText = subResult;
  return subResult
}

function calculateAll() {
   
  let value = 0;

  const allProducts = Array.from(document.getElementsByClassName("product"))
   allProducts.forEach((element)=>{ 
    value += parseInt(updateSubtotal(element))
   })

   //
   
  // ITERATION 3
  document.querySelector("#total-value span").textContent= value;
  return value;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const toRemove= target.parentNode.parentNode;
  toRemove.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll(".btn-remove")
  .forEach(element => element.addEventListener('click', removeProduct));
});
