function darkTheme() {
  let input = document.querySelector(".input");
  let container = document.querySelector(".container");

  if (input.checked) {
    container.style.background = "linear-gradient(to bottom right, rgb(110, 110, 110) , rgb(37, 37, 37))";
  } else {
    container.style.background = "linear-gradient(to bottom right, rgb(253, 253, 253) , rgb(202, 202, 202))";
  }
}