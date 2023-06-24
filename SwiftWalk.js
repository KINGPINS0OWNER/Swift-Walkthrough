var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
  var blurryImages = document.querySelectorAll('.blurry-img');

  blurryImages.forEach(function(image) {
    image.addEventListener('click', function() {
      this.classList.toggle('clicked');
    });
  });
});

// script.js

var video = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");
var playIcon = document.getElementById("playIcon");
var fullscreenBtn = document.getElementById("fullscreenBtn");
var fullscreenIcon = document.getElementById("fullscreenIcon");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
  } else {
    video.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
  }
}

function toggleFullscreen() {
  if (video.requestFullscreen) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      fullscreenIcon.classList.remove("fa-compress");
      fullscreenIcon.classList.add("fa-expand");
    } else {
      video.requestFullscreen();
      fullscreenIcon.classList.remove("fa-expand");
      fullscreenIcon.classList.add("fa-compress");
    }
  } else if (video.mozRequestFullScreen) {
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
      fullscreenIcon.classList.remove("fa-compress");
      fullscreenIcon.classList.add("fa-expand");
    } else {
      video.mozRequestFullScreen();
      fullscreenIcon.classList.remove("fa-expand");
      fullscreenIcon.classList.add("fa-compress");
    }
  } else if (video.webkitRequestFullscreen) {
    if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
      fullscreenIcon.classList.remove("fa-compress");
      fullscreenIcon.classList.add("fa-expand");
    } else {
      video.webkitRequestFullscreen();
      fullscreenIcon.classList.remove("fa-expand");
      fullscreenIcon.classList.add("fa-compress");
    }
  } else if (video.msRequestFullscreen) {
    if (document.msFullscreenElement) {
      document.msExitFullscreen();
      fullscreenIcon.classList.remove("fa-compress");
      fullscreenIcon.classList.add("fa-expand");
    } else {
      video.msRequestFullscreen();
      fullscreenIcon.classList.remove("fa-expand");
      fullscreenIcon.classList.add("fa-compress");
    }
  }
}
