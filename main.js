//task 2
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');

//task 3
const totalPriceElement = document.getElementById('total-price');

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    //task 3
    const totalPrice = productPrice * quantity;
    
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);