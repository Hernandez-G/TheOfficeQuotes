fetch('https://www.officeapi.dev/api/quotes/random')
.then(res => res.json())
// console logging what on JSON file
.then(data => console.log(data))

// .catch(err => console.log("ERROR"))