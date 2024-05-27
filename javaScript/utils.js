function colorRange() {
 return document.querySelector("#colorRange").value;
}

function loadImage() {
 ctx.drawImage(image, 0, 0, image.width, image.height);
}


function drawCanvas(canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    imageArr.forEach((el) => {
     ctx.fillStyle = `rgba(${el.r},${el.g},${el.b},${el.a})`;
     ctx.fillRect(el.x, el.y, 1, 1);
    });
   }
   