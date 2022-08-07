fetch('https://www.officeapi.dev/api/quotes/random')
.then(res => res.json())
// console logging what on JSON file
.then(data => {
    displayData(data);
    console.log(data);
});

function displayData(data) {
    const theQuote = data.data.character.firstname
    console.log(theQuote);
}
