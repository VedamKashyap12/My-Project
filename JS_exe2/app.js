"use strict";

let items = []; // array of { name, price }

// ✅ TODO-1: Implement addItem(name, price) as a FUNCTION EXPRESSION.
const addItem = function (name, price) {
  // trim name and convert price to number
  const trimmedName = name.trim();
  const numericPrice = parseFloat(price);

  if (!trimmedName) {
    alert("Item name cannot be empty.");
    return;
  }
  if (isNaN(numericPrice) || numericPrice <= 0) {
    alert("Price must be a positive number.");
    return;
  }

  items.push({ name: trimmedName, price: numericPrice });
};

// Calculate subtotal
const calcSubtotal = function () {
  return items.reduce((sum, it) => sum + it.price, 0);
};

// ✅ TODO-2: Implement applyDiscount(total) as an ARROW FUNCTION.
const applyDiscount = (total) =>
  total > 500 ? total * 0.9 : total; // 10% off if > 500

function checkout() {
  if (items.length === 0) {
    alert("No items in cart.");
    return;
  }
  console.table(items);
  const subtotal = calcSubtotal();
  const grandTotal = applyDiscount(subtotal);
  const discountNote = grandTotal < subtotal ? " (10% discount applied)" : "";
  alert(
    `Items: ${items.length}\nSubtotal: ₹${subtotal.toFixed(
      2
    )}\nTotal: ₹${grandTotal.toFixed(2)}${discountNote}`
  );
}

function runCart() {
  items = [];
  while (true) {
    const name = prompt("Enter item name (Cancel to checkout):");
    if (name === null) break;
    const priceInput = prompt("Enter price:");
    if (priceInput === null) continue;
    addItem(name, priceInput);
  }
  checkout();
}

document.getElementById("start").addEventListener("click", runCart);
