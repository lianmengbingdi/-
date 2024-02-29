const fsSltLi_1 = document.querySelector("#fs-slt-1");
const sltListDiv_1 = fsSltLi_1.querySelector("#slt-list-1");

// const aElement = fsSltLi.querySelector("a");
fsSltLi_1.addEventListener("mouseover", () => {
  sltListDiv_1.style.display = "block";
});
fsSltLi_1.addEventListener("mouseout", () => {
  sltListDiv_1.style.display = "none";
});

const fsSltLi_2 = document.querySelector("#fs-slt-2");
const sltListDiv_2 = fsSltLi_2.querySelector("#slt-list-2");

// const aElement = fsSltLi.querySelector("a");
fsSltLi_2.addEventListener("mouseover", () => {
  sltListDiv_2.style.display = "block";
});
fsSltLi_2.addEventListener("mouseout", () => {
  sltListDiv_2.style.display = "none";
});
