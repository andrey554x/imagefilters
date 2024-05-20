const canvas=document.querySelector('.canvas')
const redBtn=document.querySelector('.red')
const greenBtn= document.querySelector('.green')
const blueBtn=document.querySelector('.blue')

const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "/images/sparta.jpeg";

canvas.width = image.width;
canvas.height = image.height;

const imageArr = [];

image.addEventListener("load", () => {
  ctx.drawImage(image, 0, 0, image.width, image.height);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);

  ctx.clearRect(0, 0, canvas.width, canvas.height);


//   add to utils
  for (let i = 0; i < imageData.data.length; i += 4) {
    if (imageData.data[i + 3] != 0) {
      imageArr.push({
        r: imageData.data[i],
        g: imageData.data[i + 1],
        b: imageData.data[i + 2],
        a: imageData.data[i + 3],
        x: Math.floor(i / 4) % image.width,
        y: Math.floor(Math.floor(i / 4) / image.width),
      });
    }
  }


  (function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    imageArr.forEach((el) => {

      ctx.fillStyle = `rgba(${el.r},${el.g},${el.b},${el.a})`;
      ctx.fillRect(el.x, el.y, 1, 1);
    });
    requestAnimationFrame(drawCanvas);
  })();
});