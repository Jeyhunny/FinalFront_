function addToTable(artist, date, price) {
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    selectedItems.push({ artist, date, price });
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    window.location.href = 'cart.html';
  }
  function addToWishlist(artist, date) {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    wishlistItems.push({ artist, date });
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    window.location.href = 'wishlist.html';
  }