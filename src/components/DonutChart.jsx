import React from 'react'
import Chart from './Chart'

function DonutChart({chartData}) {
    const series = chartData.list.map(c => Number(c.views))
    const labels = chartData.list.map(c => c.title)
    return (
        <Chart title="Круговой график" chartData={chartData} series={series} labels={labels} type="donut" />
    )
}

export default DonutChart
