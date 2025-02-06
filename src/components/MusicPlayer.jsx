import {
    musicChangePath,
    musicIsPaused,
    musicPause,
    musicPlay,
    musicGetSource, musicChangePos
} from "../../public/scripts/music.js";

export default function MusicPlayer({musicPath,musicTitle,musicId}) {
    return (
        <>
            <label>{musicTitle}</label>
            <button onClick={() => buttonClick(musicPath,musicId)}>Play</button>
            <input id={"mus-"+musicId} type={"range"} min={0} max={1} value={0} onChange={() => {seek(this.value)}} />
        </>
    );
}

function buttonClick(musicPath,musicId) {
    if (musicGetSource() === musicPath) {
        if (musicIsPaused()) {
            musicPlay();
        } else {
            musicPause()
        }
    } else {
        musicChangePath(musicPath);
    }
}

function seek(position) {
    musicChangePos(position);
}