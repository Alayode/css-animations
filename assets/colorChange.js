var container = document.querySelector("#container");
var zeros = "0000000";
container.addEventListener("click", changeColor, false);
function changeColor(e) {
    var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var colorLength = color.length;
    if (colorLength < 7) {
      color += zeros.substring(0, zeros.length - colorLength);
    }
    container.style.backgroundColor = color;
}