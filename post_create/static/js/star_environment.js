// 获取所有的星星元素
const stars_3 = document.querySelectorAll(".rc-rate-item-3");

// 记录当前选中的星星数
let selectedStar_3 = 0;
let mousePos_move_3 = 0;
let mousePos_save_3 = 0;
let star_3 = 0;
// 添加鼠标移入事件
stars_3.forEach((star) => {
  star.addEventListener("mouseenter", handleEnter);

  function handleEnter(e) {
    mousePos_move_3 = e.offsetX;

    star.addEventListener("mousemove", handleMove);
  }

  function handleMove(e) {
    mousePos_move_3 = e.offsetX;

    if (mousePos_move_3 < star.offsetWidth / 2) {
      highlight(stars_3, getIndex(e.target));
      half_highlight(stars_3, getIndex(e.target));
    } else {
      highlight(stars_3, getIndex(e.target) + 1);
    }
  }
});

// 添加点击事件
stars_3.forEach((star) => {
  star.addEventListener("click", (e) => {
    mousePos_save_3 = e.offsetX;
    selectedStar_3 = getIndex(e.target) + 1;
    if (mousePos_save_3 < star.offsetWidth / 2) {
      highlight(stars_3, selectedStar_3 - 1);
      half_highlight(stars_3, selectedStar_3 - 1);
      star_3 = selectedStar_3 - 0.5;
      // alert("您选择了" + star_3 + "颗星");
    } else {
      highlight(stars_3, selectedStar_3);
      star_3 = selectedStar_3;
      // alert("您选择了" + star_3 + "颗星");
    }
    const star_3_field = document.getElementById("star_3_field");
    star_3_field.value = selectedStar_3; // 设置所选星级评分的值
  });
});

// 添加鼠标移开事件
stars_3.forEach((star) => {
  star.addEventListener("mouseleave", () => {
    if (mousePos_save_3 < star.offsetWidth / 2) {
      highlight(stars_3, selectedStar_3 - 1);
      half_highlight(stars_3, selectedStar_3 - 1);
    } else highlight(stars_3, selectedStar_3);
  });
});

// 高亮星星
function highlight(stars_3, selectedStar_3) {
  stars_3.forEach((star, index) => {
    star.classList.remove("rc-rate-score-half", "rc-rate-score-full");
    if (index < selectedStar_3) {
      star.classList.add("rc-rate-score-full");
    }
  });
}
function half_highlight(stars_3, index) {
  // 获取选中星星
  const star = stars_3[index];
  star.classList.add("rc-rate-score-half");
}

// 获取星星索引
function getIndex(el) {
  return [...el.parentElement.children].indexOf(el);
}
