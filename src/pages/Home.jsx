import React, { useEffect, useState } from 'react'
import Chart from '../components/Chart'
import * as api from '../api'

function Home() {
    const [lineChartData, setLineChartData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {
        const {list} = await api.getGraphData()
        setLineChartData(list)
        setIsLoading(false)
    }, [])
    return (
        <div>
            {
                isLoading
                ? 
                <p>Loading...</p>
                :
                <Chart chartData={lineChartData} type="line" />
            }
        </div>
    )
}

export default Home
