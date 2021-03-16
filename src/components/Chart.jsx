import React from 'react'
import ApexChart from 'react-apexcharts'

function Chart({labels, series, type, title}) {
    const options = {
        series: series,
        labels: labels,
        title: {
            text: title,
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '32px',
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#263238'
            },
        },
    }
    return (
        <ApexChart options={options} series={options.series} type={type} height={450} />
    )
}

export default Chart