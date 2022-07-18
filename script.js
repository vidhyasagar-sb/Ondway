const toggleBtn = document.querySelector(".toggle");
const header = document.querySelector("header");
const closeBtn = document.querySelector(".close");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  header.classList.toggle("active");
  body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  header.classList.toggle("active");
  body.style.overflow = "visible";
});
