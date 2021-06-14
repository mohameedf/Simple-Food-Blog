const button = document.querySelector("#hamburgerBtn");
const menu = document.querySelector("#hamburgerMenu");

button.addEventListener("click", () => {
  menu.classList.forEach((e) => {
    if (e == "active") {
      menu.classList.remove("active");
      button.classList.remove("is-active");
    } else {
      menu.classList.add("active");
      button.classList.add("is-active");
    }
  });
});
