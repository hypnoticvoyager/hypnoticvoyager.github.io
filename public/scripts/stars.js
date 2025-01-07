let sWidth = window.innerWidth;
let sHeight = window.innerHeight;
const starImg = new Image();
const fps = 120;

const starSize = 32;
const starEnterTime = 0.25; // how many seconds to enter?
const starLeaveTime = 0.25; // how many seconds to leave?
const starFreq = 32;
const enableDrift = true;
const driftX = -16;
const driftY = -8;

class Star {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.enter = true;
        this.enterPercent = 0;
    }
}

function addStar() {
    let x = (Math.random()*sWidth);
    let y = (Math.random()*sHeight);
    stars.push(new Star(x,y));
}

const stars = [];

function init() {
    starImg.src = "/assets/star.png";

    window.requestAnimationFrame(draw);
    const updateInterval = window.setInterval(update,1000/fps)
    const addInterval = window.setInterval(add,1000/starFreq);
}

addEventListener("resize", (event) => {
    sWidth = window.innerWidth;
    sHeight = window.innerHeight;
});

function draw() {
    const c = document.getElementById("starryBg");
    const ctx = c.getContext("2d");

    c.width = sWidth;
    c.height = sHeight;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0,0,sWidth,sHeight);

    ctx.save();

    ctx.beginPath();
    ctx.rect(0,0,sWidth,sHeight);
    ctx.fill();

    ctx.save();

    for (let i = 0; i < stars.length; i++) {
        let enter = stars[i].enter;
        let enterPerc = stars[i].enterPercent;
        let x = stars[i].x-((starSize*enterPerc)/2);
        let y = stars[i].y-((starSize*enterPerc)/2);

        ctx.drawImage(starImg,x,y,starSize*enterPerc,starSize*enterPerc);
    }

    ctx.save();
    window.requestAnimationFrame(draw);
}

function update() {
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].enter) {
            stars[i].enterPercent += (1/starEnterTime)/fps;
            if (stars[i].enterPercent >= 1) {
                stars[i].enter = false;
            }
        } else {
            stars[i].enterPercent -= (1/starLeaveTime)/fps;
            if (stars[i].enterPercent <= 0) {
                stars[i].enter = false;
                stars.splice(i,1)
            }
        }

        if (enableDrift) {
            stars[i].x += (driftX/fps);
            stars[i].y += (driftY/fps);

        }
    }
}

function add() {
    addStar();
}

init();





