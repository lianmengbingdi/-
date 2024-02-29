var i = 1;
const uploadBtn = document.querySelector(".btn-1");
const fileInput = document.querySelector(".upload-image");
const picWrapper = document.querySelector(".pic-wrapper");

fileInput.addEventListener("change", function (event) {
  // alert("保存成功");

  const file = event.target.files[0];
  const allowedFormats = ["image/jpeg", "image/png", "image/bmp"];
  if (!allowedFormats.includes(file.type)) {
    alert("文件格式不受支持");
    return;
  }
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageUrl = e.target.result;

    const div = document.createElement("div");
    div.id = "img_" + i;
    div.className = "pic-item-wrapper";
    div.innerHTML = `
    <img class="pic-item" src="${imageUrl}">
    <div class="pic-delete" data-index="${i}"></div>
  `;

    picWrapper.appendChild(div);
    i++;
  };

  reader.readAsDataURL(file);
});
picWrapper.addEventListener("click", function (event) {
  if (event.target.matches(".pic-delete")) {
    const index = event.target.getAttribute("data-index");
    const div = document.getElementById("img_" + index);
    if (div) {
      div.parentNode.removeChild(div);
    }
  }
});
