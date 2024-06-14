//Cadmiel Torres de Lima

var audio = document.getElementById('audio');
var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var stopButton = document.getElementById('stop');

playButton.addEventListener('click', function () {
    audio.play();
});

pauseButton.addEventListener('click', function () {
    audio.pause();
});

stopButton.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
});
