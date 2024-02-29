// 获取所有的星星元素
const stars_2 = document.querySelectorAll(".rc-rate-item-2");

// 记录当前选中的星星数
let selectedStar_2 = 0;
let mousePos_move_2 = 0;
let mousePos_save_2 = 0;
let star_2 = 0;
// 添加鼠标移入事件
stars_2.forEach((star) => {
  star.addEventListener("mouseenter", handleEnter);

  function handleEnter(e) {
    mousePos_move_2 = e.offsetX;

    star.addEventListener("mousemove", handleMove);
  }

  function handleMove(e) {
    mousePos_move_2 = e.offsetX;

    if (mousePos_move_2 < star.offsetWidth / 2) {
      highlight(stars_2, getIndex(e.target));
      half_highlight(stars_2, getIndex(e.target));
    } else {
      highlight(stars_2, getIndex(e.target) + 1);
    }
  }
});

// 添加点击事件
stars_2.forEach((star) => {
  star.addEventListener("click", (e) => {
    mousePos_save_2 = e.offsetX;
    selectedStar_2 = getIndex(e.target) + 1;
    if (mousePos_save_2 < star.offsetWidth / 2) {
      highlight(stars_2, selectedStar_2 - 1);
      half_highlight(stars_2, selectedStar_2 - 1);
      star_2 = selectedStar_2 - 0.5;
    } else {
      highlight(stars_2, selectedStar_2);
      star_2 = selectedStar_2;
    }
    const star_2_field = document.getElementById("star_2_field");
    star_2_field.value = selectedStar_2; // 设置所选星级评分的值
  });
});

// 添加鼠标移开事件
stars_2.forEach((star) => {
  star.addEventListener("mouseleave", () => {
    if (mousePos_save_2 < star.offsetWidth / 2) {
      highlight(stars_2, selectedStar_2 - 1);
      half_highlight(stars_2, selectedStar_2 - 1);
    } else highlight(stars_2, selectedStar_2);
  });
});

// 高亮星星
function highlight(stars_2, selectedStar_2) {
  stars_2.forEach((star, index) => {
    star.classList.remove("rc-rate-score-half", "rc-rate-score-full");
    if (index < selectedStar_2) {
      star.classList.add("rc-rate-score-full");
    }
  });
}
function half_highlight(stars_2, index) {
  // 获取选中星星
  const star = stars_2[index];
  star.classList.add("rc-rate-score-half");
}

// 获取星星索引
function getIndex(el) {
  return [...el.parentElement.children].indexOf(el);
}
