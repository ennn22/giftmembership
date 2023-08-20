const selectedGiftInputs = document.querySelectorAll('input[name="price"]');
// const selectedGiftInputs = document.getElementsByName('price');
const titleText = document.getElementById('title');
const giftImg = document.getElementById('gift-img');
const orderBtn = document.querySelector('.order-btn');


for (let selectedGift of selectedGiftInputs) {
  selectedGift.addEventListener('change', () => {
    titleText.textContent = "You have selected [" + selectedGift.value + "] gift!"
    if (selectedGift.value === "$99 / 6 months" || selectedGift.value === "$149 / 6 months") {
      titleText.style.color = "royalblue"
    } else {
      titleText.style.color = "mediumvioletred";
    }
    giftImg.src = "./resources/opengift.png";
    orderBtn.style.pointerEvents = 'none';
    orderBtn.style.opacity = 1;
  });
};