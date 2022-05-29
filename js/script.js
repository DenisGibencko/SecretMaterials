"use strict"

let audio = document.querySelector(".nokia");
let activeFace = document.querySelector(".active");
let unactiveFace = document.querySelector(".unactive");
let body = document.querySelector("body");

unactiveFace.addEventListener("click", function(e){
    activeFace.style.display = "block";
    unactiveFace.style.display = "none";
    audio.play();
    body.style.backgroundImage = 'url("img/bg.gif")';
})

activeFace.addEventListener("click", function(e){
    activeFace.style.display = "none";
    unactiveFace.style.display = "block";
    audio.currentTime = 0;
    audio.pause();
    body.style.backgroundImage = 'none';
})