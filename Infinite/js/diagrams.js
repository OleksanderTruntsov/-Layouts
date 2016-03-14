$(function () {
    var rateData = [{ y: 58, color: "#ff774e"},{ y: 42, color: "#ccc" }];
    var visitsData = [{ y: 75, color: "#00c794"},{ y: 25, color: "#ccc" }];
    var trafficData = [{ y: 28, color: "#e169be"},{ y: 72, color: "#ccc" }];

    var optionsVisitsColumnChart = {
        chart: {
            type: "column",
            spacingLeft: 0,
            spacingRight: 0,
            spacingTop: 0,
            spacingBottom: 0,
            margin: 0
        },

        exporting: {
            enabled: true,
            allowHTML: true
        },

        title: {
            text: null
        },

        legend: {
            enabled: false
        },

        xAxis: {
            visible: false,
            maxPadding: 0,
            minPadding: 0
        },

        yAxis: {
            visible: false,
            maxPadding: 0,
            minPadding: 0,
            tickInterval: 3
        },

        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0,
                borderWidth: 4,
                color: "#ccc",
                states: {
                    hover: {
                        color: '#0b97d4'
                    }
                }
            }

        },

        tooltip: {
            borderRadius: 0,
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            style: {
                padding: "0",
                font: "400 12px 'roboto', sans-serif",
                color: "#4c4c4c"
            },
            positioner: function (labelWidth, labelHeight, point) {
                var chart = this.chart;
                var tooltipX;
                if (point.plotX + labelWidth > chart.plotWidth) {
                    tooltipX =  point.plotX + 5 - labelWidth;
                } else {
                    tooltipX = point.plotX - 5;
                }
                return {
                    x: tooltipX,
                    y: point.plotY - labelHeight
                };
            },
            formatter: function() {
                return '<div class="visits-column-chart__tooltip">' + Highcharts.dateFormat('%I:%M %p ',(this.x)) + '<br/>' + Math.round(this.y/5.6) + ' visits</div>';
            }
        },

        series: [{
            data: [
                [Date.UTC(2015, 11, 22, 1, 0), 68],
                [Date.UTC(2015, 11, 22, 1, 40), 108],
                [Date.UTC(2015, 11, 22, 2, 20), 84],
                [Date.UTC(2015, 11, 22, 3, 0), 48],
                [Date.UTC(2015, 11, 22, 3, 40), 78],
                [Date.UTC(2015, 11, 22, 4, 20), 94],
                [Date.UTC(2015, 11, 22, 5, 0), 100],
                [Date.UTC(2015, 11, 22, 5, 40), 63],
                [Date.UTC(2015, 11, 22, 6, 20), 77],
                [Date.UTC(2015, 11, 22, 7, 0), 68],
                [Date.UTC(2015, 11, 22, 7, 40), 108],
                [Date.UTC(2015, 11, 22, 8, 20), 84],
                [Date.UTC(2015, 11, 22, 9, 0), 48],
                [Date.UTC(2015, 11, 22, 9, 40), 78],
                [Date.UTC(2015, 11, 22, 10, 20), 94],
                [Date.UTC(2015, 11, 22, 11, 0), 100],
                [Date.UTC(2015, 11, 22, 11, 40), 63],
                [Date.UTC(2015, 11, 22, 12, 20), 77],
                [Date.UTC(2015, 11, 22, 13, 0), 68],
                [Date.UTC(2015, 11, 22, 13, 40), 108],
                [Date.UTC(2015, 11, 22, 14, 20), 84],
                [Date.UTC(2015, 11, 22, 15, 0), 48],
                [Date.UTC(2015, 11, 22, 15, 40), 78],
                [Date.UTC(2015, 11, 22, 16, 20), 94],
                [Date.UTC(2015, 11, 22, 17, 0), 100],
                [Date.UTC(2015, 11, 22, 17, 40), 63],
                [Date.UTC(2015, 11, 22, 18, 20), 77],
                [Date.UTC(2015, 11, 22, 19, 0), 68],
                [Date.UTC(2015, 11, 22, 19, 40), 108],
                [Date.UTC(2015, 11, 22, 20, 20), 84],
                [Date.UTC(2015, 11, 22, 21, 0), 48],
                [Date.UTC(2015, 11, 22, 21, 40), 78],
                [Date.UTC(2015, 11, 22, 22, 20), 94],
                [Date.UTC(2015, 11, 22, 23, 0), 100],
                [Date.UTC(2015, 11, 22, 23, 40), 63],
                [Date.UTC(2015, 11, 22, 0, 20), 77]
            ]
        }]
    };

    var optionsVisitsAreaChart= {
        chart: {
            type: "area",
            backgroundColor: null,
            spacingLeft: 0,
            spacingRight: 0,
            spacingTop: 0,
            spacingBottom: 0,
            margin: 0
        },

        title: {
            text: null
        },

        legend: {
            enabled: false
        },

        xAxis: {
            visible: false,
            maxPadding: 0,
            minPadding: 0
        },

        yAxis: {
            visible: false,
            maxPadding: 0,
            minPadding: 0
        },

        plotOptions: {
            area: {
                fillColor: '#edf7f9',
                lineColor: "#009ac3",
                lineWidth: 1,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },

        tooltip: {
            enabled: false
        },

        series: [{
            data: [
                [0, 0],
                [9, 8],
                [11, 6],
                [18, 11],
                [21, 9],
                [26, 13],
                [30, 6],
                [36, 16],
                [42, 8],
                [45, 11],
                [52, 8],
                [56, 10],
                [63, 5],
                [71, 12],
                [80, 0]
            ]
        }]
    };

    var optionsTrafficAreaChart = {
        chart: {
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0,
            type: "area"

        },

        title: {
            text: "Visits",
            align: "left",
            verticalAlign: "top",
            y: 17,
            x: 8,
            style: {
                font: "400 14px 'roboto', sans-serif",
                color: "#000"
            }
        },

        legend: {
            align: "left",
            verticalAlign: "top",
            x: 60,
            y: -1,
            symbolWidth: 10,
            symbolHeight: 10,
            itemStyle: {
                font: "400 12px 'roboto', sans-serif",
                color: "#000",
                fontWeight: "normal"
            }
        },

        exporting: {
            enabled: true,
            allowHTML: true
        },

        tooltip: {
            borderRadius: 0,
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            shape: false,
            style: {
                fontSize: "16px",
                padding: "0"
            },
            positioner: function (labelWidth, labelHeight, point) {
                var parrentContainer = $("#trafficArea");
                    chart = this.chart,
                    plotLeft = chart.plotLeft,
                    plotTop = chart.plotTop;
                var tooltipX, tooltipY;
                if (point.plotX + labelWidth + 20 > parrentContainer.width()) {
                    tooltipX = point.plotX + plotLeft - labelWidth - 20;
                } else {
                    tooltipX = point.plotX + plotLeft + 20
                }
                tooltipY = point.plotY + plotTop - 30;
                return {
                    x: tooltipX,
                    y: tooltipY
                };
            },
            formatter: function() {
                return '<div class="traffic-tooltip">' +
                            '<div class="traffic-tooltip__left">'
                                + Highcharts.dateFormat('%e', this.x) + " " + Highcharts.dateFormat('%B', this.x) +'<br/>'
                                + this.y  + " visitors" +
                            '</div>' +
                            '<div class="traffic-tooltip__right">' +
                                '<i class="icon icon-toparrow"></i>' + Math.round(this.y/77.33) + "%" +
                            '</div>'+
                        '</div>';
            }
        },

        xAxis: {
            lineColor: "#ccc",
            lineWidth: 3,
            tickLength: 0,
            tickInterval: 24*3600*1000,
            labels: {
                autoRotation: 0,
                distance: 40,
                formatter: function() {
                    var date = Highcharts.dateFormat('%B', this.value) + " " + Highcharts.dateFormat('%e', this.value);
                    if(date === "October 20" || date === "October 27" || date === "November 3") {
                        return date;
                    }
                },
                style: {
                    width: '100px',
                    'min-width': '100px',
                    padding: "5px 0 10px",
                    font: "400 12px 'roboto', sans-serif",
                    color: "#000"
                },
                useHTML : true
            },
            maxPadding: 0,
            startOnTick: true
        },

        yAxis: {
            title: {
                text: null
            },
            labels: {
                format: '{value}',
                align: 'left',
                x: 8,
                y: 16,
                style: {
                    font: "400 14px 'roboto', sans-serif",
                    color: "#000"
                }
            },
            gridLineDashStyle: "Dash",
            showFirstLabel: false

        },

        series: [{
            name: "Search Traffic",
            color: '#0b97d4',
            fillColor: 'rgba(237, 247,249, 0.75)',
            marker: {
                fillColor: "#fff",
                lineColor: null,
                lineWidth: 2,
                states: {
                    hover: {
                        fillColor: "#0b97d4",
                        radiusPlus: 0
                    }
                }
            },
            data: [
                [Date.UTC(2015, 9, 19, 0),1160],
                [Date.UTC(2015, 9, 20, 0),1333],
                [Date.UTC(2015, 9, 20, 23),2600],
                [Date.UTC(2015, 9, 22, 20),1700],
                [Date.UTC(2015, 9, 23, 6),2030],
                [Date.UTC(2015, 9, 23, 11),1950],
                [Date.UTC(2015, 9, 25, 12),3712],
                [Date.UTC(2015, 9, 26, 18),2350],
                [Date.UTC(2015, 9, 27, 16),3050],
                [Date.UTC(2015, 9, 28, 18),2550],
                [Date.UTC(2015, 9, 29, 18),3060],
                [Date.UTC(2015, 9, 30, 16),2280],
                [Date.UTC(2015, 10, 1, 12),3020],
                [Date.UTC(2015, 10, 2, 11),2200],
                [Date.UTC(2015, 10, 3, 16),3300],
                [Date.UTC(2015, 10, 4, 15),2900],
                [Date.UTC(2015, 10, 5, 11),3070]
            ]
        },
            {
                name: "Reaferal Traffic",
                visible: false,
                color: '#fa682d',
                fillColor: 'rgba(237, 247,249, 0.75)',
                marker: {
                    fillColor: "#fff",
                    lineColor: null,
                    lineWidth: 2,
                    states: {
                        hover: {
                            fillColor: "#fa682d",
                            radiusPlus: 0
                        }
                    }
                },
                data: [
                    [Date.UTC(2015, 9, 19, 0),3287],
                    [Date.UTC(2015, 9, 20, 0),1256],
                    [Date.UTC(2015, 9, 20, 23),1475],
                    [Date.UTC(2015, 9, 22, 20),1236],
                    [Date.UTC(2015, 9, 23, 6),2687],
                    [Date.UTC(2015, 9, 23, 11),3150],
                    [Date.UTC(2015, 9, 25, 12),1245],
                    [Date.UTC(2015, 9, 26, 18),1324],
                    [Date.UTC(2015, 9, 27, 16),2100],
                    [Date.UTC(2015, 9, 28, 18),968],
                    [Date.UTC(2015, 9, 29, 18),3300],
                    [Date.UTC(2015, 9, 30, 16),2416],
                    [Date.UTC(2015, 10, 1, 12),1258],
                    [Date.UTC(2015, 10, 2, 11),1700],
                    [Date.UTC(2015, 10, 3, 16),3100],
                    [Date.UTC(2015, 10, 4, 15),1200],
                    [Date.UTC(2015, 10, 5, 11),1300]
                ]
            },
            {
                name: "Direct Traffic",
                visible: false,
                color: '#70bf64',
                fillColor: 'rgba(237, 247,249, 0.75)',
                marker: {
                    fillColor: "#fff",
                    lineColor: null,
                    lineWidth: 2,
                    states: {
                        hover: {
                            fillColor: "#70bf64",
                            radiusPlus: 0
                        }
                    }
                },
                data: [
                    [Date.UTC(2015, 9, 19, 0),100],
                    [Date.UTC(2015, 9, 20, 0),200],
                    [Date.UTC(2015, 9, 20, 23),300],
                    [Date.UTC(2015, 9, 22, 20),500],
                    [Date.UTC(2015, 9, 23, 6),600],
                    [Date.UTC(2015, 9, 23, 11),900],
                    [Date.UTC(2015, 9, 25, 12),1500],
                    [Date.UTC(2015, 9, 26, 18),2000],
                    [Date.UTC(2015, 9, 27, 16),3000],
                    [Date.UTC(2015, 9, 28, 18),3500],
                    [Date.UTC(2015, 9, 29, 18),1000],
                    [Date.UTC(2015, 9, 30, 16),1110],
                    [Date.UTC(2015, 10, 1, 12),1220],
                    [Date.UTC(2015, 10, 2, 11),1000],
                    [Date.UTC(2015, 10, 3, 16),1200],
                    [Date.UTC(2015, 10, 4, 15),1000],
                    [Date.UTC(2015, 10, 5, 11),1100]
                ]
            },
            {
                name: "Campaigns",
                visible: false,
                color: '#ffcb38',
                fillColor: 'rgba(237, 247,249, 0.75)',
                marker: {
                    fillColor: "#fff",
                    lineColor: null,
                    lineWidth: 2,
                    states: {
                        hover: {
                            fillColor: "#ffcb38",
                            radiusPlus: 0
                        }
                    }
                },
                data: [
                    [Date.UTC(2015, 9, 19, 0),2500],
                    [Date.UTC(2015, 9, 20, 0),2560],
                    [Date.UTC(2015, 9, 20, 23),2400],
                    [Date.UTC(2015, 9, 22, 20),2100],
                    [Date.UTC(2015, 9, 23, 6),2600],
                    [Date.UTC(2015, 9, 23, 11),2400],
                    [Date.UTC(2015, 9, 25, 12),2500],
                    [Date.UTC(2015, 9, 26, 18),2700],
                    [Date.UTC(2015, 9, 27, 16),2800],
                    [Date.UTC(2015, 9, 28, 18),2500],
                    [Date.UTC(2015, 9, 29, 18),2000],
                    [Date.UTC(2015, 9, 30, 16),2100],
                    [Date.UTC(2015, 10, 1, 12),2300],
                    [Date.UTC(2015, 10, 2, 11),2400],
                    [Date.UTC(2015, 10, 3, 16),2500],
                    [Date.UTC(2015, 10, 4, 15),2600],
                    [Date.UTC(2015, 10, 5, 11),2100]
                ]
            },
            {
                name: "Today's Traffic",
                visible: false,
                color: '#cdcdcd',
                fillColor: 'rgba(237, 247,249, 0.75)',
                marker: {
                    fillColor: "#fff",
                    lineColor: null,
                    lineWidth: 2,
                    states: {
                        hover: {
                            fillColor: "#cdcdcd",
                            radiusPlus: 0
                        }
                    }
                },
                data: [
                    [Date.UTC(2015, 9, 19, 0),1500],
                    [Date.UTC(2015, 9, 20, 0),1600],
                    [Date.UTC(2015, 9, 20, 23),2480],
                    [Date.UTC(2015, 9, 22, 20),3100],
                    [Date.UTC(2015, 9, 23, 6),3200],
                    [Date.UTC(2015, 9, 23, 11),1450],
                    [Date.UTC(2015, 9, 25, 12),1000],
                    [Date.UTC(2015, 9, 26, 18),3100],
                    [Date.UTC(2015, 9, 27, 16),2100],
                    [Date.UTC(2015, 9, 28, 18),1769],
                    [Date.UTC(2015, 9, 29, 18),2984],
                    [Date.UTC(2015, 9, 30, 16),1400],
                    [Date.UTC(2015, 10, 1, 12),3254],
                    [Date.UTC(2015, 10, 2, 11),2413],
                    [Date.UTC(2015, 10, 3, 16),1456],
                    [Date.UTC(2015, 10, 4, 15),2674],
                    [Date.UTC(2015, 10, 5, 11),2156]
                ]
            }]
    };

    function pieChartOptions(data) {
        return {
            chart: {
                type: "pie",
                spacing: [0,0,0,0]
            },

            exporting: {
                enabled: true,
                allowHTML: true
            },

            title: {
                text: data[0].y+"<sup class='sup'>%<sup>",
                useHTML: true,
                verticalAlign: 'middle',
                y: 6,
                x: 4,
                style: {
                    font: "400 26px 'roboto', sans-serif",
                    letterSpacing: "0.013em",
                    color: "#343a41"
                }
            },

            tooltip: {
                enabled: false
            },

            plotOptions: {
                pie: {
                    slicedOffset: 0,
                    innerSize: 82,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: false
                    },
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            },

            series: [{
                data: data
            }]
        };
    }

    $("#trafficAreaChart").highcharts(optionsTrafficAreaChart);

    $("#visitsColumnChart").highcharts(optionsVisitsColumnChart);

    $("#rateChart").highcharts(pieChartOptions(rateData));
    $("#visitsChart").highcharts(pieChartOptions(visitsData));
    $("#trafficChart").highcharts(pieChartOptions(trafficData));

    $('#visitsAreaChart').highcharts(optionsVisitsAreaChart);
    $('#uniqueVisitsAreaChart').highcharts(optionsVisitsAreaChart);
    $('#previewsAreaChart').highcharts(optionsVisitsAreaChart);
});