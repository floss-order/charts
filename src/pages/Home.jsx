import React, { useEffect, useState } from 'react'
import * as api from '../api'
import LineChart from '../components/LineChart'
import DonutChart from '../components/DonutChart'

function Home() {
    const [lineChartData, setLineChartData] = useState()
    const [donutChartData, setDonutChartData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const fetchedLineChartData = await api.getGraphData()
            setLineChartData(fetchedLineChartData)
    
            const fetchedDonutChartData = await api.getDonutData()
            setDonutChartData(fetchedDonutChartData)
    
            setIsLoading(false)
        }
        fetchData()
    }, [])
    return (
        <div>
            {
                isLoading
                ? 
                <p>Loading...</p>
                :
                <>
                    <LineChart chartData={lineChartData} />
                    <DonutChart chartData={donutChartData} />
                </>
            }
        </div>
    )
}

export default Home
