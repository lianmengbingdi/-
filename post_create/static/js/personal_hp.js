function checkURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionId = urlParams.get('my_section');
    showSection(1);
    document.getElementById('name_change').textContent = document.getElementById('content1').textContent;
    document.getElementById('school_change').textContent = document.getElementById('content3').textContent;
}

function showSection(id) {
    for (let i = 1; i <= 4; i++) {             //隐藏所有section
        let section = document.getElementById('Section' + i);
        section.style.display = 'none';
    }
    let section = document.getElementById('Section' + id);//通过url参数显示section
    section.style.display = 'block';
    window.history.pushState({}, '', '?my_section=' + id);   //更新url参数
}

function showInput(button, i) {
    var input = document.getElementById("input" + i);
    var content = document.getElementById("content" + i);

    // 显示输入框和表单
    input.style.display = "inline-block";
    content.style.display = "none";

    // 隐藏编辑按钮
    button.style.display = "none";

}

function check_update(i) {
    var input_field = document.getElementById("inputField" + i);
    var form = document.getElementById("form" + i);
    if (input_field.value.trim() === '') {
        alert("输入不能为空！");
    } else {
        form.submit();
    }
    var input = document.getElementById("input" + i);
    var content = document.getElementById("content" + i);
    var button = document.getElementById("b" + i);
    button.style.display = "";
    input.style.display = "";
    content.style.display = "";
}


function feedback() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var label_option = document.getElementById('label_option')
    popup.style.display = 'block';
    overlay.style.display = 'block';
    label_option.style.display = 'block';
}

function check_feedback() {
    var feed_back = document.getElementById('feed_back');
    var feedback_submit_button = document.getElementById('feedback_submit_button');
    if (feed_back.value.trim() === '') {
        alert("反馈内容不能为空！");
        feedback_submit_button.disabled = true;
    } else {
        alert("提交成功");
        feedback_submit_button.disabled = false;
        window.location.href = '/';
    }
}

function enable_submit_button() {
    var feedback_submit_button = document.getElementById('feedback_submit_button');
    feedback_submit_button.disabled = false;
}

function back_to_this_URL() {
    var urlParams = new URLSearchParams(window.location.search);
    var section_id = urlParams.get('my_section');
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var label_option = document.getElementById('label_option')
    popup.style.display = 'none';
    overlay.style.display = 'none';
    label_option.style.display = 'none';
    window.history.pushState({}, '', '?my_section=' + section_id);
}


function user_profile() {
    var popup = document.getElementById('popup1');
    var overlay = document.getElementById('overlay1');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function back_to_this_URL_image() {
    var urlParams = new URLSearchParams(window.location.search);
    var section_id = urlParams.get('my_section');
    var popup = document.getElementById('popup1');
    var overlay = document.getElementById('overlay1');
    popup.style.display = 'none';
    overlay.style.display = 'none';
    label_option.style.display = 'none';
    window.history.pushState({}, '', '?my_section=' + section_id);
}

var if_error = document.getElementById('error_info')
if (if_error != null) {
    alert('用户已存在！')
}