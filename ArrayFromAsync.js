async function fetchData(urls) {
    const results = await Array.fromAsync(
        urls.map(async (url) => {
        const response = await fetch(url)
        return response.json()
    }))
    return results;
}