// 获取所有的星星元素
const stars_1 = document.querySelectorAll(".rc-rate-item-1");

// 记录当前选中的星星数
let selectedStar_1 = 0;
let mousePos_move_1 = 0;
let mousePos_save_1 = 0;
let star_1 = 0;
// 添加鼠标移入事件
stars_1.forEach((star) => {
  star.addEventListener("mouseenter", handleEnter);

  function handleEnter(e) {
    mousePos_move_1 = e.offsetX;

    star.addEventListener("mousemove", handleMove);
  }

  function handleMove(e) {
    mousePos_move_1 = e.offsetX;

    if (mousePos_move_1 < star.offsetWidth / 2) {
      highlight(stars_1, getIndex(e.target));
      half_highlight(stars_1, getIndex(e.target));
    } else {
      highlight(stars_1, getIndex(e.target) + 1);
    }
  }
});

// 添加点击事件
stars_1.forEach((star) => {
  star.addEventListener("click", (e) => {
    mousePos_save_1 = e.offsetX;
    selectedStar_1 = getIndex(e.target) + 1;
    if (mousePos_save_1 < star.offsetWidth / 2) {
      highlight(stars_1, selectedStar_1 - 1);
      half_highlight(stars_1, selectedStar_1 - 1);
      star_1 = selectedStar_1 - 0.5;
    } else {
      highlight(stars_1, selectedStar_1);
      star_1 = selectedStar_1;
    }
    const star_1_field = document.getElementById("star_1_field");
    star_1_field.value = selectedStar_1; // 设置所选星级评分的值
  });
});

// 添加鼠标移开事件
stars_1.forEach((star) => {
  star.addEventListener("mouseleave", () => {
    if (mousePos_save_1 < star.offsetWidth / 2) {
      highlight(stars_1, selectedStar_1 - 1);
      half_highlight(stars_1, selectedStar_1 - 1);
    } else highlight(stars_1, selectedStar_1);
  });
});

// 高亮星星
function highlight(stars_1, selectedStar_1) {
  stars_1.forEach((star, index) => {
    star.classList.remove("rc-rate-score-half", "rc-rate-score-full");
    if (index < selectedStar_1) {
      star.classList.add("rc-rate-score-full");
    }
  });
}
function half_highlight(stars_1, index) {
  // 获取选中星星
  const star = stars_1[index];
  star.classList.add("rc-rate-score-half");
}

// 获取星星索引
function getIndex(el) {
  return [...el.parentElement.children].indexOf(el);
}
