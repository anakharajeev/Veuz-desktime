

var doughnutChartColors = getChartColorsArray("doughnut-chart");
doughnutChartColors && (dom = document.getElementById("doughnut-chart"), myChart = echarts.init(dom), option = null, option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: "horizontal",
        x: "center",
        y: "bottom",
        data: ["At Desk", "Idle", "Offline"],
        textStyle: {
            color: "#8791af",
            fontSize: "14",
            fontWeight: 300
        },
        padding: [40, 0, 0, 0]
    },
    color: doughnutChartColors,
    series: [{
        name: "Work Report",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: !(app = {}),
        label: {
            normal: {
                show: !1,
                position: "center"
            },
            emphasis: {
                show: !0,
                textStyle: {
                    fontSize: "18",
                    color: "#000",
                    fontWeight: "bold"
                }
            }
        },
        labelLine: {
            normal: {
                show: !1
            }
        },
        data: [{
            value: 70,
            name: "At Desk"
        }, {
            value: 20,
            name: "Idle"
        }, {
            value: 10,
            name: "Offline"
       
        }]
    }]
}, option && "object" == typeof option && myChart.setOption(option, !0));
