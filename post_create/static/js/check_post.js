// 获取元素
const dineIn = document.querySelector("#dine-in");
const addressWrapper = document.querySelector(".address");

// 显示/隐藏地址
function handleAddress() {
  if (dineIn.checked) {
    addressWrapper.style.display = "block";
  } else {
    addressWrapper.style.display = "none";
  }
}
// 绑定事件监听
dineIn.addEventListener("change", handleAddress);

// 初始化状态
handleAddress();

// 外卖
const delivery = document.querySelector("#delivery");
// 提交按钮
const submitBtn = document.querySelector(".btn-2");

function checkpattern() {
  if (!delivery.checked && !dineIn.checked) {
    return false;
  }
  return true;
}
const canteen = document.querySelector("#canteen-name");
function checkcanteen() {
  if (canteen.value.length == 0) {
    return false;
  }
  return true;
}
const address = document.querySelector("#address-info");
function checkaddress() {
  if (address.value.length == 0 && dineIn.checked) {
    return false;
  }
  return true;
}
// 提交点击事件
submitBtn.addEventListener("click", (e) => {
  if (!checkcanteen()) {
    alert("请输入店名");
    e.preventDefault();
  } else if (!checkpattern()) {
    alert("请选择就餐方式");
    e.preventDefault();
  } else if (!checkaddress()) {
    alert("请输入地址");
    e.preventDefault();
  } else {
    alert("提交成功");
  }
});
