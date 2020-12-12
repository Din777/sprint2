'use strict'

var gCanvas;
var gCtx;
var gPaintColor = 'black';
var currImgSrc;
var gBaseImage;
var gMeme;
var gCurrId;

function onInitCanvas() {
  gCurrId = loadFromStorage(TEMP_STORAGE_KEY);
  createMeme(gCurrId);
  createCanvas();
}


function createMeme(gCurrId) {
  gMeme = {
    selectedImgId: gCurrId,
    selectedLineIdx: 0,
    lines: [
      {
        txt: 'Hello',
        size: 44,
        align: 'center',
        color: 'white'
      }
    ]
  };
  // gMemes.push(gMeme);
}

function createCanvas() {
  currImgSrc = getUrlFromImgs(gMeme.selectedImgId);
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  makeBase();
}

function makeBase() {
  gBaseImage = new Image();
  gBaseImage.src = currImgSrc;
  gBaseImage.onload = function () {
    gCtx.drawImage(gBaseImage, 0, 0);
  }
}

function txtToCanvasEvent(value) {
  updateGMemeTxt(value);
  clearCanvas();
  gCtx.drawImage(gBaseImage, 0, 0);
  drawTextFromGMeme();
}

function updateGMemeTxt(str) {
  gMeme.lines[0].txt = str;
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function drawTextFromGMeme(x = 250, y = 50) {
  // same: var lines = gMeme.lines;
  // var obj = lines[0];
  // console.log('obj.txt', obj.txt);
  var text = gMeme.lines[0].txt;
  gCtx.lineWidth = '3'
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = gMeme.lines[0].color
  // same: gCtx.font = 'gMeme.lines[0].size, Impact'
  var fontStr = "Impact"
  var sizeFont = '' + gMeme.lines[0].size + 'px' + ' ' + fontStr;
  gCtx.font = sizeFont;
  gCanvas.style.letterSpacing = '2px';
  gCtx.textAlign = gMeme.lines[0].align
  gCtx.strokeText(text, x, y)
  gCtx.fillText(text, x, y)
}

function delBtnEvent() {
  txtToCanvasEvent('');
  document.querySelector('.input-txt-box').value = '';
}