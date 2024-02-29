// 获取所有的星星元素
const stars_5 = document.querySelectorAll(".rc-rate-item-5");

// 记录当前选中的星星数
let selectedStar_5 = 0;
let mousePos_move_5 = 0;
let mousePos_save_5 = 0;
let star_5 = 0;
// 添加鼠标移入事件
stars_5.forEach((star) => {
  star.addEventListener("mouseenter", handleEnter);

  function handleEnter(e) {
    mousePos_move_5 = e.offsetX;

    star.addEventListener("mousemove", handleMove);
  }

  function handleMove(e) {
    mousePos_move_5 = e.offsetX;

    if (mousePos_move_5 < star.offsetWidth / 2) {
      highlight(stars_5, getIndex(e.target));
      half_highlight(stars_5, getIndex(e.target));
    } else {
      highlight(stars_5, getIndex(e.target) + 1);
    }
  }
});

// 添加点击事件
stars_5.forEach((star) => {
  star.addEventListener("click", (e) => {
    mousePos_save_5 = e.offsetX;
    selectedStar_5 = getIndex(e.target) + 1;
    if (mousePos_save_5 < star.offsetWidth / 2) {
      highlight(stars_5, selectedStar_5 - 1);
      half_highlight(stars_5, selectedStar_5 - 1);
      star_5 = selectedStar_5 - 0.5;
    } else {
      highlight(stars_5, selectedStar_5);
      star_5 = selectedStar_5;
    }
    const star_5_field = document.getElementById("star_5_field");
    star_5_field.value = selectedStar_5; // 设置所选星级评分的值
  });
});

// 添加鼠标移开事件
stars_5.forEach((star) => {
  star.addEventListener("mouseleave", () => {
    if (mousePos_save_5 < star.offsetWidth / 2) {
      highlight(stars_5, selectedStar_5 - 1);
      half_highlight(stars_5, selectedStar_5 - 1);
    } else highlight(stars_5, selectedStar_5);
  });
});

// 高亮星星
function highlight(stars_5, selectedStar_5) {
  stars_5.forEach((star, index) => {
    star.classList.remove("rc-rate-score-half", "rc-rate-score-full");
    if (index < selectedStar_5) {
      star.classList.add("rc-rate-score-full");
    }
  });
}
function half_highlight(stars_5, index) {
  // 获取选中星星
  const star = stars_5[index];
  star.classList.add("rc-rate-score-half");
}

// 获取星星索引
function getIndex(el) {
  return [...el.parentElement.children].indexOf(el);
}
