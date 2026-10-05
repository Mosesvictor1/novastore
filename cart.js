const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");
const quantity = document.querySelectorAll(".quantity-value");
const price = document.querySelectorAll(".price");
const totalPrice = document.querySelectorAll(".total-price");
let subtotalPrice = document.querySelector(".subtotal");
let shippingPrice = document.querySelector(".shipping");
let taxPrice = document.querySelector(".tax");
let totalPriceElement = document.querySelector(".total");
n
// INCREASE
increase.forEach((button, index) => {
  button.addEventListener("click", () => {
    let number = Number(quantity[index].innerText);

    number++;

    quantity[index].innerText = number;

    let productPrice = Number(
      price[index].innerText.replace("$", "").replace(",", ""),
    );

    let total = productPrice * number;

    totalPrice[index].innerText = "$" + total.toFixed(2);

    calculateTotal();
  });
});

// DECREASE
decrease.forEach((button, index) => {
  button.addEventListener("click", () => {
    let number = Number(quantity[index].innerText);

    if (number > 1) {
      number--;

      quantity[index].innerText = number;

      let productPrice = Number(
        price[index].innerText.replace("$", "").replace(",", ""),
      );

      let total = productPrice * number;

      totalPrice[index].innerText = "$" + total.toFixed(2);

      calculateTotal();
    }
  });
});



// ORDER SUMMARY
function calculateTotal() {
  let subtotal = 0;

  totalPrice.forEach((item) => {
    let amount = Number(item.innerText.replace("$", "").replace(",", ""));

    subtotal = subtotal + amount;
  });

  let shipping = 50;

  let tax = subtotal * 0.05;

  let finalTotal = subtotal + shipping + tax;

  subtotalPrice.innerText = "$" + subtotal.toFixed(2);
  shippingPrice.innerText = "$" + shipping.toFixed(2);
  taxPrice.innerText = "$" + tax.toFixed(2);
  totalPriceElement.innerText = "$" + finalTotal.toFixed(2);  
}
