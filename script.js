// script.js

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

function nextPage(){
    page1.classList.remove("active");
    page2.classList.add("active");
}

function prevPage(){
    page2.classList.remove("active");
    page1.classList.add("active");
}

/* MUSIC */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if(music.paused){
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    }
    else{
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

});

/* STOP MUSIC AT 3:22 */
music.addEventListener("timeupdate", () => {

    if(music.currentTime >= 202){
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

});

/* COUNTDOWN */

const countdown = document.getElementById("countdown");

/* SET HER BIRTHDAY */

const birthday = new Date("May 21, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = birthday - now;

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    if(distance > 0){
        countdown.innerHTML =
          `🎂 Birthday in ${hours}h ${minutes}m ${seconds}s`;
    }
    else{
        countdown.innerHTML =
          "🎉 It's Shuchi's Birthday Today!";
    }

},1000);
/* SIMPLE FIREWORKS */

const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min,max){
    return Math.random() * (max-min) + min;
}

function createFirework(){

    const x = random(0, canvas.width);
    const y = random(0, canvas.height/2);

    for(let i=0;i<50;i++){

        ctx.beginPath();

        ctx.arc(
            x + random(-80,80),
            y + random(-80,80),
            2,
            0,
            Math.PI*2
        );

        ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;

        ctx.fill();
    }

}

setInterval(() => {
    createFirework();
},1500);