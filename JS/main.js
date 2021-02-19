const sold = new Audio("../sounds/sold.mp3");
const cart = document.querySelector("#cart");
const buy = document.querySelector("#buy");

function reset() {
  cart.classList.remove("sold");
}

buy.addEventListener("click", () => {
  reset();
  sold.play();

  setInterval(() => {
    cart.classList.add("sold");
  }, 400);
});
