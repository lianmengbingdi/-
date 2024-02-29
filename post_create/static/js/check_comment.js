function check_star_overall() {
  if (selectedStar_1 == 0) {
    return false;
  }
  return true;
}
function check_star_taste() {
  if (selectedStar_2 == 0) {
    return false;
  }
  return true;
}
function check_star_environment() {
  if (selectedStar_3 == 0) {
    return false;
  }
  return true;
}

function check_star_serve() {
  if (selectedStar_4 == 0) {
    return false;
  }
  return true;
}
function check_star_price() {
  if (selectedStar_5 == 0) {
    return false;
  }
  return true;
}

const comment = document.querySelector(".comment-text-area");
function checkComment() {
  if (comment.value.length < 15 || comment.value.length > 2000) {
    return false;
  }
  return true;
}
// 提交按钮
const submitBtn = document.querySelector(".btn-2");
// 提交点击事件
submitBtn.addEventListener("click", (e) => {
  if (!check_star_overall()) {
    alert("请给出总体评价");
    e.preventDefault();
  } else if (!check_star_taste()) {
    alert("请给出口味评价");
    e.preventDefault();
  } else if (!check_star_environment()) {
    alert("请给出环境评价");
    e.preventDefault();
  } else if (!check_star_serve()) {
    alert("请给出服务评价");
    e.preventDefault();
  } else if (!check_star_price()) {
    alert("请给出性价比评价");
    e.preventDefault();
  } else if (!checkComment()) {
    alert("评论字数不符合标准");
    e.preventDefault();
  } else {
    alert("提交成功");
  }
});
