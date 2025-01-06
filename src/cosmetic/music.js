window.onload = () => {
    const button = document.querySelector("#music-toggle");
    const image = document.querySelector("#music-toggle img");
    const music = document.querySelector("#now-playing");

    let isAllowed = false;

    if (button != null) {
        button.addEventListener("click",() => {
            if (music.paused) {
                music.play();
                image.src = "src/assets/ui-sound-on.png";
                image.alt = "Music On";
                isAllowed = true;
            } else {
                music.pause();
                image.src = "src/assets/ui-sound-off.png";
                image.alt = "Music Off";
                isAllowed = false;
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


function musicChangePath(path) {
    const audioSrc = document.querySelector("#now-playing source");
    const audio = document.querySelector("#now-playing");

    if (audioSrc != null) {
        audioSrc.src = path;
        audio.load();
        audio.play();
    }
}