$(window).scroll(function(){
    var t = $(this).scrollTop();
    for(var i=0;i<$(".v_section").length;i++){
        let h = $("#video_fix video, #video_fix img").eq(i).offset().top; // video 탑값
        let mask_h = $(".v_section").eq(i).offset().top-h;
        if(mask_h<400) {
            $("#video_fix>div").eq(i).height(mask_h);
        } else {
            $("#video_fix>div").eq(i).height(400);
        }
    };
});