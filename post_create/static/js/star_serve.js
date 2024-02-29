// 获取所有的星星元素
const stars_4 = document.querySelectorAll(".rc-rate-item-4");

// 记录当前选中的星星数
let selectedStar_4 = 0;
let mousePos_move_4 = 0;
let mousePos_save_4 = 0;
let star_4 = 0;
// 添加鼠标移入事件
stars_4.forEach((star) => {
  star.addEventListener("mouseenter", handleEnter);

  function handleEnter(e) {
    mousePos_move_4 = e.offsetX;

    star.addEventListener("mousemove", handleMove);
  }

  function handleMove(e) {
    mousePos_move_4 = e.offsetX;

    if (mousePos_move_4 < star.offsetWidth / 2) {
      highlight(stars_4, getIndex(e.target));
      half_highlight(stars_4, getIndex(e.target));
    } else {
      highlight(stars_4, getIndex(e.target) + 1);
    }
  }
});

// 添加点击事件
stars_4.forEach((star) => {
  star.addEventListener("click", (e) => {
    mousePos_save_4 = e.offsetX;
    selectedStar_4 = getIndex(e.target) + 1;
    if (mousePos_save_4 < star.offsetWidth / 2) {
      highlight(stars_4, selectedStar_4 - 1);
      half_highlight(stars_4, selectedStar_4 - 1);
      star_4 = selectedStar_4 - 0.5;
    } else {
      highlight(stars_4, selectedStar_4);
      star_4 = selectedStar_4;
    }
    const star_4_field = document.getElementById("star_4_field");
    star_4_field.value = selectedStar_4; // 设置所选星级评分的值
  });
});

// 添加鼠标移开事件
stars_4.forEach((star) => {
  star.addEventListener("mouseleave", () => {
    if (mousePos_save_4 < star.offsetWidth / 2) {
      highlight(stars_4, selectedStar_4 - 1);
      half_highlight(stars_4, selectedStar_4 - 1);
    } else highlight(stars_4, selectedStar_4);
  });
});

// 高亮星星
function highlight(stars_4, selectedStar_4) {
  stars_4.forEach((star, index) => {
    star.classList.remove("rc-rate-score-half", "rc-rate-score-full");
    if (index < selectedStar_4) {
      star.classList.add("rc-rate-score-full");
    }
  });
}
function half_highlight(stars_4, index) {
  // 获取选中星星
  const star = stars_4[index];
  star.classList.add("rc-rate-score-half");
}

// 获取星星索引
function getIndex(el) {
  return [...el.parentElement.children].indexOf(el);
}
