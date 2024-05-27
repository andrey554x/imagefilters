const canvas = document.querySelector(".canvas");
const restart = document.querySelector(".restart");
const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const blueBtn = document.querySelector(".blue");

let redBtnCur = undefined;
let greenBtnCur = undefined;
let blueBtnCur = undefined;

const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "/images/sparta.jpeg";

const imageArr = [];

image.addEventListener("load", () => {
 canvas.width = image.width;
 canvas.height = image.height;

 
 ctx.drawImage(image, 0, 0, image.width, image.height);
 const imageData = ctx.getImageData(0, 0, image.width, image.height);

 restart.addEventListener("click", () => {
  loadImage();
 });

 redBtn.addEventListener("click", () => {
  redBtnCur = colorRange();
  getImagePixel();
 });

 greenBtn.addEventListener("click", () => {
  greenBtnCur = colorRange();
  getImagePixel();
 });

 blueBtn.addEventListener("click", () => {
  blueBtnCur = colorRange();
  getImagePixel();
 });

 function getImagePixel() {
  for (let i = 0; i < imageData.data.length; i += 4) {
   if (imageData.data[i + 3] != 0) {
    imageArr.push({
     r: redBtnCur ?? imageData.data[i],
     g: greenBtnCur ?? imageData.data[i + 1],
     b: blueBtnCur ?? imageData.data[i + 2],
     a: imageData.data[i + 3],
     x: Math.floor(i / 4) % image.width,
     y: Math.floor(Math.floor(i / 4) / image.width),
    });
   }
  }
  drawCanvas(canvas);
 }
 getImagePixel();
});
