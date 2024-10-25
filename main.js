//task 2
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');

// Calculate total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    
}

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);