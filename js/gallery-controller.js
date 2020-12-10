'use strict'

function onInit() {
    renderImgs()
    // createCanvas()
};

function renderImgs() {
    var imgs = getImgsForDisplay();
    console.log('var imgs', imgs);
    var elGrid = document.querySelector('.grid-container');
    console.log('elGrid', elGrid);
    imgs.forEach(function (img) {
        console.log('img', img);
        console.log('img.imgUrl:', img.imgUrl);
        elGrid.querySelector('img').src = img.imgUrl;
    });
}

function renderCanvas(elImg) {
    console.log('elImg:', elImg);
    console.log('elImg.src', elImg.src);

}