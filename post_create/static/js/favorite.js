// 获取收藏按钮元素
var favoriteBtn = document.querySelector("#fav");
var username = document.getElementById("username").textContent;
var storeId = document.getElementById("restaurantId").textContent;
var whether_exist;
// 添加点击事件监听器
favoriteBtn.addEventListener("click", function () {
  // 切换class名
  if (whether_exist == 1) {
    var currentTime = new Date();
    // 发送删除数据的请求
    favoriteBtn.classList.remove("favorited");
    $.ajax({
      url: "/my_homepage/cancel_collect/",
      type: "POST",

      data: {
        username: username,
        storeId: storeId,
        time: currentTime.toISOString(), // 将时间转换为ISO字符串形
      },
      datatype: "json",
      success: function (response) {
        // 删除请求成功处理逻辑
        if (response.message == "success") {
          whether_exist = 0;
          alert("已取消收藏！");
        } else if (response.message == "fail") {
          alert("取消收藏失败！");
        }
      },
    });
  } else {
    var currentTime = new Date();
    favoriteBtn.classList.add("favorited");
    // 发送POST请求
    $.ajax({
      url: "/my_homepage/add_collect/",
      type: "POST",

      data: {
        username: username,
        storeId: storeId,
        time: currentTime.toISOString(), // 将时间转换为ISO字符串形式
      },
      datatype: "json",
      success: function (response) {
        // POST请求成功处理逻辑
        if (response.message == "success") {
          whether_exist = 1;
          alert("收藏成功！");
        } else if (response.message == "fail") {
          alert("收藏失败！");
        }
      },
    });
  }
});

function check_if_collected() {
  // 获取当前时间
  var currentTime = new Date();

  //   alert(checkData.username + " " + checkData.storeId + " " + checkData.time);

  $.ajax({
    url: "/my_homepage/check_if_collected/",
    type: "POST",

    data: {
      username: username,
      storeId: storeId,
      time: currentTime.toISOString(), // 将时间转换为ISO字符串形式
    },
    datatype: "json",
    success: function (response) {
      if (response.message == "success") {
        whether_exist = 1;
        favoriteBtn.classList.add("favorited");
      } else if (response.message == "fail") {
        whether_exist = 0;
      }
    },
    error: function (error) {
      //失败处理逻辑
      whether_exist = 0;
      alert("POST请求失败");
    },
  });
  // alert("成功监听！"); //检测从哪里开始不再继续运行
  return whether_exist;
}
document.addEventListener("DOMContentLoaded", function () {
  whether_exist = check_if_collected();
});
