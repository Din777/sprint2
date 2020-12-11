'use strict'

var gCanvas;
var gCtx;
var gPaintColor = 'black';
// var gCurrShape = 'line';
var currImgSrc = 'img/kot-1.jpg';

var gMeme = {
  selectedImgId: 0,
  selectedLineIdx: 0,
  lines: [
      {
          txt: '',
          size: 20,
          align: 'center',
          color: gPaintColor
      }
  ]
}


function createCanvas() {
  // console.log('creating');
  // var currMeme = getCurrMeme();
  // console.log(currMeme);
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  // gCtx.fillStyle = gBcgColor;
  // gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
  makeBase();
}

// function drawRect(x, y, xEnd = 400, yEnd = 300) {
//     gCtx.beginPath()
//     gCtx.strokeStyle = gPaintColor;
//     gCtx.rect(x, y, xEnd, yEnd); // x,y,widht,height
//     gCtx.stroke();

// }

function makeBase() {
  var baseImage = new Image();
  baseImage.src = currImgSrc;
  baseImage.onload = function () {
    gCtx.drawImage(baseImage, 0, 0);
  }
}

function drawText(text, x = 250, y = 50) {
  gCtx.lineWidth = '3'
  gCtx.strokeStyle = 'white'
  gCtx.fillStyle = 'black'
  gCtx.font = '44px Impact'
  gCtx.textAlign = 'center'
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)
}



function setMeme(imgInfo) {
  console.log('imgInfo.data', imgInfo.data);
  gMeme.selectedImgId = imgInfo.querySelector('img').data;
  console.log('gMeme on set', gMeme);
}


function getCurrMeme() {
  console.log('gMeme', gMeme);
  return gMeme;
}