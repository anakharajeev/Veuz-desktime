
var columnChartColors = getChartColorsArray("column_chart");
columnChartColors && (options = {
    chart: {
        height: 300,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "45%",
            endingShape: "rounded",
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    series: [{
        name: "At work",
        data: [8, 9, 6, 8, 9, 8, 0]
    }, {
        name: "Task Spent",
        data: [6, 8, 4, 5, 7.5, 6, 0]
    
    }],
    colors: columnChartColors,
    xaxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    yaxis: {
        title: {
            // text: "$ (thousands)",
            style: {
                fontWeight: "500"
            }
        }
    },
    grid: {
        borderColor: "#f1f1f1"
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (e) {
                return '<i class="bx bx-trending-up" style="color:green;"></i> ' + e + " hr"
            }
        }
    }
}, (chart = new ApexCharts(document.querySelector("#column_chart"), options)).render());


