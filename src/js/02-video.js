
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate,1000));

function onTimeUpdate(data) {
    return localStorage.setItem('videoplayer-current-time',
    JSON.stringify(data))
}
  
const objectData = JSON.parse(localStorage.getItem('videoplayer-current-time'));
 
player.setCurrentTime(objectData.seconds);
 
 // player.on('play', function () {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
//     const onPlay = function(data) {
     
// };

// player.on('play', onPlay);