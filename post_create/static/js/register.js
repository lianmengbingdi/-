// function showError(message) {
//     document.getElementById("messBox").style.display = "block";
//     $("#errorMess").html(message);//修改span标签内容
//     setTimeout("hidden()", 2000);
// }
function hidden() {
        document.getElementById("messBox").style.display="none";
}

$(document).ready(function(){
// document.getElementById('send_email').addEventListener('click', function() {
$('#sendEmail').click(function (){
        //console.log('press');
        //event.preventDefault();
        //window.open('https://www.example.com');
        //获取email
        // var emailinput= document.getElementsByid('email');
        var emailadd = document.getElementById('email').value
        //alert(emailadd);
        // var data{
        //     // 'type' : 'sendmessage',
        //     email: 'test@test' };
        $.ajax({
            url: '/register/send_email/',  // 替换为你的视图URL
            type: 'POST',
            data: {
                type : "sendMessage",
                email : emailadd,
            },  // 将要发送的数据，可以根据需要修改
            datatype :"json",
            success: function (reg_check){
                 alert("已发送");
             }

        },
        );
    })
    })

    function register(){
        location.href='register/save/';
        window.location.href = 'https://www.example.com';
    }