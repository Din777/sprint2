'use strict'

const STORAGE_KEY = "imgsDB";

var currId = 0;
var gImgs;

_createImgs()




function getImgsForDisplay() {
    return gImgs;
}

// function _createImg(name) {
//     return {
//         id: makeId(),
//         imgUrl: '',
//         keywords: []
//     }
// }


function _createImgs() {
    var imgs = loadFromStorage(STORAGE_KEY);
    if (!imgs || imgs.length === 0) {
        imgs = [
            {
                id: makeId(),
                imgUrl: 'img/1.jpg',
                keywords: ['men']
            },
            {
                id: makeId(),
                imgUrl: 'img/2.jpg',
                keywords: ['pets', 'puppies']
            },
        ];

    }
    gImgs = imgs;
    _saveImgsToStorage()
}

function _saveImgsToStorage() {
    saveToStorage(STORAGE_KEY, gImgs);
}

function makeId() {
    currId += 1;
    return currId;
}