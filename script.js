let MenuIcon = document.querySelector(".App-header-menu-icon-block");
let MenuItems = document.querySelector(".App-header-drawer");
let Close = document.querySelector("#Close");
MenuIcon.addEventListener("click", () => {
  console.log("Menu");
  MenuItems.style.display = "block";
});
Close.addEventListener("click", () => {
  console.log("Close");
  MenuItems.style.display = "none";
});
