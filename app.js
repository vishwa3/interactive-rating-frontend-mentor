const ratingScreen = document.querySelector(".rating-screen");
const successScreen = document.querySelector(".success-screen");
const ratingResult = document.querySelector(".success-screen .rating-result");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", () => {
  const rating = document.querySelector(
    'form input[type="radio"]:checked'
  ).value;
  if (rating) {
    ratingScreen.classList.toggle("hidden");
    successScreen.classList.toggle("hidden");
    ratingResult.textContent = `You selected ${rating} out of 5`;
  }
});
