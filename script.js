const radioButtonsUS = document.getElementsByName("usprice");
const selectedUSGift = document.getElementsById("selected-us-gift")

radioButtonsUS.addEventListener('change', () => {
  alert('YES!');
});


// for (const radioButton of radioButtonsUS) {
//   radioButton.addEventListener('change', () => {
//     selectedUSGift.textContent = "You selected" + radioButton.value + "gift!";
//     selectedUSGift.classList.remove("hidden");
//     alert('yes!');
//   });
// };


// radioButtonsUS.addEventListener('click', () => {
//   for (let radioButton of radioButtonsUS) {
//     if (radioButton.checked) {
//       selectedUSGift.textContent = "You selected" + radioButton.value + "gift!";
//       selectedUSGift.classList.remove("hidden");
//     }
//   }
// });