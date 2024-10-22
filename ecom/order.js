let showMessage = document.getElementById("confirm-order-btn");
showMessage.addEventListener('click', () => {
    alert("Order confirmed");
});
// Sample order data (you would typically get this from a server or local storage)
const orderData = [
    { name: "Product 1", price: 50.00 },
    { name: "Product 2", price: 75.00 },
    // Add more products as needed
];

const shippingCost = 10.00;

function populateOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    let subtotal = 0;

    // Clear existing items
    orderItemsContainer.innerHTML = '';

    // Add each item to the order summary
    orderData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('summary-item');
        itemElement.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
        `;
        orderItemsContainer.appendChild(itemElement);

        subtotal += item.price;
    });

    // Update shipping cost (you could make this dynamic too)
    document.getElementById('shipping-cost').textContent = `$${shippingCost.toFixed(2)}`;

    // Calculate and update total
    const total = subtotal + shippingCost;
    document.getElementById('total-cost').textContent = `$${total.toFixed(2)}`;
}

// Call the function when the page loads
window.addEventListener('load', populateOrderSummary);