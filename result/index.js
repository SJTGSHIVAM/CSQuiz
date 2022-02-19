let optionList = document.querySelector(".csq__ans--option");
let optionListBtn = Array.from(
  document.querySelectorAll(".csq__ans--option > li > button ")
);
const resetOptionColor = () => {
  optionListBtn.forEach((btn) => {
    btn.classList.remove("tui__bgcol--blue");
    btn.classList.add("tui__bgcol--th-dark-light");
  });
};
optionList.addEventListener("click", ({ target }) => {
  if (optionListBtn.some((btn) => btn === target)) {
    resetOptionColor();
    target.classList.remove("tui__bgcol--th-dark-light");
    target.classList.add("tui__bgcol--blue");
  }
});
