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
