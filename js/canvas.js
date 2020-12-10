'use strict'

var gCanvas;
var gCtx;
var gBcgColor = 'pink';//url: img/1.jpg
var gPaintColor = 'black';
var gCurrShape = 'line';


function createCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    // gCtx.fillStyle = gBcgColor;
    // gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    make_base();
}

// function drawRect(x, y, xEnd = 400, yEnd = 300) {
//     gCtx.beginPath()
//     gCtx.strokeStyle = gPaintColor;
//     gCtx.rect(x, y, xEnd, yEnd); // x,y,widht,height
//     gCtx.stroke();

// }

function make_base() {
  var base_image = new Image();
  base_image.src = 'img/1.jpg';
    base_image.onload = function(){
    gCtx.drawImage(base_image, 0, 0);
  }
}



function drawText(text, x=250, y=100) {
    gCtx.lineWidth = '1.5'
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = 'black'
    gCtx.font = '42px Impact'
    gCtx.font = 'italic small-caps 900 40px serif'
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}