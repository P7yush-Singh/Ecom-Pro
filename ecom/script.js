ScrollReveal().reveal('.product-card', {duration: 2000}, {reset: true}, {interval: 2000}, {scale: 1.5});
// Simple cart add notification
// Add To cart function
function addTestItem() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Current cart:', JSON.parse(localStorage.getItem('cart')));
}
function addToCart(productId, productName, productPrice) {
    // Create an item object
    const item = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1 // Default quantity is 1
    };

    // Get the cart from localStorage or initialize it as an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === productId);

    if (existingItemIndex > -1) {
        // If it exists, increase the quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // If it doesn't exist, add the new item
        cart.push(item);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, alert the user or update the UI
    alert(`${productName} has been added to your cart!`);
    console.log('Current cart:', JSON.parse(localStorage.getItem('cart'))); // For debugging
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        const productName = this.getAttribute('data-product-name');
        const productPrice = this.getAttribute('data-product-price');
        addToCart(productId, productName, productPrice);
    });
});

// Search button functionality
document.getElementById('search-btn').addEventListener('click', () => {
    let query = document.querySelector('.search-bar input').value;
    alert('Searching for: ' + query);
});

// Price range functionality
let priceRange = document.getElementById('price-range');
let priceValue = document.getElementById('price-value');
priceRange.addEventListener('input', () => {
    priceValue.textContent = priceRange.value;
});

// Load More button functionality
let loadMoreBtn = document.getElementById('load-more-btn');
loadMoreBtn.addEventListener('click', () => {
    // You can dynamically load more products here, for now, it just shows an alert.
    alert('Loading more products...');
});


