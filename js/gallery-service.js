'use strict'

const STORAGE_KEY = "imgsDB";
const TEMP_STORAGE_KEY = "tempImgId"

var currId = 0;
var gImgs;

_createImgs()


function getImgsForDisplay() {
    return gImgs;
}


function _createImgs() {
    var imgs = loadFromStorage(STORAGE_KEY);
    if (!imgs || imgs.length === 0) {
        imgs = [
            {
                id: makeId(),
                imgUrl: 'img/1.jpg',
                keywords: ['pets', 'cat']
            },
            {
                id: makeId(),
                imgUrl: 'img/2.jpg',
                keywords: ['pets', 'puppies']
            },
            {
                id: makeId(),
                imgUrl: 'img/3.jpg',
                keywords: ['men', 'speaking']
            },
            {
                id: makeId(),
                imgUrl: 'img/4.jpg',
                keywords: ['men', 'smile']
            },
            {
                id: makeId(),
                imgUrl: 'img/5.jpg',
                keywords: ['pets', 'baby']
            },
            {
                id: makeId(),
                imgUrl: 'img/6.jpg',
                keywords: ['kids']
            },
            {
                id: makeId(),
                imgUrl: 'img/7.jpg',
                keywords: ['cat', 'computer']
            },
            {
                id: makeId(),
                imgUrl: 'img/8.jpg',
                keywords: ['men']
            },
            {
                id: makeId(),
                imgUrl: 'img/9.jpg',
                keywords: ['men', 'drink']
            },
            {
                id: makeId(),
                imgUrl: 'img/10.jpg',
                keywords: ['men', 'speaking']
            },
            {
                id: makeId(),
                imgUrl: 'img/11.jpg',
                keywords: ['cartoon', 'speaking']
            },
            {
                id: makeId(),
                imgUrl: 'img/12.jpg',
                keywords: ['animal', 'monkey']
            },
            

        ];

    }
    gImgs = imgs;
    _saveImgsToStorage()
}

function getUrlFromImgs(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img.imgUrl;
}

function _saveImgsToStorage() {
    saveToStorage(STORAGE_KEY, gImgs);
}

function savecCurrImgsToStorage(currImgId) {
    saveToStorage(TEMP_STORAGE_KEY, currImgId);
}

function makeId() {
    currId += 1;
    return currId;
}