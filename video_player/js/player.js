document.addEventListener("DOMContentLoaded", function () {
    startplayer();
}, false);
var player;

function startplayer() {
    player = document.getElementById('video_player');
    player.controls = false;
}

function play_vid() {
    player.play();
}

function pause_vid() {
    player.pause();
}

function stop_vid() {
    player.pause();
    player.currentTime = 0;
}

function forward_vid() {
   
    player.currentTime += 10;
 }
 

 function backward_vid() {

    player.currentTime -= 10;
 }

function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}

function change_video(source) {
    player.src = source;
    play_vid();
  }

