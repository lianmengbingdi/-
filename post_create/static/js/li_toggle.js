const filtServiceDiv = document.querySelector("div.filt-service");
const aElements = filtServiceDiv.querySelectorAll("a");

aElements.forEach((a) => {
  a.addEventListener("click", () => {
    
    // 移除所有 <a> 元素的 'cur' 类
    aElements.forEach((el) => {
      el.classList.remove("cur");
    });
    // 将当前点击的 <a> 元素添加 'cur' 类
    a.classList.add("cur");
  });
});
