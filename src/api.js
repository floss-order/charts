const BASE_URL = 'http://ideadeploy.space/test/'

export async function getGraphData() {
    const graphData = await fetchData('graph')
    return graphData
}

export async function getDonutData() {
    const donutData = await fetchData('donut')
    return donutData
}

async function fetchData(endpoint, options = undefined) {
    const request = await fetch(BASE_URL + endpoint + '.json', options)
    const data = await request.json()
    return data
}
