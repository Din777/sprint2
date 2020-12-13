'use strict'

var gCanvas;
var gCtx;
var gPaintColor = 'black';
var currImgSrc;
var gBaseImage;
var gMeme;
var gCurrId;
var gStep = 2;
var gCurrRow;

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
        x: 250,
        y: 50,
        txt: '',
        size: 44,
        font:'Impact',
        align: 'center',
        strokeColor: 'black',
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
  //gCtx.drawImage(gBaseImage, 0, 0);
  drawTextFromGMeme();
}

function updateGMemeTxt(str) {
  gMeme.lines[gMeme.selectedLineIdx].txt = str;
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
  gCtx.drawImage(gBaseImage, 0, 0);
}

function drawTextFromGMeme(x = 250, y = 50) {
  // same: var lines = gMeme.lines;
  // var obj = lines[0];
  // console.log('obj.txt', obj.txt);
  for (var i = 0; i < gMeme.lines.length; i++) {
    var text = gMeme.lines[i].txt;
    gCtx.lineWidth = '3'
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].strokeColor
    gCtx.fillStyle = gMeme.lines[i].color
    // same: gCtx.font = 'gMeme.lines[0].size, Impact'
    var sizeFont = '' + gMeme.lines[i].size + 'px' + ' ' + gMeme.lines[i].font;
    gCtx.font = sizeFont;
    gCanvas.style.letterSpacing = '2px';
    gCtx.textAlign = gMeme.lines[i].align
    gCtx.strokeText(text, gMeme.lines[i].x, gMeme.lines[i].y)
    gCtx.fillText(text, gMeme.lines[i].x, gMeme.lines[i].y)
    if(i === gMeme.selectedLineIdx){
      drawRect(20, gMeme.lines[i].y-45 )
    }
  }
}

function delBtnEvent() {
  txtToCanvasEvent('');
  document.querySelector('.input-txt-box').value = '';
}

function changeFontSize(value) {
  if (value === 'increase') updateGMemeSize(gStep)
  else updateGMemeSize(-gStep);
  clearCanvas();
  drawTextFromGMeme();
}

function updateGMemeSize(step) {
  console.log(step);
  gMeme.lines[gMeme.selectedLineIdx].size += step;
}

function changeAlignment(align) {
  if (align === 'left') gMeme.lines[gMeme.selectedLineIdx].align = 'left'
  else if (align === 'right') gMeme.lines[gMeme.selectedLineIdx].align = 'right'
  else gMeme.lines[gMeme.selectedLineIdx].align = 'center'
  clearCanvas();
  drawTextFromGMeme();
}

function setFont(type) {
  gMeme.lines[gMeme.selectedLineIdx].font = type;
  clearCanvas();
  drawTextFromGMeme();
}

function drawRect(x, y) {
  gCtx.beginPath()
  gCtx.strokeStyle = 'black'
  gCtx.rect(x, y, gCanvas.width - (x * 2), 60) // x,y,widht,height
  gCtx.lineWidth = '1'
  gCtx.stroke()
  gCtx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  gCtx.fillRect(x, y, gCanvas.width - (x * 2), 60)
}

function addRow() {
  if (gMeme.lines.length > 2) {
    alert ('No more lines!')
    return;
  }
  var line = {
    x: 250,
    y: rowLocation[gMeme.lines.length],
    txt: 'hello',
    size: 44,
    font: 'Impact',
    align: 'center',
    color: 'white'
  };
  gMeme.lines.push(line);
  gMeme.selectedLineIdx=gMeme.lines.length-1;
  document.querySelector('.input-txt-box').value = '';
}

function changeRow() {
  gCurrRow=gMeme.selectedLineIdx;
  if (gCurrRow< gMeme.lines.length-1) gMeme.selectedLineIdx++;
  else gMeme.selectedLineIdx=0;
  clearCanvas();
  drawTextFromGMeme();
}

function onStrokeClick(){
  document.querySelector('.stroke-color').click()
}

function onFillClick(){
  document.querySelector('.fill-color').click()
}

function setStrokeColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
  clearCanvas();
  drawTextFromGMeme();
}

function setFillColor(fillColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = fillColor;
  clearCanvas();
  drawTextFromGMeme();
}