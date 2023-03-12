
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate,1000));

function onTimeUpdate(data) {
    return localStorage.setItem('videoplayer-current-time',
    JSON.stringify(data))
}
currentTime();

function currentTime() {
    const objectData = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    if (objectData) {
       player.setCurrentTime(objectData.seconds); 
    }
}
 