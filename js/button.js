const display = document.getElementById("display");
const input = document.getElementById("input");
const addButton = document.getElementById("add");

addButton.addEventListener("click", function() {
  display.innerHTML += input.value + "<br>";
});
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleString();
  document.querySelector("#current-time").innerHTML = timeString;
}

setInterval(updateTime, 1000);
