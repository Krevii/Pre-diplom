let tempalteEmail = /\w{1,}@\w{1,}\.\w{1,}/i;
let tempalteInput = /.{1,}/i;
let tempaltePass = /.{8,}/i;

$("input[type = 'submit']").click(function (e) { 

    if (!tempalteInput.test($("input[name = 'first-name']").val())){
        verifyTextName("first name");
    }
    else if (!tempalteInput.test($("input[name = 'last-name']").val())){
        verifyTextName("last name");
    }
    else if (!tempalteEmail.test($("#text-input").val())) {
        verifyTextName("E-mail");
    }
    else if (!tempaltePass.test($("input[name='password']").val())) {
        verifyTextName("password");
    }
    else{
        $("#verify-lable").html("");
        alert("Вы зарегистрированы")
    }
    e.preventDefault();
});

function verifyTextName(name) {
    $("#verify-lable").addClass("verify-lable-active");
    $("#verify-lable").html(`Please verify your ${name} and try again`);
    $("#verify-lable").on("animationend", function(){
        $("#verify-lable").removeClass("verify-lable-active");
    })
}

