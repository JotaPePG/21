function darkTheme() {
  let input = document.querySelector(".input");
  let container = document.querySelector(".container");

  if (input.checked) {
    container.style.background = "#4a4e69";
  } else {
    container.style.background = "#f2e9e4";
  }
}
