// $(function(){
//     // $("#header").load("D:\work\webreate\header.html");

//     $("#header").load("../../header.html");
//     $("#footer").load("../../footer.html");
//     $("#insta-area").load("../../social-media-sec.html");

// });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("stickynav").style.top = "0";
  } else {
    document.getElementById("stickynav").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}