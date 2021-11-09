import { Line } from "react-chartjs-2"
import { useState, useEffect } from "react"
const Graph = ({ GD }) => {


    const [data, setData] = useState({})

    useEffect(() => {
        condition()

    }, [GD])


    const condition = () => {

        if (GD.length > 1) {
            

            // console.log("hwllo i am changing"+typeof(GD))
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

                        borderColor: "#BCBCBC",
                        data: GD[0]
                    },
                    {
                        label: "2",
                        fill: false,

                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[1]
                    },
                    {
                        label: "3",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,


                        data: GD[2]
                    }, {
                        label: "4",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[3]
                    }, {
                        label: "5",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[4]
                    }, {
                        label: "6",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[5]
                    }, {
                        label: "7",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[6]
                    }, {
                        label: "8",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[7]
                    }, {
                        label: "9",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[8]
                    }, {
                        label: "10",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[9]
                    }, {
                        label: "11",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[10]
                    }, {
                        label: "12",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[11]
                    }, {
                        label: "13",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[12]
                    }, {
                        label: "14",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[13]
                    }, {
                        label: "15",
                        fill: false,
                        borderColor: "#BCBCBC",
                        borderWidth: 1,
                        pointRadius: 0,
                        data: GD[14]
                    }, {
                        label: "16",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[15]
                    }, {
                        label: "17",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[16]
                    }, {
                        label: "18",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[17]
                    }, {
                        label: "19",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[18]
                    }, {
                        label: "20",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[19]
                    }, {
                        label: "21",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[20]
                    }, {
                        label: "22",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[21]
                    }, {
                        label: "23",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[22]
                    }, {
                        label: "24",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[23]
                    }, {
                        label: "25",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[24]
                    }, {
                        label: "26",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[25]
                    }, {
                        label: "27",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[26]
                    }, {
                        label: "28",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[27]
                    }, {
                        label: "29",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[28]
                    }, {
                        label: "30",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[29]
                    }, {
                        label: "31",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[30]
                    }, {
                        label: "32",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[31]
                    }, {
                        label: "33",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[32]
                    }, {
                        label: "34",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[33]
                    },
                    {
                        label: "35",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[34]
                    }
                    ,
                    {
                        label: "36",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[35]
                    },
                    {
                        label: "37",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[36]
                    },
                    {
                        label: "38",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[37]
                    },
                    {
                        label: "39",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[38]
                    },
                    {
                        label: "40",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[39]
                    },
                    {
                        label: "41",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[40]
                    },
                    {
                        label: "42",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[41]
                    },
                    {
                        label: "43",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[42]
                    },
                    {
                        label: "44",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[43]
                    },
                    {
                        label: "45",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[44]
                    },
                    {
                        label: "46",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[45]
                    },
                    {
                        label: "47",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[46]
                    },
                    {
                        label: "48",
                        fill: false,
                        borderColor: "#BCBCBC",
                        pointRadius: 0,
                        data: GD[47]
                    },

                ]
            });
        } else {
            {
                setData({});
            }
        }
    }
    const lineOptions = {
        scales: {
            xAxes: [{
                display: false,
                max:50000,
                min:-50000,
               
              

            }],
            yAxes:[ {
                // stacked: true,
                display: false,
                max:50000,
                min:-50000,
              
            


            }],
        },
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },

   

    };

    return (
        <>
            <div className="App-main">
       
                <Line data={data} options={lineOptions} />
            </div>
        </>
    )
}
export default Graph;