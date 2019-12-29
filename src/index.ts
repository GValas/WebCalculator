import axios from 'axios'

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function asyncFunc() {
    // fetch data from a url endpoint
    await sleep(100)
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    const data = JSON.stringify(response.data)
    return data
}

asyncFunc().then(t => console.log(t))
