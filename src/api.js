const BASE_URL = 'http://ideadeploy.space/test/'

export async function getGraphData() {
    const graphData = await fetchData('graph')
    return graphData
}

export async function getDonutData() {
    const donutData = await fetchData('donut')
    return donutData
}

export async function login(credentials) {
    const user = await fetchData('login', {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return user
}

async function fetchData(endpoint, options = undefined) {
    const request = await fetch(BASE_URL + endpoint + '.json', options)
    const data = await request.json()
    return data
}
