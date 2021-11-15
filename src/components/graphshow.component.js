import { Line, Chart } from "react-chartjs-2"
import { useState, useEffect } from "react"
import zoomPlugin from "chartjs-plugin-zoom";
const Graph = ({ GD, zoom }) => {

    Chart.register(zoomPlugin);

    const [data, setData] = useState({})


    useEffect(() => {

        condition()
        // return()=>{

        //     GD=[]
        // }
    }, [GD])


    const condition = () => {

        if (GD.length > 1) {

            setData({
                labels: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "27",
                    "28",
                    "29",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "35",
                    "36",
                    "37",
                    "38",
                    "39",
                    "40",
                    "41",
                    "42",
                    "43",
                    "44",
                    "45",
                    "46",
                    "47",
                    "48"

                ],
                //backgroundColor: ['rgba(255,0,0,1)'],
                //lineTension: 1,
                datasets: [
                    {
                        label: "1",
                        fill: false,
                        pointRadius: 0,
                        lineTension: 0.5,
                        borderWidth: 1,
                        borderColor: "#BCBCBC",
                        data: GD[0]
                    },
                    {
                        label: "2",
                        fill: false,

                        lineTension: 0.5,
                        borderWidth: 1,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[1]
                    },
                    {
                        label: "3",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,


                        data: GD[2]
                    }, {
                        label: "4",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[3]
                    }, {
                        label: "5",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[4]
                    }, {
                        label: "6",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[5]
                    }, {
                        label: "7",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[6]
                    }, {
                        label: "8",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[7]
                    }, {
                        label: "9",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[8]
                    }, {
                        label: "10",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[9]
                    }, {
                        label: "11",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[10]
                    }, {
                        label: "12",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[11]
                    }, {
                        label: "13",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[12]
                    }, {
                        label: "14",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,

                        lineTension: 0.5,
                        pointRadius: 0,
                        data: GD[13]
                    }, {
                        label: "15",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[14]
                    }, {
                        label: "16",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 0,
                        pointRadius: 0,
                        data: GD[15]
                    }, {
                        label: "17",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 0,
                        pointRadius: 0,
                        data: GD[16]
                    }, {
                        label: "18",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 0,
                        pointRadius: 0,
                        data: GD[17]
                    }, {
                        label: "19",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 0,
                        pointRadius: 0,
                        data: GD[18]
                    }, {
                        label: "20",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 0,
                        pointRadius: 0,
                        data: GD[19]
                    }, {
                        label: "21",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[20]
                    }, {
                        label: "22",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[21]
                    }, {
                        label: "23",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[22]
                    }, {
                        label: "24",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[23]
                    }, {
                        label: "25",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[24]
                    }, {
                        label: "26",
                        fill: false,

                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[25]
                    }, {
                        label: "27",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[26]
                    }, {
                        label: "28",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[27]
                    }, {
                        label: "29",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        lineTension: 0.5,
                        data: GD[28]
                    }, {
                        label: "30",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[29]
                    }, {
                        label: "31",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[30]
                    }, {
                        label: "32",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[31]
                    }, {
                        label: "33",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[32]
                    }, {
                        label: "34",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[33]
                    },
                    {
                        label: "35",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[34]
                    }
                    ,
                    {
                        label: "36",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[35]
                    },
                    {
                        label: "37",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[36]
                    },
                    {
                        label: "38",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[37]
                    },
                    {
                        label: "39",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[38]
                    },
                    {
                        label: "40",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[39]
                    },
                    {
                        label: "41",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[40]
                    },
                    {
                        label: "42",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[41]
                    },
                    {
                        label: "43",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[42]
                    },
                    {
                        label: "44",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[43]
                    },
                    {
                        label: "45",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[44]
                    },
                    {
                        label: "46",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[45]
                    },
                    {
                        label: "47",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[46]
                    },
                    {
                        label: "48",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#BCBCBC", borderWidth: 1,
                        pointRadius: 0,
                        data: GD[47]
                    },
                    {
                        label: "49",
                        fill: false,

                        borderColor: "red", borderWidth: 1,
                        pointRadius: -1,
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },

                ]
            });

        } else {
            {
                setData({

                    labels: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5"],
                    datasets: [
                        {
                            label: "45",
                            fill: false,
                            lineTension: 0.5,
                            borderColor: "#BCBCBC",
                            pointRadius: 0,

                            data: [1, 2, 5, 32, 23, 99, 984, 689, 546, 786, 234, 57, 78, 768, 465, 3, 5, 476, 68, 5, 6745, 645, 64, 76, 8, 74, 56, 4564, 57, 867, 8, 456, 456, 436, 7]
                        },
                        {
                            label: "46",
                            fill: false,
                            lineTension: 0.5,
                            borderColor: "#BCBCBC",
                            pointRadius: 0,

                            data: [1, 2, 5, 32, 23, 99, 984, 689, 546, 786, 234, 57, 78, 768, 465, 3, 5, 476, 68, 5, 6745, 645, 64, 76, 8, 74, 56, 4564, 57, 867, 8, 456, 456, 436, 7]
                        },
                        {
                            label: "47",
                            fill: false,
                            lineTension: 0.5,
                            borderColor: "#BCBCBC",
                            pointRadius: 0,
                            data: [1, 2, 5, 32, 23, 99, 984, 689, 546, 786, 234, 57, 78, 768, 465, 3, 5, 476, 68, 5, 6745, 645, 64, 76, 8, 74, 56, 4564, 57, 867, 8, 456, 456, 436, 7]
                        },
                        {
                            label: "48",
                            fill: false,
                            lineTension: 0.5,
                            borderColor: "#BCBCBC",
                            pointRadius: 0,
                            data: [1, 2, 5, 32, 23, 45, 234, 65, 234, 234, 5646, 57, 78, 78, 465, 3, 5, 476, 68, 5, 6745, 645, 64, 76, 8, 74, 56, 4564, 57, 867, 8, 456, 456, 5876, 7],
                        },
                        {
                            label: "49",
                            fill: false,
                            lineTension: 0.5,

                            borderColor: "red",

                            pointRadius: -1,
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },]

                });
            }
        }
    }
    const options = {
       
        scales: {
            xAxes: {
                display: true,
                min: -10,
                max: 48,
                grid: {
                    drawBorder: true,
                    color: "#3a3838",
                    display: true,
                },ticks: {
                    stepSize: 5
                },
            },
            yAxes: {

                display: true,
                max: ((1 / zoom) * 20000),
                min: -((1 / zoom) * 20000),

                grid: {
                    drawBorder: true,
                    color: "#3a3838",
                    display: true,
                }



                // stacked: true,
            },
        },

        plugins: {

            legend: {
                display: false,
            },
            tooltips: {
                enabled: false,
            },
            zoom: {

                pan: {
                    enabled: true,
                    mode: "xy",
                    speed: 1
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },

                    // pinch: {
                    //     enabled: true,
                    // },
                    mode: "xy",
                },
            }
        }
    }
    const options2 = {
        
        scales: {
            xAxes: {
                display: true,
                min: 1,
                max: 48,
                grid: {
                    drawBorder: true,
                    display: true,
                    color: "#3a3838",
                },
                ticks: {
                    stepSize: 4
                },
            },
            yAxes: {

                display: true,
                max: zoom * 10,
                min: -(zoom * 10),

                grid: {
                    drawBorder: true,
                    display: true,
                    color: "#3a3838",
                }

                // stacked: true,
            },
        },

        plugins: {

            legend: {
                display: false,
            },
            tooltips: {
                enabled: false,
            },
            zoom: {

                pan: {
                    enabled: true,
                    mode: "xy",
                    speed: 1
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },

                    // pinch: {
                    //     enabled: true,
                    // },
                    mode: "xy",
                },
            }
        }
    }
    return (
        <>

            <div className="App-main">

                {/* {<div style={{ color: "white" }}>{zoom}</div>} */}
                {
                    zoom > -2 ?
                        <Line data={data} options={options} />
                        : <Line data={data} options={options2} />
                }
            </div>
        </>
    )
}
export default Graph;