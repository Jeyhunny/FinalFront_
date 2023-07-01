document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    const cartCount = cartItems.length;
    const wishlistCount = JSON.parse(localStorage.getItem('wishlistItems'))?.length || 0;
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cartCount;
    const wishlistCountElement = document.getElementById('wishlistCount');
    wishlistCountElement.textContent = wishlistCount;
});
