function removeFromCart(index) {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
  selectedItems.splice(index, 1);
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  const cartItemsBody = document.getElementById("cart-items-body");
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
  let totalPrice = 0;

  selectedItems.forEach(function (item, index) {
    const row = document.createElement("tr");

    const nameColumn = document.createElement("td");
    nameColumn.classList.add("text-center", "py-3", "px-4");
    nameColumn.textContent = item.artist;

    const priceColumn = document.createElement("td");
    priceColumn.classList.add("text-center", "py-3", "px-4");
    priceColumn.textContent = "$" + item.price;

    const dateColumn = document.createElement("td");
    dateColumn.classList.add("text-center", "py-3", "px-4");
    dateColumn.textContent = item.date;

    const removeColumn = document.createElement("td");
    removeColumn.classList.add("text-center", "align-middle", "px-0");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("btn", "btn-sm", "btn-outline-danger");
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", function () {
      removeFromCart(index);
    });
    removeColumn.appendChild(removeButton);

    const imageColumn = document.createElement("td");
    const image = document.createElement("img");
    image.src = "/NightLive/assets/images/artists/2258.webp"
    image.width = "100";
    image.height = "100";
    image.style.padding = "10px";
    imageColumn.appendChild(image);

    row.appendChild(imageColumn);
    row.appendChild(nameColumn);
    row.appendChild(priceColumn);
    row.appendChild(dateColumn);
    row.appendChild(removeColumn);

    cartItemsBody.appendChild(row);

    totalPrice += parseFloat(item.price);
  });

  const tableFooter = document.createElement("tfoot");
  const totalRow = document.createElement("tr");
  const totalLabel = document.createElement("td");
  tableFooter.style.margin = "8";
  totalLabel.colSpan = 3;
  totalLabel.textContent = "Total Price:";
  const totalPriceColumn = document.createElement("td");
  totalPriceColumn.classList.add("text-center", "py-3", "px-4");
  totalPriceColumn.textContent = "$" + totalPrice.toFixed(2);
  totalRow.appendChild(totalLabel);
  totalRow.appendChild(totalPriceColumn);
  tableFooter.appendChild(totalRow);

  cartItemsBody.appendChild(tableFooter);
});
