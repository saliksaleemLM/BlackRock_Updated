import { Line } from "react-chartjs-2"
import { useState, useEffect } from "react"
const Graph = ({ GD }) => {


    const [data, setData] = useState({})

    useEffect(() => {
        condition()
        GD = []

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
                setData({
                    labels: [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""

                    ],
                    //backgroundColor: ['rgba(255,0,0,1)'],
                    //lineTension: 1,
                    datasets: [
                        {
                            label: "1",
                            fill: false,
                            pointRadius: 0,

                            data: [0, 0, -1, 0, -1, -1, -1, -2, -42, -90, -130, -527, -452, -381
                                , 70, 285, 631, 714, 725, 607, 399, 156, -130, -202, -254, -245, -235, -224
                                , -204, -183, -165, -143, -105, -77, -63, -31, -11, -7, -5, -3, 0, 1
                                , 3, 5, 5, 6, 6, 6]
                        },
                        {
                            label: "2",
                            fill: false,

                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, -1, 0, -1, -1, -1, -2, -42, -90, -130, -527, -452, -381
                                , 70, 285, 631, 714, 725, 607, 399, 156, -130, -202, -254, -245, -235, -224
                                , -204, -183, -165, -143, -105, -77, -63, -31, -11, -7, -5, -3, 0, 1
                                , 3, 5, 5, 6, 6, 6]
                        },
                        {
                            label: "3",
                            fill: false,
                            borderColor: "blue",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",


                            data: [0, 0, -1, 0, -1, -1, -1, -2, -42, -90, -130, -527, -452, -381
                                , 70, 285, 631, 714, 725, 607, 399, 156, -130, -202, -254, -245, -235, -224
                                , -204, -183, -165, -143, -105, -77, -63, -31, -11, -7, -5, -3, 0, 1
                                , 3, 5, 5, 6, 6, 6]
                        }, {
                            label: "4",
                            fill: false,
                            borderColor: "orange",
                            borderWidth: 1,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, -1, 0, -1, -1, -1, -2, -42, -90, -130, -527, -452, -381
                                , 70, 285, 631, 714, 725, 607, 399, 156, -130, -202, -254, -245, -235, -224
                                , -204, -183, -165, -143, -105, -77, -63, -31, -11, -7, -5, -3, 0, 1
                                , 3, 5, 5, 6, 6, 6]
                        }, {
                            label: "5",
                            fill: false,
                            borderColor: "#210111",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, -1, 0, -1, -1, -1, -2, -42, -90, -130, -527, -452, -381
                                , 70, 285, 631, 714, 725, 607, 399, 156, -130, -202, -254, -245, -235, -224
                                , -204, -183, -165, -143, -105, -77, -63, -31, -11, -7, -5, -3, 0, 1
                                , 3, 5, 5, 6, 6, 6]
                        }, {
                            label: "6",
                            fill: false,
                            borderColor: "#10114",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 0, 0, 0, 0, 0, 0, -20, -37, -136, -326, -489, -417
                                , -157, 71, 495, 600, 786, 784, 556, 174, -40, -122, -226, -242, -243, -227
                                , -211, -191, -171, -154, -126, -96, -63, -50, -27, -8, -6, -4, -2, 0
                                , 0, 2, 3, 4, 6, 7]
                        }, {
                            label: "8",
                            fill: false,
                            borderColor: "magenta",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 1, 1, 2, 2, 2, -11, -25, -83, -255, -404, -261, 189
                                , 652, 644, 413, -2, -217, -225, -220, -182, -127, -67, -14, 52, 74, 92
                                , 91, 48, -5, -20, -17, -11, -6, -2, 1, 0, -2, -2, -2, -2
                                , -2, -3, -2, -2, -2, -2]
                        }, {
                            label: "9",
                            fill: false,
                            borderColor: "rgb(10,50,10)",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, -1, -1, -1, -1, -1, -1, -1, -30, -57, -79, -431, -328, -233
                                , 621, 620, 468, 258, 9, -237, -243, -204, -153, -118, -17, 17, 47, 95
                                , 88, 82, 7, -9, -23, -20, -12, 0, 4, 5, 4, 2, 1, 0
                                , -2, -2, -4, -4, -5, -6]
                        }, {
                            label: "10",
                            fill: false,
                            borderColor: "rgb(10,70,80)",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, -1, -2, -3, -2, -2, -1, -15, -29, -86, -257, -403, -259
                                , 190, 583, 659, 426, 11, -204, -214, -211, -175, -137, -61, -11, 55, 75
                                , 92, 92, 48, 11, -22, -19, -11, -5, 0, 5, 4, 4, 2, 1
                                , 0, -1, -3, -4, -5, -6]
                        }, {
                            label: "11",
                            fill: false,
                            borderColor: "rgb(90,50,90)",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 0, 63, -8, -8, -7, -7, -6, -6, -5, -376, 45, 42
                                , 39, 36, 33, 31, 28, 360, -21, -20, -18, -17, -15, -14, -13, -23
                                , -11, -11, -10, -10, -10, -9, -9, -8, -8, -7, -7, -7, -6, -6
                                , -6, -5, -5, -4, -2, -1]
                        }, {
                            label: "12",
                            fill: false,
                            borderColor: "rgb(2,20,100)",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [311, 249, 187, 127, 69, 12, -41, -94, -145, -194, -240, -284, -326, -364
                                , -401, -434, -466, -494, -521, -544, -565, -584, -600, -613, -625, -634, -640, -645
                                , -647, -648, -646, -642, -636, -627, -618, -608, -597, -584, -570, -555, -538, -521
                                , -503, -483, -463, -443, -422, -400]
                        }, {
                            label: "13",
                            fill: false,
                            borderColor: "rgb(10,50,2)",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -370, 50, 46
                                , 43, 40, 36, 33, 31, 185, 4, 3, 2, 1, 0, 0, 1, -81
                                , 12, 10, 9, 7, 5, 4, 3, 2, 1, 0, 0, -1, -2, -2
                                , -3, -3, -4, -4, -5, -5]
                        }, {
                            label: "14",
                            fill: false,
                            borderColor: "rgb(10,50,32)",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 1, 0, 0, 0, 0, 0, -16, -29, -55, -262, -408, -308
                                , 191, 583, 658, 426, 221, -234, -240, -246, -196, -155, -77, -24, 12, 69
                                , 88, 81, 45, 8, -28, -25, -21, -10, -2, 0, 1, 1, 0, 0
                                , 0, 0, 0, -1, -1, 0]
                        }, {
                            label: "15",
                            fill: false,
                            borderColor: "purple",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [-2, -3, 28, 83, 96, 146, 217, 216, 119, -41, -180, -843, -751, -664
                                , -368, -117, 277, 430, 467, 506, 456, 350, 209, 130, -7, -37, -64, -80
                                , -80, -77, -40, -38, -35, -33, -31, -28, -27, -25, -23, -22, -20, -19
                                , -19, -19, -18, -18, -17, -16]
                        }, {
                            label: "16",
                            fill: false,
                            borderColor: "purple",
                            borderWidth: 2,
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 0, 30, 57, 75, 150, 190, 190, 160, 101, -193, -516, -792, -719
                                , -518, -337, 99, 278, 510, 535, 487, 391, 296, 207, 72, 0, -59, -66
                                , -73, -80, -57, -39, -36, -33, -32, -29, -27, -26, -23, -22, -20, -18
                                , -18, -16, -14, -14, -13, -14]
                        }, {
                            label: "17",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [-75, -99, -117, -135, -127, -149, -156, -169, -199, -228, -254, -279, -302, -323
                                , -343, -361, -377, -392, -405, -417, -427, -436, -443, -447, -450, -452, -451, -451
                                , -448, -444, -440, -433, -426, -418, -409, -399, -388, -376, -365, -351, -338, -325
                                , -310, -297, -281, -265, -250, -234]
                        }, {
                            label: "18",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, -1, 0, 0, 2, 2, 2, -27, -56, -80, -433, -331, -237
                                , 617, 617, 466, 257, 8, -237, -244, -204, -153, -117, -16, 18, 48, 97
                                , 90, 87, 11, -7, -22, -21, -14, -1, 1, 1, 0, -1, -1, -2
                                , -4, -3, -4, -3, -5, -6]
                        }, {
                            label: "19",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "20",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 31, 58, 100, 149, 190, 222, 155, 94, -198, -521, -815, -723
                                , -521, -151, 72, 252, 486, 512, 474, 369, 275, 142, 63, -8, -64, -70
                                , -82, -80, -57, -38, -35, -34, -32, -29, -28, -26, -24, -22, -21, -21
                                , -19, -17, -16, -14, -12, -11]
                        }, {
                            label: "21",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 0, 89, -12, -11, -10, -10, -9, -8, -8, -717, 90, 83
                                , 77, 72, 66, 61, 56, 397, 0, 0, 0, 0, 0, -1, -2, -24
                                , -1, -2, -3, -4, -5, -5, -6, -7, -7, -7, -8, -8, -8, -8
                                , -9, -9, -9, -8, -6, -5]
                        }, {
                            label: "22",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [4, 3, 1, 1, 0, 0, 0, -1, -42, -89, -130, -529, -455, -384
                                , 66, 282, 627, 712, 723, 607, 400, 158, -129, -201, -253, -244, -235, -224
                                , -203, -183, -165, -143, -105, -77, -64, -34, -15, -10, -7, -5, -1, 0
                                , 2, 3, 3, 5, 5, 6]
                        }, {
                            label: "23",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 1, 0, 1, 1, 0, 1, 0, -19, -36, -136, -327, -489, -420
                                , -159, 69, 494, 600, 785, 784, 556, 174, -39, -122, -225, -240, -242, -226
                                , -209, -190, -170, -152, -125, -94, -63, -50, -28, -11, -8, -6, -4, -1
                                , 0, 1, 3, 4, 5, 6]
                        }, {
                            label: "24",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [3, 2, 1, 0, 0, 0, -1, -2, -33, -61, -83, -436, -332, -238
                                , 618, 619, 468, 260, 12, -234, -240, -202, -151, -116, -16, 18, 49, 95
                                , 88, 82, 7, -11, -26, -24, -16, -3, 1, 2, 1, 1, 1, 1
                                , 0, -1, -2, -3, -4, -5]
                        }, {
                            label: "25",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 0, 0, 1, 0, 0, 0, -15, -28, -88, -258, -403, -261
                                , 189, 579, 656, 425, 8, -206, -215, -213, -175, -138, -60, -8, 57, 78
                                , 97, 94, 50, 10, -23, -21, -14, -8, -1, 1, 1, 0, 0, 0
                                , -1, -1, -1, -3, -2, -4]
                        }, {
                            label: "26",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [0, 0, 0, 61, 80, 93, 205, 207, 173, 113, -45, -525, -801, -713
                                , -529, -347, 88, 268, 423, 536, 488, 439, 289, 203, 65, -4, -34, -73
                                , -78, -79, -60, -40, -39, -37, -34, -33, -31, -30, -27, -25, -25, -22
                                , -20, -20, -18, -18, -16, -14]
                        }, {
                            label: "27",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 2, 3, 3, 3, 2, 1, -19, -38, -137, -327, -491, -419
                                , -158, 278, 465, 571, 759, 759, 413, 169, -44, -198, -217, -232, -233, -217
                                , -201, -181, -163, -141, -120, -90, -59, -45, -8, -6, -4, -4, -2, -1
                                , 0, 2, 2, 4, 5, 6]
                        }, {
                            label: "28",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "29",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "30",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "31",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "32",
                            fill: false,
                            borderColor: "red",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "33",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "34",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }, {
                            label: "35",
                            fill: false,
                            borderColor: "purple",
                            pointRadius: 0, borderColor: "#BCBCBC",
                            data: [1, 1, 0, 0, 0, -1, -1, 0, -15, -28, -87, -257, -403, -260
                                , 190, 581, 658, 425, 10, -205, -214, -211, -175, -136, -59, -8, 57, 77
                                , 93, 90, 46, 8, -25, -22, -14, -8, -1, 2, 2, 1, 0, 0
                                , 0, 0, -1, -1, -2, -2]
                        }

                    ]
                });
            }
        }
    }
    const lineOptions = {
        scales: {
            x: {
                display: true,
                max: "10000",
                min: "200",
                ticks: {
                    stepSize: 100
                },
                grid: {
                    borderColor: 'red'
                }

            },
            y: {
                // stacked: true,
                display: true,
                max: "800",
                min: "-5000",
                ticks: {
                    stepSize: 100
                },
                grid: {
                    borderColor: 'red'
                }


            },
        },
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },

        zoom: {
            pan: {
                enabled: true,
                mode: 'x',
            },
            zoom: {
                enabled: true,
                drag: true,
                mode: 'xy'
            }
        }

    };

    return (
        <>
            <div className="App-main">
        {console.log(lineOptions)}
                <Line data={data} options={lineOptions} />
            </div>
        </>
    )
}
export default Graph;