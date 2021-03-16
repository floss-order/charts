import React from 'react'
import Chart from './Chart'

function LineChart({chartData}) {
    const series = chartData.list.map(c => {
        return {
            name: c.title,
            data: c.data.map(item => ({ 
                x: item[0], 
                y: item[1] 
            }))
        }
    })
    return (
        <Chart title="Линейный график" chartData={chartData} series={series} type="line" />
    )
}

export default LineChart
