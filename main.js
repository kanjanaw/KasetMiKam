function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function() {};
}

$(window).scroll(function(){
  var scroll = $(window).scrollTop(),
  dh = $(document).height(),
  wh = $(window).height();
  value = (scroll / (dh - wh)) * 100;

  $('#wrapper').css('left', - value * 3 + '%');
})

function isSmash(obj1,obj2){
  // var o1 = document.getElementById("one");
  var rect1= obj1.getBoundingClientRect();
  var smash1x = rect1.right;
  var size = rect1.width;
  // var o2 = document.getElementById("two");
  var rect2= obj2.getBoundingClientRect();
  var smash2x = rect2.right;
  // document.querySelector("#xxx").innerHTML = smash1x;
  // document.querySelector("#yyy").innerHTML = smash2x;
  if ((size+smash1x)>=smash2x&&smash2x>=smash1x-size){
    return 1;
  }
  else{
    return 0;
  }
}


window.onscroll = function () {
  let scrollY = window.scrollY;
  let viewHeight = window.innerHeight;
  document.body.style.setProperty('--scrollY', scrollY);
  let o1 = document.querySelector("#farmer");
  let o2 = document.querySelector("#sign"); 
  let o3 = document.querySelector("#gov");
  let o4 = document.querySelector("#private");
  let o5 = document.getElementById("jaonee");

/*  let o6 = document.getElementById("chemi");
  let o7 = document.getElementById("naitoon"); */
  if(isSmash(o1,o2) == 1){
      document.querySelector("#yyy").innerText = " Sign";
      disableScroll();
  }
  else if(isSmash(o1,o3) == 1){
      document.querySelector("#yyy").innerText = " Gov";
      disableScroll();
  }
  else if(isSmash(o1,o4) == 1){
      document.querySelector("#yyy").innerText = " Private";
      disableScroll();
  }
  
  else if(isSmash(o1,o5)==1){
      document.querySelector("#yyy").innerText = " Jaonee";
      disableScroll();
  }
  /*
  else if(isSmash(o1,o6)==1){
      document.querySelector("#yyy").innerText = " Chemi";
  }
  else if(isSmash(o1,o7)==1){
      document.querySelector("#yyy").innerText = " Naitoon";
  } */
  else{
    document.querySelector("#yyy").innerText = " - ";
  }
  
}

