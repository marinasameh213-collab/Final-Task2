"use strict"
function showGame1(){
    alert("🎮 xploring: Assassin's Creed\n Genre: Acion🔥");
}

function showGame2(){
    alert("🎮 xploring: Cyberpunk 2077\n Genre: Open World🔥");
}

function showGame3(){
    alert("🎮 xploring: God of War\n Genre: Adventure🔥");
}

function showGame4(){
    alert("🎮 xploring: Elden Ring\nGenre: Fantasy🔥");
}

function showGame5(){
    alert("🎮 xploring:Halo Infinite \nGenre: Shooter🔥");
}

function showGame6(){
    alert("🎮 xploring:The Witcher3 \nGenre: RPG🔥");
}

function Viewall1(){
    alert("🚀 Loading all Most Played games… (Feature coming soon!)")
}

function Viewall2(){
    alert("🚀 Loading all Most Played games… (Feature coming soon!)")
}



let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

let popup = document.getElementById("popup");
let headcontainer = document.getElementById("headcontainer");

openBtn.onclick = function(){
    popup.style.display = "flex";
   headcontainer.classList.add("blur");
}

closeBtn.onclick = function(){
    popup.style.display = "none";
    headcontainer.classList.remove("blur");
}