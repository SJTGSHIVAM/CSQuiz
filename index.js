const loginBtn = document.querySelectorAll(".csq__btn--login");
const regBtn = document.querySelectorAll(".csq__btn--reg");
const forgotBtn = document.querySelectorAll(".csq__btn--forgot");
const loginCard = document.querySelector(".csq__card--login");
const regCard = document.querySelector(".csq__card--reg");
const forgotCard = document.querySelector(".csq__card--forgot");

const toggleCard = (element) => {
  loginCard.classList.add("tui__dis--none");
  regCard.classList.add("tui__dis--none");
  forgotCard.classList.add("tui__dis--none");
  element.classList.remove("tui__dis--none");
};
loginBtn.forEach((btn) =>
  btn.addEventListener("click", () => toggleCard(loginCard))
);
regBtn.forEach((btn) =>
  btn.addEventListener("click", () => toggleCard(regCard))
);
forgotBtn.forEach((btn) =>
  btn.addEventListener("click", () => toggleCard(forgotCard))
);
