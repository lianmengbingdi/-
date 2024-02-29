(function () {
  var dom = document.getElementById("container");
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  var app = {};
  $(document).ready(function () {
    $.ajax({
      url: "/api/get_top_school_data/", // 替换为您的Django视图URL
      type: "GET",
      success: function (data) {
        var schoolData = data; // 假设后端返回的数据是一个包含学校名称和帖子数量的对象
        console.log(schoolData);
        var option;
        option = {
          title: {
            text: "热度排行",
            left: "center",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {},
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          series: [
            {
              type: "bar",
              data: schoolData.value,
              color: '#fb9a89',
            },
          ],
          xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
          },
          yAxis: {
            type: "category",
            data: schoolData.school,
          },
        };
        if (option && typeof option === "object") {
          myChart.setOption(option);
        }
        myChart.on("click", function (params) {
          var searchURL = params.name + "/index/总体";
          window.open(searchURL);
        });
        if (option && typeof option === "object") {
          myChart.setOption(option);
        }

        window.addEventListener("resize", myChart.resize);
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
  });
})();
