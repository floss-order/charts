const BASE_URL = 'http://ideadeploy.space/test/'

export async function getGraphData() {
    const graphData = await getData('graph')
    return graphData
}

export async function getDonutData() {
    const donutData = await getData('donut')
    return donutData
}

async function getData(endpoint) {
    const request = await fetch(BASE_URL + endpoint + '.json')
    const data = await request.json()
    return data
}