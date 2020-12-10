'use strict'

var gCanvas;
var gCtx;
var gBcgColor = 'pink';//url: img/1.jpg
var gPaintColor = 'black';
var gCurrShape = 'line';


function createCanvas() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    gCtx.fillStyle = gBcgColor;
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    drawRect(0, 0, gCanvas.width, gCanvas.height);
}

function drawRect(x, y, xEnd = 300, yEnd = 300) {
    gCtx.beginPath()
    gCtx.strokeStyle = gPaintColor;
    gCtx.rect(x, y, xEnd, yEnd); // x,y,widht,height
    gCtx.stroke();

}