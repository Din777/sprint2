'use strict'

function onInit() {
    renderImgs()
    // createCanvas()
};

// function renderImgs() {
//     var imgs = getImgsForDisplay();
//     var elGrid = document.querySelector('.grid-container');
//     imgs.forEach(function (img) {
//         elGrid.querySelector('img').data = img.id;
//         elGrid.querySelector('img').src = img.imgUrl;
//     });
// }


function renderImgs() {
    var imgs = getImgsForDisplay();
    var strHtmls = imgs.map(function (img) {
        return `
    <a href="canvas.html" class="hm-link" onclick="saveCurrEl(${img.id})"><img src="${img.imgUrl}" alt="" data="${img.id}" class="gallery-img"></a>
    `
    })
    console.log(strHtmls);
    document.querySelector('.grid-container').innerHTML = strHtmls.join('')
}


function saveCurrEl(currEl) {
   savecCurrImgsToStorage(currEl);
}
