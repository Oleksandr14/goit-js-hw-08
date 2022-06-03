import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

// import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";
const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
    player.setCurrentTime(savedTime);
};

const onPlay = function(e) {
    const currentTime = e.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime);
   
};

player.on('timeupdate', throttle(onPlay, 1000));

