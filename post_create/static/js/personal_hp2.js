function checkURL() {
    const urlParams = new URLSearchParams(window.location.search);
    let sectionId = urlParams.get('others_section');
    showSection(1);
    document.getElementById('name_change').textContent = document.getElementById('content1').textContent;
    document.getElementById('school_change').textContent = document.getElementById('content2').textContent;
}


function showSection(id) {
    for (let i = 1; i <= 4; i++) {             //隐藏所有section
        let section = document.getElementById('Section' + i);
        section.style.display = 'none';
    }
    let section = document.getElementById('Section' + id);//通过url参数显示section
    section.style.display = 'block';
    window.history.pushState({}, '', '?others_section=' + id);   //更新url参数
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
    }
}

function enable_submit_button() {
    var feedback_submit_button = document.getElementById('feedback_submit_button');
    feedback_submit_button.disabled = false;
}

function back_to_this_URL() {
    var urlParams = new URLSearchParams(window.location.search);
    var section_id = urlParams.get('others_section');
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var label_option = document.getElementById('label_option')
    popup.style.display = 'none';
    overlay.style.display = 'none';
    label_option.style.display = 'none';
    window.history.pushState({}, '', '?others_section=' + section_id);
}