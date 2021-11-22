function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}


function enableScroll() {
  window.onscroll = function () { }
}
$(window).scroll(function () {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  value = (scroll / (dh - wh)) * 100;
  $("#wrapper").css("left", -value * 8 + "%");
  if ((value * 8) >= 750) {
    character.style.display = "none";
    characterStop.style.display = "none";
    characterFall.style.display = "block";
    setTimeout(end, 2600);
  }
});
function end() {
  characterFall.style.display = "none";
  characterEnd.style.display = "block";
}
window.onscroll = function () {
  let scrollY = window.scrollY;
  let viewHeight = window.innerHeight;
  document.body.style.setProperty("--scrollY", scrollY);

};


