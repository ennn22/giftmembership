const radioButtonsUS = document.getElementsByName("usprice");
const selectedUSGift = document.getElementById("selected-us-gift")
const priceOptionsUS = document.querySelector(".us-discovery-price")

for (let radioButton of radioButtonsUS) {
  radioButton.addEventListener('click', () => {
    if (radioButton.checked) {
    selectedUSGift.textContent = 'You selected ' + radioButton.value + " gift!";
    selectedUSGift.classList.remove("hidden");
    priceOptionsUS.classList.add("hidden");
    }
  });
};

