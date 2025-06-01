// HTTP Requests

//Return a Promise (and use .then())
fetch("https://catfact.ninja/fact", {
    method: "GET"
}).then((data) => {
    console.log(data)
    return data.json();
}).then((data) => {
    console.log(data.fact)
}).catch((error) => {
    console.log(error)
})


//Use async/await (Recommended)
async function fetchCatFact() {
    const response = await fetch("https://catfact.ninja/fact")
    if (!response.ok) {
        throw new Error('Cat not found');
    }
    const catFact = await response.json()
    return catFact;
}

// Usage (must be inside an async function):
async function desplayData() {
    const catData = await fetchCatFact()
    console.log(catData.fact)
}

desplayData()