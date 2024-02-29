var dom = document.getElementById("map");
(function () {
  var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
  var app = {};
  var option;
  let formattedData; // 在函数外部定义formattedData

  $(document).ready(function () {
    $.ajax({
      url: "/api/get_school_data/",
      type: "GET",
      success: function (data) {
        // 在此处处理返回的数据（data），将其格式化为目标格式
        formattedData = data.map((item) => ({
          name: item.name,
          value: item.value,
        }));
        console.log(formattedData);

        option = {
          title: {
            text: "学校选择",
            left: "center",
            show: true,
          },
          tooltip: {
            trigger: "item",
          },
          bmap: {
            center: [122.0, 30.98],
            zoom: 11,
            roam: true,
            mapStyle: {
              styleJson: [
                {
                  featureType: "water",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "land",
                  elementType: "all",
                  stylers: {
                    color: "#f3f3f3",
                  },
                },
                {
                  featureType: "railway",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "highway",
                  elementType: "all",
                  stylers: {
                    color: "#fdfdfd",
                  },
                },
                {
                  featureType: "highway",
                  elementType: "labels",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "arterial",
                  elementType: "geometry",
                  stylers: {
                    color: "#fefefe",
                  },
                },
                {
                  featureType: "arterial",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#fefefe",
                  },
                },
                {
                  featureType: "poi",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "green",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "subway",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "manmade",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "local",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "arterial",
                  elementType: "labels",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "boundary",
                  elementType: "all",
                  stylers: {
                    color: "#fefefe",
                  },
                },
                {
                  featureType: "building",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "buildingText",
                  elementType: "labels.text.fill",
                  stylers: {
                    color: "#2da0c6",
                    visibility: "off",
                  },
                },
                {
                  featureType: "towerText",
                  elementType: "labels.text.fill",
                  stylers: {
                    color: "#2da0c6",
                    visibility: "off",
                  },
                },
              ],
            },
          },
          // visualMap: {
          //   min: 0,  // 最小值
          //   max: 100,  // 最大值
          //   calculable: true,  // 是否显示拖动条
          //   inRange: {
          //       color: ['blue', 'red']  // 设置颜色范围，可以使用渐变色
          //   },
          // },
          series: [
            {
              name: "前往论坛",
              type: "effectScatter",
              coordinateSystem: "bmap",
              // itemStyle: {
        //     color: function(params) {
        //         return params.data[2]; // 这里根据数据值来决定颜色
        //     },
        // },
        color: "#e65959",
              data: formattedData,

              symbolSize: function (val) {
                if (val[2] < 50) {
                  return 5;
                } else if (val[2] > 200) {
                  return 20;
                } else {
                  return val[2] / 10;
                }
              },
              encode: {
                value: 2,
              },
              label: {
                formatter: "{b}",
                position: "right",
                show: false,
              },
              emphasis: {
                label: {
                  show: true,
                },
              },
            },
          ],
        };
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
