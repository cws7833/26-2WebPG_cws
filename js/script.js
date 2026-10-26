let AfterAnimation = false;
let WinWidth = $(window).width();
let WinHeight = $(window).height();

$(".space-bg").css("width", WinWidth);
$(".space-bg").css("height", WinHeight);

$(document).mousemove(function (event) {
  let mousex = event.pageX;
  let mousey = event.pageY;

  // 클릭 이동이 끝난 뒤 마우스 위치에 따라 각 이미지를 움직입니다.
  if (AfterAnimation == true) {
    // 클릭 이동의 마지막 위치를 기준으로 이미지 내부 위치를 조절합니다.
    $(".space-bg").css(
      "object-position",
      `calc(50% - 1100px + 70vw - ${(mousex - WinWidth / 2) / 80}px) calc(50% + 350px - ${(mousey - WinHeight / 2) / 80}px)`,
    );

    $(".black-hole").css(
      "right",
      `calc(-40% + ${(mousex - WinWidth / 2) / 40}px)`,
    );
    $(".black-hole").css(
      "top",
      `calc(-300px - ${(mousey - WinHeight / 2) / 40}px)`,
    );

    $(".spaceship").css(
      "left",
      `calc(18.7% - ${(mousex - WinWidth / 2) / 20}px)`,
    );
    $(".spaceship").css(
      "top",
      `calc(50.5% - ${(mousey - WinHeight / 2) / 20}px)`,
    );
  }
});

// 한 번 클릭하면 기존 이동을 시작합니다.
$(document).on("click", function () {
  if (AfterAnimation == false) {
    $("body").addClass("active");

    // 기존의 4초 대기를 유지합니다.
    setTimeout(function () {
      $("body").addClass("mouse-ready");
      AfterAnimation = true;
    }, 4000);
  }
});

//인터스텔라에 마우스 올리면 설명 텍스트가 보이도록 함.
$(".TitleText").on("mouseenter", function () {
  $(".contentText").addClass("visible");
});

$(".TitleText").on("mouseleave", function () {
  $(".contentText").removeClass("visible");
});
