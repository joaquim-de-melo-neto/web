const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d"); // criando o contexto canvas

// QUADRADOS 
ctx.fillStyle = "rgb(255 0 255 / 75%)"; // roxo
ctx.fillRect(25, 100, 175, 50);

ctx.fillStyle = "rgb(255 0 0)";
ctx.fillRect(50, 50, 100, 150); // vermelho

ctx.fillStyle = "rgb(0 255 0)";
ctx.fillRect(75, 75, 100, 100); // verde

// OUTLINE
ctx.strokeStyle = "rgb(255 255 255)";
ctx.strokeRect(25, 25, 175, 200);

ctx.lineWidth = 5;


// CONVERSOR DE GRAUS EM RADIANOS
function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

// TRIANGULO
ctx.fillStyle = "rgb(255 255 255)";
ctx.beginPath();
ctx.moveTo(50, 50); // posiciona a caneta sem escrever
// draw your path
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();


// CIRCULOS
ctx.fillStyle = "rgb(0 0 255)"; // AZUL
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(180), false); // clockwise
ctx.fill();

ctx.fillStyle = "yellow"; // PACMAN
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(0), true); // counter-clockwise
ctx.lineTo(200, 106);
ctx.fill();

// TEXTO
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 25, 300);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 25, 400);

canvas.setAttribute("aria-label", "Canvas text");

// DESENHANDO IMAGENS
const image = new Image();
image.src = "firefox.png";

image.addEventListener("load", () => ctx.drawImage(image, 20, 400));

image.addEventListener("load", () => ctx.drawImage(image, 30, 30, 185, 175, 300, 400, 185, 175)
);

canvas.setAttribute("aria-label", "Firefox Logo");



