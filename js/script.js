console.log("script");
console.log($(window).width());
console.log($(window).height());

let WinWidth = $(window).width();
let WinHeight = $(window).height();

$(document).mousemove(function (event) {
  let mousex = event.pageX;
  let mousey = event.pageY;

  $(".bg_img").css("object-position", `${mousex / 10}% ${mousey / 10}%`);

  let imgWidth = $(".cat_img").width() / 2;
  let imgHeight = $(".cat_img").height() / 2;

  $(".cat_img").css("top", mousey - imgHeight + "px");
  $(".cat_img").css("left", mousex - imgWidth + "px");

  //   $("#status").html(e.pageX + "," + e.pageY);
  //   $(".box").css("width", e.pageX);
  //   $(".box").css("height", e.pageY);
});
