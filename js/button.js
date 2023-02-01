const display = document.getElementById("display");
const input = document.getElementById("input");
const addButton = document.getElementById("add");

addButton.addEventListener("click", function() {
  display.innerHTML += input.value + "<br>";
});
