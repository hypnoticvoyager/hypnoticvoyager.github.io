export const button = document.querySelector("#music-toggle");
export const image = document.querySelector("#music-toggle img");
export const music = document.querySelector("#now-playing");
export const audioSrc = document.querySelector("#now-playing source");

let isAllowed = false;

window.onload = () => {
    if (button != null) {
        button.addEventListener("click",() => {
            if (music.paused) {
                musicPlay();
            } else {
                musicPause();
            }
        });
    }

    window.onblur = () => {
        if (isAllowed) { music.pause(); }
    }
    window.onfocus = () => {
        if (isAllowed) { music.play() }
    }
}


export function musicChangePath(path) {
    if (audioSrc != null) {
        audioSrc.src = path;
        music.load();
        music.play();
    }
}

export function musicPlay() {
    music.play();
    image.src = "/assets/ui-sound-on.png";
    image.alt = "Music On";
    isAllowed = true;
}

export function musicPause() {
    music.pause();
    image.src = "/assets/ui-sound-off.png";
    image.alt = "Music Off";
    isAllowed = false;
}

export function musicIsPaused() {
    return music.paused;
}

export function musicGetSource() {
    return audioSrc.src;
}

export function musicChangePos(percent) {
    music.currentTime=percent * music.duration;
}