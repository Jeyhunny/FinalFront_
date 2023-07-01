 function removeFromWishlist(index) {
            const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
            wishlistItems.splice(index, 1);
            localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
            location.reload();
          }
      
          document.addEventListener("DOMContentLoaded", function () {
            const wishlistItemsBody = document.getElementById('wishlist-items-body');
            const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
      
            wishlistItems.forEach(function (item, index) {
              const row = document.createElement('tr');
      
              const nameColumn = document.createElement('td');
              nameColumn.classList.add('p-4');
              const nameText = document.createElement('span');
              nameText.textContent = item.artist + ' - ' + item.date;
              nameColumn.appendChild(nameText);
      
              const removeColumn = document.createElement('td');
              removeColumn.classList.add('text-center', 'align-middle', 'px-0');
              const removeButton = document.createElement('button');
              removeButton.type = 'button';
              removeButton.classList.add('btn', 'btn-sm', 'btn-outline-danger');
              removeButton.textContent = 'Delete';
              removeButton.addEventListener('click', function () {
                removeFromWishlist(index);
              });
              removeColumn.appendChild(removeButton);
      
              row.appendChild(nameColumn);
              row.appendChild(removeColumn);
      
              wishlistItemsBody.appendChild(row);
            });
          });