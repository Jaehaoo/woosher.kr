// 모달 팝업 열기
$("#port>ul>li").click(function(){
    $("#port .blind").fadeIn();
    $(this).addClass("on");
});

// 모달 팝업 닫기
$(".blind").click(function(){
    $(this).hide();
    $(this).next().children(".on").removeClass("on");
});

