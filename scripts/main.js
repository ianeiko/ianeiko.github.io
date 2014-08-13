'use strict';
window.onload = function(){
    var gifs = document.getElementsByClassName('gif-screenshot');
    var playGif = function(){
        this.src = this.src.replace(/\.[^\.]+$/, '.gif');
    };
    var pauseGif = function(){
        this.src = this.src.replace(/\.[^\.]+$/, '.png');
    };
    for (var i = 0; i < gifs.length; i++) {
        gifs[i].addEventListener('mouseover', playGif);
        gifs[i].addEventListener('mouseout', pauseGif);
    }
};