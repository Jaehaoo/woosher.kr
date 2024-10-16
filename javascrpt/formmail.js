// 구글 폼메일 보내기
$("#send_bt").click(function(){
    var name = $("#user_name").val().length;
    var subject = $("#subject").val().length;
    var msg = $("#msg").val().length;
    if(name < 2) {
        $("#user_name").addClass("alert").focus();
    }else if (subject < 2) {
        $("#subject").addClass("alert").focus();} else if(msg < 5) {
        $("#msg").addClass("alert").focus();
    } else {
        email();
    }       
});
function email() {
    var param = {
        title:$("#subject").val(),
        name:$("#user_name").val(),
        content: $("#msg").val()
    } // json 데이터타입
    //alert(param);
    console.log(param);
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzLbmgYsYp4qIDnh0ImtRSKtr76S2lIVeaAYsY4nQaKQspE_jI03oqJRLU2ALkAETzr/exec",
        type:"POST",
        async: true,
        data: param,
        dataType : "JSON",
        success: function(data) {
            if(data.result == "success") {
                alert("메일 전송이 완료 되었습니다.")
                $("#contact input").val("");
                $("#contact textarea").val("");
            }
            //console.log(data);
        }
    });
}
