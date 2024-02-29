// 获取地址文本和地址图标元素
const addressEl = document.getElementById("address");
const address = addressEl.innerText;
const iconEl = document.querySelector(".addressIcon");

// 为地址图标添加点击事件监听
iconEl.addEventListener("click", () => {
  // 拼接谷歌地图搜索地址的URL
  const url = `https://www.google.com/maps/search/${encodeURIComponent(
    address
  )}`;

  // 打开地图页面
  window.open(url, "_blank");
});
