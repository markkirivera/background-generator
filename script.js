var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var code = document.getElementById("code");

var generate = document.getElementById("generate1");

function getRandomRGB() {

	// Generate randome RGB
	// code from www.PaulIrish.com

	color1.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
	color2.value = '#' + Math.floor(Math.random() * 16777215).toString(16);

	setGradient();
}

// Generate gradient function
function setGradient() {
	body.style.background =
		"linear-gradient(to right, " +
		color1.value +
		", " +
		color2.value +
		")";

	code.textContent = body.style.background + ";";
}

// Generate a ramdom gradient on window load
window.onload = function () {
	getRandomRGB()
}

// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
generate.addEventListener("click", getRandomRGB);

