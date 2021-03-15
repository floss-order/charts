import React from "react"
import ApexChart from "react-apexcharts"

function Chart({chartData, id, type}) {
    const series = chartData.map((c, idx) => {
        return {
            name: c.title,
            data: c.data.map(item => ({x: item[0], y: item[1]}))
        }
    })
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            type: 'category'
        }
    }
    console.log(series)
    return (
        <ApexChart options={options} series={series} type={type} height={450} />
    )
}

export default Chart