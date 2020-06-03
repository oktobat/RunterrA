$(".heros").slick({
    autoplay: true,                        // 자동재생, 기본값이 false로 설정
    autoplaySpeed: 2000,          // 간격시간
    dots: true,                               // 동그라미 버튼, 기본값이 false로 설정
    speed: 600,                            // 슬라이드 동작하는데 걸리는 시간(생략가능)
    slidesToShow: 1,                   // 보여지는 슬라이드 수(생략가능)
    slidesToScroll: 1,                   // 넘어가는 슬라이드 수(생략가능)
    pauseOnHover: true,          //  슬라이드 위에 마우스 over을할시 슬라이드 멈춤여부  false는 안멈춤(생략가능)
    pauseOnDotsHover: true,  //  동그라미 버튼 위에 마우스 over할시 멈춤여부(생략가능)
    pauseOnfocus: false,            // 동그라미 버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear',                  //  슬라이드 움직임에 대한 가속도 함수값(생략가능)
    draggable: true,                   //  마우스를 드래그했을때 움직임 여부(생략가능)
    fade: false,                            //  true값일시 제자리에서 fadein fadeout 효과가 적용됨(제자리에서 다른화면으로 변경됨)(생략가능)
    arrows: true,                         //  기본값은 true이며  슬라이드 좌우측 방향 버튼(생략가능)
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
})         

$(".heros .plpa").toggle(
    function(){
            $(".heros").slick("slickPause")
            $(this).find("i").removeClass("fa-pause").addClass("fa-play")
    },
    function(){
            $(".heros").slick("slickPlay")
            $(this).find("i").removeClass("fa-play").addClass("fa-pause")
    }
)